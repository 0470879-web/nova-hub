function game_load() {
    BABYLON.SceneLoader.Load("3d/", "root_game.babylon", engine, function (sc) {
        game.files_count = 3;
        game.files_loaded = 0;
        scene = sc;
        if (!game.sounds.init) {
            game.sounds.init = true;
            game.sounds.down1 = new BABYLON.Sound("", "sounds/down1.wav", scene2);
            game.sounds.up1 = new BABYLON.Sound("", "sounds/up1.wav", scene2);
            game.sounds.music = new BABYLON.Sound("", "sounds/y2mate.comWonderlandinstrumentalScandinavianz.mp3", scene2);
        }
        //asset loader
        var assetsManager = new BABYLON.AssetsManager(scene);
        var task1 = assetsManager.addHDRCubeTextureTask("hrd1", "3d/env_min.hdr", 128);
        task1.onSuccess = function (e) {
            game.envtext = e.texture;
        };
        assetsManager.load();
        assetsManager.onFinish = function () {
            game_file_loaded();
        };
        BABYLON.SceneLoader.ImportMesh("", "3d/", "player.babylon", scene, function (newMeshes, particleSystems, skeletons) {
            game.file_loaded();
        });
        game.file_loaded();
    });
}
function game_file_loaded() {
    game.files_loaded++;
    if (game.files_count == game.files_loaded) {
        game.LEVEL = BABYLON.DataStorage.ReadNumber(save_name + "LEVEL", 1);
        game.SCORE = 0;
        game.MULTIPLIER = 1;
        game.RUNNING = 0;
        game.CAN_CONTROL = 0;
        game.TOUCHING = false;
        game.HEIGHT = game.HEIGHT_MIN;
        game.HEIGHT_VISIBLE = game.HEIGHT_MIN;
        game.WIDTH = game.WIDTH_MIN;
        game.WIDTH_VISIBLE = game.WIDTH_MIN;
        game.time = 0;
        var gravityVector = new BABYLON.Vector3(0, -9.81, 0);
        var physicsPlugin = new BABYLON.AmmoJSPlugin();
        scene.enablePhysics(gravityVector, physicsPlugin);
        var box = BABYLON.MeshBuilder.CreateBox("box", {});
        box.position.y = -1.32;
        box.scaling.x = 3;
        box.scaling.z = 30;
        box.rotation.x = 0.004;
        box.physicsImpostor = new BABYLON.PhysicsImpostor(box, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 1.5 }, scene);
        game.point = scene.getMeshByName("point");
        game.root = scene.getMeshByName("root");
        game.point.setParent(game.root);
        game.player_collider = scene.getMeshByName("player_collider");
        game.stick = scene.getMeshByName("stick");
        game.stick.setParent(game.player_collider);
        game.stick.rotation.y = Math.PI;
        if (game.firts_play) {
            scene.getMeshByName("touchicon").visibility = 0;
        }
        gui.load();
        document.getElementById("lock_loader").style.visibility = "hidden";
        // Fog
        var color_ = "#ffffff";
        scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
        scene.fogColor = BABYLON.Color3.FromHexString(color_);
        scene.fogDensity = 0.01;
        scene.fogStart = 300.0;
        scene.fogEnd = 350.0;
        scene.environmentTexture = game.envtext;
        scene.environmentIntensity = 1;
        scene.clearColor = new BABYLON.Color4(1, 1, 1, 1);
        engine.runRenderLoop(game.tick);
        scene.onPointerDown = function () {
            if (game.root.position.z == 0
                && gui.title.parent == null) {

                //on_press_run();
                game.CAN_CONTROL = 1;
                game.RUNNING = 1;
                game.stick_anim.speedRatio = 1;

            }
            game.t_x = scene.pointerX;
            game.t_y = scene.pointerY;
            var picked = scene.pick(game.t_x, game.t_y);
            if (picked.hit) {
                game.TOUCHING = true;
                game.point.setParent(null);
                game.point.position = picked.pickedPoint.clone();
                game.point.setParent(game.root);
            }
        };
        scene.onPointerMove = function () {
            game.t_x = scene.pointerX;
            game.t_y = scene.pointerY;
            var picked = scene.pick(game.t_x, game.t_y);
            if (picked.hit) {
                if (game.TOUCHING) {
                    game.point.setParent(null);
                    game.point.position = picked.pickedPoint.clone();
                    game.point.setParent(game.root);
                }
            }
        };
        scene.onPointerUp = function () {
            game.t_x = scene.pointerX;
            game.t_y = scene.pointerY;
            var picked = scene.pick(game.t_x, game.t_y);
            if (picked.hit) {
                game.TOUCHING = false;
            }
        };
        var bones_no_scale = ["Bone.", "Bone.12", "Bone.11", "Bone.10", "Bone.09", "Bone.08"];
        var bones_move_up = ["Bone.18"];
        scene.skeletons[0].bones.forEach(function (e) {
            e.metadata = { is_head: 0, };
            if (bones_no_scale.indexOf(e.name) >= 0) {
                e.metadata.is_head = 1;
            }
            if (bones_move_up.indexOf(e.name) >= 0) {
                e.metadata.move_up = 1;
            }
        });
        game.stick_anim = scene.beginAnimation(scene.skeletons[0], 0, 19, true);
        game.stick_anim.speedRatio = 0;
        scene.registerBeforeRender(beforerender);
        scene.skeletons[0].bones.forEach(function (e) {
            e.scale(2, 1, 2, false);
        });
        scene.getMeshesByTags("invisible").forEach(function (e) {
            e.visibility = 0;
        });
        scene.getMeshesByTags("!pickable").forEach(function (e) {
            e.isPickable = false;
        });
        scene.getMeshesByTags("pickable").forEach(function (e) {
            e.isPickable = true;
        });
        //particles fc
        {
            var vel = 20, min_size = 0.5, max_size = 1, count = 10;
            var part_arrow_green = function (e) {
                var vel = 20, min_size = 0.5, max_size = 1, count = 10;
                game.part.manualEmitCount = count;
                game.part.particleEmitterType = new BABYLON.
                    MeshParticleEmitter(e);
                game.part.particleEmitterType.useMeshNormalsForDirection = false;
                game.part.particleEmitterType.direction1 = new BABYLON.Vector3(vel, vel, vel);
                game.part.particleEmitterType.direction2 = new BABYLON.Vector3(-vel, -vel, -vel);
                game.part.emitter = e;
                game.part.minSize = min_size;
                game.part.maxSize = max_size;
                game.part.startSpriteCellID = 4;
                game.part.endSpriteCellID = 6;
                game.part.start();
            };
            var part_arrow_red = function (e) {
                var vel = 20, min_size = 0.5, max_size = 1, count = 10;
                game.part.manualEmitCount = count;
                game.part.particleEmitterType = new BABYLON.
                    MeshParticleEmitter(e);
                game.part.particleEmitterType.useMeshNormalsForDirection = false;
                game.part.particleEmitterType.direction1 = new BABYLON.Vector3(vel, vel, vel);
                game.part.particleEmitterType.direction2 = new BABYLON.Vector3(-vel, -vel, -vel);
                game.part.emitter = e;
                game.part.minSize = min_size;
                game.part.maxSize = max_size;
                game.part.startSpriteCellID = 0;
                game.part.endSpriteCellID = 2;
                game.part.start();
            };
            var part_door_green = function (e) {
                vel = 3, min_size = 0.5, max_size = 1, count = 50;
                game.part.manualEmitCount = count;
                game.part.particleEmitterType = new BABYLON.
                    MeshParticleEmitter(e);
                game.part.particleEmitterType.useMeshNormalsForDirection = false;
                game.part.particleEmitterType.direction1 = new BABYLON.Vector3(vel, vel, vel);
                game.part.particleEmitterType.direction2 = new BABYLON.Vector3(-vel, -vel, -vel);
                game.part.emitter = e;
                game.part.minSize = min_size;
                game.part.maxSize = max_size;
                game.part.startSpriteCellID = 4;
                game.part.endSpriteCellID = 6;
                game.part.start();
            };
            var part_door_red = function (e) {
                vel = 3, min_size = 0.5, max_size = 1, count = 50;
                game.part.manualEmitCount = count;
                game.part.particleEmitterType = new BABYLON.
                    MeshParticleEmitter(e);
                game.part.particleEmitterType.useMeshNormalsForDirection = false;
                game.part.particleEmitterType.direction1 = new BABYLON.Vector3(vel, vel, vel);
                game.part.particleEmitterType.direction2 = new BABYLON.Vector3(-vel, -vel, -vel);
                game.part.emitter = e;
                game.part.minSize = min_size;
                game.part.maxSize = max_size;
                game.part.startSpriteCellID = 0;
                game.part.endSpriteCellID = 2;
                game.part.start();
            };
            var part_door_yellow = function (e) {
                vel = 3, min_size = 0.5, max_size = 1, count = 50;
                game.part.manualEmitCount = count;
                game.part.particleEmitterType = new BABYLON.
                    MeshParticleEmitter(e);
                game.part.particleEmitterType.useMeshNormalsForDirection = false;
                game.part.particleEmitterType.direction1 = new BABYLON.Vector3(vel, vel, vel);
                game.part.particleEmitterType.direction2 = new BABYLON.Vector3(-vel, -vel, -vel);
                game.part.emitter = e;
                game.part.minSize = min_size;
                game.part.maxSize = max_size;
                game.part.startSpriteCellID = 6;
                game.part.endSpriteCellID = 8;
                game.part.start();
            };
        }
        var max_z_creator = 0;
        var creators = null;
        var pieces = scene.getMeshesByTags("piece");
        for (var index = 0; index < 1000; index++) {
            var r1 = Math.floor(Math.random() * pieces.length);
            var r2 = Math.floor(Math.random() * pieces.length);
            var s1 = pieces[r1];
            pieces[r1] = pieces[r2];
            pieces[r2] = s1;
            //cc(r1 + " " + r2)
        }
        pieces[0] = scene.getMeshByName("p.035");
        for (var a = 0; a < pieces.length; a++) {
            var ee = pieces[a];
            if (a < 2) {
                max_z_creator += 10;
                ee.position.set(0, 0, max_z_creator);
                creators = ee.getChildMeshes();
                scene.render();
                creators.forEach(function (e) {
                    if (e.position.z > 0) {
                        e.refreshBoundingInfo();
                        var child_pos = e.getAbsolutePosition();
                        if (child_pos.z > max_z_creator) {
                            max_z_creator = child_pos.z;
                        }
                        var type = "";
                        var new_obj = null;
                        var sine_displace = Math.random() * 48;
                        var part = part_arrow_green;
                        //arrow
                        var h_profit = 0, w_profit = 0;
                        if (BABYLON.Tags.MatchesQuery(e, "arrow1_up")) {
                            new_obj = scene.getMeshByName("arrow1_up").clone("new_obj", null);
                            BABYLON.Tags.AddTagsTo(new_obj, "u1");
                            type = "arrow1_up";
                            h_profit = 1;
                            part = part_arrow_green;
                        }
                        if (BABYLON.Tags.MatchesQuery(e, "arrow1_down")) {
                            new_obj = scene.getMeshByName("arrow1_down").clone("new_obj", null);
                            type = "arrow1_down";
                            h_profit = -1;
                            part = part_arrow_red;
                        }
                        if (BABYLON.Tags.MatchesQuery(e, "arrow2_up")) {
                            new_obj = scene.getMeshByName("arrow2_up").clone("new_obj", null);
                            type = "arrow2_up";
                            w_profit = 1;
                            part = part_arrow_green;
                        }
                        if (BABYLON.Tags.MatchesQuery(e, "arrow2_down")) {
                            new_obj = scene.getMeshByName("arrow2_down").clone("new_obj", null);
                            BABYLON.Tags.AddTagsTo(new_obj, "u2");
                            part = part_arrow_red;
                            type = "arrow2_down";
                            w_profit = -1;
                        }
                        //doors
                        if (BABYLON.Tags.MatchesQuery(e, "door1_up")) {
                            new_obj = scene.getMeshByName("door1_up").clone("new_obj", null);
                            type = "door1_up";
                            h_profit = 2;
                            part = part_door_green;
                            BABYLON.Tags.AddTagsTo(new_obj, "uu1");
                        }
                        if (BABYLON.Tags.MatchesQuery(e, "door1_down")) {
                            new_obj = scene.getMeshByName("door1_down").clone("new_obj", null);
                            type = "door1_down";
                            h_profit = -2;
                            part = part_door_red;
                        }
                        if (BABYLON.Tags.MatchesQuery(e, "door2_up")) {
                            new_obj = scene.getMeshByName("door2_up").clone("new_obj", null);
                            BABYLON.Tags.AddTagsTo(new_obj, "uu2");
                            type = "door2_up";
                            w_profit = 2;
                            part = part_door_green;
                        }
                        if (BABYLON.Tags.MatchesQuery(e, "door2_down")) {
                            new_obj = scene.getMeshByName("door2_down").clone("new_obj", null);
                            type = "door2_down";
                            w_profit = -2;
                            part = part_door_red;
                        }
                        if (BABYLON.Tags.MatchesQuery(e, "sine_h")) {
                            BABYLON.Tags.AddTagsTo(new_obj, "sine_h");
                        }
                        var door_ = scene.getMeshByName("door");
                        var door2_ = scene.getMeshByName("door2");
                        BABYLON.Tags.AddTagsTo(door2_, "door");
                        BABYLON.Tags.AddTagsTo(door_, "door");
                        if (BABYLON.Tags.MatchesQuery(e, "door")) {
                            part = part_door_yellow;
                            if (BABYLON.Tags.MatchesQuery(e, "two")) {
                                new_obj = door_.clone("new", null);
                                BABYLON.Tags.AddTagsTo(new_obj, "two");
                                var new_obj2 = door_.clone("new", null);
                                BABYLON.Tags.AddTagsTo(new_obj2, "two obj");
                                new_obj2.position = child_pos.add(new BABYLON.Vector3(8, 0, 0));
                                new_obj2.metadata = {
                                    type: type, waiting: true,
                                    h_profit: h_profit,
                                    w_profit: w_profit,
                                    sine_displace: sine_displace + 24,
                                    part: part
                                };
                            }
                            if (BABYLON.Tags.MatchesQuery(e, "zigzag")) {
                                new_obj = door_.clone("new", null);
                                BABYLON.Tags.AddTagsTo(new_obj, "zigzag");
                            }
                            if (BABYLON.Tags.MatchesQuery(e, "rotate")) {
                                new_obj = door2_.clone("new", null);
                                new_obj.rotate(new BABYLON.Vector3(0, 1, 0), Math.random() * Math.PI);
                                BABYLON.Tags.AddTagsTo(new_obj, "rotate");
                            }
                            if (BABYLON.Tags.MatchesQuery(e, "static")) {
                                new_obj = door_.clone("new", null);
                            }
                        }
                        if (new_obj != null) {
                            new_obj.position = child_pos;
                            new_obj.metadata = {
                                part: part,
                                type: type, waiting: true,
                                h_profit: h_profit, w_profit: w_profit,
                                sine_displace: sine_displace
                            };
                            if (BABYLON.Tags.MatchesQuery(e, "two")) {
                                new_obj.position = child_pos.clone().add(new BABYLON.Vector3(-8, 0, 0));
                            }
                            BABYLON.Tags.AddTagsTo(new_obj, "obj");
                        }
                    }
                    e.dispose();
                });
            }
            else {
                ee.dispose();
            }
        }
        game.WIDTH_PROFIT = (game.WIDTH_MAX - game.WIDTH_MIN) /
            (scene.getMeshesByTags("u2").length + (scene.getMeshesByTags("uu2").length * 2));
        game.HEIGHT_PROFIT = (game.HEIGHT_MAX - game.HEIGHT_MIN) /
            (scene.getMeshesByTags("u1").length + (scene.getMeshesByTags("uu1").length * 2));
        var min_ = 0.4;
        var max_ = 0.7;
        var rand = 0;
        if (game.LEVEL <= 7) {
            min_ = 0.4;
            max_ = 0.7;
            rand = 0;
        }
        else if (game.LEVEL <= 15) {
            min_ = 0.6;
            max_ = 0.96;
            rand = 0;
        }
        else {
            min_ = 0.7;
            max_ = 1.1;
            rand = 0;
        }
        for (var index = 0; index < 100; index++) {
            rand = min_ + Math.random() * (max_ - min_);
        }
        game.WIDTH_PROFIT *= rand;
        game.HEIGHT_PROFIT *= rand;
        game.bonus = scene.getMeshByName("bonus");
        scene.getMeshByName("bonus").position.z =
            scene.getMeshByName("way").position.z =
                max_z_creator + 65;
        game.obj = scene.getMeshesByTags("obj");
        scene.getMeshesByTags("bonus").forEach(function (e) {
            e.metadata = {
                part: part_door_yellow,
                waiting: true, h_profit: game.HEIGHT_PROFIT * 2,
                w_profit: game.WIDTH_PROFIT
            };
        });
        scene.textures.forEach(function (e) {
            e.updateSamplingMode(7);
        });
        var p = new BABYLON.ParticleSystem("particles", 2000, scene, null, true);
        p.spriteCellHeight = 32;
        p.spriteCellWidth = 32;
        p.startSpriteCellID = 0;
        p.endSpriteCellID = 2;
        p.spriteRandomStartCell = true;
        p.spriteCellChangeSpeed = 0;
        p.manualEmitCount = 10;
        p.color1 = new BABYLON.Color4(1, 1, 1, 1);
        p.color2 = new BABYLON.Color4(1, 1, 1, 1);
        p.blendMode = 1;
        p.minSize = 1.5;
        p.maxSize = 2;
        p.minLifeTime = 0.25;
        p.maxLifeTime = 0.5;
        p.colorDead = new BABYLON.Color4(1, 1, 1, 1);
        p.particleTexture = new BABYLON.Texture("images/particles.png", scene);
        p.emitter = new BABYLON.Vector3(0, 0.5, 0);
        game.part = p;
        var p2 = game.part.clone("", game.root.position.clone().add(new BABYLON.Vector3(10, 0, 0)));
        p2.spriteCellHeight = 64;
        p2.spriteCellWidth = 64;
        p2.startSpriteCellID = 0;
        p2.endSpriteCellID = 8;
        p2.emitRate = 25;
        p2.spriteRandomStartCell = true;
        p2.spriteCellChangeSpeed = 0;
        p2.maxInitialRotation = 3.1415 * 2;
        p2.minInitialRotation = 0;
        p2.minLifeTime = 2;
        p2.maxLifeTime = 3;
        p2.direction1 = new BABYLON.Vector3(10, 30, 10);
        p2.direction2 = new BABYLON.Vector3(-10, 40, -10);
        p2.gravity = new BABYLON.Vector3(0, -30, 0);
        p2.particleTexture = new BABYLON.Texture("images/particles2.png", scene);
        //p2.start();
        p2.stop();
        var p3 = p2.clone("", game.root.position.clone().add(new BABYLON.Vector3(-10, 0, 0)));
        //p3.start();
        p3.stop();
        game.stick.metadata = { part: part_door_red, p1: p2, p2: p3 };
    }
}
function game_tick() {
    time_playing = (new Date().getTime() / 1000) - time_start;
    ;
    on_game_tick();
    var dt = engine.getDeltaTime() * 0.03;
    dt = Math.min(2, dt);
    game.time += dt;
    if (game.RUNNING == 1) {
        game.root.position.z += dt;
    }
    if (game.CAN_CONTROL == 1) {
        game.player_collider.position.z = game.point.absolutePosition.clone().z;
        var displace = game.point.absolutePosition.clone().x - game.player_collider.position.x;
        displace = Math.max(Math.min(1, displace), -1);
        game.player_collider.position.x += displace;
    }
    else {
        game.player_collider.position.z = game.point.absolutePosition.clone().z;
    }
    game.player_collider.position.x = Math.max(Math.min(game.player_collider.position.x, 13), -13);
    game.player_collider.position.y = 0;
    game.player_collider.refreshBoundingInfo();
    game.obj.forEach(function (e) {
        if (BABYLON.Tags.MatchesQuery(e, "sine_h || 123 || zigzag")) {
            var pos = e.position.clone();
            pos.x = Math.abs((((game.time / 3) + e.metadata.sine_displace) % 40) - 20) - 10;
            e.position = pos;
        }
        if (BABYLON.Tags.MatchesQuery(e, "two")) {
            var pos = e.position.clone();
            pos.y = Math.abs((((game.time / 3) + e.metadata.sine_displace) % 48) - 24) - 12 - 17;
            gui.text_score.text = "" + pos.y;
            e.position = pos;
        }
        if (BABYLON.Tags.MatchesQuery(e, "rotate")) {
            e.rotate(new BABYLON.Vector3(0, 1, 0), dt / 14);
            e.refreshBoundingInfo();
        }
        if (e.intersectsMesh(game.player_collider, true)) {
            var end_ = false;
            if (BABYLON.Tags.MatchesQuery(e, "bonus")) {
            }
            if (e.metadata != null && e.metadata.waiting) {
                e.metadata.waiting = false;
                //arrows y portals
                if (!BABYLON.Tags.MatchesQuery(e, "door") && !BABYLON.Tags.MatchesQuery(e, "bonus")) {
                    e.metadata.part(e);
                    e.visibility = 0;
                    var score_to_add = Math.max(e.metadata.h_profit, e.metadata.w_profit, 0);
                    if (e.metadata.h_profit < 0 || e.metadata.w_profit < 0) {
                        BABYLON.Engine.audioEngine.unlock();
                        game.sounds.down1.play();
                        scene.beginAnimation(scene.cameras[0], 0, 10, false);
                    }
                    else {
                        BABYLON.Engine.audioEngine.unlock();
                        game.sounds.up1.play();
                    }
                    game.SCORE += score_to_add;
                    game.HEIGHT += e.metadata.h_profit * game.HEIGHT_PROFIT;
                    game.WIDTH += e.metadata.w_profit * game.WIDTH_PROFIT;
                    //solid door
                }
                else if (BABYLON.Tags.MatchesQuery(e, "door")) {
                    e.metadata.part(e);
                    e.visibility = 0;
                    game.sounds.down1.play();
                    scene.beginAnimation(scene.cameras[0], 0, 10, false);
                    if (game.HEIGHT > game.HEIGHT_MIN) {
                        game.HEIGHT -= game.HEIGHT_PROFIT * 2;
                    }
                    else {
                        if (game.WIDTH > game.WIDTH_MIN) {
                            game.WIDTH -= game.WIDTH_PROFIT * 2;
                        }
                        else {
                        }
                    }
                }
                // bonus
                else {
                    var power = ((game.WIDTH_MAX - game.WIDTH_MIN) + (game.HEIGHT_MAX - game.HEIGHT_MIN)) / 10;
                    game.HEIGHT -= power;
                    power = 0;
                    if (game.HEIGHT < game.HEIGHT_MIN) {
                        power = (game.HEIGHT_MIN - game.HEIGHT); //
                        game.HEIGHT = game.HEIGHT_MIN;
                    }
                    else {
                        e.visibility = 0;
                        game.sounds.down1.play();
                        scene.beginAnimation(scene.cameras[0], 0, 10, false);
                        e.metadata.part(e);
                    }
                    game.WIDTH -= power;
                    if (game.WIDTH < game.WIDTH_MIN) {
                        game.end();
                        game.stick.refreshBoundingInfo();
                        game.stick.metadata.part(game.stick);
                        game.stick.visibility = 0;
                        game.sounds.down1.play();
                        scene.beginAnimation(scene.cameras[0], 0, 10, false);
                    }
                    else {
                        e.visibility = 0;
                        e.metadata.part(e);
                        game.sounds.down1.play();
                        scene.beginAnimation(scene.cameras[0], 0, 10, false);
                        game.MULTIPLIER = +(e.name).replace("B", "");
                        if (e.name == "B10") {
                            game.end();
                        }
                    }
                }
                if (game.WIDTH > game.WIDTH_MAX) {
                    game.WIDTH = game.WIDTH_MAX;
                }
                if (game.WIDTH < game.WIDTH_MIN) {
                    game.WIDTH = game.WIDTH_MIN;
                }
                if (game.HEIGHT > game.HEIGHT_MAX) {
                    game.HEIGHT = game.HEIGHT_MAX;
                }
                if (game.HEIGHT < game.HEIGHT_MIN) {
                    game.HEIGHT = game.HEIGHT_MIN;
                }
            }
        }
    });
    if (game.CAN_CONTROL == 1) {
        if (game.root.position.z > game.bonus.position.z) {
            game.CAN_CONTROL = 0;
            BABYLON.Animation.CreateAndStartAnimation("", game.player_collider, "position.x", 60, 10, game.player_collider.position.x, 0, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
        }
    }
    gui.text_score.text = "" + game.SCORE * game.MULTIPLIER;
    gui.alert.metadata.time += dt;
    if (gui.alert.metadata.time > 10) {
        gui.alert.metadata.time = 0;
        gui.alert.cellId++;
        if (gui.alert.cellId > 1) {
            gui.alert.cellId = 0;
        }
    }
    scene.render();
}
var beforerender = function () {
    scene.skeletons[0].bones.forEach(function (e) {
        game.WIDTH_VISIBLE += ((game.WIDTH - game.WIDTH_VISIBLE) * 0.01);
        game.HEIGHT_VISIBLE += ((game.HEIGHT - game.HEIGHT_VISIBLE) * 0.01);
        var scale = game.WIDTH_VISIBLE;
        var s_x, s_y, s_z;
        s_x = s_y = s_z = scale;
        s_y = 1;
        if (e.metadata.move_up == 1) {
            var pos = e.getPosition(BABYLON.Space.BONE);
            pos.y += game.HEIGHT_VISIBLE;
            e.setPosition(pos, BABYLON.Space.BONE);
        }
        if (e.metadata.is_head == 1) {
            s_x = s_z = 1;
        }
        e.scale(s_x, s_y, s_z, false);
    });
};
var game = {
    load: null,
    tick: null,
    file_loaded: null,
    files_count: 2,
    files_loaded: 0,
    envtext: null,
    engine: null,
    bone1: null,
    firts_play: true,
    sounds: {
        init: false,
        up1: null,
        down1: null,
        music: null,
        enabled: true
    },
    t_x: null,
    t_y: null,
    point: null,
    player_collider: null,
    root: null,
    stick: null,
    bonus: null,
    obj: null,
    stick_anim: null,
    part: null,
    TOUCHING: false,
    SCORE: 0,
    MULTIPLIER: 1,
    HEIGHT: 0,
    HEIGHT_VISIBLE: 0.5,
    HEIGHT_PROFIT: 0.5,
    HEIGHT_MIN: -2.0,
    HEIGHT_MAX: 3,
    WIDTH: 1,
    WIDTH_VISIBLE: 1,
    WIDTH_PROFIT: 1,
    WIDTH_MIN: 1,
    WIDTH_MAX: 4,
    LEVEL: 0,
    RUNNING: 0,
    CAN_CONTROL: 0,
    time: 0,
    dispose: function () {
        engine.stopRenderLoop(game.tick);
        scene.stopAllAnimations();
        scene.dispose();
    },
    end: function () {
        on_win();
        BABYLON.DataStorage.WriteNumber(save_name + "LEVEL", game.LEVEL + 1);
        game.stick_anim.speedRatio = 0;
        game.CAN_CONTROL = 0;
        game.RUNNING = 0;
        gui.avd.addControl(gui.text_next);
        if (game.SCORE * game.MULTIPLIER > BABYLON.DataStorage.ReadNumber(save_name + "BEST", 0)) {
            gui.avd.addControl(gui.alert);
        }
        BABYLON.DataStorage.WriteNumber(save_name + "BEST", Math.max(BABYLON.DataStorage.ReadNumber(save_name + "BEST", 0), game.SCORE * game.MULTIPLIER));
        game.stick.metadata.p1.emitter = game.root.position.clone().add(new BABYLON.Vector3(-10, 0, 0));
        game.stick.metadata.p2.emitter = game.root.position.clone().add(new BABYLON.Vector3(10, 0, 0));
        game.stick.metadata.p1.start();
        game.stick.metadata.p2.start();
    }
};
var gui = {
    avd: null,
    text_score: null,
    text_best: null,
    level: null,
    text_next: null,
    title: null,
    alert: null,
    btn_play: null,
    load: function () {
        gui.avd = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        gui.avd.idealHeight = 800;
        //title
        var image = new BABYLON.GUI.Image("", "images/title.png");
        image.widthInPixels = 521 * 0.5;
        image.heightInPixels = 191 * 0.5;
        gui.avd.addControl(image);
        gui.title = image;
        image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        image.topInPixels = 150;
        //button play
        var button = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/btn_play.png");
        button.widthInPixels = 256;
        button.heightInPixels = 77;
        button.color = "transparent";
        button.thickness = 0;
        button.background = "transparent";
        gui.avd.addControl(button);
        gui.btn_play = button;
        button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        button.zIndex = 1;
        button.topInPixels = -75;
        button.onPointerClickObservable.add(function () {

          LaggedAPI.APIAds.show(function() {

            game.firts_play = false;
            gui.avd.removeControl(gui.btn_play);
            gui.avd.removeControl(gui.title);
            scene.getMeshByName("touchicon").visibility = 1;
            game.sounds.music.loop = true;
            game.sounds.music.autoplay = true;
            BABYLON.Engine.audioEngine.unlock();
            if (game.sounds.music.isReady)
                game.sounds.music.play();

          console.log("ad completed");

          });

        });
        if (!game.firts_play) {
            gui.avd.removeControl(gui.btn_play);
            gui.avd.removeControl(gui.title);
        }
        //score
        var txt = new BABYLON.GUI.TextBlock("", "font");
        txt.fontFamily = font_name;
        txt.fontSize = "50px";
        txt.color = "white";
        txt.outlineColor = "black";
        txt.outlineWidth = 5;
        txt.topInPixels = 10;
        txt.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        gui.avd.addControl(txt);
        gui.text_score = txt;
        //best
        var txt = new BABYLON.GUI.TextBlock("best", "BEST " + BABYLON.DataStorage.ReadNumber(save_name + "BEST", 0));
        txt.fontFamily = font_name;
        txt.fontSize = "20px";
        txt.color = "red";
        txt.outlineColor = "black";
        txt.outlineWidth = 2;
        txt.topInPixels = 75;
        txt.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        gui.avd.addControl(txt);
        gui.text_best = txt;
        var btn = BABYLON.GUI.Button.CreateImageOnlyButton("next", "images/btn_next.png");
        btn.background = "transparent";
        btn.widthInPixels = 256;
        btn.heightInPixels = 77;
        btn.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        btn.topInPixels = -75;
        gui.text_next = btn;
        btn.thickness = 0;
        btn.onPointerClickObservable.add(function () {
            game.dispose();
            game.load();
        });
        var btn = BABYLON.GUI.Button.CreateSimpleButton("", "");
        btn.widthInPixels = 64;
        btn.heightInPixels = 64;
        btn.background = "transparent";
        btn.thickness = 0;
        gui.avd.addControl(btn);
        btn.zIndex = 1;
        var img1 = new BABYLON.GUI.Image("", "images/sound_enabled.png");
        var img2 = new BABYLON.GUI.Image("", "images/sound_disabled.png");
        btn.addControl(img1);
        btn.addControl(img2);
        if (BABYLON.Engine.audioEngine.getGlobalVolume() == 1) {
            img1.isVisible = true;
            img2.isVisible = false;
        }
        else {
            img1.isVisible = false;
            img2.isVisible = true;
        }
        btn.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        btn.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        btn.leftInPixels = 16;
        btn.topInPixels = 16;
        btn.onPointerClickObservable.add(function () {
            if (BABYLON.Engine.audioEngine.getGlobalVolume() == 1) {
                BABYLON.Engine.audioEngine.setGlobalVolume(0);
                img1.isVisible = false;
                img2.isVisible = true;
            }
            else {
                BABYLON.Engine.audioEngine.setGlobalVolume(1);
                img1.isVisible = true;
                img2.isVisible = false;
            }
        });
        var txt = new BABYLON.GUI.TextBlock("", "LEVEL " + game.LEVEL);
        txt.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        txt.fontFamily = font_name;
        txt.topInPixels = -16;
        txt.fontSize = 30;
        gui.avd.addControl(txt);
        var img = new BABYLON.GUI.Image("", "images/new_alert.png");
        gui.alert = img;
        img.topInPixels = 31;
        img.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        img.widthInPixels = 64;
        img.heightInPixels = 64;
        img.cellHeight = 64;
        img.cellWidth = 64;
        img.metadata = { time: 0 };
    }
};
var save_name = "tall man runner 2022 7 ds 1672022 6";
var engine;
var canvas;
var scene;
var scene2;
var font_name = "Questrial-Regular";
var canvas2;
canvas2 = document.createElement("canvas");
var c2d = canvas2.getContext("2d");
var cc = console.log;
var time_start = 0;
window.addEventListener("DOMContentLoaded", function () {
    c2d.font = "30px " + font_name;
    c2d.strokeText("text", 0, 0);
    if (window.Ammo !== undefined) {
        Ammo().then(function () {
            init();
            on_window_load();
            time_playing = (new Date().getTime() / 1000);
            ;
            time_start = (new Date().getTime() / 1000);
            ;
        });
    }
    else {
        init();
    }
});
function init() {
    on_window_load();
    canvas = document.getElementById("canvas");
    engine = new BABYLON.Engine(canvas);
    scene2 = new BABYLON.Scene(engine);
    engine.displayLoadingUI = function () { };
    window.addEventListener("resize", function () {
        engine.resize();
    });
    game.load = game_load;
    game.file_loaded = game_file_loaded;
    game.tick = game_tick;
    game.load();
}
//# sourceMappingURL=main.js.map
