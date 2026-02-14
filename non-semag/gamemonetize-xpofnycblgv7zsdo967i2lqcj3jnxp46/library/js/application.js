/*
 * @author edapskov
 * @copyright 2019 edapskov v 7.8
 */
function Application() {
    /*
    константы
    */
    var _CWIDTH = 800;
    var _CHEIGHT = 600;
    var _BGWIDTH = 1200;
    var _BGHEIGHT = 600;
    var _INDENT = 10;
    var _BGCOLOR = "#000000";
    var _FONT = "Arial";
    var _TITLE = "Jirai Kei Aesthetics";
    var _LINKTOGAME = "https://dl-girls.com";
    var _DELAY = 1;
    var _LANGUAGE = "en";
    /*
    публичные переменные
    */
    this.copyright = "© DL-Studio, v 7.8";
    /*
    приватные переменные
    */
    var _stage;
    var _main;
    var _before;
    var _cursor;
    var _shadowScreen;
    var _orientationLock;
    var _debugger;
    var _soundManager;
    var _fullScreenCanvasManager;
    var _information = {
        firstRun: true,
        shownAds: false,
        currentNameLocation: null,
        targetLocation: null,
        totalLocations: null,
        currentNameHero: null,
        currentCheckpoint: 0,
        totalCheckpoints: 3,
        currentRub: 0,
        totalRubs: 200,
        trackMove: 2,
        timeout_id: null,
        interval_id: null,
        dragShape: null,
        locations: {
            location_1: {
                completed: null,
                currentAction: null,
                currentNameAction: null,
                totalActions: null,
                actions: {
                    action_1: {
                        type: "dressup",
                        frame: 1,
                        defaultCursor: "default",
                        updatedCursor: null,
                        pathObject: null,
                        pathSubject: null,
                        delay: 0,
                        transition: false,
                        skipAndGoto: null,
                        openLocFunc: _openLocFunc_1_1,
                        closeLocFunc: null,
                        addBackgroundSound: null,
                        removeBackgroundSound: null,
                        addCompletedSound: null,
                        removeCompletedSound: null,
                        totalTime: 180,
                        currentTime: 0
                    }
                }
            },
            location_2: {
                completed: null,
                currentAction: null,
                currentNameAction: null,
                totalActions: null,
                actions: {
                    action_1: {
                        type: "dressup",
                        frame: 1,
                        defaultCursor: "default",
                        updatedCursor: null,
                        pathObject: null,
                        pathSubject: null,
                        delay: 0,
                        transition: false,
                        skipAndGoto: null,
                        openLocFunc: _openLocFunc_1_2,
                        closeLocFunc: null,
                        addBackgroundSound: null,
                        removeBackgroundSound: null,
                        addCompletedSound: null,
                        removeCompletedSound: null,
                        totalTime: 180,
                        currentTime: 0
                    }
                }
            },
            location_3: {
                completed: null,
                currentAction: null,
                currentNameAction: null,
                totalActions: null,
                actions: {
                    action_1: {
                        type: "dressup",
                        frame: 1,
                        defaultCursor: "default",
                        updatedCursor: null,
                        pathObject: null,
                        pathSubject: null,
                        delay: 0,
                        transition: false,
                        skipAndGoto: null,
                        openLocFunc: _openLocFunc_1_3,
                        closeLocFunc: null,
                        addBackgroundSound: null,
                        removeBackgroundSound: null,
                        addCompletedSound: null,
                        removeCompletedSound: null,
                        totalTime: 180,
                        currentTime: 0
                    }
                }
            },
            location_4: {
                completed: null,
                currentAction: null,
                currentNameAction: null,
                totalActions: null,
                actions: {
                    action_1: {
                        type: "dressup",
                        frame: 1,
                        defaultCursor: "default",
                        updatedCursor: null,
                        pathObject: null,
                        pathSubject: null,
                        delay: 0,
                        transition: false,
                        skipAndGoto: null,
                        openLocFunc: _openLocFunc_1_4,
                        closeLocFunc: null,
                        addBackgroundSound: null,
                        removeBackgroundSound: null,
                        addCompletedSound: null,
                        removeCompletedSound: null,
                        totalTime: 180,
                        currentTime: 0
                    }
                }
            },
            location_5: {
                completed: null,
                currentAction: null,
                currentNameAction: null,
                totalActions: null,
                actions: {
                    action_1: {
                        type: "dressup",
                        frame: 1,
                        defaultCursor: "default",
                        updatedCursor: null,
                        pathObject: null,
                        pathSubject: null,
                        delay: 0,
                        transition: false,
                        skipAndGoto: null,
                        openLocFunc: _openLocFunc_1_5,
                        closeLocFunc: null,
                        addBackgroundSound: null,
                        removeBackgroundSound: null,
                        addCompletedSound: null,
                        removeCompletedSound: null,
                        totalTime: 180,
                        currentTime: 0
                    }
                }
            }
        },
        heroes: {
            hero_1: {
                currentSet: "set_1",
                totalSets: {
                    set_1: {
                        currentIndex: 0,
                        frames: [1, 2, 3, 4]
                    },
                    set_2: {
                        currentIndex: 0,
                        frames: [1, 2]
                    },
                    set_3: {
                        currentIndex: 0,
                        frames: [1, 2, 3, 4, 5, 6, 7]
                    },
                    set_4: {
                        currentIndex: 0,
                        frames: [1, 2, 3]
                    }
                },
                totalDress: {
                    blush_0: {},
                    blush_1: {},
                    blush_2: {},
                    blush_3: {},
                    blush_4: {},
                    blush_5: {},
                    blush_6: {},
                    shadows_0: {},
                    shadows_1: {},
                    shadows_2: {},
                    shadows_3: {},
                    shadows_4: {},
                    shadows_5: {},
                    shadows_6: {},
                    shadows_7: {},
                    lips_0: {},
                    lips_1: {},
                    lips_2: {},
                    lips_3: {},
                    lips_4: {},
                    lips_5: {},
                    lips_6: {},
                    lips_7: {},
                    eyes_0: {},
                    eyes_1: {},
                    eyes_2: {},
                    eyes_3: {},
                    eyes_4: {},
                    eyes_5: {},
                    eyes_6: {},
                    hair_0: {},
                    hair_1: {},
                    hair_2: {},
                    hair_3: {},
                    hair_4: {},
                    hair_5: {},
                    hair_6: {},
                    hair_7: {},
                    dress_0: {},
                    dress_1: {},
                    dress_2: {},
                    dress_3: {},
                    dress_4: {},
                    dress_5: {},
                    dress_6: {},
                    dress_7: {},
                    dress_8: {},
                    dress_9: {},
                    dress_10: {},
                    dress_11: {},
                    dress_12: {},
                    stock_0: {},
                    stock_1: {},
                    stock_2: {},
                    stock_3: {},
                    stock_4: {},
                    stock_5: {},
                    stock_6: {},
                    garter_0: {},
                    garter_1: {},
                    garter_2: {},
                    garter_3: {},
                    garter_4: {},
                    garter_5: {},
                    garter_6: {},
                    shoes_0: {},
                    shoes_1: {},
                    shoes_2: {},
                    shoes_3: {},
                    shoes_4: {},
                    shoes_5: {},
                    shoes_6: {},
                    accessory_0: {},
                    accessory_1: {},
                    accessory_2: {},
                    accessory_3: {},
                    accessory_4: {},
                    accessory_5: {},
                    accessory_6: {},
                    accessory_7: {},
                    headdress_0: {},
                    headdress_1: {},
                    headdress_2: {},
                    headdress_3: {},
                    headdress_4: {},
                    headdress_5: {},
                    headdress_6: {},
                    headdress_7: {},
                    headdress_8: {},
                    glasses_0: {},
                    glasses_1: {},
                    glasses_2: {},
                    glasses_3: {},
                    glasses_4: {},
                    glasses_5: {},
                    glasses_6: {},
                    wings_0: {},
                    wings_1: {},
                    wings_2: {},
                    wings_3: {},
                    bg_0: {},
                    bg_1: {}
                },
                currentDress: {
                    blush: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    shadows: {
                        currentOption: null,
                        defaultOption: 1,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    lips: {
                        currentOption: null,
                        defaultOption: 1,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    eyes: {
                        currentOption: null,
                        defaultOption: 1,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    hair: {
                        currentOption: null,
                        defaultOption: 1,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    dress: {
                        currentOption: null,
                        defaultOption: 1,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    stock: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    garter: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    shoes: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    accessory: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    headdress: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    glasses: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    wings: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    bg: {
                        currentOption: null,
                        defaultOption: 1,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    }
                }
            },
            hero_2: {
                currentSet: "set_1",
                totalSets: {
                    set_1: {
                        currentIndex: 0,
                        frames: [1, 2, 3, 4, 5, 6]
                    }
                },
                totalDress: {
                    lacquer_0: {},
                    lacquer_1: {},
                    lacquer_2: {},
                    lacquer_3: {},
                    lacquer_4: {},
                    lacquer_5: {},
                    lacquer_6: {},
                    lacquer_7: {},
                    lacquer_8: {},
                    lacquer_9: {},
                    lacquer_10: {},
                    lacquer_11: {},
                    lacquer_12: {},
                    pattern_0: {},
                    pattern_1: {},
                    pattern_2: {},
                    pattern_3: {},
                    pattern_4: {},
                    pattern_5: {},
                    pattern_6: {},
                    pattern_7: {},
                    pattern_8: {},
                    pattern_9: {},
                    pattern_10: {},
                    pattern_11: {},
                    pattern_12: {},
                    rhinestones_0: {},
                    rhinestones_1: {},
                    rhinestones_2: {},
                    rhinestones_3: {},
                    rhinestones_4: {},
                    rhinestones_5: {},
                    rhinestones_6: {},
                    rhinestones_7: {},
                    rhinestones_8: {},
                    rhinestones_9: {},
                    rhinestones_10: {},
                    rhinestones_11: {},
                    rhinestones_12: {}
                },
                currentDress: {
                    lacquer: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    pattern: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    rhinestones: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    }
                }
            },
            hero_3: {
                currentSet: "set_1",
                totalSets: {
                    set_1: {
                        currentIndex: 0,
                        frames: [1, 2, 3, 4, 5, 6]
                    }
                },
                totalDress: {
                    lacquer_0: {},
                    lacquer_1: {},
                    lacquer_2: {},
                    lacquer_3: {},
                    lacquer_4: {},
                    lacquer_5: {},
                    lacquer_6: {},
                    lacquer_7: {},
                    lacquer_8: {},
                    lacquer_9: {},
                    lacquer_10: {},
                    lacquer_11: {},
                    lacquer_12: {},
                    pattern_0: {},
                    pattern_1: {},
                    pattern_2: {},
                    pattern_3: {},
                    pattern_4: {},
                    pattern_5: {},
                    pattern_6: {},
                    pattern_7: {},
                    pattern_8: {},
                    pattern_9: {},
                    pattern_10: {},
                    pattern_11: {},
                    pattern_12: {},
                    rhinestones_0: {},
                    rhinestones_1: {},
                    rhinestones_2: {},
                    rhinestones_3: {},
                    rhinestones_4: {},
                    rhinestones_5: {},
                    rhinestones_6: {},
                    rhinestones_7: {},
                    rhinestones_8: {},
                    rhinestones_9: {},
                    rhinestones_10: {},
                    rhinestones_11: {},
                    rhinestones_12: {}
                },
                currentDress: {
                    lacquer: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    pattern: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    rhinestones: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    }
                }
            },
            hero_4: {
                currentSet: "set_1",
                totalSets: {
                    set_1: {
                        currentIndex: 0,
                        frames: [1, 2, 3, 4, 5, 6]
                    }
                },
                totalDress: {
                    lacquer_0: {},
                    lacquer_1: {},
                    lacquer_2: {},
                    lacquer_3: {},
                    lacquer_4: {},
                    lacquer_5: {},
                    lacquer_6: {},
                    lacquer_7: {},
                    lacquer_8: {},
                    lacquer_9: {},
                    lacquer_10: {},
                    lacquer_11: {},
                    lacquer_12: {},
                    pattern_0: {},
                    pattern_1: {},
                    pattern_2: {},
                    pattern_3: {},
                    pattern_4: {},
                    pattern_5: {},
                    pattern_6: {},
                    pattern_7: {},
                    pattern_8: {},
                    pattern_9: {},
                    pattern_10: {},
                    pattern_11: {},
                    pattern_12: {},
                    rhinestones_0: {},
                    rhinestones_1: {},
                    rhinestones_2: {},
                    rhinestones_3: {},
                    rhinestones_4: {},
                    rhinestones_5: {},
                    rhinestones_6: {},
                    rhinestones_7: {},
                    rhinestones_8: {},
                    rhinestones_9: {},
                    rhinestones_10: {},
                    rhinestones_11: {},
                    rhinestones_12: {}
                },
                currentDress: {
                    lacquer: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    pattern: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    rhinestones: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    }
                }
            },
            hero_5: {
                currentSet: "set_1",
                totalSets: {
                    set_1: {
                        currentIndex: 0,
                        frames: [1, 2, 3, 4, 5, 6]
                    }
                },
                totalDress: {
                    lacquer_0: {},
                    lacquer_1: {},
                    lacquer_2: {},
                    lacquer_3: {},
                    lacquer_4: {},
                    lacquer_5: {},
                    lacquer_6: {},
                    lacquer_7: {},
                    lacquer_8: {},
                    lacquer_9: {},
                    lacquer_10: {},
                    lacquer_11: {},
                    lacquer_12: {},
                    pattern_0: {},
                    pattern_1: {},
                    pattern_2: {},
                    pattern_3: {},
                    pattern_4: {},
                    pattern_5: {},
                    pattern_6: {},
                    pattern_7: {},
                    pattern_8: {},
                    pattern_9: {},
                    pattern_10: {},
                    pattern_11: {},
                    pattern_12: {},
                    rhinestones_0: {},
                    rhinestones_1: {},
                    rhinestones_2: {},
                    rhinestones_3: {},
                    rhinestones_4: {},
                    rhinestones_5: {},
                    rhinestones_6: {},
                    rhinestones_7: {},
                    rhinestones_8: {},
                    rhinestones_9: {},
                    rhinestones_10: {},
                    rhinestones_11: {},
                    rhinestones_12: {}
                },
                currentDress: {
                    lacquer: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    pattern: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    rhinestones: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    }
                }
            },
            hero_6: {
                currentSet: "set_1",
                totalSets: {
                    set_1: {
                        currentIndex: 0,
                        frames: [1, 2, 3, 4, 5, 6]
                    }
                },
                totalDress: {
                    lacquer_0: {},
                    lacquer_1: {},
                    lacquer_2: {},
                    lacquer_3: {},
                    lacquer_4: {},
                    lacquer_5: {},
                    lacquer_6: {},
                    lacquer_7: {},
                    lacquer_8: {},
                    lacquer_9: {},
                    lacquer_10: {},
                    lacquer_11: {},
                    lacquer_12: {},
                    pattern_0: {},
                    pattern_1: {},
                    pattern_2: {},
                    pattern_3: {},
                    pattern_4: {},
                    pattern_5: {},
                    pattern_6: {},
                    pattern_7: {},
                    pattern_8: {},
                    pattern_9: {},
                    pattern_10: {},
                    pattern_11: {},
                    pattern_12: {},
                    rhinestones_0: {},
                    rhinestones_1: {},
                    rhinestones_2: {},
                    rhinestones_3: {},
                    rhinestones_4: {},
                    rhinestones_5: {},
                    rhinestones_6: {},
                    rhinestones_7: {},
                    rhinestones_8: {},
                    rhinestones_9: {},
                    rhinestones_10: {},
                    rhinestones_11: {},
                    rhinestones_12: {}
                },
                currentDress: {
                    lacquer: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    pattern: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    },
                    rhinestones: {
                        currentOption: null,
                        defaultOption: 0,
                        currentColor: null,
                        defaultColor: null,
                        currentTexture: null,
                        defaultTexture: null,
                        currentAlphaTexture: null,
                        defaultAlphaTexture: 1
                    }
                }
            }
        }
    };
    /*
	
    */
    this.initFunc = function() {
        /*
		
        */
        var canvas = document.getElementById("canvas");
        /*
		
        */
        var elementTitle = document.getElementsByTagName("title")[0];
        elementTitle.innerHTML = _TITLE;
        /*
        добавляем контекстное меню
        */
        try {
            var contextmenu = document.createElement("menu");
            document.body.appendChild(contextmenu);
            contextmenu.type = "context";
            contextmenu.id = "contextmenu";
            var menuitem_1 = document.createElement("menuitem");
            contextmenu.appendChild(menuitem_1);
            menuitem_1.innerHTML = "&nbsp;" + _TITLE + "&nbsp;";
            menuitem_1.addEventListener("click", _onClickLogoBtnFunc, false);
            var menuitem_2 = document.createElement("menuitem");
            contextmenu.appendChild(menuitem_2);
            menuitem_2.innerHTML = "&nbsp;" + this.copyright + "&nbsp;";
            menuitem_2.addEventListener("click", _onClickCopyrightMenuItemFunc, false);
        } catch (event) {
            trace(event, 1);
        } finally {

        }
        /*
		
        */
        _stage = new createjs.Stage(canvas);
        if (createjs.Touch.isSupported()) {
            /*
			
            */
            createjs.Touch.enable(_stage);
            /*
			
            */
            _stage.addEventListener("stagemousedown", _onStageMouseDownFunc, false);
            _stage.addEventListener("stagemousemove", _onStageMouseMoveFunc, false);
            _stage.addEventListener("stagemouseup", _onStageMouseUpFunc, false);
        } else {
            /*
			
            */
            _stage.enableMouseOver(10);
            /*
			
            */
            _stage.addEventListener("stagemousemove", _onStageMouseMoveFunc, false);
        }
        /*
		
        */
        createjs.Ticker.addEventListener("tick", _onTickFunc, false);
        createjs.Ticker.framerate = lib.properties.fps;
        /*
		
        */
        var container = new createjs.Container();
        var backgroundContainer = new createjs.Shape();
        backgroundContainer.graphics.beginFill(_BGCOLOR);
        backgroundContainer.graphics.drawRect(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
        backgroundContainer.graphics.endFill();
        container.addChild(backgroundContainer);
        _stage.addChild(container);
        /*
		
        */
        var maskContainer = new createjs.Shape();
        maskContainer.graphics.beginFill(_BGCOLOR);
        maskContainer.graphics.drawRect(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
        maskContainer.graphics.endFill();
        maskContainer.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
        maskContainer.mouseChildren = false;
        maskContainer.mouseEnabled = false;
        container.mask = maskContainer;
        /*
        контейнер для основной программы
        */
        _main = new createjs.Container();
        container.addChild(_main);
        /*
		
        */
        _soundManager = new Edapskov_SoundManager();
        _soundManager.initFunc();
        _soundManager.setInvisibleFunc(false);
        //_soundManager.setVolumeFunc(0.4);
        /*
		
        */
        _fullScreenCanvasManager = new Edapskov_FullScreenCanvasManager();
        _fullScreenCanvasManager.initFunc();
        /*
        контейнер для вспомогательных окон
        */
        _before = new createjs.Container();
        container.addChild(_before);
        /*
		
        */
        _cursor = new createjs.Container();
        container.addChild(_cursor);
        _cursorUpdateFunc();
        /*
		
        */
        _shadowScreen = new createjs.Container();
        container.addChild(_shadowScreen);
        // затемнение
        var shadowContainer = new createjs.Container();
        _shadowScreen.addChild(shadowContainer);
        shadowContainer.name = "shadowContainer";
        var shadowContainer_part_1 = new createjs.Shape();
        shadowContainer_part_1.graphics.beginFill(_BGCOLOR);
        shadowContainer_part_1.graphics.drawRect(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
        shadowContainer_part_1.graphics.endFill();
        shadowContainer.addChild(shadowContainer_part_1);
        try {
            var shadowContainer_part_2 = new createjs.Shape();
            shadowContainer_part_2.graphics.beginRadialGradientFill([_BGCOLOR, _BGCOLOR], [0, 1], _BGWIDTH / 2, _CHEIGHT / 2, 0, _BGWIDTH / 2, _CHEIGHT / 2, (_BGWIDTH + _CHEIGHT) / 2);
            shadowContainer_part_2.graphics.drawRect(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
            shadowContainer_part_2.graphics.endFill();
            shadowContainer.addChild(shadowContainer_part_2);
        } catch (event) {
            trace(event, 1);
        } finally {

        }
        shadowContainer.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
        // контейнер для анимации перехода
        var curtainContainer = new createjs.Container();
        _shadowScreen.addChild(curtainContainer);
        curtainContainer.name = "curtainContainer";
        // делаем некликабельным
        _shadowScreen.mouseChildren = false;
        _shadowScreen.mouseEnabled = false;
        /*
        контейнер для вывода сообщения о запрете поворота экрана
        */
        _orientationLock = new createjs.Container();
        container.addChild(_orientationLock);
        /*
		
        */
        _debugger = new Edapskov_Debugger();
        _debugger.initFunc(container, _CWIDTH, _CHEIGHT);
        /*
		
        */
        window.addEventListener("keydown", _onKeyPressFunc, false);
        window.addEventListener("resize", _onResizeWindowFunc, false);
        window.addEventListener("orientationchange", _onResizeWindowFunc, false);
        _onResizeWindowFunc();
        /*
		
        */
        _animationTransitionBetweenScenesFunc(_preloaderFunc);
    }
    /*
	
    */
    this.stopAppFunc = function() {
        _stopAppFunc();
    }
    this.playAppFunc = function() {
        _playAppFunc();
    }
    /*
	
    */
    function _onResizeWindowFunc() {
        /*
		
        */
        var innerWidth_num = window.innerWidth;
        var innerHeight_num = window.innerHeight;
        var devicePixelRatio_num = 1;
        if (window.devicePixelRatio) {
            devicePixelRatio_num = window.devicePixelRatio;
        }
        /*
		
        */
        var ratio_num = _CWIDTH / _CHEIGHT;
        var windowRatio_num = innerWidth_num / innerHeight_num;
        var scale_num = innerWidth_num / _CWIDTH;
        if (windowRatio_num > ratio_num) {
            scale_num = innerHeight_num / _CHEIGHT;
        }
        /*
        костыль, ограничивающий масштабирование в Firefox
        */
        var userAgent_str = navigator.userAgent.toLowerCase();
        if (userAgent_str.indexOf("firefox") >= 0) {
            if (scale_num > 1) {
                scale_num = 1;
            }
        }
        /*
		
        */
        _stage.canvas.width = Math.round(innerWidth_num * devicePixelRatio_num);
        _stage.canvas.height = Math.round(innerHeight_num * devicePixelRatio_num);
        /*
		
        */
        _stage.canvas.style.width = innerWidth_num + "px";
        _stage.canvas.style.height = innerHeight_num + "px";
        /*
		
        */
        _stage.scaleX = scale_num * devicePixelRatio_num;
        _stage.scaleY = scale_num * devicePixelRatio_num;
        /*
		
        */
        _stage.x = Math.round(((innerWidth_num - (_CWIDTH * scale_num)) / 2) * devicePixelRatio_num);
        _stage.y = Math.round(((innerHeight_num - (_CHEIGHT * scale_num)) / 2) * devicePixelRatio_num);
        /*
        выводим сообщение о запрете поворота экрана
        */
        _clearContainerFunc(_orientationLock);
        if (window.screen.orientation) {
            if (window.screen.orientation.type) {
                if (window.screen.orientation.type == "portrait-primary" || window.screen.orientation.type == "portrait-secondary") {
                    if (lib.OrientationLockScreen) {
                        /*
						
                        */
                        var orientationLock_mc = new lib.OrientationLockScreen();
                        _orientationLock.addChild(orientationLock_mc);
                        orientationLock_mc.gotoAndStop(0);
                        /*
						
                        */
                        if (orientationLock_mc.screen_mc) {
                            orientationLock_mc.screen_mc.gotoAndStop(0);
                            orientationLock_mc.screen_mc.addEventListener("click", _onClickScreenMcOrientationLockScreenFunc, false);
                        }
                    }
                }
            }
        }
        /*
		
        */
        _stage.update();
    }

    function _onClickScreenMcOrientationLockScreenFunc(event) {

    }
    /*
    ==============================================================================================================
    Прелоадер
    ==============================================================================================================
    */
    function _preloaderFunc() {
        /*
		
        */
        _clearContainerFunc(_main);
        _clearContainerFunc(_before);
        /*
		
        */
        var currentScreen_mc = new lib.PreloaderScreen();
        _main.addChild(currentScreen_mc);
        currentScreen_mc.gotoAndStop(0);
        /*
		
        */
        currentScreen_mc.logo_mc.gotoAndStop(0);
        var logo_img = new Image();
        logo_img.src = "data:image/png;base64,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";
        var logo_bitmap = new createjs.Bitmap(logo_img);
        currentScreen_mc.logo_mc.addChild(logo_bitmap);
        logo_bitmap.x = -150;
        logo_bitmap.y = -150;
        /*
        currentScreen_mc.logo_mc.scaleX = 0.95;
        currentScreen_mc.logo_mc.scaleY = 0.95;
        currentScreen_mc.logo_mc.mouseChildren = false;
        currentScreen_mc.logo_mc.mouseEnabled = true;
        currentScreen_mc.logo_mc.cursor = "pointer";
        currentScreen_mc.logo_mc.addEventListener("click", _onClickPreloaderBtnFunc, false);
        currentScreen_mc.logo_mc.addEventListener("mouseover", _onMouseOverPreloaderMcFunc, false);
        currentScreen_mc.logo_mc.addEventListener("mouseout", _onMouseOutPreloaderMcFunc, false);
        */
        /*
		
        */
        currentScreen_mc.play_mc.gotoAndStop(0);
        currentScreen_mc.play_mc.visible = false;
        currentScreen_mc.play_mc.mouseChildren = false;
        currentScreen_mc.play_mc.mouseEnabled = false;
        /*
		
        */
        currentScreen_mc.indicator_mc.gotoAndStop(0);
        currentScreen_mc.indicator_mc.mouseChildren = false;
        currentScreen_mc.indicator_mc.mouseEnabled = false;
        currentScreen_mc.indicator_mc.indicator_mc.gotoAndStop(0);
        currentScreen_mc.indicator_mc.indicator_mc.loop = false;
        currentScreen_mc.indicator_mc.indicator_mc.alpha = 1;
        /*
		
        */
        var loadQueue = new createjs.LoadQueue();
        loadQueue.installPlugin(createjs.Sound);
        createjs.Sound.alternateExtensions = ["mp3"];
        /*
        слушаем события
        */
        loadQueue.addEventListener("error", _onErrorLoadManifestFunc, false);
        loadQueue.addEventListener("progress", _onProgressLoadManifestFunc, false);
        loadQueue.addEventListener("fileload", _onFileLoadManifestFunc, false);
        loadQueue.addEventListener("complete", _onCompleteLoadManifestFunc, false);
        /*
        создаём очередь на загрузку, но запрещаем саму загрузку
        */
        loadQueue.loadManifest(lib.properties.manifest, false);
        /*
        загружаем звук
        */
        loadQueue.loadFile({
            id: "background_sound",
            src: "library/sounds/background_sound.ogg"
        });
        loadQueue.loadFile({
            id: "click_sound",
            src: "library/sounds/click_sound.ogg"
        });
        loadQueue.loadFile({
            id: "click_2_sound",
            src: "library/sounds/click_2_sound.ogg"
        });
        loadQueue.loadFile({
            id: "completed_sound",
            src: "library/sounds/completed_sound.ogg"
        });
        loadQueue.loadFile({
            id: "photo_sound",
            src: "library/sounds/photo_sound.ogg"
        });
        loadQueue.loadFile({
            id: "magic_sound",
            src: "library/sounds/magic_sound.ogg"
        });
        /*
        добавляем в очередь кое-что из своего
        */
        loadQueue.loadFile({
            id: "bitmapdata",
            src: "library/js/bitmapdata.js"
        });
        loadQueue.loadFile({
            id: "blob",
            src: "library/js/blob.js"
        });
        loadQueue.loadFile({
            id: "canvastoblob",
            src: "library/js/canvastoblob.js"
        });
        loadQueue.loadFile({
            id: "filesaver",
            src: "library/js/filesaver.js"
        });
        /*
        запускаем загрузку
        */
        loadQueue.load();
    }

    function _onMouseOverPreloaderMcFunc(event) {
        var currentTarget_mc = event.currentTarget;
        createjs.Tween.get(currentTarget_mc).wait(0).to({
            scaleX: 1,
            scaleY: 1
        }, (_DELAY / 4) * 1000);
    }

    function _onMouseOutPreloaderMcFunc(event) {
        var currentTarget_mc = event.currentTarget;
        createjs.Tween.get(currentTarget_mc).wait(0).to({
            scaleX: 0.95,
            scaleY: 0.95
        }, (_DELAY / 2) * 1000);
    }

    function _onErrorLoadManifestFunc(event) {
        trace("Could not load: " + event.data.src + " !", 2);
    }

    function _onProgressLoadManifestFunc(event) {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        /*
		
        */
        var totalFrames_num = currentScreen_mc.indicator_mc.indicator_mc.totalFrames;
        var currentFrame_num = Math.floor(totalFrames_num * event.progress);
        if (currentFrame_num > totalFrames_num) {
            currentFrame_num = totalFrames_num;
        } else if (currentFrame_num < 0) {
            currentFrame_num = totalFrames_num;
        }
        currentScreen_mc.indicator_mc.indicator_mc.gotoAndStop(currentFrame_num);
    }

    function _onFileLoadManifestFunc(event) {
        if (event.item.type == "image") {
            images[event.item.id] = event.result;
        }
    }

    function _onCompleteLoadManifestFunc(event) {
        /*
		
        */
        var queue = event.target;
        var ssMetadata = lib.ssMetadata;
        for (i = 0; i < ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet({
                "images": [queue.getResult(ssMetadata[i].name)],
                "frames": ssMetadata[i].frames
            })
        }
        /*
		
        */
        _onCompleteLoadAppFunc();
    }
    /*
	
    */
    function _onCompleteLoadAppFunc() {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        /*
		
        */
        createjs.Tween.get(currentScreen_mc.indicator_mc).wait(0).to({
            alpha: 0.01,
            scaleX: 0.04,
            scaleY: 0.04,
            visible: false
        }, _DELAY * 1000, createjs.Ease.cubicInOut);
        /*
		
        */
        currentScreen_mc.play_mc.cursor = "pointer";
        currentScreen_mc.play_mc.mouseChildren = false;
        currentScreen_mc.play_mc.mouseEnabled = true;
        currentScreen_mc.play_mc.alpha = 0.01;
        currentScreen_mc.play_mc.scaleX = 0.04;
        currentScreen_mc.play_mc.scaleY = 0.04;
        currentScreen_mc.play_mc.addEventListener("click", _onClickPlayAppBtnFunc, false);
        currentScreen_mc.play_mc.addEventListener("mouseover", _onMouseOverPreloaderMcFunc, false);
        currentScreen_mc.play_mc.addEventListener("mouseout", _onMouseOutPreloaderMcFunc, false);
        createjs.Tween.get(currentScreen_mc.play_mc).wait(_DELAY * 1000).to({
            alpha: 1,
            scaleX: 0.9,
            scaleY: 0.9
        }, _DELAY * 1000, createjs.Ease.bounceInOut);
        currentScreen_mc.play_mc.visible = true;
        /*
		
        */
        var bodyCursor_mc = new lib.Cursor();
        bodyCursor_mc.gotoAndStop(0);
        bodyCursor_mc.name = "body_mc";
        _cursor.addChild(bodyCursor_mc);
        _cursor.mouseChildren = false;
        _cursor.mouseEnabled = false;
        /*
		
        */
        _onResizeWindowFunc();
    }
    /*
	
    */
    function _onClickPlayAppBtnFunc(event) {
        /*
		
        */
        _soundManager.addSoundFunc("background_sound", 0, 0, -1, 0.1, 0);
        /*
		
        */
        _addAdsFunc();
        /*
		
        */
        _animationTransitionBetweenScenesFunc(_welcomeFunc);
    }
    /*
    ==============================================================================================================
    Окно приветствия
    ==============================================================================================================
    */
    function _welcomeFunc() {
        /*
		
        */
        _resetFunc();
        /*
		
        */
        _clearContainerFunc(_main);
        _clearContainerFunc(_before);
        /*
		
        */
        var currentScreen_mc = new lib.WelcomeScreen();
        _main.addChild(currentScreen_mc);
        currentScreen_mc.gotoAndStop(0);
        /*
		
        */
        currentScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
        /*
		
        */
        if (currentScreen_mc.credits_btn) {
            currentScreen_mc.credits_btn.addEventListener("click", _onClickCreditsBtnFunc, false);
        }
        /*
		
        */
        if (currentScreen_mc.instruction_btn) {
            currentScreen_mc.instruction_btn.addEventListener("click", _onClickInstructionBtnFunc, false);
        }
        /*
		
        */
        if (currentScreen_mc.moreGames_btn) {
            currentScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
        }
        /*
		
        */
        if (currentScreen_mc.freeGames_mc) {
            currentScreen_mc.freeGames_mc.addEventListener("click", _onClickFreeGamesMcFunc, false);
        }
        /*
		
        */
        currentScreen_mc.play_btn.addEventListener("click", _onClickPlayBtnFunc, false);
        /*
		
        */
        if (currentScreen_mc.heroes_mc) {
            _updateHeroesFunc(currentScreen_mc.heroes_mc, true);
        }
        /*
		
        */
        if (currentScreen_mc.bg) {
            currentScreen_mc.bg.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
        }
        /*
		
        */
        _soundManager.updateSoundMcFunc(currentScreen_mc);
        /*
		
        */
        _fullScreenCanvasManager.updateFullScreenMcFunc(currentScreen_mc);
        /*
		
        */
        _cursorUpdateFunc();
    }
    /*
	
    */
    function _onClickPlayBtnFunc(event) {
        /*
		
        */
        var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        event.currentTarget.removeEventListener("click", _onClickPlayBtnFunc, false);
        /*
		
        */
        _resetFunc();
        /*
		
        */
        _soundManager.removeAllSoundExceptNameFunc(["background_sound", "click_sound"]);
        /*
		
        */
        _animationTransitionBetweenScenesFunc(_selectFunc, 0, 1, null, true);
        /*
        if(_information.firstRun)
        {
        	_information.firstRun = false;
        	_animationTransitionBetweenScenesFunc(_cartoonFunc, 0, 1, null, true);
        }
        else
        {
        	_animationTransitionBetweenScenesFunc(_selectFunc, 0, 1, null, true);
        }
        */
    }
    /*
	
    */
    function _onClickCreditsBtnFunc(event) {
        /*
		
        */
        var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        _copyrightFunc();
    }
    /*
	
    */
    function _onClickInstructionBtnFunc(event) {
        /*
		
        */
        var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        _animationTransitionBetweenScenesFunc(_simpleScreenFunc, 0, _DELAY / 2, ["InstructionScreen"]);
    }
    /*
	
    */
    function _resetFunc() {
        /*
		
        */
        _information.shownAds = false;
        /*
		
        */
        if (_information.timeout_id != null) {
            clearTimeout(_information.timeout_id);
        }
        if (_information.interval_id != null) {
            clearInterval(_information.interval_id);
        }
        /*
		
        */
        _information.targetLocation = 1;
        _information.totalLocations = 0;
        for (var propLocations in _information.locations) {
            if (_information.locations.hasOwnProperty(propLocations)) {
                _information.totalLocations++;
                _information.locations[propLocations].completed = false;
                _information.locations[propLocations].currentAction = 1;
                _information.locations[propLocations].currentNameAction = "action_" + _information.locations[propLocations].currentAction;
                if (_information.locations[propLocations].totalActions === null) {
                    _information.locations[propLocations].totalActions = 0;
                    for (var propActions in _information.locations[propLocations].actions) {
                        if (_information.locations[propLocations].actions.hasOwnProperty(propActions)) {
                            _information.locations[propLocations].totalActions++;
                        }
                    }
                }
            }
        }
        /*
		
        */
        for (var propHeroes in _information.heroes) {
            if (_information.heroes.hasOwnProperty(propHeroes)) {
                for (var propOptions in _information.heroes[propHeroes].currentDress) {
                    if (_information.heroes[propHeroes].currentDress.hasOwnProperty(propOptions)) {
                        _information.heroes[propHeroes].currentDress[propOptions].currentOption = _information.heroes[propHeroes].currentDress[propOptions].defaultOption;
                        _information.heroes[propHeroes].currentDress[propOptions].currentColor = _information.heroes[propHeroes].currentDress[propOptions].defaultColor;
                        _information.heroes[propHeroes].currentDress[propOptions].currentTexture = _information.heroes[propHeroes].currentDress[propOptions].defaultTexture;
                        _information.heroes[propHeroes].currentDress[propOptions].currentAlphaTexture = _information.heroes[propHeroes].currentDress[propOptions].defaultAlphaTexture;
                    }
                }
            }
        }
    }
    /*
    ==============================================================================================================
    cartoonFunc
    ==============================================================================================================
    */
    function _cartoonFunc() {
        /*
		
        */
        _information.currentCartoon++;
        /*
		
        */
        _clearContainerFunc(_main);
        _clearContainerFunc(_before);
        /*
		
        */
        var currentScreen_mc = new lib.CartoonScreen();
        _main.addChild(currentScreen_mc);
        currentScreen_mc.gotoAndStop(0);
        currentScreen_mc.body_mc.gotoAndStop(0);
        /*
		
        */
        currentScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
        /*
		
        */
        if (currentScreen_mc.moreGames_btn) {
            currentScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
        }
        /*
		
        */
        if (currentScreen_mc.next_mc) {
            currentScreen_mc.next_mc.mouseChildren = false;
            currentScreen_mc.next_mc.mouseEnabled = true;
            currentScreen_mc.next_mc.cursor = "pointer";
            currentScreen_mc.next_mc.visible = false;
        }
        /*
		
        */
        if (currentScreen_mc.skip_btn) {
            currentScreen_mc.skip_btn.addEventListener("click", _onClickSkipBtnCartoonFunc, false);
        }
        /*
		
        */
        _updateCartoonFunc();
        /*
		
        */
        /*
        if(currentScreen_mc.bg)
        {
        	currentScreen_mc.bg.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
        }
        */
        /*
		
        */
        _soundManager.updateSoundMcFunc(currentScreen_mc);
        /*
		
        */
        _fullScreenCanvasManager.updateFullScreenMcFunc(currentScreen_mc);
        /*
		
        */
        _cursorUpdateFunc();
    }
    /*
	
    */
    function _updateCartoonFunc() {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        /*
		
        */
        currentScreen_mc.next_mc.visible = false;
        /*
		
        */
        var animation_mc = currentScreen_mc.body_mc["body_" + Number(currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
        animation_mc.loop = false;
        var timelineControl = new Edapskov_TimelineControl(animation_mc);
        timelineControl.gotoEndFunc();
        timelineControl.addEventListener("completed_timeline", _onFinishAnimatedCartoonFunc, false);
    }
    /*
	
    */
    function _onFinishAnimatedCartoonFunc(event) {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        /*
		
        */
        currentScreen_mc.next_mc.visible = true;
        currentScreen_mc.next_mc.alpha = 0.01;
        currentScreen_mc.next_mc.scaleX = 0.5;
        currentScreen_mc.next_mc.scaleY = 0.5;
        createjs.Tween.get(currentScreen_mc.next_mc).wait(0).to({
            alpha: 1,
            scaleX: 1,
            scaleY: 1
        }, (_DELAY / 4) * 1000);
        currentScreen_mc.next_mc.addEventListener("click", _onClickNextMcCartoonFunc, false);
        if (currentScreen_mc.next_mc.animation_mc) {
            currentScreen_mc.next_mc.animation_mc.gotoAndStop(0);
            currentScreen_mc.next_mc.animation_mc.play();
        }
    }
    /*
	
    */
    function _onClickNextMcCartoonFunc(event) {
        /*
		
        */
        var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        event.currentTarget.removeEventListener("click", _onClickNextMcCartoonFunc, false);
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        /*
		
        */
        if (currentScreen_mc.body_mc.currentFrame < (currentScreen_mc.body_mc.totalFrames - 1)) {
            /*
			
            */
            currentScreen_mc.body_mc.gotoAndStop(currentScreen_mc.body_mc.currentFrame + 1);
            /*
			
            */
            _updateCartoonFunc();
        } else {
            _updateScreenCartoonFunc();
        }
    }
    /*
	
    */
    function _onClickSkipBtnCartoonFunc(event) {
        /*
		
        */
        var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        event.currentTarget.removeEventListener("click", _onClickSkipBtnCartoonFunc, false);
        /*
		
        */
        _updateScreenCartoonFunc();
    }
    /*
	
    */
    function _updateScreenCartoonFunc() {
        _animationTransitionBetweenScenesFunc(_selectFunc, 0, 1, null, true);
    }
    /*
    ==============================================================================================================
    Selection Screen
    ==============================================================================================================
    */
    function _selectFunc() {
        /*
		
        */
        _information.currentNameLocation = null;
        /*
		
        */
        _clearContainerFunc(_main);
        _clearContainerFunc(_before);
        /*
		
        */
        var currentScreen_mc = new lib.SelectionScreen();
        _main.addChild(currentScreen_mc);
        currentScreen_mc.gotoAndStop(0);
        /*
		
        */
        currentScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
        /*
		
        */
        _updateSelectionLocationFunc();
        /*
		
        */
        if (currentScreen_mc.help_mc) {
            if (_information.firstRun) {
                currentScreen_mc.removeChild(currentScreen_mc.help_mc);
            } else {
                _information.firstRun = true;
                currentScreen_mc.help_mc.addEventListener("click", _onClickHelpMCFunc, false);
            }
        }
        /*
		
        */
        if (currentScreen_mc.moreGames_btn) {
            currentScreen_mc.moreGames_btn.alpha = 0.01;
            createjs.Tween.get(currentScreen_mc.moreGames_btn).wait(_DELAY * 1000).to({
                alpha: 1
            }, _DELAY * 1000);
            currentScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
        }
        /*
		
        */
        _updateHeroesFunc(currentScreen_mc, true);
        /*
		
        */
        _soundManager.updateSoundMcFunc(currentScreen_mc);
        /*
		
        */
        _fullScreenCanvasManager.updateFullScreenMcFunc(currentScreen_mc);
        /*
		
        */
        _cursorUpdateFunc();
    }
    /*
	
    */
    function _onClickHelpMCFunc(event) {
        /*
		
        */
        var currentTarget_mc = event.currentTarget;
        /*
		
        */
        var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        currentTarget_mc.removeEventListener("click", _onClickHelpMCFunc, false);
        currentTarget_mc.parent.removeChild(currentTarget_mc);
    }
    /*
	
    */
    function _updateSelectionLocationFunc() {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        /*
		
        */
        var locations_mc;
        var location_mc;
        var location_str;
        var location_num = 1;
        var targetLocation_str = String("location_" + _information.targetLocation);
        /*
		
        */
        if (currentScreen_mc.locations_mc) {
            /*
			
            */
            locations_mc = currentScreen_mc.locations_mc;
            locations_mc.gotoAndStop(0);
            /*
			
            */
            if (_hasLabelInMovieClipFunc(locations_mc, targetLocation_str)) {
                /*
				
                */
                locations_mc.gotoAndStop(targetLocation_str);
                /*
				
                */
                if (locations_mc["body_" + (locations_mc.currentFrame + 1) + "_mc"]) {
                    locations_mc = locations_mc["body_" + (locations_mc.currentFrame + 1) + "_mc"];
                    locations_mc.gotoAndStop(0);
                }
            }
            /*
			
            */
            if (locations_mc.totalFrames > 1) {
                locations_mc.loop = false;
                locations_mc.play();
            }
            /*
			
            */
            while (location_num <= _information.totalLocations) {
                /*
				
                */
                location_str = "location_" + location_num;
                /*
				
                */
                if (_information.locations.hasOwnProperty(location_str)) {
                    if (locations_mc[location_str]) {
                        /*
						
                        */
                        location_mc = locations_mc[location_str];
                        location_mc.gotoAndStop(0);
                        location_mc.name = location_str;
                        /*
						
                        */
                        if (Number(location_num) < Number(_information.targetLocation)) {
                            location_mc.gotoAndStop(2);
                            location_mc.mouseEnabled = true;
                            location_mc.mouseChildren = false;
                            location_mc.cursor = "pointer";
                            location_mc.addEventListener("mouseover", _onMouseOverLocationFunc, false);
                            location_mc.addEventListener("mouseout", _onMouseOutLocationFunc, false);
                            location_mc.addEventListener("click", _onClickLocationFunc, false);
                            //new Edapskov_Glow(location_mc, _DELAY / 4, "#ffffff", 0);
                        } else if (Number(location_num) == Number(_information.targetLocation)) {
                            location_mc.gotoAndStop(1);
                            location_mc.mouseEnabled = true;
                            location_mc.mouseChildren = false;
                            location_mc.cursor = "pointer";
                            location_mc.addEventListener("mouseover", _onMouseOverLocationFunc, false);
                            location_mc.addEventListener("mouseout", _onMouseOutLocationFunc, false);
                            location_mc.addEventListener("click", _onClickLocationFunc, false);
                            //new Edapskov_Glow(location_mc, _DELAY / 4, "#ffffff", 0);
                        } else {
                            location_mc.gotoAndStop(0);
                            location_mc.mouseEnabled = false;
                            location_mc.mouseChildren = false;
                            location_mc.cursor = "default";
                        }
                    } else {
                        trace("Такой локации нет в исходнике!");
                    }
                } else {
                    trace("Такой локации нет в списке!");
                }
                /*
				
                */
                location_num++;
            }
        } else {
            trace("Отсутствует locations_mc!");
        }
    }

    function _hasLabelInMovieClipFunc(movieClip_mc, label_str) {
        /*
		
        */
        var result_bool = false;
        var labels_arr = movieClip_mc.labels;
        var i = 0;
        var l = labels_arr.length;
        /*
		
        */
        while (i < l) {
            /*
			
            */
            if (label_str === labels_arr[i].label) {
                result_bool = true;
            }
            /*
			
            */
            i++;
        }
        /*
		
        */
        return result_bool;
    }

    function _onMouseOverLocationFunc(event) {
        var currentTarget_mc = event.currentTarget;
        //createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1.06, scaleY:1.06}, (_DELAY / 5) * 1000);
        //new Edapskov_Glow(currentTarget_mc, _DELAY / 5, "#ffffff", 15);
    }

    function _onMouseOutLocationFunc(event) {
        var currentTarget_mc = event.currentTarget;
        //createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
        //new Edapskov_Glow(currentTarget_mc, _DELAY / 3, "#ffffff", 0);
    }

    function _onClickLocationFunc(event) {
        /*
		
        */
        var location_mc = event.currentTarget;
        location_mc.gotoAndStop(2);
        /*
		
        */
        var point_obj = location_mc.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("magic_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        _information.currentNameLocation = String(location_mc.name);
        /*
		
        */
        new Edapskov_Flickering(_before, location_mc, ["#ffffff", "#ffffcc"], 10, 24);
        /*
		
        */
        var gravityExplosion_mc = new lib.GravityExplosionMC();
        _before.addChild(gravityExplosion_mc);
        gravityExplosion_mc.gotoAndStop(0);
        point_obj = location_mc.localToLocal(event.localX, event.localY, _before);
        gravityExplosion_mc.x = point_obj.x;
        gravityExplosion_mc.y = point_obj.y;
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        currentScreen_mc.locations_mc.mouseEnabled = false;
        currentScreen_mc.locations_mc.mouseChildren = false;
        /*
        исключения
        */
        if (!_information.locations[_information.currentNameLocation].completed) {
            if (_skippedLocationsFunc() == 2) {
                _addAdsFunc();
            }
        }
        /*
		
        */
        //_animationTransitionBetweenScenesFunc(_questFunc);
        _animationTransitionBetweenScenesFunc(_questFunc, 1, 1, null, true);
    }
    /*
    ==============================================================================================================
    Quest Screen
    ==============================================================================================================
    */
    function _questFunc() {
        /*
		
        */
        _information.currentNameHero = null;
        /*
		
        */
        _clearContainerFunc(_main);
        _clearContainerFunc(_before);
        /*
		
        */
        var currentScreen_mc = new lib["LocationScreen_" + parseInt(_information.currentNameLocation.split("_")[1])]();
        _main.addChild(currentScreen_mc);
        currentScreen_mc.gotoAndStop(0);
        /*
		
        */
        currentScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
        /*
		
        */
        if (currentScreen_mc.moreGames_btn) {
            currentScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
        }
        /*
		
        */
        if (currentScreen_mc.next_btn) {
            currentScreen_mc.next_btn.visible = false;
        }
        /*
		
        */
        if (currentScreen_mc.skip_btn) {
            currentScreen_mc.skip_btn.visible = false;
        }
        /*
		
        */
        _soundManager.updateSoundMcFunc(currentScreen_mc);
        /*
		
        */
        _fullScreenCanvasManager.updateFullScreenMcFunc(currentScreen_mc);
        /*
		
        */
        _cursorUpdateFunc();
        /*
		
        */
        _actionFunc();
    }
    /*
	
    */
    function _actionFunc() {
        /*
		
        */
        if (_information.locations[_information.currentNameLocation].actions.hasOwnProperty(_information.locations[_information.currentNameLocation].currentNameAction)) {
            /*
			
            */
            var i;
            var l;
            /*
			
            */
            if (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].defaultCursor !== null) {
                _cursorUpdateFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].defaultCursor);
            }
            /*
			
            */
            if (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].addBackgroundSound !== null) {
                _soundManager.addSoundFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].addBackgroundSound, 0, 0, 0, 1, 0);
            }
            if (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].removeBackgroundSound !== null) {
                _soundManager.removeSoundNameFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].removeBackgroundSound);
            }
            /*
			
            */
            var currentScreen_mc = _main.getChildAt(0);
            currentScreen_mc.gotoAndStop(0);
            currentScreen_mc.body_mc.gotoAndStop(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].frame - 1);
            /*
			
            */
            if (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].openLocFunc !== null) {
                _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].openLocFunc();
            }
            /*
			
            */
            _updateHeroesFunc(currentScreen_mc.body_mc, true);
            /*
			
            */
            _updateIndicatorFunc();
            /*
            исключение для этой игры
            */
            if (currentScreen_mc.next_btn) {
                currentScreen_mc.next_btn.visible = true;
                currentScreen_mc.next_btn.addEventListener("click", _onClickNextBtnAfterLocationFunc, false);
            }
            /*
			
            */
            if (currentScreen_mc.skip_btn) {
                if (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].skipAndGoto === null) {
                    currentScreen_mc.skip_btn.visible = false;
                } else {
                    /*
					
                    */
                    if (currentScreen_mc.skip_btn.visible) {
                        currentScreen_mc.skip_btn.alpha = 1;
                    } else {
                        currentScreen_mc.skip_btn.alpha = 0.01;
                        createjs.Tween.get(currentScreen_mc.skip_btn).wait(0).to({
                            alpha: 1
                        }, (_DELAY / 4) * 1000);
                    }
                    /*
					
                    */
                    currentScreen_mc.skip_btn.visible = true;
                    currentScreen_mc.skip_btn.addEventListener("click", _onClickSkipBtnFunc, false);
                }
            }
            /*
			
            */
            var object_mc;
            var objects_arr = new Array();
            if (Array.isArray(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject)) {
                /*
				
                */
                i = 0;
                l = _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject.length;
                /*
				
                */
                while (i < l) {
                    /*
					
                    */
                    object_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject[i], true);
                    object_mc.visible = true;
                    object_mc.gotoAndStop(0);
                    object_mc.mouseEnabled = true;
                    object_mc.mouseChildren = true;
                    object_mc.cursor = "pointer";
                    /*
					
                    */
                    objects_arr.push(object_mc);
                    /*
					
                    */
                    i++;
                }
            } else {
                /*
				
                */
                object_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject, true);
                object_mc.visible = true;
                object_mc.gotoAndStop(0);
                object_mc.mouseEnabled = true;
                object_mc.mouseChildren = true;
                object_mc.cursor = "pointer";
                /*
				
                */
                objects_arr[0] = object_mc;
            }
            /*
			
            */
            object_mc = objects_arr[0];
            /*
			
            */
            if (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "click") {
                /*
				
                */
                if (currentScreen_mc.body_mc.pointer_1) {
                    currentScreen_mc.body_mc.pointer_1.mouseEnabled = false;
                    currentScreen_mc.body_mc.pointer_1.mouseChildren = false;
                    currentScreen_mc.body_mc.pointer_1.visible = true;
                    _updateAnimationPointerFunc(currentScreen_mc.body_mc.pointer_1);
                }
                /*
				
                */
                if (currentScreen_mc.body_mc.pointer_2) {
                    currentScreen_mc.body_mc.pointer_2.mouseEnabled = false;
                    currentScreen_mc.body_mc.pointer_2.mouseChildren = false;
                    currentScreen_mc.body_mc.pointer_2.visible = false;
                }
                /*
				
                */
                i = 0;
                _information.currentCheckpoint = objects_arr.length;
                while (i < _information.currentCheckpoint) {
                    objects_arr[i].addEventListener("click", _onClickObjectClickActionFunc, false);
                    i++;
                }
            } else if (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "drag") {

            } else if (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "move") {
                /*
				
                */
                if (currentScreen_mc.body_mc.pointer_1) {
                    currentScreen_mc.body_mc.pointer_1.mouseEnabled = false;
                    currentScreen_mc.body_mc.pointer_1.mouseChildren = false;
                    currentScreen_mc.body_mc.pointer_1.visible = false;
                }
                /*
				
                */
                if (currentScreen_mc.body_mc.pointer_2) {
                    currentScreen_mc.body_mc.pointer_2.mouseEnabled = false;
                    currentScreen_mc.body_mc.pointer_2.mouseChildren = false;
                    currentScreen_mc.body_mc.pointer_2.visible = false;
                }
                /*
				
                */
                var trackMoveContainer;
                if (_information.trackMove == 2) {
                    trackMoveContainer = new createjs.Container();
                } else {
                    trackMoveContainer = new createjs.Shape();
                }
                object_mc.addChild(trackMoveContainer);
                trackMoveContainer.name = "trackMoveContainer";
                /*
				
                */
                i = 1;
                l = _information.totalCheckpoints;
                var checkpoint_mc;
                while (i <= l) {
                    if (object_mc["checkpoint_" + i]) {
                        checkpoint_mc = object_mc["checkpoint_" + i];
                        checkpoint_mc.visible = false;
                    }
                    i++;
                }
                /*
				
                */
                object_mc.cursor = "default";
                /*
				
                */
                _stage.addEventListener("stagemousedown", _onStageMouseDownMoveActionFunc, false);
                _stage.addEventListener("stagemouseup", _onStageMouseUpMoveActionFunc, false);
            } else if (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "rub") {
                /*
				
                */
                if (currentScreen_mc.body_mc.pointer_1) {
                    currentScreen_mc.body_mc.pointer_1.mouseEnabled = false;
                    currentScreen_mc.body_mc.pointer_1.mouseChildren = false;
                    currentScreen_mc.body_mc.pointer_1.visible = false;
                }
                /*
				
                */
                if (currentScreen_mc.body_mc.pointer_2) {
                    currentScreen_mc.body_mc.pointer_2.mouseEnabled = false;
                    currentScreen_mc.body_mc.pointer_2.mouseChildren = false;
                    currentScreen_mc.body_mc.pointer_2.visible = false;
                }
                /*
				
                */
                if (currentScreen_mc.body_mc.hint_mc) {
                    currentScreen_mc.body_mc.hint_mc.mouseEnabled = false;
                    currentScreen_mc.body_mc.hint_mc.mouseChildren = false;
                    currentScreen_mc.body_mc.hint_mc.visible = true;
                }
                /*
				
                */
                _information.currentRub = 0;
                if (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].totalRubs == null) {
                    _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].totalRubs = _information.totalRubs;
                }
                /*
				
                */
                _stage.addEventListener("stagemousemove", _onStageMouseMoveRubActionFunc, false);
            } else if (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "dressup") {
                /*
				
                */
                if (currentScreen_mc.body_mc.pointer_1) {
                    currentScreen_mc.body_mc.pointer_1.mouseEnabled = false;
                    currentScreen_mc.body_mc.pointer_1.mouseChildren = false;
                    currentScreen_mc.body_mc.pointer_1.visible = true;
                    _updateAnimationPointerFunc(currentScreen_mc.body_mc.pointer_1);
                }
                /*
				
                */
                if (currentScreen_mc.body_mc.pointer_2) {
                    currentScreen_mc.body_mc.pointer_2.mouseEnabled = false;
                    currentScreen_mc.body_mc.pointer_2.mouseChildren = false;
                    currentScreen_mc.body_mc.pointer_2.visible = false;
                }
                /*
				
                */
                _beginDressupActionFunc();
            } else if (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "dressupSecond") {
                /*
				
                */
                if (currentScreen_mc.body_mc.pointer_1) {
                    currentScreen_mc.body_mc.pointer_1.mouseEnabled = false;
                    currentScreen_mc.body_mc.pointer_1.mouseChildren = false;
                    currentScreen_mc.body_mc.pointer_1.visible = true;
                    _updateAnimationPointerFunc(currentScreen_mc.body_mc.pointer_1);
                }
                /*
				
                */
                if (currentScreen_mc.body_mc.pointer_2) {
                    currentScreen_mc.body_mc.pointer_2.mouseEnabled = false;
                    currentScreen_mc.body_mc.pointer_2.mouseChildren = false;
                    currentScreen_mc.body_mc.pointer_2.visible = false;
                }
                /*
				
                */
                _beginDressupSecondActionFunc();
            } else if (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "dressupThird") {
                /*
				
                */
                if (currentScreen_mc.body_mc.pointer_1) {
                    currentScreen_mc.body_mc.pointer_1.mouseEnabled = false;
                    currentScreen_mc.body_mc.pointer_1.mouseChildren = false;
                    currentScreen_mc.body_mc.pointer_1.visible = true;
                    _updateAnimationPointerFunc(currentScreen_mc.body_mc.pointer_1);
                }
                /*
				
                */
                if (currentScreen_mc.body_mc.pointer_2) {
                    currentScreen_mc.body_mc.pointer_2.mouseEnabled = false;
                    currentScreen_mc.body_mc.pointer_2.mouseChildren = false;
                    currentScreen_mc.body_mc.pointer_2.visible = false;
                }
                /*
				
                */
                _beginDressupThirdActionFunc();
            } else if (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "cleanup") {
                /*
				
                */
                if (currentScreen_mc.body_mc.pointer_1) {
                    currentScreen_mc.body_mc.pointer_1.mouseEnabled = false;
                    currentScreen_mc.body_mc.pointer_1.mouseChildren = false;
                    currentScreen_mc.body_mc.pointer_1.visible = true;
                    _updateAnimationPointerFunc(currentScreen_mc.body_mc.pointer_1);
                }
                /*
				
                */
                if (currentScreen_mc.body_mc.pointer_2) {
                    currentScreen_mc.body_mc.pointer_2.mouseEnabled = false;
                    currentScreen_mc.body_mc.pointer_2.mouseChildren = false;
                    currentScreen_mc.body_mc.pointer_2.visible = false;
                }
                /*
				
                */
                _beginCleanupActionFunc();
            } else if (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "quiz") {
                /*
				
                */
                if (currentScreen_mc.body_mc.pointer_1) {
                    currentScreen_mc.body_mc.pointer_1.mouseEnabled = false;
                    currentScreen_mc.body_mc.pointer_1.mouseChildren = false;
                    currentScreen_mc.body_mc.pointer_1.visible = true;
                    _updateAnimationPointerFunc(currentScreen_mc.body_mc.pointer_1);
                }
                /*
				
                */
                if (currentScreen_mc.body_mc.pointer_2) {
                    currentScreen_mc.body_mc.pointer_2.mouseEnabled = false;
                    currentScreen_mc.body_mc.pointer_2.mouseChildren = false;
                    currentScreen_mc.body_mc.pointer_2.visible = false;
                }
                /*
				
                */
                _beginQuizActionFunc();
            }
            /*
			
            */
            var subject_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathSubject, true);
            subject_mc.visible = true;
            subject_mc.gotoAndStop(0);
        } else {
            _endActionsFunc();
        }
    }

    function _updateAnimationPointerFunc(pointer_mc) {
        pointer_mc.gotoAndPlay(0);
        if (pointer_mc.waves_mc) {
            pointer_mc.waves_mc.gotoAndStop(0);
            if (pointer_mc.waves_mc.body_mc) {
                pointer_mc.waves_mc.body_mc.gotoAndPlay(0);
            }
        }
    }
    /*
    ============================================================
    click action
    ============================================================
    */
    function _onClickObjectClickActionFunc(event) {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        /*
		
        */
        _information.currentCheckpoint--;
        /*
		
        */
        var object_mc = event.currentTarget;
        object_mc.cursor = "default";
        object_mc.removeEventListener("click", _onClickObjectClickActionFunc, false);
        /*
		
        */
        if (object_mc.totalFrames == 2) {
            object_mc.gotoAndStop(1);
        } else {
            object_mc.play();
        }
        /*
		
        */
        _cursorAnimationFunc();
        /*
		
        */
        if (_information.currentCheckpoint <= 0) {
            /*
			
            */
            if (currentScreen_mc.body_mc.pointer_1) {
                currentScreen_mc.body_mc.pointer_1.visible = false;
            }
            /*
			
            */
            var subject_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathSubject, true);
            if (subject_mc.totalFrames > 1) {
                var timelineControl = new Edapskov_TimelineControl(subject_mc);
                timelineControl.gotoEndFunc();
                timelineControl.addEventListener("completed_timeline", _onCompletedAnimationSubjectClickActionFunc, false);
            } else {
                _updateCurrentActionFunc();
            }
        }
    }

    function _onCompletedAnimationSubjectClickActionFunc(event) {
        _updateCurrentActionFunc();
    }
    /*
    ============================================================
    move action
    ============================================================
    */
    function _onStageMouseDownMoveActionFunc(event) {
        /*
		
        */
        _information.currentCheckpoint = 1;
        /*
		
        */
        var object_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject);
        /*
		
        */
        var trackMoveContainer = object_mc.getChildByName("trackMoveContainer");
        var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, trackMoveContainer);
        /*
		
        */
        if (_information.trackMove == 1) {
            /*
			
            */
            trackMoveContainer.graphics.clear();
            /*
			
            */
            trackMoveContainer.graphics.setStrokeStyle(_INDENT, "round").beginStroke("#ff0000");
            trackMoveContainer.graphics.moveTo(point_obj.x, point_obj.y);
        } else if (_information.trackMove == 2) {
            /*
			
            */
            _clearContainerFunc(trackMoveContainer);
            /*
			
            */
            var trackMove_mc = new lib.TrackMove();
            trackMoveContainer.addChild(trackMove_mc);
            trackMove_mc.x = point_obj.x;
            trackMove_mc.y = point_obj.y;
            trackMove_mc.gotoAndPlay(0);
        } else {

        }
        /*
		
        */
        _stage.addEventListener("stagemousemove", _onStageMouseMoveMoveActionFunc, false);
    }

    function _onStageMouseUpMoveActionFunc(event) {
        /*
		
        */
        var object_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject);
        /*
		
        */
        var trackMoveContainer = object_mc.getChildByName("trackMoveContainer");
        /*
		
        */
        if (_information.trackMove == 1) {
            trackMoveContainer.graphics.endStroke();
            trackMoveContainer.graphics.clear();
        } else if (_information.trackMove == 2) {
            _clearContainerFunc(trackMoveContainer);
        } else {

        }
        /*
         
        */
        _stage.removeEventListener("stagemousemove", _onStageMouseMoveMoveActionFunc, false);
        /*
		
        */
        if (_information.currentCheckpoint > _information.totalCheckpoints) {
            /*
			
            */
            object_mc.visible = false;
            /*
			
            */
            _stage.removeEventListener("stagemousedown", _onStageMouseDownMoveActionFunc, false);
            _stage.removeEventListener("stagemouseup", _onStageMouseUpMoveActionFunc, false);
            /*
			
            */
            var subject_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathSubject, true);
            if (subject_mc.totalFrames > 1) {
                var timelineControl = new Edapskov_TimelineControl(subject_mc);
                timelineControl.gotoEndFunc();
                timelineControl.addEventListener("completed_timeline", _onCompletedAnimationSubjectMoveActionFunc, false);
            } else {
                _updateCurrentActionFunc();
            }
        }
    }

    function _onCompletedAnimationSubjectMoveActionFunc(event) {
        _updateCurrentActionFunc();
    }

    function _onStageMouseMoveMoveActionFunc(event) {
        /*
		
        */
        var object_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject);
        /*
		
        */
        var trackMoveContainer = object_mc.getChildByName("trackMoveContainer");
        var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, trackMoveContainer);
        /*
		
        */
        if (_information.trackMove == 1) {
            trackMoveContainer.graphics.lineTo(point_obj.x, point_obj.y);
            trackMoveContainer.graphics.endStroke();
            trackMoveContainer.graphics.setStrokeStyle(_INDENT, "round").beginStroke("#ff0000");
            trackMoveContainer.graphics.moveTo(point_obj.x, point_obj.y);
        } else if (_information.trackMove == 2) {
            var trackMove_mc = new lib.TrackMove();
            trackMoveContainer.addChild(trackMove_mc);
            trackMove_mc.x = point_obj.x;
            trackMove_mc.y = point_obj.y;
            trackMove_mc.gotoAndPlay(0);
        } else {

        }
        /*
		
        */
        var body_mc;
        var checkpoint_mc;
        if (object_mc.body_mc) {
            /*
			
            */
            body_mc = object_mc.body_mc;
            body_mc.gotoAndStop(0);
            /*
			
            */
            if (body_mc["checkpoint_" + _information.currentCheckpoint]) {
                /*
				
                */
                checkpoint_mc = body_mc["checkpoint_" + _information.currentCheckpoint];
                checkpoint_mc.gotoAndStop(0);
                /*
				
                */
                point_obj = event.currentTarget.localToLocal(event.localX, event.localY, checkpoint_mc);
                /*
				
                */
                if (checkpoint_mc.hitTest(point_obj.x, point_obj.y)) {
                    _information.currentCheckpoint++;
                }
            }
        }
    }
    /*
    ============================================================
    rub action
    ============================================================
    */
    function _onStageMouseMoveRubActionFunc(event) {
        /*
		
        */
        var object_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject);
        /*
		
        */
        var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, object_mc);
        if (object_mc.hitTest(point_obj.x, point_obj.y)) {
            /*
			
            */
            _information.currentRub++;
            var share_num = _information.currentRub / _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].totalRubs;
            if (share_num < 0) {
                share_num = 0;
            }
            if (share_num > 1) {
                share_num = 1;
            }
            /*
			
            */
            var currentScreen_mc = _main.getChildAt(0);
            /*
			
            */
            var subject_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathSubject);
            /*
			
            */
            if (subject_mc.totalFrames <= 1) {
                subject_mc.alpha = 1 - share_num;
            } else {
                /*
				
                */
                var targetFrame_num = Math.round(share_num * subject_mc.totalFrames) - 1;
                if (targetFrame_num >= subject_mc.totalFrames) {
                    targetFrame_num = subject_mc.totalFrames - 1;
                }
                /*
				
                */
                subject_mc.gotoAndStop(targetFrame_num);
            }
            /*
			
            */
            _updateIndicatorFunc(share_num);
            /*
			
            */
            if (_information.currentRub > _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].totalRubs) {
                /*
				
                */
                if (currentScreen_mc.body_mc.hint_mc) {
                    currentScreen_mc.body_mc.hint_mc.visible = false;
                }
                /*
				
                */
                _stage.removeEventListener("stagemousemove", _onStageMouseMoveRubActionFunc, false);
                /*
				
                */
                _updateCurrentActionFunc();
            }
        }
    }
    /*
    ============================================================
    dressup action
    ============================================================
    */
    function _beginDressupActionFunc() {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var dressupPanel_mc;
        var heroes_arr = new Array();
        var i;
        var l;
        /*
		
        */
        for (var propHeroes in _information.heroes) {
            if (_information.heroes.hasOwnProperty(propHeroes)) {
                if (currentScreen_mc.body_mc[propHeroes]) {
                    if (currentScreen_mc.body_mc[propHeroes]) {
                        heroes_arr.unshift(propHeroes);
                    } else {
                        heroes_arr.push(propHeroes);
                    }
                }
            }
        }
        /*
		
        */
        if (heroes_arr.length > 0) {
            /*
			
            */
            _information.currentNameHero = heroes_arr[0];
            /*
			
            */
            if (currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"]) {
                /*
				
                */
                dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
                dressupPanel_mc.gotoAndStop(0);
                dressupPanel_mc.body_mc.gotoAndStop(0);
                /*
				
                */
                dressupPanel_mc.prev_mc.mouseEnabled = true;
                dressupPanel_mc.prev_mc.mouseChildren = false;
                dressupPanel_mc.prev_mc.cursor = "pointer";
                dressupPanel_mc.prev_mc.addEventListener("mouseover", _onMouseOverNavigationMcDressupActionFunc, false);
                dressupPanel_mc.prev_mc.addEventListener("mouseout", _onMouseOutNavigationMcDressupActionFunc, false);
                dressupPanel_mc.prev_mc.addEventListener("click", _onClickPrevNavigationMcDressupActionFunc, false);
                dressupPanel_mc.next_mc.mouseEnabled = true;
                dressupPanel_mc.next_mc.mouseChildren = false;
                dressupPanel_mc.next_mc.cursor = "pointer";
                dressupPanel_mc.next_mc.addEventListener("mouseover", _onMouseOverNavigationMcDressupActionFunc, false);
                dressupPanel_mc.next_mc.addEventListener("mouseout", _onMouseOutNavigationMcDressupActionFunc, false);
                dressupPanel_mc.next_mc.addEventListener("click", _onClickNextNavigationMcDressupActionFunc, false);
                /*
				
                */
                _updateSelectHeroDressupActionFunc();
                /*
				
                */
                _updatePanelDressupActionFunc();
            }
        } else {
            trace("Хде герой!")
        }
    }
    /*
	
    */
    function _updateSelectHeroDressupActionFunc() {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var hero_mc;
        /*
		
        */
        for (var propHero in _information.heroes) {
            if (_information.heroes.hasOwnProperty(propHero)) {
                if (currentScreen_mc.body_mc[propHero]) {
                    /*
					
                    */
                    hero_mc = currentScreen_mc.body_mc[propHero];
                    hero_mc.name = propHero;
                    /*
					
                    */
                    if (propHero === _information.currentNameHero) {
                        /*
						
                        */
                        hero_mc.mouseEnabled = false;
                        hero_mc.mouseChildren = false;
                        hero_mc.cursor = "default";
                        hero_mc.removeEventListener("click", _onClickHeroDressupActionFunc, false);
                        //new Edapskov_Glow(hero_mc, _DELAY / 2, "#ffffff", 20);
                        /*
						
                        */
                        if (hero_mc.check_mc) {
                            hero_mc.check_mc.gotoAndStop(0);
                            if (hero_mc.check_mc.totalFrames > 1) {
                                hero_mc.check_mc.gotoAndStop(1);
                            }
                        }
                    } else {
                        /*
						
                        */
                        hero_mc.mouseEnabled = true;
                        hero_mc.mouseChildren = false;
                        hero_mc.cursor = "pointer";
                        hero_mc.addEventListener("click", _onClickHeroDressupActionFunc, false);
                        //new Edapskov_Glow(hero_mc, _DELAY / 4, "#ffffff", 0);
                        /*
						
                        */
                        if (hero_mc.check_mc) {
                            hero_mc.check_mc.gotoAndStop(0);
                        }
                    }
                }
            }
        }
    }

    function _onClickHeroDressupActionFunc(event) {
        /*
		
        */
        var currentTarget_mc = event.currentTarget;
        /*
		
        */
        var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_2_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        _information.currentNameHero = String(currentTarget_mc.name);
        /*
		
        */
        _updateSelectHeroDressupActionFunc();
        /*
		
        */
        _updatePanelDressupActionFunc();
        //_animationTransitionPanelDressupActionFunc();
    }
    /*
	
    */
    function _animationTransitionPanelDressupActionFunc() {
        var currentScreen_mc = _main.getChildAt(0);
        var dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
        createjs.Tween.get(dressupPanel_mc.body_mc).wait(0).to({
            alpha: 0.1
        }, (_DELAY / 5) * 1000).call(_onCompleteAnimationTransitionPanelDressupActionFunc);
    }

    function _onCompleteAnimationTransitionPanelDressupActionFunc() {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
        createjs.Tween.get(dressupPanel_mc.body_mc).wait(0).to({
            alpha: 1
        }, (_DELAY / 4) * 1000);
        /*
		
        */
        _updatePanelDressupActionFunc();
    }

    function _updatePanelDressupActionFunc() {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
        /*
		
        */
        var set_mc;
        for (var propSet in _information.heroes[_information.currentNameHero].totalSets) {
            if (_information.heroes[_information.currentNameHero].totalSets.hasOwnProperty(propSet)) {
                if (dressupPanel_mc[propSet]) {
                    /*
					
                    */
                    set_mc = dressupPanel_mc[propSet];
                    set_mc.gotoAndStop(0);
                    set_mc.name = propSet;
                    /*
					
                    */
                    if (propSet === _information.heroes[_information.currentNameHero].currentSet) {
                        /*
						
                        */
                        //set_mc.shadow = null;
                        //set_mc.alpha = 0.4;
                        set_mc.mouseEnabled = false;
                        set_mc.mouseChildren = false;
                        set_mc.cursor = "default";
                        set_mc.removeEventListener("mouseover", _onMouseOverSetMcDressupActionFunc, false);
                        set_mc.removeEventListener("mouseout", _onMouseOutSetMcDressupActionFunc, false);
                        set_mc.removeEventListener("click", _onClickSetMcDressupActionFunc, false);
                        /*
						
                        */
                        if (set_mc.substrate_mc) {
                            set_mc.substrate_mc.gotoAndStop(0);
                            if (set_mc.substrate_mc.totalFrames > 1) {
                                set_mc.substrate_mc.gotoAndStop(1);
                            }
                        }
                        /*
						
                        */
                        if (set_mc.check_mc) {
                            set_mc.check_mc.gotoAndStop(0);
                            if (set_mc.check_mc.totalFrames > 1) {
                                set_mc.check_mc.gotoAndStop(1);
                            }
                        } else {
                            set_mc.alpha = 0.4;
                        }
                    } else {
                        /*
						
                        */
                        //set_mc.alpha = 1;
                        set_mc.mouseEnabled = true;
                        set_mc.mouseChildren = false;
                        set_mc.cursor = "pointer";
                        set_mc.addEventListener("mouseover", _onMouseOverSetMcDressupActionFunc, false);
                        set_mc.addEventListener("mouseout", _onMouseOutSetMcDressupActionFunc, false);
                        set_mc.addEventListener("click", _onClickSetMcDressupActionFunc, false);
                        /*
						
                        */
                        if (set_mc.substrate_mc) {
                            set_mc.substrate_mc.gotoAndStop(0);
                        }
                        /*
						
                        */
                        if (set_mc.check_mc) {
                            set_mc.check_mc.gotoAndStop(0);
                        } else {
                            set_mc.alpha = 1;
                        }
                    }
                }
            }
        }
        /*
		
        */
        var hero_mc;
        for (var propHero in _information.heroes) {
            if (_information.heroes.hasOwnProperty(propHero)) {
                if (dressupPanel_mc.body_mc[propHero]) {
                    /*
					
                    */
                    hero_mc = dressupPanel_mc.body_mc[propHero];
                    hero_mc.name = propHero;
                    /*
					
                    */
                    if (propHero === _information.currentNameHero) {
                        /*
						
                        */
                        hero_mc.visible = true;
                        hero_mc.gotoAndStop(_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].frames[_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex] - 1);
                        /*
						
                        */
                        if (_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].frames.length <= 1) {
                            dressupPanel_mc.prev_mc.visible = false;
                            dressupPanel_mc.next_mc.visible = false;
                        } else {
                            dressupPanel_mc.prev_mc.visible = true;
                            dressupPanel_mc.next_mc.visible = true;
                        }
                        /*
						
                        */
                        _updateCurrentOptionsDressupActionFunc();
                    } else {
                        hero_mc.visible = false;
                    }
                }
            }
        }
    }

    function _updateCurrentOptionsDressupActionFunc() {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
        var hero_mc;
        var object_mc;
        var object_str;
        var bounds_rect;
        /*
		
        */
        if (dressupPanel_mc.body_mc[_information.currentNameHero]) {
            /*
			
            */
            hero_mc = dressupPanel_mc.body_mc[_information.currentNameHero];
            /*
			
            */
            for (var propObject in _information.heroes[_information.currentNameHero].totalDress) {
                if (_information.heroes[_information.currentNameHero].totalDress.hasOwnProperty(propObject)) {
                    /*
					
                    */
                    if (hero_mc[propObject]) {
                        /*
						
                        */
                        object_mc = hero_mc[propObject];
                        object_mc.gotoAndStop(0);
                        object_mc.name = propObject;
                        /*
						
                        */
                        /*
                        if(object_mc.bitmapCache)
                        {
                        	object_mc.updateCache();
                        }
                        else
                        {
                        	bounds_rect = object_mc.getBounds();
                        	object_mc.cache(bounds_rect.x, bounds_rect.y, bounds_rect.width, bounds_rect.height);
                        }
                        */
                        /*
						
                        */
                        if (_selectedOptionDressupActionFunc(propObject)) {
                            /*
							
                            */
                            //object_mc.shadow = null;
                            //object_mc.alpha = 0.4;
                            object_mc.mouseEnabled = false;
                            object_mc.mouseChildren = false;
                            object_mc.cursor = "default";
                            object_mc.removeEventListener("mouseover", _onMouseOverObjectMcDressupActionFunc, false);
                            object_mc.removeEventListener("mouseout", _onMouseOutObjectMcDressupActionFunc, false);
                            object_mc.removeEventListener("click", _onClickObjectMcDressupActionFunc, false);
                            /*
							
                            */
                            if (object_mc.substrate_mc) {
                                object_mc.substrate_mc.gotoAndStop(0);
                                if (object_mc.substrate_mc.totalFrames > 1) {
                                    object_mc.substrate_mc.gotoAndStop(1);
                                }
                            } else {
                                //object_mc.alpha = 0.4;
                                //object_mc.visible = false;
                            }
                            /*
							
                            */
                            if (object_mc.check_mc) {
                                object_mc.check_mc.gotoAndStop(0);
                                if (object_mc.check_mc.totalFrames > 1) {
                                    object_mc.check_mc.gotoAndStop(1);
                                }
                            } else {
                                object_mc.visible = false;
                            }
                        } else {
                            /*
							
                            */
                            //object_mc.filters = [];
                            //object_mc.alpha = 1;
                            object_mc.mouseEnabled = true;
                            object_mc.mouseChildren = false;
                            object_mc.cursor = "pointer";
                            object_mc.addEventListener("mouseover", _onMouseOverObjectMcDressupActionFunc, false);
                            object_mc.addEventListener("mouseout", _onMouseOutObjectMcDressupActionFunc, false);
                            object_mc.addEventListener("click", _onClickObjectMcDressupActionFunc, false);
                            /*
							
                            */
                            if (object_mc.substrate_mc) {
                                object_mc.substrate_mc.gotoAndStop(0);
                            } else {
                                //object_mc.alpha = 1;
                                //object_mc.visible = true;
                            }
                            /*
							
                            */
                            if (object_mc.check_mc) {
                                object_mc.check_mc.gotoAndStop(0);
                            } else {
                                object_mc.visible = true;
                            }
                        }
                    }
                }
            }
            /*
			
            */
            for (var propObject_2 in _information.heroes[_information.currentNameHero].currentDress) {
                if (_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(propObject_2)) {
                    /*
					
                    */
                    object_str = "color_" + propObject_2;
                    /*
					
                    */
                    if (hero_mc[object_str]) {
                        /*
						
                        */
                        object_mc = hero_mc[object_str];
                        object_mc.name = object_str;
                        object_mc.gotoAndStop(0);
                        /*
						
                        */
                        if (object_mc.numChildren <= 1) {
                            object_mc.mouseChildren = false;
                            object_mc.mouseEnabled = true;
                            object_mc.cursor = "pointer";
                            object_mc.addEventListener("click", _onClickColorPickerMcDressupActionFunc, false);
                        } else {
                            /*
							
                            */
                            object_mc.mouseChildren = true;
                            object_mc.mouseEnabled = true;
                            object_mc.cursor = "default";
                            /*
							
                            */
                            _updateAvailableColorPickersDressupActionFunc(object_mc, _information.heroes[_information.currentNameHero].currentDress[propObject_2].currentColor);
                        }
                    }
                    /*
					
                    */
                    object_str = "texture_" + propObject_2;
                    /*
					
                    */
                    if (hero_mc[object_str]) {
                        /*
						
                        */
                        object_mc = hero_mc[object_str];
                        object_mc.gotoAndStop(0);
                        object_mc.name = object_str;
                        /*
						
                        */
                        /*
                        if(object_mc.body_mc)
                        {
                        	_updateAvailableTextureDressupActionFunc(object_mc.body_mc, _information.heroes[_information.currentNameHero].currentDress[propObject_2].currentTexture);
                        }
                        */
                        if (object_mc.container_mc) {
                            if (object_mc.container_mc.content_mc) {
                                _updateAvailableTextureDressupActionFunc(object_mc.container_mc.content_mc, _information.heroes[_information.currentNameHero].currentDress[propObject_2].currentTexture);
                            }
                        }
                        /*
						
                        */
                        if (object_mc.slider_comp) {
                            object_mc.slider_comp.gotoAndStop(0);
                            object_mc.slider_comp.setValueFunc(_information.heroes[_information.currentNameHero].currentDress[propObject_2].currentAlphaTexture);
                            object_mc.slider_comp.addEventListener("change_slider", _onChangeSliderAlphaTextureDressupActionFunc, false);
                        }
                    }
                }
            }
        }
    }

    function _updateAvailableColorPickersDressupActionFunc(container_mc, currentColor_num) {
        /*
		
        */
        container_mc.gotoAndStop(0);
        /*
		
        */
        if (currentColor_num !== undefined) {
            if (currentColor_num !== null) {
                currentColor_num = Math.round(currentColor_num);
            } else {
                currentColor_num = 0;
            }
        } else {
            currentColor_num = 0;
        }
        /*
		
        */
        var colorPicker_str;
        var colorPicker_mc;
        var l = container_mc.numChildren;
        var i = 0;
        /*
		
        */
        while (i < l) {
            /*
			
            */
            colorPicker_str = "color_" + i;
            /*
			
            */
            if (container_mc[colorPicker_str]) {
                /*
				
                */
                colorPicker_mc = container_mc[colorPicker_str];
                colorPicker_mc.gotoAndStop(0);
                colorPicker_mc.name = colorPicker_str;
                /*
				
                */
                if (i == currentColor_num) {
                    colorPicker_mc.alpha = 0.4;
                    colorPicker_mc.mouseChildren = false;
                    colorPicker_mc.mouseEnabled = false;
                    colorPicker_mc.cursor = "default";
                    colorPicker_mc.removeEventListener("click", _onClickColorPickersMcDressupActionFunc, false);
                } else {
                    colorPicker_mc.alpha = 1;
                    colorPicker_mc.mouseChildren = false;
                    colorPicker_mc.mouseEnabled = true;
                    colorPicker_mc.cursor = "pointer";
                    colorPicker_mc.addEventListener("click", _onClickColorPickersMcDressupActionFunc, false);
                }
            }
            /*
			
            */
            i++;
        }
    }

    function _updateAvailableTextureDressupActionFunc(container_mc, currentTexture_num) {
        /*
		
        */
        container_mc.gotoAndStop(0);
        /*
		
        */
        if (currentTexture_num !== undefined) {
            if (currentTexture_num !== null) {
                currentTexture_num = Math.round(currentTexture_num);
            } else {
                currentTexture_num = 0;
            }
        } else {
            currentTexture_num = 0;
        }
        /*
		
        */
        var texture_str;
        var texture_mc;
        var l = container_mc.numChildren;
        var i = 0;
        /*
		
        */
        while (i < l) {
            /*
			
            */
            texture_str = "texture_" + i;
            /*
			
            */
            if (container_mc[texture_str]) {
                /*
				
                */
                texture_mc = container_mc[texture_str];
                texture_mc.gotoAndStop(0);
                texture_mc.name = texture_str;
                /*
				
                */
                if (i == currentTexture_num) {
                    texture_mc.alpha = 0.4;
                    texture_mc.mouseChildren = false;
                    texture_mc.mouseEnabled = false;
                    texture_mc.cursor = "default";
                    texture_mc.removeEventListener("click", _onClickTextureMcDressupActionFunc, false);
                } else {
                    texture_mc.alpha = 1;
                    texture_mc.mouseChildren = false;
                    texture_mc.mouseEnabled = true;
                    texture_mc.cursor = "pointer";
                    texture_mc.addEventListener("click", _onClickTextureMcDressupActionFunc, false);
                }
            }
            /*
			
            */
            i++;
        }
    }

    function _selectedOptionDressupActionFunc(currentOption_str) {
        /*
		
        */
        var result_bool = false;
        /*
		
        */
        var temp_arr = currentOption_str.split("_");
        var option_str = String(temp_arr[0]);
        var option_num = parseInt(temp_arr[1]);
        /*
		
        */
        if (_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(option_str)) {
            if (_information.heroes[_information.currentNameHero].currentDress[option_str].currentOption == option_num) {
                result_bool = true;
            }
        }
        /*
		
        */
        return result_bool;
    }
    /*
	
    */
    function _onMouseOverObjectMcDressupActionFunc(event) {
        //var currentTarget_mc = event.currentTarget;
        //createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1.06, scaleY:1.06}, (_DELAY / 5) * 1000);
        //new Edapskov_Glow(currentTarget_mc, _DELAY / 5, "#ffffff", 15);
    }

    function _onMouseOutObjectMcDressupActionFunc(event) {
        //var currentTarget_mc = event.currentTarget;
        //createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
        //new Edapskov_Glow(currentTarget_mc, _DELAY / 3, "#ffffff", 0);
    }

    function _onClickObjectMcDressupActionFunc(event) {
        /*
		
        */
        var currentTarget_mc = event.currentTarget;
        /*
		
        */
        var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_2_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        /*
		
        */
        //createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
        //new Edapskov_Glow(currentTarget_mc, _DELAY / 3, "#ffffff", 0);
        /*
		
        */
        var tempArray = currentTarget_mc.name.split("_");
        var key = String(tempArray[0]);
        var val = parseInt(tempArray[1]);
        /*
		
        */
        if (_information.heroes[_information.currentNameHero].currentDress[key].currentOption != val) {
            /*
			
            */
            _information.heroes[_information.currentNameHero].currentDress[key].currentOption = val;
            /*
			
            */
            if (key == "bg") {
                for (var propHero_1 in _information.heroes) {
                    if (_information.heroes.hasOwnProperty(propHero_1)) {
                        _information.heroes[propHero_1].currentDress[key].currentOption = val;
                    }
                }
            } else {
                /*
                if(key == "top")
                {
                	if(val > 0)
                	{
                		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("dress"))
                		{
                			_information.heroes[_information.currentNameHero].currentDress.dress.currentOption = 0;
                		}
                		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("bottom"))
                		{
                			if(_information.heroes[_information.currentNameHero].currentDress.bottom.currentOption <= 0)
                			{
                				_information.heroes[_information.currentNameHero].currentDress.bottom.currentOption = 1;
                			}
                		}
                	}
                	else
                	{
                		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("dress"))
                		{
                			_information.heroes[_information.currentNameHero].currentDress.dress.currentOption = 1;
                		}
                		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("bottom"))
                		{
                			_information.heroes[_information.currentNameHero].currentDress.bottom.currentOption = 0;
                		}
                	}
                }
                if(key == "bottom")
                {
                	if(val > 0)
                	{
                		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("dress"))
                		{
                			_information.heroes[_information.currentNameHero].currentDress.dress.currentOption = 0;
                		}
                		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("top"))
                		{
                			if(_information.heroes[_information.currentNameHero].currentDress.top.currentOption <= 0)
                			{
                				_information.heroes[_information.currentNameHero].currentDress.top.currentOption = 1;
                			}
                		}
                	}
                	else
                	{
                		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("dress"))
                		{
                			_information.heroes[_information.currentNameHero].currentDress.dress.currentOption = 1;
                		}
                		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("top"))
                		{
                			_information.heroes[_information.currentNameHero].currentDress.top.currentOption = 0;
                		}
                	}
                }
                if(key == "dress")
                {
                	if(val > 0)
                	{
                		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("top"))
                		{
                			_information.heroes[_information.currentNameHero].currentDress.top.currentOption = 0;
                		}
                		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("bottom"))
                		{
                			_information.heroes[_information.currentNameHero].currentDress.bottom.currentOption = 0;
                		}
                	}
                	else
                	{
                		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("top"))
                		{
                			_information.heroes[_information.currentNameHero].currentDress.top.currentOption = 1;
                		}
                		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("bottom"))
                		{
                			_information.heroes[_information.currentNameHero].currentDress.bottom.currentOption = 1;
                		}
                	}
                }
                */
            }
            /*
			
            */
            _updateHeroesFunc(currentScreen_mc.body_mc);
            /*
			
            */
            _updateCurrentOptionsDressupActionFunc();
            /*
			
            */
            if (key != "bg") {
                new Edapskov_Flickering(_before, currentScreen_mc.body_mc[_information.currentNameHero][key], ["#ffffff", "#ffffcc"], 10, 18);
            }
            /*
			
            */
            if (!currentScreen_mc.next_btn.visible) {
                currentScreen_mc.next_btn.visible = true;
                currentScreen_mc.next_btn.alpha = 0.01;
                createjs.Tween.get(currentScreen_mc.next_btn).wait(0).to({
                    alpha: 1
                }, (_DELAY / 2) * 1000);
                currentScreen_mc.next_btn.addEventListener("click", _onClickNextBtnAfterLocationFunc, false);
            }
        }
    }
    /*
	
    */
    function _onClickColorPickerMcDressupActionFunc(event) {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        /*
		
        */
        var colorPicker_mc = event.currentTarget;
        var current_str = colorPicker_mc.name.split("_")[1];
        /*
		
        */
        var colorPicker_img = colorPicker_mc.getChildAt(0);
        var clone_img = colorPicker_img.clone();
        var bounds_rect = clone_img.getBounds();
        clone_img.cache(bounds_rect.x, bounds_rect.y, bounds_rect.width, bounds_rect.height);
        var bitmapdata = createjs.BitmapData.getBitmapData(clone_img);
        /*
		
        */
        if (_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(current_str)) {
            /*
			
            */
            _information.heroes[_information.currentNameHero].currentDress[current_str].currentColor = bitmapdata.getPixel(event.localX, event.localY);
            /*
			
            */
            _updateHeroesFunc(currentScreen_mc.body_mc);
            /*
			
            */
            if (!currentScreen_mc.next_btn.visible) {
                currentScreen_mc.next_btn.visible = true;
                currentScreen_mc.next_btn.alpha = 0.01;
                createjs.Tween.get(currentScreen_mc.next_btn).wait(0).to({
                    alpha: 1
                }, (_DELAY / 2) * 1000);
                currentScreen_mc.next_btn.addEventListener("click", _onClickNextBtnAfterLocationFunc, false);
            }
        }
    }

    function _onClickColorPickersMcDressupActionFunc(event) {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        /*
		
        */
        var colorPicker_mc = event.currentTarget;
        var current_str = colorPicker_mc.parent.name.split("_")[1];
        var color_num = parseInt(colorPicker_mc.name.split("_")[1]);
        /*
		
        */
        if (_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(current_str)) {
            /*
			
            */
            _information.heroes[_information.currentNameHero].currentDress[current_str].currentColor = color_num;
            /*
			
            */
            _updateHeroesFunc(currentScreen_mc.body_mc);
            /*
			
            */
            _updateAvailableColorPickersDressupActionFunc(colorPicker_mc.parent, color_num);
            /*
			
            */
            if (!currentScreen_mc.next_btn.visible) {
                currentScreen_mc.next_btn.visible = true;
                currentScreen_mc.next_btn.alpha = 0.01;
                createjs.Tween.get(currentScreen_mc.next_btn).wait(0).to({
                    alpha: 1
                }, (_DELAY / 2) * 1000);
                currentScreen_mc.next_btn.addEventListener("click", _onClickNextBtnAfterLocationFunc, false);
            }
        }
    }
    /*
	
    */
    function _onClickTextureMcDressupActionFunc(event) {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        /*
		
        */
        var texture_mc = event.currentTarget;
        //var current_str = texture_mc.parent.parent.name.split("_")[1];
        var current_str = texture_mc.parent.parent.parent.name.split("_")[1];
        var texture_num = parseInt(texture_mc.name.split("_")[1]);
        /*
		
        */
        if (_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(current_str)) {
            /*
			
            */
            _information.heroes[_information.currentNameHero].currentDress[current_str].currentTexture = texture_num;
            /*
			
            */
            _updateHeroesFunc(currentScreen_mc.body_mc);
            /*
			
            */
            _updateAvailableTextureDressupActionFunc(texture_mc.parent, texture_num);
            /*
			
            */
            if (!currentScreen_mc.next_btn.visible) {
                currentScreen_mc.next_btn.visible = true;
                currentScreen_mc.next_btn.alpha = 0.01;
                createjs.Tween.get(currentScreen_mc.next_btn).wait(0).to({
                    alpha: 1
                }, (_DELAY / 2) * 1000);
                currentScreen_mc.next_btn.addEventListener("click", _onClickNextBtnAfterLocationFunc, false);
            }
        }
    }
    /*
	
    */
    function _onChangeSliderAlphaTextureDressupActionFunc(event) {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        /*
		
        */
        var currentTarget_mc = event.currentTarget;
        var current_str = currentTarget_mc.parent.name.split("_")[1];
        /*
		
        */
        var alphaTexture_num = event.numberValue;
        if (alphaTexture_num < 0.1) {
            alphaTexture_num = 0.1;
        }
        if (alphaTexture_num > 1) {
            alphaTexture_num = 1;
        }
        /*
		
        */
        if (_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(current_str)) {
            /*
			
            */
            _information.heroes[_information.currentNameHero].currentDress[current_str].currentAlphaTexture = alphaTexture_num;
            /*
			
            */
            _updateHeroesFunc(currentScreen_mc.body_mc);
        }
    }
    /*
	
    */
    function _onMouseOverSetMcDressupActionFunc(event) {
        /*
        var currentTarget_mc = event.currentTarget;
        createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1.1, scaleY:1.1}, (_DELAY / 5) * 1000);
        new Edapskov_Glow(currentTarget_mc, _DELAY / 5, "#ffffff", 5);
        */
    }

    function _onMouseOutSetMcDressupActionFunc(event) {
        /*
        var currentTarget_mc = event.currentTarget;
        createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
        new Edapskov_Glow(currentTarget_mc, _DELAY / 3, "#ffffff", 0);
        */
    }

    function _onClickSetMcDressupActionFunc(event) {
        /*
		
        */
        var currentTarget_mc = event.currentTarget;
        /*
		
        */
        var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        //createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
        //new Edapskov_Glow(currentTarget_mc, _DELAY / 3, "#ffffff", 0);
        /*
		
        */
        var gravityExplosion_mc = new lib.GravityExplosionMC();
        _before.addChild(gravityExplosion_mc);
        gravityExplosion_mc.gotoAndStop(0);
        point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _before);
        gravityExplosion_mc.x = point_obj.x;
        gravityExplosion_mc.y = point_obj.y;
        /*
		
        */
        new Edapskov_Flickering(_before, currentTarget_mc, ["#ffffff", "#ffffcc"], 4, 18);
        /*
		
        */
        _information.heroes[_information.currentNameHero].currentSet = currentTarget_mc.name;
        /*
		
        */
        _updatePanelDressupActionFunc();
        //_animationTransitionPanelDressupActionFunc();
    }
    /*
	
    */
    function _onMouseOverNavigationMcDressupActionFunc(event) {
        var currentTarget_mc = event.currentTarget;
        createjs.Tween.get(currentTarget_mc).wait(0).to({
            scaleX: 1.1,
            scaleY: 1.1
        }, (_DELAY / 5) * 1000);
        //new Edapskov_Glow(currentTarget_mc, _DELAY / 5, "#ffffff", 20);
    }

    function _onMouseOutNavigationMcDressupActionFunc(event) {
        var currentTarget_mc = event.currentTarget;
        createjs.Tween.get(currentTarget_mc).wait(0).to({
            scaleX: 1,
            scaleY: 1
        }, (_DELAY / 3) * 1000);
        //new Edapskov_Glow(currentTarget_mc, _DELAY / 3, "#ffffff", 0);
    }

    function _onClickPrevNavigationMcDressupActionFunc(event) {
        /*
		
        */
        var currentTarget_mc = event.currentTarget;
        /*
		
        */
        var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        var gravityExplosion_mc = new lib.GravityExplosionMC();
        _before.addChild(gravityExplosion_mc);
        gravityExplosion_mc.gotoAndStop(0);
        point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _before);
        gravityExplosion_mc.x = point_obj.x;
        gravityExplosion_mc.y = point_obj.y;
        /*
		
        */
        _information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex--;
        if (_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex < 0) {
            _information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex = _information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].frames.length - 1;
        }
        /*
		
        */
        _updatePanelDressupActionFunc();
        //_animationTransitionPanelDressupActionFunc();
    }

    function _onClickNextNavigationMcDressupActionFunc(event) {
        /*
		
        */
        var currentTarget_mc = event.currentTarget;
        /*
		
        */
        var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        var gravityExplosion_mc = new lib.GravityExplosionMC();
        _before.addChild(gravityExplosion_mc);
        gravityExplosion_mc.gotoAndStop(0);
        point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _before);
        gravityExplosion_mc.x = point_obj.x;
        gravityExplosion_mc.y = point_obj.y;
        /*
		
        */
        _information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex++;
        if (_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex >= _information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].frames.length) {
            _information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex = 0;
        }
        /*
		
        */
        _updatePanelDressupActionFunc();
        //_animationTransitionPanelDressupActionFunc();
    }
    /*
    ============================================================
    dressupSecond action
    ============================================================
    */
    function _beginDressupSecondActionFunc() {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var dressupPanel_mc;
        var prev_mc;
        var next_mc;
        /*
		
        */
        if (currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"]) {
            /*
			
            */
            dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
            dressupPanel_mc.gotoAndStop(0);
            /*
			
            */
            _updateHeroDressupSecondActionFunc();
            /*
			
            */
            for (var propOptions in _information.heroes[_information.currentNameHero].currentDress) {
                if (_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(propOptions)) {
                    /*
					
                    */
                    if (dressupPanel_mc["prev_" + propOptions]) {
                        prev_mc = dressupPanel_mc["prev_" + propOptions];
                        prev_mc.gotoAndStop(0);
                        prev_mc.name = String("prev_" + propOptions);
                        prev_mc.mouseEnabled = true;
                        prev_mc.mouseChildren = false;
                        prev_mc.cursor = "pointer";
                        prev_mc.addEventListener("mouseover", _onMouseOverNavigationMcDressupSecondActionFunc, false);
                        prev_mc.addEventListener("mouseout", _onMouseOutNavigationMcDressupSecondActionFunc, false);
                        prev_mc.addEventListener("click", _onClickPrevNavigationMcDressupSecondActionFunc, false);
                    }
                    /*
					
                    */
                    if (dressupPanel_mc["next_" + propOptions]) {
                        next_mc = dressupPanel_mc["next_" + propOptions];
                        next_mc.gotoAndStop(0);
                        next_mc.name = String("next_" + propOptions);
                        next_mc.mouseEnabled = true;
                        next_mc.mouseChildren = false;
                        next_mc.cursor = "pointer";
                        next_mc.addEventListener("mouseover", _onMouseOverNavigationMcDressupSecondActionFunc, false);
                        next_mc.addEventListener("mouseout", _onMouseOutNavigationMcDressupSecondActionFunc, false);
                        next_mc.addEventListener("click", _onClickNextNavigationMcDressupSecondActionFunc, false);
                    }
                }
            }
        }
    }
    /*
	
    */
    function _onMouseOverNavigationMcDressupSecondActionFunc(event) {
        var currentTarget_mc = event.currentTarget;
        createjs.Tween.get(currentTarget_mc).wait(0).to({
            scaleX: 1.1,
            scaleY: 1.1
        }, (_DELAY / 5) * 1000);
    }

    function _onMouseOutNavigationMcDressupSecondActionFunc(event) {
        var currentTarget_mc = event.currentTarget;
        createjs.Tween.get(currentTarget_mc).wait(0).to({
            scaleX: 1,
            scaleY: 1
        }, (_DELAY / 3) * 1000);
    }

    function _onClickPrevNavigationMcDressupSecondActionFunc(event) {
        /*
		
        */
        var currentTarget_mc = event.currentTarget;
        var current_str = currentTarget_mc.name;
        var currentScreen_mc = _main.getChildAt(0);
        var dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
        var hero_mc;
        var option_mc;
        var currentFrame_num;
        var totalFrames_num;
        /*
		
        */
        var temp_arr = current_str.split("_");
        var option_str = String(temp_arr[1]);
        /*
		
        */
        if (_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(option_str)) {
            if (dressupPanel_mc[_information.currentNameHero]) {
                /*
				
                */
                hero_mc = dressupPanel_mc[_information.currentNameHero];
                hero_mc.gotoAndStop(0);
                /*
				
                */
                if (hero_mc[option_str]) {
                    /*
					
                    */
                    option_mc = hero_mc[option_str];
                    /*
					
                    */
                    currentFrame_num = Number(option_mc.currentFrame);
                    totalFrames_num = Number(option_mc.totalFrames);
                    /*
					
                    */
                    if (currentFrame_num > 0) {
                        currentFrame_num--;
                    } else {
                        currentFrame_num = Number(totalFrames_num - 1);
                    }
                    /*
					
                    */
                    _information.heroes[_information.currentNameHero].currentDress[option_str].currentOption = Number(currentFrame_num + 1);
                    /*
					
                    */
                    _updateHeroDressupSecondActionFunc();
                    /*
					
                    */
                    if (!currentScreen_mc.next_btn.visible) {
                        currentScreen_mc.next_btn.visible = true;
                        currentScreen_mc.next_btn.alpha = 0.01;
                        createjs.Tween.get(currentScreen_mc.next_btn).wait(0).to({
                            alpha: 1
                        }, (_DELAY / 2) * 1000);
                        currentScreen_mc.next_btn.addEventListener("click", _onClickNextBtnAfterLocationFunc, false);
                    }
                }
            }
        }
    }

    function _onClickNextNavigationMcDressupSecondActionFunc(event) {
        /*
		
        */
        var currentTarget_mc = event.currentTarget;
        var current_str = currentTarget_mc.name;
        var currentScreen_mc = _main.getChildAt(0);
        var dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
        var hero_mc;
        var option_mc;
        var currentFrame_num;
        var totalFrames_num;
        /*
		
        */
        var temp_arr = current_str.split("_");
        var option_str = String(temp_arr[1]);
        /*
		
        */
        if (_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(option_str)) {
            if (dressupPanel_mc[_information.currentNameHero]) {
                /*
				
                */
                hero_mc = dressupPanel_mc[_information.currentNameHero];
                hero_mc.gotoAndStop(0);
                /*
				
                */
                if (hero_mc[option_str]) {
                    /*
					
                    */
                    option_mc = hero_mc[option_str];
                    /*
					
                    */
                    currentFrame_num = Number(option_mc.currentFrame);
                    totalFrames_num = Number(option_mc.totalFrames);
                    /*
					
                    */
                    if (currentFrame_num < Number(totalFrames_num - 1)) {
                        currentFrame_num++;
                    } else {
                        currentFrame_num = 0;
                    }
                    /*
					
                    */
                    _information.heroes[_information.currentNameHero].currentDress[option_str].currentOption = Number(currentFrame_num + 1);
                    /*
					
                    */
                    _updateHeroDressupSecondActionFunc();
                    /*
					
                    */
                    if (!currentScreen_mc.next_btn.visible) {
                        currentScreen_mc.next_btn.visible = true;
                        currentScreen_mc.next_btn.alpha = 0.01;
                        createjs.Tween.get(currentScreen_mc.next_btn).wait(0).to({
                            alpha: 1
                        }, (_DELAY / 2) * 1000);
                        currentScreen_mc.next_btn.addEventListener("click", _onClickNextBtnAfterLocationFunc, false);
                    }
                }
            }
        }
    }
    /*
	
    */
    function _updateHeroDressupSecondActionFunc() {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
        /*
		
        */
        _updateHeroesFunc(dressupPanel_mc);
    }
    /*
    ============================================================
    dressupThird action
    ============================================================
    */
    function _beginDressupThirdActionFunc() {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var dressupPanel_mc;
        var category_mc;
        var heroes_arr = new Array();
        var i;
        var l;
        /*
		
        */
        for (var propHeroes in _information.heroes) {
            if (_information.heroes.hasOwnProperty(propHeroes)) {
                if (currentScreen_mc.body_mc[propHeroes]) {
                    if (currentScreen_mc.body_mc[propHeroes]) {
                        heroes_arr.unshift(propHeroes);
                    } else {
                        heroes_arr.push(propHeroes);
                    }
                }
            }
        }
        /*
		
        */
        if (heroes_arr.length > 0) {
            /*
			
            */
            _information.currentNameHero = heroes_arr[0];
            /*
			
            */
            if (currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"]) {
                /*
				
                */
                dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
                dressupPanel_mc.gotoAndStop(0);
                /*
				
                */
                _updateHeroDressupThirdActionFunc();
                /*
				
                */
                for (var propOptions in _information.heroes[_information.currentNameHero].currentDress) {
                    if (_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(propOptions)) {
                        if (dressupPanel_mc[propOptions]) {
                            /*
							
                            */
                            category_mc = dressupPanel_mc[propOptions];
                            category_mc.gotoAndStop(0);
                            category_mc.name = String(propOptions);
                            category_mc.mouseEnabled = true;
                            category_mc.mouseChildren = false;
                            category_mc.cursor = "pointer";
                            category_mc.addEventListener("mouseover", _onMouseOverNavigationMcDressupThirdActionFunc, false);
                            category_mc.addEventListener("mouseout", _onMouseOutNavigationMcDressupThirdActionFunc, false);
                            category_mc.addEventListener("click", _onClickNavigationMcDressupThirdActionFunc, false);
                            /*
							
                            */
                            if (category_mc.animation_mc) {
                                category_mc.animation_mc.gotoAndStop(0);
                            }
                        }
                    }
                }
            }
        } else {
            trace("Хде герой!")
        }
    }
    /*
	
    */
    function _onMouseOverNavigationMcDressupThirdActionFunc(event) {
        var currentTarget_mc = event.currentTarget;
        createjs.Tween.get(currentTarget_mc).wait(0).to({
            scaleX: 1.1,
            scaleY: 1.1
        }, (_DELAY / 5) * 1000);
    }

    function _onMouseOutNavigationMcDressupThirdActionFunc(event) {
        var currentTarget_mc = event.currentTarget;
        createjs.Tween.get(currentTarget_mc).wait(0).to({
            scaleX: 1,
            scaleY: 1
        }, (_DELAY / 3) * 1000);
    }

    function _onClickNavigationMcDressupThirdActionFunc(event) {
        /*
		
        */
        var currentTarget_mc = event.currentTarget;
        var current_str = String(currentTarget_mc.name);
        var currentScreen_mc = _main.getChildAt(0);
        var dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
        var hero_mc;
        var option_mc;
        var currentFrame_num;
        var totalFrames_num;
        /*
		
        */
        var gravityExplosion_mc = new lib.GravityExplosionMC();
        _before.addChild(gravityExplosion_mc);
        gravityExplosion_mc.gotoAndStop(0);
        point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _before);
        gravityExplosion_mc.x = point_obj.x;
        gravityExplosion_mc.y = point_obj.y;
        /*
		
        */
        if (_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(current_str)) {
            if (currentScreen_mc.body_mc[_information.currentNameHero]) {
                /*
				
                */
                if (currentTarget_mc.animation_mc) {
                    currentTarget_mc.animation_mc.gotoAndPlay(0);
                }
                /*
				
                */
                hero_mc = currentScreen_mc.body_mc[_information.currentNameHero];
                hero_mc.gotoAndStop(0);
                /*
				
                */
                if (hero_mc[current_str]) {
                    /*
					
                    */
                    option_mc = hero_mc[current_str];
                    /*
					
                    */
                    currentFrame_num = Number(option_mc.currentFrame);
                    totalFrames_num = Number(option_mc.totalFrames);
                    /*
					
                    */
                    if (currentFrame_num < Number(totalFrames_num - 1)) {
                        currentFrame_num++;
                    } else {
                        currentFrame_num = 0;
                    }
                    /*
					
                    */
                    _information.heroes[_information.currentNameHero].currentDress[current_str].currentOption = Number(currentFrame_num + 1);
                    /*
					
                    */
                    _updateHeroDressupThirdActionFunc();
                    /*
					
                    */
                    if (!currentScreen_mc.next_btn.visible) {
                        currentScreen_mc.next_btn.visible = true;
                        currentScreen_mc.next_btn.alpha = 0.01;
                        createjs.Tween.get(currentScreen_mc.next_btn).wait(0).to({
                            alpha: 1
                        }, (_DELAY / 2) * 1000);
                        currentScreen_mc.next_btn.addEventListener("click", _onClickNextBtnAfterLocationFunc, false);
                    }
                }
            }
        }
    }
    /*
	
    */
    function _updateHeroDressupThirdActionFunc() {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        /*
		
        */
        _updateHeroesFunc(currentScreen_mc.body_mc);
    }
    /*
    ============================================================
    cleanup action
    ============================================================
    */
    function _beginCleanupActionFunc() {
        /*
		
        */
        _information.dragShape = null;
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var cleanup_mc;
        var garbage_mc;
        /*
		
        */
        if (currentScreen_mc.body_mc["cleanup_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"]) {
            /*
			
            */
            cleanup_mc = currentScreen_mc.body_mc["cleanup_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
            cleanup_mc.gotoAndStop(0);
            /*
			
            */
            if (cleanup_mc.window_mc) {
                cleanup_mc.window_mc.gotoAndStop(0);
                cleanup_mc.window_mc.visible = false;
            } else {
                trace("Ошибка! Отсутствует cleanup_mc.window_mc!");
            }
            /*
			
            */
            if (cleanup_mc.container_mc) {
                cleanup_mc.container_mc.gotoAndStop(0);
                _clearContainerFunc(cleanup_mc.container_mc);
                cleanup_mc.container_mc.x = 0;
                cleanup_mc.container_mc.y = 0;
            } else {
                trace("Ошибка! Отсутствует cleanup_mc.container_mc!");
            }
            /*
			
            */
            if (cleanup_mc.panel_mc) {
                /*
				
                */
                cleanup_mc.panel_mc.gotoAndStop(0);
                /*
				
                */
                if (cleanup_mc.panel_mc.indicator_mc) {
                    /*
					
                    */
                    cleanup_mc.panel_mc.indicator_mc.gotoAndStop(0);
                    /*
					
                    */
                    if (cleanup_mc.panel_mc.indicator_mc.indicator_mc) {
                        /*
						
                        */
                        if (!_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].hasOwnProperty("totalTime")) {
                            _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].totalTime = 60;
                        }
                        if (!_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].hasOwnProperty("currentTime")) {
                            _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].currentTime = 0;
                        } else {
                            _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].currentTime = 0;
                        }
                        /*
						
                        */
                        if (_information.interval_id != null) {
                            clearInterval(_information.interval_id);
                        }
                        _information.interval_id = setInterval(_updateIndicatorCleanupActionFunc, 1000);
                        /*
						
                        */
                        cleanup_mc.panel_mc.indicator_mc.indicator_mc.gotoAndStop(0);
                        _updateIndicatorCleanupActionFunc();
                    } else {
                        trace("Ошибка! Отсутствует cleanup_mc.panel_mc.indicator_mc.indicator_mc!");
                    }
                } else {
                    trace("Ошибка! Отсутствует cleanup_mc.panel_mc.indicator_mc!");
                }
                /*
				
                */
                if (cleanup_mc.panel_mc.hint_mc) {
                    cleanup_mc.panel_mc.hint_mc.gotoAndStop(0);
                    cleanup_mc.panel_mc.hint_mc.mouseEnabled = true;
                    cleanup_mc.panel_mc.hint_mc.mouseChildren = true;
                    cleanup_mc.panel_mc.hint_mc.cursor = "pointer";
                    cleanup_mc.panel_mc.hint_mc.addEventListener("click", _onClickHintBtnCleanupActionFunc, false);
                } else {
                    trace("Ошибка! Отсутствует cleanup_mc.panel_mc.hint_mc!");
                }
                /*
				
                */
                if (cleanup_mc.panel_mc.counter_mc) {
                    /*
					
                    */
                    cleanup_mc.panel_mc.counter_mc.gotoAndStop(0);
                    /*
					
                    */
                    if (cleanup_mc.panel_mc.counter_mc.counter_mc) {
                        cleanup_mc.panel_mc.counter_mc.counter_mc.gotoAndStop(0);
                        cleanup_mc.panel_mc.counter_mc.counter_mc.gotoAndStop(_skippedGarbagesCleanupActionFunc());
                    } else {
                        trace("Ошибка! Отсутствует cleanup_mc.panel_mc.counter_mc.counter_mc!");
                    }
                } else {
                    trace("Ошибка! Отсутствует cleanup_mc.panel_mc.counter_mc!");
                }
            } else {
                trace("Ошибка! Отсутствует cleanup_mc.panel_mc!");
            }
            /*
			
            */
            if (_information.cleanup.hasOwnProperty(_information.currentNameLocation)) {
                for (var propGarbages in _information.cleanup[_information.currentNameLocation]) {
                    if (_information.cleanup[_information.currentNameLocation].hasOwnProperty(propGarbages)) {
                        /*
						
                        */
                        _information.cleanup[_information.currentNameLocation][propGarbages].completed = false;
                        /*
						
                        */
                        if (cleanup_mc[propGarbages]) {
                            /*
							
                            */
                            garbage_mc = cleanup_mc[propGarbages];
                            garbage_mc.gotoAndStop(0);
                            garbage_mc.name = propGarbages;
                            garbage_mc.mouseEnabled = true;
                            garbage_mc.mouseChildren = true;
                            garbage_mc.cursor = "pointer";
                            /*
							
                            */
                            if (_information.cleanup[_information.currentNameLocation][propGarbages].startX === null) {
                                _information.cleanup[_information.currentNameLocation][propGarbages].startX = garbage_mc.x;
                            }
                            if (_information.cleanup[_information.currentNameLocation][propGarbages].startY === null) {
                                _information.cleanup[_information.currentNameLocation][propGarbages].startY = garbage_mc.y;
                            }
                            /*
							
                            */
                            if (_information.cleanup[_information.currentNameLocation][propGarbages].action === "click") {
                                garbage_mc.addEventListener("click", _onClickGarbageMcCleanupActionFunc, false);
                            } else if (_information.cleanup[_information.currentNameLocation][propGarbages].action === "drag") {
                                garbage_mc.addEventListener("mousedown", _onMouseDownGarbageMcCleanupActionFunc, false);
                            } else {

                            }
                        }
                    }
                }
            }
        } else {
            trace("Хде контейнер с уборкой?!");
        }
    }
    /*
	
    */
    function _updateIndicatorCleanupActionFunc() {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var cleanup_mc = currentScreen_mc.body_mc["cleanup_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
        /*
		
        */
        _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].currentTime += 1;
        var share_num = (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].totalTime - _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].currentTime) / _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].totalTime;
        /*
		
        */
        if (share_num < 0) {
            /*
			
            */
            share_num = 0;
            /*
			
            */
            if (_information.interval_id != null) {
                clearInterval(_information.interval_id);
            }
            /*
			
            */
            cleanup_mc.window_mc.visible = true;
            cleanup_mc.window_mc.gotoAndStop("loss");
            cleanup_mc.window_mc.mouseEnabled = true;
            cleanup_mc.window_mc.mouseChildren = true;
            cleanup_mc.window_mc.cursor = "pointer";
            cleanup_mc.window_mc.addEventListener("click", _onClickWindowLossCleanupActionFunc, false);
            if (cleanup_mc.window_mc.loss_mc) {
                cleanup_mc.window_mc.loss_mc.gotoAndPlay(0);
            }
        }
        /*
		
        */
        //cleanup_mc.panel_mc.indicator_mc.indicator_mc.scaleX = share_num;
        createjs.Tween.get(cleanup_mc.panel_mc.indicator_mc.indicator_mc).wait(0).to({
            scaleX: share_num
        }, _DELAY * 1000);
    }

    function _onClickWindowLossCleanupActionFunc(event) {
        /*
		
        */
        var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        _animationTransitionBetweenScenesFunc(_questFunc, _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].delay, 1, null, true);
    }
    /*
	
    */
    function _onClickHintBtnCleanupActionFunc(event) {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var cleanup_mc = currentScreen_mc.body_mc["cleanup_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
        var garbage_mc;
        /*
		
        */
        for (var propGarbages in _information.cleanup[_information.currentNameLocation]) {
            if (_information.cleanup[_information.currentNameLocation].hasOwnProperty(propGarbages)) {
                if (!_information.cleanup[_information.currentNameLocation][propGarbages].completed) {
                    if (cleanup_mc[propGarbages]) {
                        garbage_mc = cleanup_mc[propGarbages];
                        //new Edapskov_Flickering(_before, garbage_mc, ["#ffffff", "#ffffcc"], 5, 18);
                        createjs.Tween.get(garbage_mc).wait(0).to({
                            alpha: 0.1
                        }, (_DELAY / 2) * 1000).call(_onCompleteShowHintsCleanupActionFunc, [garbage_mc], this);
                    }
                }
            }
        }
    }

    function _onCompleteShowHintsCleanupActionFunc(garbage_mc) {
        createjs.Tween.get(garbage_mc).wait(0).to({
            alpha: 1
        }, (_DELAY / 2) * 1000);
    }
    /*
	
    */
    function _onClickGarbageMcCleanupActionFunc(event) {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        /*
		
        */
        if (currentScreen_mc.body_mc.pointer_1) {
            currentScreen_mc.body_mc.pointer_1.mouseEnabled = false;
            currentScreen_mc.body_mc.pointer_1.mouseChildren = false;
            currentScreen_mc.body_mc.pointer_1.visible = false;
        }
        /*
		
        */
        var garbage_mc = event.currentTarget;
        var garbage_str = String(garbage_mc.name);
        garbage_mc.mouseEnabled = false;
        garbage_mc.mouseChildren = false;
        garbage_mc.cursor = "default";
        garbage_mc.removeEventListener("click", _onClickGarbageMcCleanupActionFunc, false);
        /*
		
        */
        if (garbage_mc.totalFrames == 2) {
            garbage_mc.gotoAndStop(1);
        } else {
            garbage_mc.play();
        }
        /*
		
        */
        if (_information.cleanup[_information.currentNameLocation][garbage_str].startFunc !== null) {
            _information.cleanup[_information.currentNameLocation][garbage_str].startFunc();
        }
        /*
		
        */
        _updateCleanupActionFunc(garbage_str, event);
    }
    /*
	
    */
    function _onMouseDownGarbageMcCleanupActionFunc(event) {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var cleanup_mc = currentScreen_mc.body_mc["cleanup_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
        /*
		
        */
        cleanup_mc.mouseEnabled = false;
        cleanup_mc.mouseChildren = false;
        /*
		
        */
        if (currentScreen_mc.body_mc.pointer_1) {
            currentScreen_mc.body_mc.pointer_1.mouseEnabled = false;
            currentScreen_mc.body_mc.pointer_1.mouseChildren = false;
            currentScreen_mc.body_mc.pointer_1.visible = false;
        }
        /*
		
        */
        var garbage_mc = event.currentTarget;
        var garbage_str = String(garbage_mc.name);
        garbage_mc.mouseEnabled = false;
        garbage_mc.mouseChildren = false;
        garbage_mc.cursor = "default";
        garbage_mc.visible = false;
        garbage_mc.removeEventListener("mousedown", _onMouseDownGarbageMcCleanupActionFunc, false);
        /*
		
        */
        _information.dragShape = garbage_str;
        /*
		
        */
        if (_information.cleanup[_information.currentNameLocation][garbage_str].startFunc !== null) {
            _information.cleanup[_information.currentNameLocation][garbage_str].startFunc();
        }
        /*
		
        */
        garbage_mc = new lib[garbage_str + "_mc"]();
        cleanup_mc.container_mc.addChild(garbage_mc);
        garbage_mc.gotoAndStop(0);
        garbage_mc.gotoAndStop(1);
        garbage_mc.name = garbage_str;
        garbage_mc.mouseEnabled = false;
        garbage_mc.mouseChildren = false;
        var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, cleanup_mc.container_mc);
        garbage_mc.x = point_obj.x;
        garbage_mc.y = point_obj.y;
        /*
		
        */
        _stage.addEventListener("stagemouseup", _onStageMouseUpGarbageMcCleanupActionFunc, false);
        _stage.addEventListener("stagemousemove", _onStageMouseMoveGarbageMcCleanupActionFunc, false);
    }

    function _onStageMouseUpGarbageMcCleanupActionFunc(event) {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var cleanup_mc = currentScreen_mc.body_mc["cleanup_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
        var garbage_mc = cleanup_mc[_information.dragShape];
        var dragGarbage_mc = cleanup_mc.container_mc.getChildByName(_information.dragShape);
        var hitArea_mc;
        /*
		
        */
        _stage.removeEventListener("stagemouseup", _onStageMouseUpGarbageMcCleanupActionFunc, false);
        _stage.removeEventListener("stagemousemove", _onStageMouseMoveGarbageMcCleanupActionFunc, false);
        /*
		
        */
        if (_information.cleanup[_information.currentNameLocation][_information.dragShape].hitArea !== null) {
            if (cleanup_mc[_information.cleanup[_information.currentNameLocation][_information.dragShape].hitArea]) {
                /*
				
                */
                hitArea_mc = cleanup_mc[_information.cleanup[_information.currentNameLocation][_information.dragShape].hitArea];
                hitArea_mc.gotoAndStop(0);
                var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, hitArea_mc);
                /*
				
                */
                if (hitArea_mc.hitTest(point_obj.x, point_obj.y)) {
                    /*
					
                    */
                    cleanup_mc.mouseEnabled = true;
                    cleanup_mc.mouseChildren = true;
                    /*
					
                    */
                    garbage_mc.visible = true;
                    garbage_mc.gotoAndStop(2);
                    garbage_mc.x = hitArea_mc.x;
                    garbage_mc.y = hitArea_mc.y;
                    /*
					
                    */
                    _clearContainerFunc(cleanup_mc.container_mc);
                    /*
					
                    */
                    _updateCleanupActionFunc(_information.dragShape, event);
                } else {
                    createjs.Tween.get(dragGarbage_mc).wait(0).to({
                        x: _information.cleanup[_information.currentNameLocation][_information.dragShape].startX,
                        y: _information.cleanup[_information.currentNameLocation][_information.dragShape].startY
                    }, (_DELAY / 4) * 1000).call(_onFinishUnsuccessfulDragGarbageMcCleanupActionFunc);
                }
            }
        }
    }

    function _onFinishUnsuccessfulDragGarbageMcCleanupActionFunc() {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var cleanup_mc = currentScreen_mc.body_mc["cleanup_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
        /*
		
        */
        cleanup_mc.mouseEnabled = true;
        cleanup_mc.mouseChildren = true;
        /*
		
        */
        var garbage_mc = cleanup_mc[_information.dragShape];
        garbage_mc.gotoAndStop(0);
        garbage_mc.mouseEnabled = true;
        garbage_mc.mouseChildren = true;
        garbage_mc.cursor = "pointer";
        garbage_mc.visible = true;
        garbage_mc.addEventListener("mousedown", _onMouseDownGarbageMcCleanupActionFunc, false);
        /*
		
        */
        _clearContainerFunc(cleanup_mc.container_mc);
    }

    function _onStageMouseMoveGarbageMcCleanupActionFunc(event) {
        if (_information.dragShape !== null) {
            /*
			
            */
            var currentScreen_mc = _main.getChildAt(0);
            var cleanup_mc = currentScreen_mc.body_mc["cleanup_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
            /*
			
            */
            var garbage_mc = cleanup_mc.container_mc.getChildByName(_information.dragShape);
            var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, cleanup_mc.container_mc);
            garbage_mc.x = point_obj.x;
            garbage_mc.y = point_obj.y;
        }
    }
    /*
	
    */
    function _updateCleanupActionFunc(garbage_str, event_obj) {
        /*
		
        */
        if (garbage_str === undefined) {
            trace("Нет переменной garbage_str в функции _updateCleanupActionFunc!");
        } else {
            garbage_str = String(garbage_str);
        }
        /*
		
        */
        _information.dragShape == null;
        var point_obj;
        /*
		
        */
        if (_information.cleanup[_information.currentNameLocation][garbage_str].completedFunc !== null) {
            _information.cleanup[_information.currentNameLocation][garbage_str].completedFunc();
        }
        if (_information.cleanup[_information.currentNameLocation][garbage_str].completedSound !== null) {
            point_obj = event_obj.currentTarget.localToLocal(event_obj.localX, event_obj.localY, _stage);
            _soundManager.addSoundFunc(_information.cleanup[_information.currentNameLocation][garbage_str].completedSound, 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        }
        _information.cleanup[_information.currentNameLocation][garbage_str].completed = true;
        /*
		
        */
        var skippedGarbages_num = _skippedGarbagesCleanupActionFunc();
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var cleanup_mc = currentScreen_mc.body_mc["cleanup_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
        /*
		
        */
        if (cleanup_mc.panel_mc) {
            if (cleanup_mc.panel_mc.counter_mc) {
                if (cleanup_mc.panel_mc.counter_mc.counter_mc) {
                    cleanup_mc.panel_mc.counter_mc.counter_mc.gotoAndStop(skippedGarbages_num);
                }
            }
        }
        /*
		
        */
        var flashAnimation_mc = new lib.FlashAnimation();
        _before.addChild(flashAnimation_mc);
        flashAnimation_mc.gotoAndStop(0);
        point_obj = event_obj.currentTarget.localToLocal(event_obj.localX, event_obj.localY, _before);
        flashAnimation_mc.x = point_obj.x;
        flashAnimation_mc.y = point_obj.y;
        /*
		
        */
        if (skippedGarbages_num <= 0) {
            /*
			
            */
            _soundManager.addSoundFunc("win_sound", 0, 0, 0, 1, 0);
            /*
			
            */
            if (_information.interval_id != null) {
                clearInterval(_information.interval_id);
            }
            /*
			
            */
            cleanup_mc.window_mc.visible = true;
            cleanup_mc.window_mc.gotoAndStop("win");
            cleanup_mc.window_mc.mouseEnabled = true;
            cleanup_mc.window_mc.mouseChildren = true;
            if (cleanup_mc.window_mc.win_mc) {
                cleanup_mc.window_mc.win_mc.gotoAndPlay(0);
            }
            /*
			
            */
            if (!currentScreen_mc.next_btn.visible) {
                currentScreen_mc.next_btn.visible = true;
                currentScreen_mc.next_btn.alpha = 0.01;
                createjs.Tween.get(currentScreen_mc.next_btn).wait(0).to({
                    alpha: 1
                }, (_DELAY / 2) * 1000);
                currentScreen_mc.next_btn.addEventListener("click", _onClickNextBtnAfterLocationFunc, false);
            }
        }
    }

    function _skippedGarbagesCleanupActionFunc() {
        /*
		
        */
        var skipped_num = 0;
        /*
		
        */
        for (var propGarbages in _information.cleanup[_information.currentNameLocation]) {
            if (_information.cleanup[_information.currentNameLocation].hasOwnProperty(propGarbages)) {
                if (!_information.cleanup[_information.currentNameLocation][propGarbages].completed) {
                    skipped_num++;
                }
            }
        }
        /*
		
        */
        return skipped_num;
    }
    /*
    ============================================================
    quiz action
    ============================================================
    */
    function _beginQuizActionFunc(replay_bool) {
        /*
		
        */
        if (replay_bool === undefined) {
            replay_bool = false;
        } else {
            replay_bool = Boolean(replay_bool);
        }
        /*
		
        */
        if (!_information.hasOwnProperty("answerQuiz")) {
            _information.answerQuiz = 0;
        } else {
            _information.answerQuiz = 0;
        }
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        /*
		
        */
        var quiz_mc = currentScreen_mc.body_mc["quiz_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
        quiz_mc.gotoAndStop(0);
        quiz_mc.gotoAndStop("question");
        quiz_mc.mouseEnabled = false;
        quiz_mc.mouseChildren = false;
        quiz_mc.cursor = "default";
        /*
		
        */
        if (replay_bool) {
            quiz_mc.gotoAndStop("answer");
        }
        /*
		
        */
        _updateQuestionsQuizActionFunc(true);
    }

    function _updateQuestionsQuizActionFunc(flag_bool) {
        /*
		
        */
        if (flag_bool === undefined) {
            flag_bool = true;
        } else {
            flag_bool = Boolean(flag_bool);
        }
        /*
		
        */
        var object_mc;
        var i = 0;
        var l = _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject.length;
        /*
		
        */
        while (i < l) {
            /*
			
            */
            object_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject[i], true);
            object_mc.gotoAndStop(0);
            object_mc.name = _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject[i];
            /*
			
            */
            if (flag_bool) {
                object_mc.mouseEnabled = true;
                object_mc.mouseChildren = true;
                object_mc.cursor = "pointer";
                object_mc.addEventListener("click", _onClickObjectMcQuizActionFunc, false);
            } else {
                object_mc.mouseEnabled = false;
                object_mc.mouseChildren = false;
                object_mc.cursor = "default";
                object_mc.removeEventListener("click", _onClickObjectMcQuizActionFunc, false);
            }
            /*
			
            */
            i++;
        }
    }

    function _onClickObjectMcQuizActionFunc(event) {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var currentTarget_mc = event.currentTarget;
        /*
		
        */
        var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        var quiz_mc = currentScreen_mc.body_mc["quiz_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
        quiz_mc.gotoAndStop("answer");
        /*
		
        */
        _updateQuestionsQuizActionFunc(false);
        /*
		
        */
        var gravityExplosion_mc = new lib.GravityExplosionMC();
        _before.addChild(gravityExplosion_mc);
        gravityExplosion_mc.gotoAndStop(0);
        point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _before);
        gravityExplosion_mc.x = point_obj.x;
        gravityExplosion_mc.y = point_obj.y;
        /*
		
        */
        var tempArray_arr = currentTarget_mc.name.split("_");
        _information.answerQuiz = Number(tempArray_arr[1]);
        /*
		
        */
        if (_information.timeout_id != null) {
            clearTimeout(_information.timeout_id);
        }
        _information.timeout_id = setTimeout(_answerQuizActionFunc, 1000);
    }

    function _answerQuizActionFunc() {
        /*
		
        */
        if (_information.timeout_id != null) {
            clearTimeout(_information.timeout_id);
        }
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var quiz_mc = currentScreen_mc.body_mc["quiz_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
        /*
		
        */
        if (_information.answerQuiz > 0) {
            quiz_mc.gotoAndStop("correctly");
        } else {
            quiz_mc.gotoAndStop("incorrectly");
        }
        /*
		
        */
        quiz_mc.mouseEnabled = true;
        quiz_mc.mouseChildren = true;
        quiz_mc.cursor = "pointer";
        quiz_mc.addEventListener("click", _onClickQuizMcQuizActionFunc, false);
    }

    function _onClickQuizMcQuizActionFunc(event) {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var quiz_mc = event.currentTarget;
        /*
		
        */
        var point_obj = quiz_mc.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        quiz_mc.mouseEnabled = false;
        quiz_mc.mouseChildren = false;
        quiz_mc.cursor = "default";
        quiz_mc.removeEventListener("click", _onClickQuizMcQuizActionFunc, false);
        /*
		
        */
        if (_information.answerQuiz > 0) {
            _updateCurrentActionFunc();
        } else {
            _beginQuizActionFunc(true);
        }
    }
    /*
    ============================================================
    end actions
    ============================================================
    */
    function _updateCurrentActionFunc() {
        /*
		
        */
        if (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].updatedCursor !== null) {
            _cursorUpdateFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].updatedCursor);
        }
        /*
		
        */
        if (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].addCompletedSound !== null) {
            _soundManager.addSoundFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].addCompletedSound, 0, 0, 0, 0.1, 0);
        }
        if (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].removeCompletedSound !== null) {
            _soundManager.removeSoundNameFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].removeCompletedSound);
        }
        /*
		
        */
        if (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].closeLocFunc !== null) {
            _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].closeLocFunc();
        }
        /*
		
        */
        if (_information.interval_id != null) {
            clearInterval(_information.interval_id);
        }
        /*
		
        */
        if (_information.locations[_information.currentNameLocation].currentAction >= _information.locations[_information.currentNameLocation].totalActions) {
            if (_information.timeout_id != null) {
                clearTimeout(_information.timeout_id);
            }
            _information.timeout_id = setTimeout(_endActionsFunc, _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].delay * 1000);
        } else {
            /*
			
            */
            if (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].transition) {
                //_animationTransitionBetweenScenesFunc(_actionFunc, _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].delay);
                _animationTransitionBetweenScenesFunc(_questFunc, _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].delay, 1, null, true);
            } else {
                if (_information.timeout_id != null) {
                    clearTimeout(_information.timeout_id);
                }
                _information.timeout_id = setTimeout(_actionFunc, _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].delay * 1000);
            }
            /*
			
            */
            _information.locations[_information.currentNameLocation].currentAction++;
            _information.locations[_information.currentNameLocation].currentNameAction = "action_" + _information.locations[_information.currentNameLocation].currentAction;
        }
    }

    function _endActionsFunc() {
        /*
		
        */
        if (!_information.locations[_information.currentNameLocation].completed) {
            _information.locations[_information.currentNameLocation].completed = true;
            _information.targetLocation++;
        }
        /*
		
        */
        _soundManager.removeAllSoundExceptNameFunc(["background_sound", "click_sound"]);
        /*
		
        */
        if (_skippedLocationsFunc() >= 1) {
            _animationTransitionBetweenScenesFunc(_selectFunc, 0, 1, null, true);
        } else {
            _animationTransitionBetweenScenesFunc(_resultFunc, 0, 1, null, true);
        }
    }
    /*
	
    */
    function _updateIndicatorFunc(share_num) {
        /*
		
        */
        if (share_num === undefined) {
            share_num = 0;
        } else {
            share_num = Number(share_num);
        }
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        currentScreen_mc.gotoAndStop(0);
        currentScreen_mc.body_mc.gotoAndStop(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].frame - 1);
        /*
		
        */
        if (currentScreen_mc.body_mc.indicator_mc) {
            currentScreen_mc.body_mc.indicator_mc.gotoAndStop(0);
            currentScreen_mc.body_mc.indicator_mc.indicator_mc.gotoAndStop(0);
            currentScreen_mc.body_mc.indicator_mc.indicator_mc.indicator_mc.scaleX = share_num;
            /*
			
            */
            if (currentScreen_mc.body_mc.indicator_mc.indicator_mc.output_numbers_comp) {
                currentScreen_mc.body_mc.indicator_mc.indicator_mc.output_numbers_comp.gotoAndStop(0);
                currentScreen_mc.body_mc.indicator_mc.indicator_mc.output_numbers_comp.setValueFunc(Math.floor(share_num * 100));
            } else {
                if (currentScreen_mc.body_mc.indicator_mc.indicator_mc.txtField_txt) {
                    currentScreen_mc.body_mc.indicator_mc.indicator_mc.txtField_txt.text = Math.floor(share_num * 100) + "%";
                }
            }
        }
    }
    /*
	
    */
    function _getObjectFunc(pathObject_str, zeroFrame_bool) {
        /*
		
        */
        if (zeroFrame_bool !== undefined) {
            zeroFrame_bool = Boolean(zeroFrame_bool);
        } else {
            zeroFrame_bool = false;
        }
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        currentScreen_mc.gotoAndStop(0);
        currentScreen_mc.body_mc.gotoAndStop(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].frame - 1);
        /*
		
        */
        var object_mc;
        /*
		
        */
        if ((pathObject_str === null) || (pathObject_str === undefined)) {
            object_mc = new createjs.MovieClip();
            currentScreen_mc.body_mc.addChild(object_mc);
            object_mc.gotoAndStop(0);
        } else {
            try {
                /*
				
                */
                object_mc = currentScreen_mc.body_mc;
                var temp_arr = new Array();
                temp_arr = pathObject_str.split(".");
                /*
				
                */
                var i = 0;
                var l = temp_arr.length;
                while (i < l) {
                    /*
					
                    */
                    object_mc = object_mc[temp_arr[i]];
                    if (zeroFrame_bool) {
                        object_mc.gotoAndStop(0); // сцуко, может мешать
                    }
                    object_mc.name = temp_arr[i];
                    object_mc.loop = false;
                    /*
					
                    */
                    i++;
                }
            } catch (event) {
                /*
				
                */
                trace(event, 1);
                /*
				
                */
                object_mc = new createjs.MovieClip();
                _main.addChild(object_mc);
            } finally {

            }
        }
        /*
		
        */
        return object_mc;
    }
    /*
	
    */
    function _onClickNextBtnAfterLocationFunc(event) {
        /*
		
        */
        var current_btn = event.currentTarget;
        /*
		
        */
        var point_obj = current_btn.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        current_btn.visible = false;
        current_btn.removeEventListener("click", _onClickNextBtnAfterLocationFunc, false);
        /*
		
        */
        _updateCurrentActionFunc();
    }
    /*
	
    */
    function _onClickSkipBtnFunc(event) {
        /*
		
        */
        if (_information.timeout_id != null) {
            clearTimeout(_information.timeout_id);
        }
        if (_information.interval_id != null) {
            clearInterval(_information.interval_id);
        }
        /*
		
        */
        var current_btn = event.currentTarget;
        /*
		
        */
        var point_obj = current_btn.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        current_btn.visible = false;
        current_btn.removeEventListener("click", _onClickSkipBtnFunc, false);
        /*
        исключения
        */
        if (_stage.hasEventListener("stagemousedown")) {
            _stage.removeEventListener("stagemousedown", _onStageMouseDownMoveActionFunc, false);
        }
        if (_stage.hasEventListener("stagemouseup")) {
            _stage.removeEventListener("stagemouseup", _onStageMouseUpMoveActionFunc, false);
        }
        if (_stage.hasEventListener("stagemousemove")) {
            _stage.removeEventListener("stagemousemove", _onStageMouseMoveMoveActionFunc, false);
        }
        if (_stage.hasEventListener("stagemousemove")) {
            _stage.removeEventListener("stagemousemove", _onStageMouseMoveRubActionFunc, false);
        }
        /*
		
        */
        _information.locations[_information.currentNameLocation].currentAction = _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].skipAndGoto;
        _information.locations[_information.currentNameLocation].currentNameAction = "action_" + _information.locations[_information.currentNameLocation].currentAction;
        /*
		
        */
        _actionFunc();
    }
    /*
    ==============================================================================================================
    update heroes
    ==============================================================================================================
    */
    function _updateHeroesFunc(container_mc, firstRun_num) {
        /*
		
        */
        if (firstRun_num === undefined) {
            firstRun_num = false;
        } else {
            firstRun_num = Boolean(firstRun_num);
        }
        /*
		
        */
        var hero_mc;
        var option_mc;
        var frame_num = Number(container_mc.currentFrame + 1);
        var hero_str;
        /*
		
        */
        for (var propHero in _information.heroes) {
            if (_information.heroes.hasOwnProperty(propHero)) {
                /*
				
                */
                hero_str = String(propHero + "_" + frame_num);
                /*
				
                */
                if (container_mc[propHero] || container_mc[hero_str]) {
                    /*
					
                    */
                    hero_mc = container_mc[propHero];
                    if (firstRun_num) {
                        hero_mc.gotoAndStop(0);
                        hero_mc.play();
                    }
                    /*
					
                    */
                    if (container_mc[hero_str]) {
                        hero_mc = container_mc[hero_str];
                        if (firstRun_num) {
                            hero_mc.gotoAndStop(0);
                            hero_mc.play();
                        }
                    }
                    /*
					
                    */
                    for (var propObject in _information.heroes[propHero].currentDress) {
                        if (_information.heroes[propHero].currentDress.hasOwnProperty(propObject)) {
                            /*
							
                            */
                            frame_num = _information.heroes[propHero].currentDress[propObject].currentOption;
                            /*
							
                            */
                            if (propObject === "bg") {
                                if (container_mc[propObject]) {
                                    option_mc = container_mc[propObject];
                                    option_mc.gotoAndStop(frame_num - 1);
                                }
                            } else {
                                if (hero_mc[propObject]) {
                                    /*
									
                                    */
                                    option_mc = hero_mc[propObject];
                                    /*
									
                                    */
                                    if (frame_num <= 0) {
                                        frame_num = option_mc.totalFrames;
                                    }
                                    /*
									
                                    */
                                    option_mc.gotoAndStop(frame_num - 1);
                                    /*
									
                                    */
                                    _updateBodyFunc(option_mc, _information.heroes[propHero].currentDress[propObject].currentColor, _information.heroes[propHero].currentDress[propObject].currentTexture, _information.heroes[propHero].currentDress[propObject].currentAlphaTexture);
                                    /*
									
                                    */
                                    if (propObject == "hair") {
                                        if (hero_mc.fringe) {
                                            /*
											
                                            */
                                            hero_mc.fringe.gotoAndStop(frame_num - 1);
                                            /*
											
                                            */
                                            _updateBodyFunc(hero_mc.fringe, _information.heroes[propHero].currentDress[propObject].currentColor, _information.heroes[propHero].currentDress[propObject].currentTexture, _information.heroes[propHero].currentDress[propObject].currentAlphaTexture);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    function _updateBodyFunc(object_mc, color_num, texture_num, alphaTexture_num) {
        /*
		
        */
        if (color_num !== undefined) {
            if (color_num !== null) {
                color_num = Number(color_num);
            }
        } else {
            color_num = null;
        }
        if (texture_num !== undefined) {
            if (texture_num !== null) {
                texture_num = Math.round(texture_num);
            }
        } else {
            texture_num = null;
        }
        if (alphaTexture_num !== undefined) {
            if (alphaTexture_num !== null) {
                alphaTexture_num = Number(alphaTexture_num);
            }
        } else {
            alphaTexture_num = null;
        }
        /*
		
        */
        var container_mc;
        var body_mc;
        var texture_mc;
        var totalFrames_num;
        /*
		
        */
        if (object_mc["body_" + (object_mc.currentFrame + 1) + "_mc"]) {
            /*
			
            */
            container_mc = object_mc["body_" + (object_mc.currentFrame + 1) + "_mc"];
            container_mc.gotoAndStop(0);
            /*
			
            */
            if (color_num != null) {
                if (container_mc["body_mc"]) {
                    /*
					
                    */
                    body_mc = container_mc["body_mc"];
                    body_mc.gotoAndStop(0);
                    /*
					
                    */
                    if (body_mc.totalFrames <= 1) {
                        _colouringFunc(body_mc, color_num);
                    } else {
                        /*
						
                        */
                        totalFrames_num = Number(body_mc.totalFrames);
                        /*
						
                        */
                        if (color_num != null) {
                            if ((color_num > 0) && (color_num <= totalFrames_num)) {
                                body_mc.gotoAndStop(Number(color_num - 1));
                            } else {
                                body_mc.gotoAndStop(Number(totalFrames_num - 1));
                            }
                        } else {
                            body_mc.gotoAndStop(Number(totalFrames_num - 1));
                        }
                    }
                }
            }
            /*
			
            */
            if (container_mc["texture_mc"]) {
                /*
				
                */
                texture_mc = container_mc["texture_mc"];
                texture_mc.gotoAndStop(0);
                totalFrames_num = Number(texture_mc.totalFrames);
                /*
				
                */
                if (texture_num != null) {
                    if ((texture_num > 0) && (texture_num <= totalFrames_num)) {
                        texture_mc.gotoAndStop(Number(texture_num - 1));
                    } else {
                        texture_mc.gotoAndStop(Number(totalFrames_num - 1));
                    }
                } else {
                    texture_mc.gotoAndStop(Number(totalFrames_num - 1));
                }
                /*
				
                */
                if (alphaTexture_num != null) {
                    if (alphaTexture_num < 0.1) {
                        texture_mc.alpha = 0.1;
                    } else {
                        texture_mc.alpha = alphaTexture_num;
                    }
                } else {
                    texture_mc.alpha = 1;
                }
            }
        }
    }
    /*
	
    */
    function _colouringFunc(displayObject, color_num) {
        var bounds_rect = displayObject.getBounds();
        var redColor_num = (color_num >>> 16) & 0xff;
        var greenColor_num = (color_num >>> 8) & 0xff;
        var blueColor_num = color_num & 0xff;
        displayObject.filters = [new createjs.ColorFilter(0, 0, 0, 1, redColor_num, greenColor_num, blueColor_num, 0)];
        if (displayObject.bitmapCache) {
            displayObject.updateCache();
        } else {
            displayObject.cache(bounds_rect.x, bounds_rect.y, bounds_rect.width, bounds_rect.height);
        }
    }
    /*
    ==============================================================================================================
    Окно редиректа
    ==============================================================================================================
    */
    function _redirectFunc() {
        /*
		
        */
        if (_information.timeout_id != null) {
            clearTimeout(_information.timeout_id);
        }
        /*
		
        */
        _clearContainerFunc(_before);
        /*
		
        */
        var currentScreen_mc = new lib.RedirectScreen();
        _before.addChild(currentScreen_mc);
        currentScreen_mc.gotoAndStop(0);
        currentScreen_mc.body_mc.gotoAndStop(0);
        /*
		
        */
        if (currentScreen_mc.body_mc.banner_mc) {
            currentScreen_mc.body_mc.banner_mc.cursor = "pointer";
            currentScreen_mc.body_mc.banner_mc.addEventListener("click", _onClickPlayRedirectBtnFunc, false);
        }
        /*
		
        */
        if (currentScreen_mc.body_mc.remove_btn) {
            currentScreen_mc.body_mc.remove_btn.addEventListener("click", _onClickCancelRedirectBtnFunc, false);
        }
    }
    /*
	
    */
    function _onClickPlayRedirectBtnFunc(event) {
        /*
		
        */
        var currentTarget_btn = event.currentTarget;
        /*
		
        */
        var point_obj = currentTarget_btn.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.3, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        currentTarget_btn.removeEventListener("click", _onClickPlayRedirectBtnFunc, false);
        /*
		
        */
        window.open("https://dl-girls.com/content/folder_1666369336" + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
    }
    /*
	
    */
    function _onClickCancelRedirectBtnFunc(event) {
        /*
		
        */
        var currentTarget_btn = event.currentTarget;
        /*
		
        */
        var point_obj = currentTarget_btn.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.3, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        currentTarget_btn.removeEventListener("click", _onClickCancelRedirectBtnFunc, false);
        /*
		
        */
        _clearContainerFunc(_before);
    }
    /*
    ==============================================================================================================
    Окно результатов
    ==============================================================================================================
    */
    function _resultFunc() {
        /*
		
        */
        _soundManager.addSoundFunc("completed_sound", 0, 0, 0, 0.2, 0);
        //_soundManager.addSoundFunc("completed_sound", 0, 0, -1, 0.2, 0); 
        /*
		
        */
        _clearContainerFunc(_main);
        _clearContainerFunc(_before);
        /*
		
        */
        var currentScreen_mc = new lib.ResultScreen();
        _main.addChild(currentScreen_mc);
        currentScreen_mc.gotoAndStop(0);
        currentScreen_mc.addEventListener("click", _onClickResultScreenFunc, false);
        /*
		
        */
        currentScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
        /*
		
        */
        currentScreen_mc.photoContainer_mc.gotoAndStop(0);
        currentScreen_mc.photoContainer_mc.logo_btn.visible = false;
        /*
		
        */
        if (currentScreen_mc.facebook_btn) {
            currentScreen_mc.facebook_btn.addEventListener("click", _onClickFacebookBtnFunc, false);
        }
        /*
		
        */
        if (currentScreen_mc.moreGames_btn) {
            currentScreen_mc.moreGames_btn.cursor = "pointer";
            currentScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
        }
        /*
		
        */
        if (currentScreen_mc.banner_1_mc) {
            currentScreen_mc.banner_1_mc.cursor = "pointer";
            currentScreen_mc.banner_1_mc.addEventListener("click", _onClickBannerMcFunc_1, false);
        }
        if (currentScreen_mc.banner_2_mc) {
            currentScreen_mc.banner_2_mc.cursor = "pointer";
            currentScreen_mc.banner_2_mc.addEventListener("click", _onClickBannerMcFunc_2, false);
        }
        /*
		
        */
        if (currentScreen_mc.freeGames_mc) {
            currentScreen_mc.freeGames_mc.addEventListener("click", _onClickFreeGamesMcFunc, false);
        }
        /*
		
        */
        if (currentScreen_mc.photo_btn) {
            currentScreen_mc.photo_btn.addEventListener("click", _onClickPhotoBtnFunc, false);
        }
        /*
		
        */
        currentScreen_mc.playAgain_btn.addEventListener("click", _onClickPlayBtnFunc, false);
        /*
		
        */
        //_updateHeroesFunc(currentScreen_mc.photoContainer_mc, true);
        /*
        исключения
        */
        currentScreen_mc.photoContainer_mc.heroes_mc.gotoAndStop(0);
        _updateHeroesFunc(currentScreen_mc.photoContainer_mc.heroes_mc, true);
        if (currentScreen_mc.photoContainer_mc.heroes_mc.container_1_mc) {
            currentScreen_mc.photoContainer_mc.heroes_mc.container_1_mc.gotoAndStop(0);
            //currentScreen_mc.photoContainer_mc.heroes_mc.container_1_mc.gotoAndStop(_information.currentNameLocation);
            _updateHeroesFunc(currentScreen_mc.photoContainer_mc.heroes_mc.container_1_mc, true);
            currentScreen_mc.photoContainer_mc.heroes_mc.container_1_mc.play();
        }
        if (currentScreen_mc.photoContainer_mc.heroes_mc.container_2_mc) {
            currentScreen_mc.photoContainer_mc.heroes_mc.container_2_mc.gotoAndStop(0);
            //currentScreen_mc.photoContainer_mc.heroes_mc.container_2_mc.gotoAndStop(_information.currentNameLocation);
            _updateHeroesFunc(currentScreen_mc.photoContainer_mc.heroes_mc.container_2_mc, true);
            currentScreen_mc.photoContainer_mc.heroes_mc.container_2_mc.play();
        }
        /*
		
        */
        if (currentScreen_mc.prev_mc) {
            currentScreen_mc.prev_mc.mouseEnabled = true;
            currentScreen_mc.prev_mc.mouseChildren = false;
            currentScreen_mc.prev_mc.cursor = "pointer";
            currentScreen_mc.prev_mc.addEventListener("mouseover", _onMouseOverNavigationMcBackgroundsFunc, false);
            currentScreen_mc.prev_mc.addEventListener("mouseout", _onMouseOutNavigationMcBackgroundsFunc, false);
            currentScreen_mc.prev_mc.addEventListener("click", _onClickPrevNavigationMcBackgroundsFunc, false);
        }
        if (currentScreen_mc.next_mc) {
            currentScreen_mc.next_mc.mouseEnabled = true;
            currentScreen_mc.next_mc.mouseChildren = false;
            currentScreen_mc.next_mc.cursor = "pointer";
            currentScreen_mc.next_mc.addEventListener("mouseover", _onMouseOverNavigationMcBackgroundsFunc, false);
            currentScreen_mc.next_mc.addEventListener("mouseout", _onMouseOutNavigationMcBackgroundsFunc, false);
            currentScreen_mc.next_mc.addEventListener("click", _onClickNextNavigationMcBackgroundsFunc, false);
        }
        /*
		
        */
        //_createPanelFiltersFunc();
        /*
        редирект
        */
        /*
        if(_information.timeout_id != null)
        {
        	clearTimeout(_information.timeout_id);
        }
        _information.timeout_id = setTimeout(_redirectFunc, 12000);
        */
        /*
		
        */
        if (currentScreen_mc.photoContainer_mc.bg) {
            currentScreen_mc.photoContainer_mc.bg.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
        }
        /*
		
        */
        _soundManager.updateSoundMcFunc(currentScreen_mc);
        /*
		
        */
        _fullScreenCanvasManager.updateFullScreenMcFunc(currentScreen_mc);
        /*
		
        */
        _cursorUpdateFunc();
    }
    /*
    исключения
    */
    function _onMouseOverNavigationMcBackgroundsFunc(event) {
        var currentTarget_mc = event.currentTarget;
        createjs.Tween.get(currentTarget_mc).wait(0).to({
            scaleX: 1.1,
            scaleY: 1.1
        }, (_DELAY / 5) * 1000);
    }

    function _onMouseOutNavigationMcBackgroundsFunc(event) {
        var currentTarget_mc = event.currentTarget;
        createjs.Tween.get(currentTarget_mc).wait(0).to({
            scaleX: 1,
            scaleY: 1
        }, (_DELAY / 3) * 1000);
    }

    function _onClickPrevNavigationMcBackgroundsFunc(event) {
        /*
		
        */
        var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var totalFrames_num = currentScreen_mc.photoContainer_mc.heroes_mc.totalFrames;
        var currentFrame_num = currentScreen_mc.photoContainer_mc.heroes_mc.currentFrame + 1;
        currentFrame_num--;
        if (currentFrame_num <= 0) {
            currentFrame_num = totalFrames_num;
        }
        /*
		
        */
        currentScreen_mc.photoContainer_mc.heroes_mc.gotoAndStop(Number(currentFrame_num - 1));
        /*
		
        */
        _updateHeroesFunc(currentScreen_mc.photoContainer_mc.heroes_mc);
        if (currentScreen_mc.photoContainer_mc.heroes_mc.container_1_mc) {
            //currentScreen_mc.photoContainer_mc.heroes_mc.container_1_mc.gotoAndStop(_information.currentNameLocation);
            _updateHeroesFunc(currentScreen_mc.photoContainer_mc.heroes_mc.container_1_mc);
        }
        if (currentScreen_mc.photoContainer_mc.heroes_mc.container_2_mc) {
            //currentScreen_mc.photoContainer_mc.heroes_mc.container_2_mc.gotoAndStop(_information.currentNameLocation);
            _updateHeroesFunc(currentScreen_mc.photoContainer_mc.heroes_mc.container_2_mc);
        }
        /*
		
        */
        //_updateFilterFunc(currentScreen_mc.photoContainer_mc.heroes_mc, _information.currentFilter);
    }

    function _onClickNextNavigationMcBackgroundsFunc(event) {
        /*
		
        */
        var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var totalFrames_num = currentScreen_mc.photoContainer_mc.heroes_mc.totalFrames;
        var currentFrame_num = currentScreen_mc.photoContainer_mc.heroes_mc.currentFrame + 1;
        currentFrame_num++;
        if (currentFrame_num > totalFrames_num) {
            currentFrame_num = 1;
        }
        /*
		
        */
        currentScreen_mc.photoContainer_mc.heroes_mc.gotoAndStop(Number(currentFrame_num - 1));
        /*
		
        */
        _updateHeroesFunc(currentScreen_mc.photoContainer_mc.heroes_mc);
        if (currentScreen_mc.photoContainer_mc.heroes_mc.container_1_mc) {
            //currentScreen_mc.photoContainer_mc.heroes_mc.container_1_mc.gotoAndStop(_information.currentNameLocation);
            _updateHeroesFunc(currentScreen_mc.photoContainer_mc.heroes_mc.container_1_mc);
        }
        if (currentScreen_mc.photoContainer_mc.heroes_mc.container_2_mc) {
            //currentScreen_mc.photoContainer_mc.heroes_mc.container_2_mc.gotoAndStop(_information.currentNameLocation);
            _updateHeroesFunc(currentScreen_mc.photoContainer_mc.heroes_mc.container_2_mc);
        }
        /*
		
        */
        //_updateFilterFunc(currentScreen_mc.photoContainer_mc.heroes_mc, _information.currentFilter);
    }
    /*
	
    */
    function _skippedLocationsFunc() {
        /*
		
        */
        var skipped_num = 0;
        /*
		
        */
        for (var prop in _information.locations) {
            if (_information.locations.hasOwnProperty(prop)) {
                if (!_information.locations[prop].completed) {
                    skipped_num++;
                }
            }
        }
        /*
		
        */
        return skipped_num;
    }
    /*
	
    */
    function _onClickResultScreenFunc(event) {
        //trace(event);
    }
    /*
	
    */
    function _createPanelFiltersFunc() {
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        var filters_mc;
        /*
		
        */
        if (currentScreen_mc.filters_animation_mc) {
            /*
			
            */
            currentScreen_mc.filters_animation_mc.gotoAndStop(0);
            /*
			
            */
            if (currentScreen_mc.filters_animation_mc.filters_container_mc) {
                /*
				
                */
                currentScreen_mc.filters_animation_mc.filters_container_mc.gotoAndStop(0);
                /*
				
                */
                if (currentScreen_mc.filters_animation_mc.filters_container_mc.filters_mc) {
                    /*
					
                    */
                    _information.currentFilter = 0;
                    /*
					
                    */
                    filters_mc = currentScreen_mc.filters_animation_mc.filters_container_mc.filters_mc;
                    filters_mc.gotoAndStop(0);
                    filters_mc.setValueFunc(_information.currentFilter);
                    filters_mc.addEventListener("change_radio_button", _onChangeRadioButtonFiltersFunc, false);
                    /*
					
                    */
                    if (currentScreen_mc.filters_animation_mc.filters_container_mc.open_mc) {
                        currentScreen_mc.filters_animation_mc.filters_container_mc.open_mc.visible = true;
                        currentScreen_mc.filters_animation_mc.filters_container_mc.open_mc.mouseEnabled = true;
                        currentScreen_mc.filters_animation_mc.filters_container_mc.open_mc.mouseChildren = false;
                        currentScreen_mc.filters_animation_mc.filters_container_mc.open_mc.cursor = "pointer";
                        currentScreen_mc.filters_animation_mc.filters_container_mc.open_mc.addEventListener("click", _onClickOpenFiltersMcFunc, false);
                    }
                    /*
					
                    */
                    if (currentScreen_mc.filters_animation_mc.filters_container_mc.exit_mc) {
                        currentScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.visible = false;
                        currentScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.mouseEnabled = true;
                        currentScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.mouseChildren = false;
                        currentScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.cursor = "pointer";
                        currentScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.addEventListener("click", _onClickExitFiltersMcFunc, false);
                    }
                }
            }
        }
    }

    function _onChangeRadioButtonFiltersFunc(event) {
        /*
		
        */
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.2, 0);
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        /*
		
        */
        var filter_num = event.numberValue;
        _information.currentFilter = filter_num;
        /*
		
        */
        _updateFilterFunc(currentScreen_mc.photoContainer_mc.heroes_mc, _information.currentFilter);
    }

    function _updateFilterFunc(container_mc, filter_num) {
        /*
		
        */
        if (filter_num !== undefined) {
            if (filter_num !== null) {
                filter_num = Number(filter_num);
            } else {
                filter_num = 0;
            }
        } else {
            filter_num = 0;
        }
        /*
		
        */
        var matrix;
        var filter_obj;
        /*
		
        */
        if (filter_num == 1) {
            /*
            matrix = new createjs.ColorMatrix().adjustSaturation(-100);
            filter_obj = new createjs.ColorMatrixFilter(matrix);
            container_mc.filters = [filter_obj];
            */
            filter_obj = new createjs.ColorMatrixFilter([0.30, 0.30, 0.30, 0, 0, 0.30, 0.30, 0.30, 0, 0, 0.30, 0.30, 0.30, 0, 0, 0, 0, 0, 1, 0]);
            container_mc.filters = [filter_obj];
        } else if (filter_num == 2) {
            filter_obj = new createjs.ColorMatrixFilter([0.39, 0.77, 0.19, 0, 0, 0.35, 0.68, 0.17, 0, 0, 0.27, 0.53, 0.13, 0, 0, 0, 0, 0, 1, 0]);
            container_mc.filters = [filter_obj];
        } else if (filter_num == 3) {
            filter_obj = new createjs.ColorFilter(1, 1, 0, 1, 0, 0, 128, 0);
            container_mc.filters = [filter_obj];
        } else {
            container_mc.filters = [];
        }
        /*
		
        */
        var bounds_obj = container_mc.getBounds();
        if (container_mc.bitmapCache) {
            container_mc.updateCache();
        } else {
            container_mc.cache(bounds_obj.x, bounds_obj.y, bounds_obj.width, bounds_obj.height);
        }
    }

    function _onClickOpenFiltersMcFunc(event) {
        /*
		
        */
        var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        /*
		
        */
        currentScreen_mc.filters_animation_mc.filters_container_mc.open_mc.visible = false;
        currentScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.visible = true;
        /*
		
        */
        currentScreen_mc.filters_animation_mc.gotoAndPlay("open");
    }

    function _onClickExitFiltersMcFunc(event) {
        /*
		
        */
        var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        /*
		
        */
        currentScreen_mc.filters_animation_mc.filters_container_mc.open_mc.visible = true;
        currentScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.visible = false;
        /*
		
        */
        currentScreen_mc.filters_animation_mc.gotoAndPlay("exit");
    }
    /*
	
    */
    function _onClickPhotoBtnFunc(event) {
        /*
		
        */
        _soundManager.addSoundFunc("photo_sound", 0, 0, 0, 1, 0, true);
        /*
		
        */
        var currentScreen_mc = _main.getChildAt(0);
        /*
		
        */
        _updateVisibleDisplayObjectFunc(currentScreen_mc, false);
        currentScreen_mc.photoContainer_mc.visible = true;
        currentScreen_mc.photoContainer_mc.logo_btn.visible = true;
        /*
		
        */
        _stage.update();
        /*
		
        */
        try {
            var canvas = document.getElementById("canvas");
            canvas.toBlobHD(function(blob) {
                saveAs(blob, _TITLE + ".png");
            }, "image/png");
        } catch (event) {
            /*
			
            */
            trace(event, 1);
            /*
			
            */
            _createBackupPhotoFunc();
        } finally {
            /*
			
            */
            currentScreen_mc.photoContainer_mc.logo_btn.visible = false;
            _updateVisibleDisplayObjectFunc(currentScreen_mc);
            /*
			
            */
            //_addAdsFunc();
        }
    }

    function _createBackupPhotoFunc() {
        /*
		
        */
        var photoContainer_mc = new lib.photoContainer_mc();
        photoContainer_mc.y = _CHEIGHT;
        photoContainer_mc.mouseEnabled = false;
        photoContainer_mc.mouseChildren = false;
        photoContainer_mc.gotoAndStop(0);
        /*
		
        */
        //_updateHeroesFunc(photoContainer_mc, true);
        /*
        исключения
        */
        var currentScreen_mc = _main.getChildAt(0);
        photoContainer_mc.heroes_mc.gotoAndStop(currentScreen_mc.photoContainer_mc.heroes_mc.currentFrame);
        _updateHeroesFunc(photoContainer_mc.heroes_mc, true);
        if (photoContainer_mc.heroes_mc.container_1_mc) {
            photoContainer_mc.heroes_mc.container_1_mc.gotoAndStop(0);
            //photoContainer_mc.heroes_mc.container_1_mc.gotoAndStop(_information.currentNameLocation);
            _updateHeroesFunc(photoContainer_mc.heroes_mc.container_1_mc, true);
        }
        if (photoContainer_mc.heroes_mc.container_2_mc) {
            photoContainer_mc.heroes_mc.container_2_mc.gotoAndStop(0);
            //photoContainer_mc.heroes_mc.container_2_mc.gotoAndStop(_information.currentNameLocation);
            _updateHeroesFunc(photoContainer_mc.heroes_mc.container_2_mc, true);
        }
        /*
		
        */
        //_updateFilterFunc(photoContainer_mc.heroes_mc, _information.currentFilter);
        /*
		
        */
        photoContainer_mc.cache(0, 0, _CWIDTH, _CHEIGHT, 0.8);
        new Edapskov_ScreenshotWindow(_TITLE, photoContainer_mc.getCacheDataURL());
        delete photoContainer_mc;
    }

    function _updateVisibleDisplayObjectFunc(container_mc, visible_bool) {
        /*
		
        */
        if (visible_bool === undefined) {
            visible_bool = true;
        } else {
            visible_bool = Boolean(visible_bool);
        }
        /*
		
        */
        var displayObject;
        var totalDisplayObjects_uint;
        var i = 0;
        /*
		
        */
        if (container_mc.numChildren) {
            /*
			
            */
            totalDisplayObjects_uint = container_mc.numChildren;
            /*
			
            */
            while (i < totalDisplayObjects_uint) {
                /*
				
                */
                displayObject = container_mc.getChildAt(i);
                if (displayObject.hasOwnProperty("visible")) {
                    displayObject.visible = visible_bool;
                }
                /*
				
                */
                i++;
            }
        }
    }
    /*
    ==============================================================================================================
    Вспомогательные окна
    ==============================================================================================================
    */
    /*
    Credits
    */
    function _copyrightFunc() {
        /*
		
        */
        _clearContainerFunc(_before);
        /*
		
        */
        var currentScreen_mc = new lib.CopyrightScreen();
        _before.addChild(currentScreen_mc);
        currentScreen_mc.gotoAndStop(0);
        /*
		
        */
        currentScreen_mc.cursor = "pointer";
        currentScreen_mc.addEventListener("click", _onClickCopyrightScreenFunc, false);
    }

    function _onClickCopyrightScreenFunc(event) {
        /*
		
        */
        var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        event.currentTarget.removeEventListener("click", _onClickCopyrightScreenFunc, false);
        /*
		
        */
        _clearContainerFunc(_before);
    }
    /*
    простое окно с кнопкой закрытия
    */
    function _simpleScreenFunc(nameScreen_str) {
        /*
		
        */
        if (nameScreen_str !== undefined) {
            /*
			
            */
            nameScreen_str = String(nameScreen_str);
            /*
			
            */
            _clearContainerFunc(_before);
            /*
			
            */
            var currentScreen_mc = new lib[nameScreen_str]();
            _before.addChild(currentScreen_mc);
            currentScreen_mc.gotoAndStop(0);
            /*
			
            */
            if (currentScreen_mc.screen_mc) {
                currentScreen_mc.screen_mc.addEventListener("click", _onClickScreenMcSimpleScreenFunc, false);
            }
            /*
			
            */
            if (currentScreen_mc.remove_btn) {
                currentScreen_mc.remove_btn.addEventListener("click", _onClickRemoveBtnSimpleScreenFunc, false);
            }
        }
    }

    function _onClickScreenMcSimpleScreenFunc(event) {

    }

    function _onClickRemoveBtnSimpleScreenFunc(event) {
        /*
		
        */
        var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
        _soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
        /*
		
        */
        event.currentTarget.removeEventListener("click", _onClickRemoveBtnSimpleScreenFunc, false);
        /*
		
        */
        _animationTransitionBetweenScenesFunc(_removeSimpleScreenFunc, 0, _DELAY / 2);
    }

    function _removeSimpleScreenFunc() {
        _clearContainerFunc(_before);
    }
    /*
    ==============================================================================================================
    Вспомогательные методы
    ==============================================================================================================
    */
    /*
    функция для перехода между локациями
    */
    function _animationTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr, animated_bool) {
        /*
		
        */
        if (delayTime_num === undefined) {
            delayTime_num = 0;
        } else {
            delayTime_num = Number(delayTime_num);
        }
        if (time_num === undefined) {
            time_num = 1;
        } else {
            time_num = Number(time_num);
        }
        if (arrayParams_arr === undefined) {
            arrayParams_arr = null;
        }
        if (animated_bool === undefined) {
            animated_bool = false;
        } else {
            animated_bool = Boolean(animated_bool);
        }
        /*
        проверяем переменные
        */
        if (time_num < 0) {
            time_num = 0;
        }
        /*
        блокировать
        */
        _main.mouseEnabled = false;
        _main.mouseChildren = false;
        _before.mouseEnabled = false;
        _before.mouseChildren = false;
        /*
		
        */
        if (animated_bool) {
            _onStartAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr);
        } else {
            _onStartNonAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr);
        }
    }

    function _onStartNonAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr) {
        createjs.Tween.get(_shadowScreen.getChildByName("shadowContainer")).wait(delayTime_num * 1000).to({
            alpha: 1
        }, time_num * 1000).call(_onMidNonAnimatedTransitionBetweenScenesFunc, [func, time_num, arrayParams_arr], this);
    }

    function _onMidNonAnimatedTransitionBetweenScenesFunc(func, time_num, arrayParams_arr) {
        /*
        обновление
        */
        _updateSceneTransitionBetweenScenesFunc(func, arrayParams_arr);
        /*
        появление
        */
        createjs.Tween.get(_shadowScreen.getChildByName("shadowContainer")).wait(0).to({
            alpha: 0.01
        }, time_num * 1000).call(_onFinishTransitionBetweenScenesFunc);
    }

    function _onStartAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr) {
        /*
		
        */
        var curtainContainer = _shadowScreen.getChildByName("curtainContainer");
        var curtainScreen_mc;
        var animation_mc;
        /*
		
        */
        if (lib.hasOwnProperty("CurtainScreen")) {
            /*
			
            */
            curtainScreen_mc = new lib.CurtainScreen();
            curtainScreen_mc.gotoAndStop(0);
            /*
			
            */
            if (curtainScreen_mc.body_mc) {
                /*
				
                */
                curtainContainer.addChild(curtainScreen_mc);
                /*
				
                */
                animation_mc = curtainScreen_mc.body_mc;
                animation_mc.gotoAndStop(0);
                /*
				
                */
                var timelineControl = new Edapskov_TimelineControl(animation_mc);
                timelineControl.gotoFunc("mid", 1, delayTime_num, [animation_mc, func, arrayParams_arr]);
                timelineControl.addEventListener("completed_timeline", _onMidAnimatedTransitionBetweenScenesFunc, false);
            } else {
                _onStartNonAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr);
            }
        } else {
            _onStartNonAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr);
        }
    }

    function _onMidAnimatedTransitionBetweenScenesFunc(event) {
        /*
		
        */
        var animation_mc = event.params[0];
        var func = event.params[1];
        var arrayParams_arr = event.params[2];
        /*
        обновление
        */
        _updateSceneTransitionBetweenScenesFunc(func, arrayParams_arr);
        /*
        появление
        */
        var timelineControl = new Edapskov_TimelineControl(animation_mc);
        timelineControl.gotoFunc("end", 1, 0);
        timelineControl.addEventListener("completed_timeline", _onFinishTransitionBetweenScenesFunc, false);
    }

    function _onFinishTransitionBetweenScenesFunc(event) {
        /*
		
        */
        _clearContainerFunc(_shadowScreen.getChildByName("curtainContainer"));
        /*
        разблокировать
        */
        _main.mouseEnabled = true;
        _main.mouseChildren = true;
        _before.mouseEnabled = true;
        _before.mouseChildren = true;
    }

    function _updateSceneTransitionBetweenScenesFunc(func, arrayParams_arr) {
        /*
		
        */
        if (arrayParams_arr === undefined) {
            arrayParams_arr = null;
        }
        /*
        запуск функции
        */
        if (arrayParams_arr !== null) {
            func(arrayParams_arr);
        } else {
            func();
        }
    }
    /*
	
    */
    function _onTickFunc(event) {
        /*
		
        */
        if (_debugger.getVisibleFunc()) {
            _debugger.updateFpsFunc(Math.round(event.currentTarget.getMeasuredFPS()) + " / " + event.currentTarget.framerate);
        }
        /*
		
        */
        _stage.update();
    }
    /*
    управление курсором
    */
    function _cursorUpdateFunc(nameCursor_str) {
        /*
		
        */
        if (nameCursor_str === undefined) {
            nameCursor_str = "default";
        }
        /*
		
        */
        if (_cursor.getChildByName("body_mc")) {
            var bodyCursor_mc = _cursor.getChildByName("body_mc");
            bodyCursor_mc.gotoAndStop(nameCursor_str);
        }
        /*
		
        */
        if (nameCursor_str === "default") {
            _mouseShowFunc();
            _cursor.visible = false;
        } else {
            _mouseHideFunc();
            _cursor.visible = true;
        }
    }

    function _cursorAnimationFunc() {
        var animation_mc;
        if (_cursor["body_mc"]) {
            animation_mc = _cursor["body_mc"];
            animation_mc.play();
        }
    }

    function _mouseHideFunc() {
        if (!createjs.Touch.isSupported()) {
            _stage.enableMouseOver(0);
            _stage.canvas.style.cursor = "none";
        }
    }

    function _mouseShowFunc() {
        if (!createjs.Touch.isSupported()) {
            _stage.enableMouseOver(10);
            _stage.canvas.style.cursor = "auto";
        }
    }

    function _updateCoordinatesCursorFunc(newX_num, newY_num) {
        var point_obj = _stage.localToLocal(newX_num, newY_num, _cursor.parent);
        _cursor.x = point_obj.x;
        _cursor.y = point_obj.y;
    }

    function _onStageMouseDownFunc(event) {
        _cursor.alpha = 1;
        _updateCoordinatesCursorFunc(event.localX, event.localY);
    }

    function _onStageMouseMoveFunc(event) {
        _updateCoordinatesCursorFunc(event.localX, event.localY);
    }

    function _onStageMouseUpFunc(event) {
        _cursor.alpha = 0.01;
    }
    /*
	
    */
    function _clearContainerFunc(container) {
        container.removeAllChildren();
    }
    /*
    обработка событий клавиатуры
    */
    function _onKeyPressFunc(event) {
        /*
		
        */
        var keyCode_num = event.which || event.keyCode;
        var keyChar_str = String.fromCharCode(keyCode_num);
        var shiftKey_bool = event.shiftKey;
        var ctrlKey_bool = event.ctrlKey;
        var altKey_bool = event.altKey;
        /*
		
        */
        if (keyCode_num === 68) {
            if (ctrlKey_bool && altKey_bool) {
                _debugger.toggleVisibleFunc();
            }
        } else if (keyCode_num === 65) {
            if (ctrlKey_bool && altKey_bool) {
                alert("edapskov");
            }
        }
    }
    /*
	
    */
    function _stopAppFunc() {
        /*
		
        */
        //createjs.Ticker.removeEventListener("tick", _onTickFunc, false);
        /*
		
        */
        _soundManager.setInvisibleFunc(true);
        /*
		
        */
        trace("Application is stopped!", 1)
    }

    function _playAppFunc() {
        /*
		
        */
        //createjs.Ticker.addEventListener("tick", _onTickFunc, false);
        /*
		
        */
        _soundManager.setInvisibleFunc(false);
        /*
		
        */
        trace("Application is running!", 1)
    }
    /*
	
    */
    function _addAdsFunc() {
        if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
            trace("Commercial break!")
            sdk.showBanner();
        }
    }
    /*
    функции-исключения
    */
    function _openLocFunc_1_1() {
        _information.currentNameHero = "hero_2";
        _information.heroes[_information.currentNameHero].currentSet = "set_1";
        _information.currentNameHero = "hero_3";
        _information.heroes[_information.currentNameHero].currentSet = "set_1";
        _information.currentNameHero = "hero_4";
        _information.heroes[_information.currentNameHero].currentSet = "set_1";
        _information.currentNameHero = "hero_5";
        _information.heroes[_information.currentNameHero].currentSet = "set_1";
        _information.currentNameHero = "hero_6";
        _information.heroes[_information.currentNameHero].currentSet = "set_1";
    }

    function _openLocFunc_1_2() {
        _information.currentNameHero = "hero_1";
        _information.heroes[_information.currentNameHero].currentSet = "set_1";
    }

    function _openLocFunc_1_3() {
        _information.currentNameHero = "hero_1";
        _information.heroes[_information.currentNameHero].currentSet = "set_2";
    }

    function _openLocFunc_1_4() {
        _information.currentNameHero = "hero_1";
        _information.heroes[_information.currentNameHero].currentSet = "set_3";
    }

    function _openLocFunc_1_5() {
        _information.currentNameHero = "hero_1";
        _information.heroes[_information.currentNameHero].currentSet = "set_4";
    }
    /*
	
    */
    function _onClickPreloaderBtnFunc(event) {
        window.open(_LINKTOGAME + "?utm_source=" + window.location.href + "&utm_medium=game_referral|preloader&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
    }

    function _onClickLogoBtnFunc(event) {
        window.open(_LINKTOGAME + "?utm_source=" + window.location.href + "&utm_medium=game_referral|logo&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
    }

    function _onClickBannerMcFunc_1(event) {
        window.open("https://dl-girls.com/index.php?controller=article&action=index&id=3544" + "&utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
    }

    function _onClickBannerMcFunc_2(event) {
        window.open("https://dl-girls.com/index.php?controller=article&action=index&id=3544" + "&utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
    }

    function _onClickFreeGamesMcFunc(event) {
        window.open("https://dl-girls.com/index.php?controller=free&action=index&utm_source=" + window.location.href + "&utm_medium=game_referral|free&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
    }

    function _onClickFacebookBtnFunc(event) {
        window.open("", '_blank');
    }

    function _onClickMoreGamesBtnFunc(event) {
        window.open(_LINKTOGAME + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
    }
    /*
    ссылочка на разработчиков
    */
    function _onClickCopyrightMenuItemFunc(event) {
        window.open("http://dlstudio.edapskov.ru", '_blank');
    }
}