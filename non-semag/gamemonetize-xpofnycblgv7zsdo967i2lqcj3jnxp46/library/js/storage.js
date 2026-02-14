(function(lib, img, cjs, ss) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtFilters = {};
    var rect; // used to reference frame bounds

    // library properties:
    lib.properties = {
        width: 800,
        height: 600,
        fps: 32,
        color: "#000000",
        opacity: 1.00,
        webfonts: {},
        manifest: [{
                src: "library/images/storage_atlas_.png",
                id: "storage_atlas_"
            },
            {
                src: "library/images/storage_atlas_2.png",
                id: "storage_atlas_2"
            },
            {
                src: "library/images/storage_atlas_3.png",
                id: "storage_atlas_3"
            },
            {
                src: "library/images/storage_atlas_4.png",
                id: "storage_atlas_4"
            },
            {
                src: "library/images/storage_atlas_5.png",
                id: "storage_atlas_5"
            },
            {
                src: "library/images/storage_atlas_6.png",
                id: "storage_atlas_6"
            },
            {
                src: "library/images/storage_atlas_7.png",
                id: "storage_atlas_7"
            },
            {
                src: "library/images/storage_atlas_8.png",
                id: "storage_atlas_8"
            },
            {
                src: "library/images/storage_atlas_9.png",
                id: "storage_atlas_9"
            },
            {
                src: "library/images/storage_atlas_10.png",
                id: "storage_atlas_10"
            },
            {
                src: "library/images/storage_atlas_11.png",
                id: "storage_atlas_11"
            },
            {
                src: "library/images/storage_atlas_12.png",
                id: "storage_atlas_12"
            },
            {
                src: "library/images/storage_atlas_13.png",
                id: "storage_atlas_13"
            }
        ]
    };



    lib.ssMetadata = [{
            name: "storage_atlas_",
            frames: [
                [0, 602, 1200, 600],
                [0, 0, 1200, 600]
            ]
        },
        {
            name: "storage_atlas_2",
            frames: [
                [0, 602, 1200, 600],
                [0, 0, 1200, 600]
            ]
        },
        {
            name: "storage_atlas_3",
            frames: [
                [0, 0, 1200, 600],
                [0, 602, 1200, 600]
            ]
        },
        {
            name: "storage_atlas_4",
            frames: [
                [0, 0, 1200, 600],
                [0, 602, 1200, 600]
            ]
        },
        {
            name: "storage_atlas_5",
            frames: [
                [0, 0, 600, 600],
                [602, 0, 467, 629],
                [0, 631, 1200, 200]
            ]
        },
        {
            name: "storage_atlas_6",
            frames: [
                [804, 950, 426, 324],
                [0, 970, 500, 300],
                [402, 568, 400, 400],
                [462, 0, 422, 566],
                [0, 522, 400, 400],
                [804, 568, 380, 380],
                [886, 0, 380, 380],
                [0, 0, 460, 520]
            ]
        },
        {
            name: "storage_atlas_7",
            frames: [
                [0, 0, 360, 360],
                [322, 912, 320, 320],
                [644, 972, 320, 320],
                [322, 590, 320, 320],
                [690, 328, 320, 320],
                [966, 650, 320, 320],
                [0, 684, 320, 320],
                [644, 650, 320, 320],
                [0, 362, 320, 320],
                [966, 972, 320, 320],
                [824, 0, 326, 326],
                [362, 262, 326, 326],
                [362, 0, 460, 260]
            ]
        },
        {
            name: "storage_atlas_8",
            frames: [
                [704, 0, 197, 480],
                [322, 0, 380, 260],
                [903, 0, 300, 250],
                [0, 0, 320, 320],
                [402, 846, 400, 180],
                [0, 322, 400, 180],
                [804, 846, 400, 180],
                [402, 482, 400, 180],
                [0, 686, 400, 180],
                [804, 664, 400, 180],
                [804, 482, 400, 180],
                [0, 504, 400, 180],
                [402, 664, 400, 180],
                [0, 1050, 400, 180],
                [0, 868, 400, 180],
                [804, 1028, 400, 180],
                [402, 1028, 400, 180]
            ]
        },
        {
            name: "storage_atlas_9",
            frames: [
                [0, 944, 200, 300],
                [0, 642, 200, 300],
                [804, 0, 400, 180],
                [0, 182, 400, 180],
                [417, 862, 184, 276],
                [202, 903, 213, 243],
                [233, 364, 212, 247],
                [413, 613, 208, 247],
                [447, 182, 205, 250],
                [202, 642, 209, 259],
                [0, 364, 231, 276],
                [623, 434, 234, 207],
                [654, 182, 234, 207],
                [603, 862, 234, 207],
                [603, 1071, 234, 207],
                [623, 643, 234, 207],
                [859, 626, 220, 220],
                [859, 848, 220, 220],
                [839, 1070, 220, 220],
                [859, 404, 220, 220],
                [1061, 1070, 220, 220],
                [890, 182, 220, 220],
                [402, 0, 400, 180],
                [0, 0, 400, 180]
            ]
        },
        {
            name: "storage_atlas_10",
            frames: [
                [888, 222, 220, 220],
                [444, 444, 220, 220],
                [0, 444, 220, 220],
                [222, 444, 220, 220],
                [666, 222, 220, 220],
                [888, 444, 220, 220],
                [0, 666, 220, 220],
                [666, 444, 220, 220],
                [1110, 750, 181, 236],
                [1110, 506, 180, 242],
                [444, 888, 198, 243],
                [1110, 0, 190, 251],
                [1081, 988, 178, 236],
                [1110, 253, 175, 251],
                [0, 888, 220, 220],
                [222, 666, 220, 220],
                [444, 666, 220, 220],
                [888, 666, 220, 220],
                [666, 666, 220, 220],
                [222, 888, 220, 220],
                [875, 888, 204, 210],
                [666, 0, 220, 220],
                [444, 0, 220, 220],
                [222, 0, 220, 220],
                [888, 0, 220, 220],
                [0, 222, 220, 220],
                [444, 222, 220, 220],
                [222, 222, 220, 220],
                [644, 888, 229, 207],
                [0, 0, 220, 220]
            ]
        },
        {
            name: "storage_atlas_11",
            frames: [
                [0, 999, 190, 190],
                [388, 742, 180, 180],
                [192, 216, 190, 190],
                [944, 642, 160, 160],
                [894, 804, 160, 160],
                [944, 480, 160, 160],
                [1106, 480, 160, 160],
                [1106, 642, 160, 160],
                [570, 817, 160, 160],
                [1056, 804, 160, 160],
                [556, 979, 160, 160],
                [732, 803, 160, 160],
                [374, 924, 180, 180],
                [0, 0, 175, 229],
                [374, 1106, 180, 180],
                [690, 559, 118, 242],
                [570, 557, 118, 258],
                [745, 965, 122, 198],
                [606, 216, 203, 166],
                [810, 559, 132, 214],
                [384, 216, 220, 160],
                [0, 1191, 280, 80],
                [0, 231, 190, 190],
                [943, 398, 340, 80],
                [192, 408, 186, 188],
                [192, 598, 194, 178],
                [566, 384, 187, 171],
                [556, 1141, 187, 132],
                [755, 398, 186, 159],
                [192, 778, 180, 180],
                [192, 960, 180, 180],
                [1042, 966, 180, 120],
                [0, 423, 190, 190],
                [0, 807, 190, 190],
                [0, 615, 190, 190],
                [384, 378, 180, 180],
                [811, 216, 180, 180],
                [993, 216, 180, 180],
                [388, 560, 180, 180],
                [869, 966, 171, 137],
                [539, 0, 179, 214],
                [720, 0, 179, 214],
                [1082, 0, 179, 214],
                [901, 0, 179, 214],
                [358, 0, 179, 214],
                [177, 0, 179, 214],
                [869, 1105, 380, 60]
            ]
        },
        {
            name: "storage_atlas_12",
            frames: [
                [892, 877, 80, 87],
                [468, 1062, 80, 74],
                [533, 949, 80, 76],
                [1191, 869, 80, 93],
                [446, 1208, 85, 78],
                [391, 826, 90, 98],
                [677, 105, 85, 93],
                [555, 227, 120, 120],
                [677, 200, 120, 120],
                [799, 200, 120, 120],
                [1043, 95, 120, 120],
                [466, 454, 180, 71],
                [830, 468, 180, 71],
                [1073, 217, 180, 71],
                [859, 322, 180, 71],
                [1012, 436, 180, 71],
                [1073, 290, 180, 71],
                [648, 395, 180, 71],
                [648, 468, 180, 71],
                [677, 322, 180, 71],
                [466, 381, 180, 71],
                [122, 465, 180, 71],
                [1041, 363, 180, 71],
                [830, 395, 180, 71],
                [926, 1011, 90, 50],
                [714, 1250, 90, 50],
                [344, 221, 120, 120],
                [0, 393, 120, 120],
                [1165, 95, 105, 117],
                [773, 95, 146, 103],
                [122, 393, 81, 68],
                [222, 343, 120, 120],
                [344, 343, 120, 120],
                [364, 1208, 80, 84],
                [1042, 701, 103, 92],
                [304, 465, 150, 81],
                [456, 527, 150, 81],
                [533, 1227, 73, 62],
                [152, 862, 99, 53],
                [134, 962, 88, 71],
                [142, 221, 74, 64],
                [468, 1138, 85, 67],
                [152, 0, 232, 76],
                [142, 144, 241, 75],
                [0, 296, 220, 95],
                [317, 580, 80, 124],
                [921, 95, 120, 120],
                [608, 541, 180, 60],
                [790, 541, 180, 60],
                [972, 577, 180, 60],
                [608, 603, 180, 60],
                [790, 603, 180, 60],
                [972, 639, 180, 60],
                [0, 144, 140, 150],
                [665, 918, 220, 30],
                [1223, 363, 50, 139],
                [52, 1067, 50, 139],
                [260, 946, 50, 139],
                [156, 1067, 50, 139],
                [104, 1067, 50, 139],
                [384, 926, 50, 139],
                [364, 1067, 50, 139],
                [312, 946, 50, 139],
                [208, 1067, 50, 139],
                [312, 1087, 50, 139],
                [260, 1087, 50, 139],
                [416, 1067, 50, 139],
                [1032, 1211, 71, 62],
                [1191, 1228, 71, 62],
                [1191, 1164, 71, 62],
                [386, 0, 220, 80],
                [436, 966, 69, 94],
                [602, 833, 100, 73],
                [182, 760, 99, 100],
                [1255, 214, 40, 147],
                [0, 0, 150, 142],
                [0, 1042, 50, 210],
                [503, 82, 50, 297],
                [550, 1027, 51, 98],
                [820, 1050, 51, 98],
                [1133, 911, 51, 98],
                [1186, 964, 51, 98],
                [873, 966, 51, 98],
                [1027, 911, 51, 98],
                [661, 1166, 51, 98],
                [1239, 964, 51, 98],
                [767, 1150, 51, 98],
                [873, 1066, 51, 98],
                [656, 966, 51, 98],
                [555, 1127, 51, 98],
                [709, 950, 51, 98],
                [873, 1166, 51, 98],
                [762, 950, 51, 98],
                [767, 1050, 51, 98],
                [815, 950, 51, 98],
                [820, 1150, 51, 98],
                [608, 1127, 51, 98],
                [661, 1066, 51, 98],
                [603, 1027, 51, 98],
                [974, 911, 51, 98],
                [1080, 911, 51, 98],
                [979, 1164, 51, 98],
                [926, 1064, 51, 98],
                [926, 1164, 51, 98],
                [979, 1064, 51, 98],
                [1032, 1011, 51, 98],
                [1085, 1011, 51, 98],
                [1032, 1111, 51, 98],
                [1085, 1111, 51, 98],
                [1138, 1064, 51, 98],
                [714, 1150, 51, 98],
                [1138, 1164, 51, 98],
                [714, 1050, 51, 98],
                [1191, 1064, 51, 98],
                [483, 833, 117, 64],
                [52, 1208, 114, 41],
                [222, 221, 120, 120],
                [52, 962, 80, 80],
                [1178, 509, 120, 90],
                [0, 624, 163, 31],
                [483, 908, 180, 39],
                [704, 877, 186, 39],
                [800, 827, 187, 48],
                [1042, 817, 185, 50],
                [0, 580, 180, 42],
                [0, 764, 180, 59],
                [773, 0, 164, 93],
                [1012, 509, 164, 66],
                [939, 0, 163, 93],
                [1104, 0, 163, 93],
                [608, 0, 163, 103],
                [283, 760, 106, 93],
                [242, 1228, 99, 66],
                [52, 825, 98, 93],
                [385, 82, 116, 134],
                [283, 855, 99, 89],
                [204, 658, 99, 100],
                [555, 105, 120, 120],
                [0, 658, 100, 100],
                [0, 548, 400, 30],
                [506, 610, 50, 214],
                [402, 548, 50, 214],
                [1154, 601, 50, 214],
                [454, 610, 50, 214],
                [1206, 601, 50, 214],
                [0, 826, 50, 214],
                [558, 665, 240, 40],
                [558, 749, 240, 40],
                [800, 701, 240, 40],
                [0, 1254, 240, 40],
                [558, 707, 240, 40],
                [800, 785, 240, 40],
                [800, 743, 240, 40],
                [558, 791, 240, 40],
                [52, 920, 200, 40],
                [989, 869, 200, 40],
                [102, 658, 100, 100],
                [182, 580, 133, 76],
                [152, 78, 218, 59],
                [921, 217, 150, 95]
            ]
        },
        {
            name: "storage_atlas_13",
            frames: [
                [445, 108, 50, 50],
                [138, 64, 55, 60],
                [142, 165, 49, 35],
                [339, 235, 65, 21],
                [210, 228, 64, 24],
                [276, 228, 61, 25],
                [406, 241, 63, 16],
                [42, 225, 68, 23],
                [393, 160, 67, 31],
                [50, 126, 48, 48],
                [0, 113, 48, 48],
                [195, 64, 88, 37],
                [412, 66, 74, 40],
                [0, 64, 77, 47],
                [42, 176, 40, 40],
                [146, 0, 71, 62],
                [219, 0, 71, 62],
                [0, 0, 71, 62],
                [73, 0, 71, 62],
                [312, 73, 25, 111],
                [339, 73, 25, 111],
                [285, 73, 25, 111],
                [366, 73, 25, 111],
                [195, 103, 25, 111],
                [222, 103, 25, 111],
                [100, 126, 40, 55],
                [0, 163, 40, 43],
                [478, 33, 10, 11],
                [79, 64, 57, 60],
                [249, 103, 23, 38],
                [478, 0, 31, 31],
                [393, 108, 50, 50],
                [84, 183, 40, 40],
                [249, 186, 40, 40],
                [291, 186, 40, 40],
                [333, 186, 40, 40],
                [375, 193, 40, 40],
                [417, 193, 40, 40],
                [459, 199, 40, 40],
                [126, 202, 40, 40],
                [0, 208, 40, 40],
                [168, 216, 40, 40],
                [292, 0, 58, 71],
                [352, 0, 58, 71],
                [462, 160, 50, 37],
                [142, 126, 50, 37],
                [412, 0, 64, 64]
            ]
        }
    ];


    lib.webfontAvailable = function(family) {
        lib.properties.webfonts[family] = true;
        var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
        for (var f = 0; f < txtFilters.length; ++f) {
            txtFilters[f].updateCache();
        }
    };
    // symbols:



    (lib.again_1_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.animation_for_pointer_1_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.background_1_img = function() {
        this.spriteSheet = ss["storage_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.background_2_img = function() {
        this.spriteSheet = ss["storage_atlas_3"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.background_3_img = function() {
        this.spriteSheet = ss["storage_atlas_2"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.background_4_img = function() {
        this.spriteSheet = ss["storage_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.background_5_img = function() {
        this.spriteSheet = ss["storage_atlas_2"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.background_6_img = function() {
        this.spriteSheet = ss["storage_atlas_3"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.bag1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.bag2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.bag3_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.bag4_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.bag5_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.bag6_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.bag7_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.banner_1_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.banner_2_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.banner_play_1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.banner_play_2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_large_buttons_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_small_buttons_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_title_1_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.blinking_light_1_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.blush_1_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.blush_2_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.blush_3_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.blush_4_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.blush_5_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.blush_6_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.body_img = function() {
        this.spriteSheet = ss["storage_atlas_8"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.body_makeup_img = function() {
        this.spriteSheet = ss["storage_atlas_6"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.check_0_2_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.check_1_2_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.check_1_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.check_2_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.check_3_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.check_4_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.check_5_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.check_6_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.check_7_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.check_8_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.check_9_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.copyright_img = function() {
        this.spriteSheet = ss["storage_atlas_6"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.corner_filters_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.credits_1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.current_location_img = function() {
        this.spriteSheet = ss["storage_atlas_7"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.curtain_1_img = function() {
        this.spriteSheet = ss["storage_atlas_4"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.curtain_2_img = function() {
        this.spriteSheet = ss["storage_atlas_4"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.curtain_3_img = function() {
        this.spriteSheet = ss["storage_atlas_5"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.decor_title_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.dress10_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.dress11_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.dress12_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.dress1_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.dress2_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.dress3_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.dress4_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.dress5_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.dress6_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.dress7_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.dress8_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.dress9_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.eyes1_1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.eyes1_2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.eyes1_3_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.eyes2_1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.eyes2_2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.eyes3_1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.eyes3_2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();



    (lib.eyes4_1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();



    (lib.eyes4_2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();



    (lib.eyes5_1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();



    (lib.eyes5_2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();



    (lib.eyes6_1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();



    (lib.eyes6_2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();



    (lib.eyes_1_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.eyes_2_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.eyes_3_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.eyes_4_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();



    (lib.eyes_5_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();



    (lib.eyes_6_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();



    (lib.facebook_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.filters_bg_img = function() {
        this.spriteSheet = ss["storage_atlas_8"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.filters_exit_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();



    (lib.filters_open_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(25);
    }).prototype = p = new cjs.Sprite();



    (lib.free_games_1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(26);
    }).prototype = p = new cjs.Sprite();



    (lib.free_games_2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(27);
    }).prototype = p = new cjs.Sprite();



    (lib.fringe1_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.fringe2_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.fringe3_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(28);
    }).prototype = p = new cjs.Sprite();



    (lib.fringe4_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();



    (lib.fringe5_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(29);
    }).prototype = p = new cjs.Sprite();



    (lib.fringe6_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(30);
    }).prototype = p = new cjs.Sprite();



    (lib.fringe_0_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();



    (lib.full_screen_1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(31);
    }).prototype = p = new cjs.Sprite();



    (lib.full_screen_2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(32);
    }).prototype = p = new cjs.Sprite();



    (lib.garter_2_icon_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.garter_6_icon_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.glass1_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.glass2_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.glass3_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.glass4_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.glass5_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.glass6_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.gravity_explosion_1_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.gravity_explosion_2_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.hair1_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();



    (lib.hair2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(33);
    }).prototype = p = new cjs.Sprite();



    (lib.hair3_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();



    (lib.hair5 = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(34);
    }).prototype = p = new cjs.Sprite();



    (lib.hair6_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.hair_0_img = function() {
        this.spriteSheet = ss["storage_atlas_5"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.hairstyle_1_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();



    (lib.hairstyle_2_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();



    (lib.hairstyle_3_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();



    (lib.hairstyle_4_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();



    (lib.hairstyle_5_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(25);
    }).prototype = p = new cjs.Sprite();



    (lib.hairstyle_6_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(26);
    }).prototype = p = new cjs.Sprite();



    (lib.hairstyle_7_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(27);
    }).prototype = p = new cjs.Sprite();



    (lib.halo_img = function() {
        this.spriteSheet = ss["storage_atlas_6"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.hand2_img = function() {
        this.spriteSheet = ss["storage_atlas_6"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.hanger1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(35);
    }).prototype = p = new cjs.Sprite();



    (lib.hanger2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(36);
    }).prototype = p = new cjs.Sprite();



    (lib.hat1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(37);
    }).prototype = p = new cjs.Sprite();



    (lib.hat2_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.hat3_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.hat4_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(38);
    }).prototype = p = new cjs.Sprite();



    (lib.hat5_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(39);
    }).prototype = p = new cjs.Sprite();



    (lib.hat6_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(40);
    }).prototype = p = new cjs.Sprite();



    (lib.hat7_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(41);
    }).prototype = p = new cjs.Sprite();



    (lib.hat8_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.head_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.hero_wings1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(42);
    }).prototype = p = new cjs.Sprite();



    (lib.hero_wings2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(43);
    }).prototype = p = new cjs.Sprite();



    (lib.hero_wings3_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(44);
    }).prototype = p = new cjs.Sprite();



    (lib.hint_1_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();



    (lib.hint_2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(45);
    }).prototype = p = new cjs.Sprite();



    (lib.hint_filter_arrow_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(46);
    }).prototype = p = new cjs.Sprite();



    (lib.hint_filter_de_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(47);
    }).prototype = p = new cjs.Sprite();



    (lib.hint_filter_en_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(48);
    }).prototype = p = new cjs.Sprite();



    (lib.hint_filter_es_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(49);
    }).prototype = p = new cjs.Sprite();



    (lib.hint_filter_fr_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(50);
    }).prototype = p = new cjs.Sprite();



    (lib.hint_filter_pt_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(51);
    }).prototype = p = new cjs.Sprite();



    (lib.hint_filter_ru_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(52);
    }).prototype = p = new cjs.Sprite();



    (lib.hint_location_1_1_img = function() {
        this.spriteSheet = ss["storage_atlas_8"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.hint_location_2_1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(53);
    }).prototype = p = new cjs.Sprite();



    (lib.indicator_1_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();



    (lib.indicator_2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(54);
    }).prototype = p = new cjs.Sprite();



    (lib.indicator_part_4_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.instruction_1_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();



    (lib.lak10_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(55);
    }).prototype = p = new cjs.Sprite();



    (lib.lak11_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(56);
    }).prototype = p = new cjs.Sprite();



    (lib.lak12_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(57);
    }).prototype = p = new cjs.Sprite();



    (lib.lak1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(58);
    }).prototype = p = new cjs.Sprite();



    (lib.lak2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(59);
    }).prototype = p = new cjs.Sprite();



    (lib.lak3_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(60);
    }).prototype = p = new cjs.Sprite();



    (lib.lak4_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(61);
    }).prototype = p = new cjs.Sprite();



    (lib.lak5_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(62);
    }).prototype = p = new cjs.Sprite();



    (lib.lak6_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(63);
    }).prototype = p = new cjs.Sprite();



    (lib.lak7_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(64);
    }).prototype = p = new cjs.Sprite();



    (lib.lak8_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(65);
    }).prototype = p = new cjs.Sprite();



    (lib.lak9_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(66);
    }).prototype = p = new cjs.Sprite();



    (lib.lips0_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(67);
    }).prototype = p = new cjs.Sprite();



    (lib.lips1_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.lips2_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.lips3_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(68);
    }).prototype = p = new cjs.Sprite();



    (lib.lips4_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(69);
    }).prototype = p = new cjs.Sprite();



    (lib.lips5_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();



    (lib.lips6_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();



    (lib.lipstick_new14_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();



    (lib.lipstick_new21_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();



    (lib.lipstick_new2_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();



    (lib.lipstick_new35_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();



    (lib.lipstick_new36_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();



    (lib.lipstick_new4_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();



    (lib.location_0_1_img = function() {
        this.spriteSheet = ss["storage_atlas_7"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.location_0_2_img = function() {
        this.spriteSheet = ss["storage_atlas_7"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.location_0_3_img = function() {
        this.spriteSheet = ss["storage_atlas_7"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.location_0_4_img = function() {
        this.spriteSheet = ss["storage_atlas_7"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.location_0_5_img = function() {
        this.spriteSheet = ss["storage_atlas_7"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.location_1_1_img = function() {
        this.spriteSheet = ss["storage_atlas_7"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.location_1_2_img = function() {
        this.spriteSheet = ss["storage_atlas_7"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.location_1_3_img = function() {
        this.spriteSheet = ss["storage_atlas_7"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.location_1_4_img = function() {
        this.spriteSheet = ss["storage_atlas_7"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.location_1_5_img = function() {
        this.spriteSheet = ss["storage_atlas_8"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.logo_1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(70);
    }).prototype = p = new cjs.Sprite();



    (lib.logotype_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();



    (lib.lower_shadow_img = function() {
        this.spriteSheet = ss["storage_atlas_5"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_10_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_11_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(25);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_12_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(26);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_13_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(27);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_14_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(71);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_15_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(72);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_16_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(28);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_17_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(73);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_18_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(29);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_19_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(30);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_1_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(31);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(74);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_3_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(75);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_4_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(76);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_5_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(77);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_6_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(25);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_7_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(26);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_8_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(27);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_9_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(28);
    }).prototype = p = new cjs.Sprite();



    (lib.nail0_10_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(78);
    }).prototype = p = new cjs.Sprite();



    (lib.nail0_11_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(79);
    }).prototype = p = new cjs.Sprite();



    (lib.nail0_12_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(80);
    }).prototype = p = new cjs.Sprite();



    (lib.nail0_1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(81);
    }).prototype = p = new cjs.Sprite();



    (lib.nail0_2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(82);
    }).prototype = p = new cjs.Sprite();



    (lib.nail0_3_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(83);
    }).prototype = p = new cjs.Sprite();



    (lib.nail0_4_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(84);
    }).prototype = p = new cjs.Sprite();



    (lib.nail0_5_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(85);
    }).prototype = p = new cjs.Sprite();



    (lib.nail0_6_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(86);
    }).prototype = p = new cjs.Sprite();



    (lib.nail0_7_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(87);
    }).prototype = p = new cjs.Sprite();



    (lib.nail0_8_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(88);
    }).prototype = p = new cjs.Sprite();



    (lib.nail0_9_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(89);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_art10_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(90);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_art11_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(91);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_art12_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(92);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_art1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(93);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_art2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(94);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_art3_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(95);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_art4_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(96);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_art5_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(97);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_art6_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(98);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_art7_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(99);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_art8_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(100);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_art9_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(101);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_decor10_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(102);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_decor11_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(103);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_decor12_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(104);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_decor1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(105);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_decor2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(106);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_decor3_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(107);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_decor4_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(108);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_decor5_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(109);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_decor6_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(110);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_decor7_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(111);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_decor8_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(112);
    }).prototype = p = new cjs.Sprite();



    (lib.nail_decor9_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(113);
    }).prototype = p = new cjs.Sprite();



    (lib.nav_2_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(29);
    }).prototype = p = new cjs.Sprite();



    (lib.nav_3_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(30);
    }).prototype = p = new cjs.Sprite();



    (lib.nav_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(31);
    }).prototype = p = new cjs.Sprite();



    (lib.next_1_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(32);
    }).prototype = p = new cjs.Sprite();



    (lib.output_numbers_0_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(32);
    }).prototype = p = new cjs.Sprite();



    (lib.output_numbers_1_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(33);
    }).prototype = p = new cjs.Sprite();



    (lib.output_numbers_2_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(34);
    }).prototype = p = new cjs.Sprite();



    (lib.output_numbers_3_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(35);
    }).prototype = p = new cjs.Sprite();



    (lib.output_numbers_4_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(36);
    }).prototype = p = new cjs.Sprite();



    (lib.output_numbers_5_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(37);
    }).prototype = p = new cjs.Sprite();



    (lib.output_numbers_6_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(38);
    }).prototype = p = new cjs.Sprite();



    (lib.output_numbers_7_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(39);
    }).prototype = p = new cjs.Sprite();



    (lib.output_numbers_8_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(40);
    }).prototype = p = new cjs.Sprite();



    (lib.output_numbers_9_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(41);
    }).prototype = p = new cjs.Sprite();



    (lib.photo_1_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(33);
    }).prototype = p = new cjs.Sprite();



    (lib.play_1_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(34);
    }).prototype = p = new cjs.Sprite();



    (lib.podv1_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(42);
    }).prototype = p = new cjs.Sprite();



    (lib.podv2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(114);
    }).prototype = p = new cjs.Sprite();



    (lib.podv3_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(43);
    }).prototype = p = new cjs.Sprite();



    (lib.podv4_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(44);
    }).prototype = p = new cjs.Sprite();



    (lib.podv5_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(45);
    }).prototype = p = new cjs.Sprite();



    (lib.podv6_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(115);
    }).prototype = p = new cjs.Sprite();



    (lib.pointer_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(116);
    }).prototype = p = new cjs.Sprite();



    (lib.radio_button_0_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(35);
    }).prototype = p = new cjs.Sprite();



    (lib.radio_button_1_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(36);
    }).prototype = p = new cjs.Sprite();



    (lib.redirect_0_img = function() {
        this.spriteSheet = ss["storage_atlas_6"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.redirect_1_img = function() {
        this.spriteSheet = ss["storage_atlas_6"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.redirect_2_img = function() {
        this.spriteSheet = ss["storage_atlas_6"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.remove_1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(117);
    }).prototype = p = new cjs.Sprite();



    (lib.rouge1_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(28);
    }).prototype = p = new cjs.Sprite();



    (lib.rouge2_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.rouge3_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.rouge4_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.rouge5_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.rouge6_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.select0_1_img = function() {
        this.spriteSheet = ss["storage_atlas_7"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.select0_2_img = function() {
        this.spriteSheet = ss["storage_atlas_7"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.shadow_nav_2_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(37);
    }).prototype = p = new cjs.Sprite();



    (lib.shadow_nav_3_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(38);
    }).prototype = p = new cjs.Sprite();



    (lib.shadow_of_object_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(118);
    }).prototype = p = new cjs.Sprite();



    (lib.shadows0_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(119);
    }).prototype = p = new cjs.Sprite();



    (lib.shadows1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(120);
    }).prototype = p = new cjs.Sprite();



    (lib.shadows2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(121);
    }).prototype = p = new cjs.Sprite();



    (lib.shadows3_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(122);
    }).prototype = p = new cjs.Sprite();



    (lib.shadows4_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(123);
    }).prototype = p = new cjs.Sprite();



    (lib.shadows5_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(124);
    }).prototype = p = new cjs.Sprite();



    (lib.shadows6_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(125);
    }).prototype = p = new cjs.Sprite();



    (lib.shadows_2_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.shadows_3_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();



    (lib.shadows_4_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();



    (lib.shadows_5_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();



    (lib.shadows_6_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();



    (lib.shadows_7_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(29);
    }).prototype = p = new cjs.Sprite();



    (lib.shoes1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(126);
    }).prototype = p = new cjs.Sprite();



    (lib.shoes2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(127);
    }).prototype = p = new cjs.Sprite();



    (lib.shoes3_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(128);
    }).prototype = p = new cjs.Sprite();



    (lib.shoes4_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(39);
    }).prototype = p = new cjs.Sprite();



    (lib.shoes5_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(129);
    }).prototype = p = new cjs.Sprite();



    (lib.shoes6_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(130);
    }).prototype = p = new cjs.Sprite();



    (lib.shoes_1_icon_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(131);
    }).prototype = p = new cjs.Sprite();



    (lib.shoes_2_icon_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(132);
    }).prototype = p = new cjs.Sprite();



    (lib.shoes_3_icon_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(133);
    }).prototype = p = new cjs.Sprite();



    (lib.shoes_4_icon_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(134);
    }).prototype = p = new cjs.Sprite();



    (lib.shoes_5_icon_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(135);
    }).prototype = p = new cjs.Sprite();



    (lib.shoes_6_icon_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(136);
    }).prototype = p = new cjs.Sprite();



    (lib.snowfall_1_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(46);
    }).prototype = p = new cjs.Sprite();



    (lib.socks1_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(40);
    }).prototype = p = new cjs.Sprite();



    (lib.socks2_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(41);
    }).prototype = p = new cjs.Sprite();



    (lib.socks3_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(42);
    }).prototype = p = new cjs.Sprite();



    (lib.socks4_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(43);
    }).prototype = p = new cjs.Sprite();



    (lib.socks5_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(44);
    }).prototype = p = new cjs.Sprite();



    (lib.socks6_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(45);
    }).prototype = p = new cjs.Sprite();



    (lib.sound_1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(137);
    }).prototype = p = new cjs.Sprite();



    (lib.sound_2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(138);
    }).prototype = p = new cjs.Sprite();



    (lib.stick_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(139);
    }).prototype = p = new cjs.Sprite();



    (lib.stock_icon_1_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(140);
    }).prototype = p = new cjs.Sprite();



    (lib.stock_icon_2_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(141);
    }).prototype = p = new cjs.Sprite();



    (lib.stock_icon_3_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(142);
    }).prototype = p = new cjs.Sprite();



    (lib.stock_icon_4_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(143);
    }).prototype = p = new cjs.Sprite();



    (lib.stock_icon_5_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(144);
    }).prototype = p = new cjs.Sprite();



    (lib.stock_icon_6_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(145);
    }).prototype = p = new cjs.Sprite();



    (lib.substrate_option_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();



    (lib.title_ar_img = function() {
        this.spriteSheet = ss["storage_atlas_8"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.title_de_img = function() {
        this.spriteSheet = ss["storage_atlas_8"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.title_en_img = function() {
        this.spriteSheet = ss["storage_atlas_8"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.title_es_img = function() {
        this.spriteSheet = ss["storage_atlas_8"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.title_filter_0_en_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(146);
    }).prototype = p = new cjs.Sprite();



    (lib.title_filter_0_ru_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(147);
    }).prototype = p = new cjs.Sprite();



    (lib.title_filter_1_en_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(148);
    }).prototype = p = new cjs.Sprite();



    (lib.title_filter_1_ru_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(149);
    }).prototype = p = new cjs.Sprite();



    (lib.title_filter_2_en_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(150);
    }).prototype = p = new cjs.Sprite();



    (lib.title_filter_2_ru_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(151);
    }).prototype = p = new cjs.Sprite();



    (lib.title_filter_3_en_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(152);
    }).prototype = p = new cjs.Sprite();



    (lib.title_filter_3_ru_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(153);
    }).prototype = p = new cjs.Sprite();



    (lib.title_filter_en_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(154);
    }).prototype = p = new cjs.Sprite();



    (lib.title_filter_ru_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(155);
    }).prototype = p = new cjs.Sprite();



    (lib.title_fr_img = function() {
        this.spriteSheet = ss["storage_atlas_8"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.title_hi_img = function() {
        this.spriteSheet = ss["storage_atlas_8"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.title_id_img = function() {
        this.spriteSheet = ss["storage_atlas_8"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.title_it_img = function() {
        this.spriteSheet = ss["storage_atlas_8"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.title_ja_img = function() {
        this.spriteSheet = ss["storage_atlas_8"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.title_jk_en_img = function() {
        this.spriteSheet = ss["storage_atlas_8"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.title_jk_ru_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();



    (lib.title_pt_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();



    (lib.title_redirect_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(46);
    }).prototype = p = new cjs.Sprite();



    (lib.title_ru_img = function() {
        this.spriteSheet = ss["storage_atlas_8"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.title_tr_img = function() {
        this.spriteSheet = ss["storage_atlas_8"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.title_zh_img = function() {
        this.spriteSheet = ss["storage_atlas_8"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.track_move_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(156);
    }).prototype = p = new cjs.Sprite();



    (lib.wardrobe_2_img = function() {
        this.spriteSheet = ss["storage_atlas_6"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.wardrobe_3_img = function() {
        this.spriteSheet = ss["storage_atlas_7"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.wings_1_icon_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(157);
    }).prototype = p = new cjs.Sprite();



    (lib.wings_2_icon_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(158);
    }).prototype = p = new cjs.Sprite();



    (lib.wings_3_icon_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(159);
    }).prototype = p = new cjs.Sprite();



    (lib.title_redirect_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.title_redirect_img();
        this.instance.setTransform(-190, -30);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-190, -30, 380, 60);
    p.frameBounds = [rect];


    (lib.redirect_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.redirect_2_img();
        this.instance.setTransform(-190, -190);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-190, -190, 380, 380);
    p.frameBounds = [rect];


    (lib.redirect_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.redirect_1_img();
        this.instance.setTransform(-190, -190);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-190, -190, 380, 380);
    p.frameBounds = [rect];


    (lib.redirect_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.redirect_0_img();
        this.instance.setTransform(-200, -200);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -200, 400, 400);
    p.frameBounds = [rect];


    (lib.redirect_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EhdvAu3MAAAhdtMC7fAAAMAAABdtg");
        this.shape.setTransform(400, 300);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.preloader_18_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F77EBB").s().p("AiVAAICVhiICWBiIiWBjg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // graph
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F82991").s().p("AkqAAIEqjGIErDGIkrDHg");

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-30, -20, 60, 40);
    p.frameBounds = [rect];


    (lib.preloader_15_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["rgba(255,255,255,0)", "#FFFFFF"], [0, 1], 5.8, 10.1, -7.6, -13.1).s().p("AhHCHQhAgCgYgqQgXgoAdg2QAeg5BEgmQBAgmA/ACQBAACAYApQAXApgeA2QgdA4hCAnQg+Akg9AAIgGAAg");
        this.shape.setTransform(-54, -91.1, 1.97, 1.97);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["rgba(255,255,255,0)", "#FFFFFF"], [0, 1], -2.2, 5.9, 3, -7.9).s().p("AgUA7QglgHgUgVQgUgVAKgXQAJgZAggMQAhgOAjAHQAlAFAUAVQATAWgJAWQgKAZggAMQgXAKgYAAQgKAAgKgBg");
        this.shape_1.setTransform(0.2, -117.4, 1.97, 1.97);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));

        // graph
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#FFFFFF", "rgba(255,255,255,0)"], [0, 0.976], -0.8, -102.7, -0.7, 33.2).s().p("AmUFDQioiGABi9QgBi9CoiGQCoiGDsAAQDtAACoCGQCnCGAAC9QAAC9inCGQioCGjtABQjsgBioiGg");
        this.shape_2.setTransform(0.5, -47.8, 1.97, 1.97);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // graph
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["rgba(152,172,255,0)", "#BFC2FF"], [0, 1], 0.5, 4.5, 0.5, 38.5).s().p("Am5B1QivitgIjzQALC0CsB/QC3CKECAAQEDAAC4iKQCph/ANiyQgJDyitCsQi4C3kDAAQkCAAi3i3g");
        this.shape_3.setTransform(0, 64.1, 1.97, 1.97);

        this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

        // graph
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.rf(["rgba(255,145,175,0)", "#E023A0", "rgba(205,24,144,0)"], [0, 0.667, 1], 17, -23, 0, 17, -23, 112.1).s().p("An1H2QjQjQAAkmQAAklDQjQQDQjQElAAQEmAADQDQQDQDQAAElQAAEmjQDQQjQDQkmAAQklAAjQjQg");
        this.shape_4.setTransform(0, 0, 1.97, 1.97);

        this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

        // graph
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.lf(["#F252BC", "#F87BCE"], [0, 1], 0, 63, 0, -69).s().p("An1H2QjQjQAAkmQAAklDQjQQDQjQElAAQEmAADQDQQDQDQAAElQAAEmjQDQQjQDQkmAAQklAAjQjQg");
        this.shape_5.setTransform(0, 0, 1.97, 1.97);

        this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

        // graph
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("AvcPeQmbmaAApEQAApDGbmZQGZmbJDAAQJEAAGaGbQGZGZAAJDQAAJEmZGaQmaGZpEAAQpDAAmZmZg");
        this.shape_6.setTransform(4.7, 4.7);

        this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-140, -140, 284.7, 284.7);
    p.frameBounds = [rect];


    (lib.preloader_13_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FFFFFF", "#FFCCFF"], [0, 1], 0, -59.9, 0, 60).s().p("AmoJIQgZgRgPgbQgOgeAAggIAAu7QAAggAOgeQAPgbAZgRQAZgQAdAAQAdAAAaAQILkHfQAZARAPAcQAOAcAAAfQAAAggOAcQgPAcgZARIrkHfQgaAQgdAAQgdAAgZgQg");
        this.shape.setTransform(2, 0);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-46, -60, 96, 120);
    p.frameBounds = [rect];


    (lib.preloader_11_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("A07FeQigAAAAihIAAl5QAAihCgAAMAp3AAAQCgAAAAChIAAF5QAAChigAAg");
        this.shape.setTransform(150, 35);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 300, 70);
    p.frameBounds = [rect];


    (lib.preloader_10_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("A0TgGIAAhkMAonAAAIAABkQqGBxqKAAQqIAAqPhxg");
        this.shape.setTransform(130, 10.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 260, 21.5);
    p.frameBounds = [rect];


    (lib.preloader_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#F77EBB", "#F82991"], [0, 1], 0, 17, 0, -17).s().p("Ax8CqQhHAAgygyQgygyABhGQgBhFAygyQAygyBHABMAj5AAAQBHgBAyAyQAxAyAABFQAABGgxAyQgyAyhHAAg");
        this.shape.setTransform(130, 15);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // graph
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#F77EBB", "#F82991"], [0, 1], 0, -25, 0, 25).s().p("AyvD5QhTABg6g7Qg6g7AAhTIAAhiQAAhTA6g6QA6g6BTAAMAlfAAAQBTAAA6A6QA6A6ABBTIAABiQgBBTg6A7Qg6A7hTgBg");
        this.shape_1.setTransform(130, 15);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-10, -10, 280, 50);
    p.frameBounds = [rect];


    (lib.preloader_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#66CCFF", "#6699FF", "#66CCFF"], [0, 0.494, 1], 20, 15, 20, -15).s().p("A0TCVIAAkqMAonAAAIAAEqg");
        this.shape.setTransform(130, 15);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 260, 30);
    p.frameBounds = [rect];


    (lib.preloader_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-150, -150, 300, 300);
    p.frameBounds = [rect];


    (lib.preloader_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F82991").s().p("AgKDkQgUgHgWgOQhZgygrgmQgygsgdgwQgkg5ABg4QAAhRA/glQApgZAxAAQA5AAAnAZQAcAQAVAgQAVggAdgQQAmgZA6AAQAyAAAoAZQBAAlAABRQAAA4gkA5QgdAwgyAsQgrAmhZAyQgWAOgTAHQgHACgFAAQgFAAgFgCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-30, -23, 60, 46.1);
    p.frameBounds = [rect];


    (lib.preloader_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F77EBB").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
        this.shape.setTransform(400, 300);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.orientation_lock_10_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AhFAtIEQAAQAAjMiRiRQiPiRjPAAQiqAAiABjIk1k0QEBjiFeAAQGAAAEQERQEQERABF/IEHAAInmNIg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -88.5, 180, 177.1);
    p.frameBounds = [rect];


    (lib.orientation_lock_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#333333").s().p("AhTBUQgkgjABgxQgBgxAkgiQAjgjAwAAQAyAAAiAjQAjAiAAAxQAAAxgjAjQgiAjgyAAQgwAAgjgjg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-12, -12, 24, 24);
    p.frameBounds = [rect];


    (lib.orientation_lock_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#333333").s().p("AkgA8QgaAAgRgSQgSgRAAgZQAAgYASgRQARgSAaAAIJBAAQAZAAASASQASARAAAYQAAAZgSARQgSASgZAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-35, -6, 70, 12);
    p.frameBounds = [rect];


    (lib.orientation_lock_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#333333").s().p("AiwCwQhIhJgBhnQAAgWAFgWQAMhLA4g5QA5g4BLgMQAQgEASAAIAKgBIAOABQBeAEBEBEQBKBKAABmQAABnhKBJQhJBKhnAAQhmAAhKhKgAgKikQg+ADgsAtQgxAxAABDQAAATAEASQAJAuAkAiQAxAxBDAAQBEAAAxgxQAxgxAAhEQAAhDgxgxQgigkgugJQgLgDgMAAIgOgBIgKABg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25, -25, 50, 50);
    p.frameBounds = [rect];


    (lib.orientation_lock_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("A1FbVMAAAg2pMAqLAAAMAAAA2pg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-135, -175, 270, 350);
    p.frameBounds = [rect];


    (lib.orientation_lock_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("EgRzAnEQiVgBhphpQhqhpAAiVMAAAhC3QAAiVBqhpQBphpCVgBMAjnAAAQCVABBpBpQBqBpAACVMAAABC3QAACVhqBpQhpBpiVABg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-150, -250, 300, 500);
    p.frameBounds = [rect];


    (lib.instruction_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.text = new cjs.Text("text", "100px 'Arial'");
        this.text.lineHeight = 114;
        this.text.lineWidth = 317;
        this.text.setTransform(-158.4, -55.8);

        this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-160.4, -57.8, 321, 115.8);
    p.frameBounds = [rect];


    (lib.instruction_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFCCFF").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
        this.shape.setTransform(400, 300);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.wings_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.wings_3_icon_img();
        this.instance.setTransform(-75, -47.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfJXIAAytIY/AAIAAStg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -60, 160, 120);
    p.frameBounds = [rect];


    (lib.wings_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.wings_2_icon_img();
        this.instance.setTransform(-109, -29.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuGPIAAseMAldAAAIAAMeg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-120, -40, 240, 80);
    p.frameBounds = [rect];


    (lib.wings_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.wings_1_icon_img();
        this.instance.setTransform(-66.5, -38);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7HCIAAuCIV3AAIAAOCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-70, -45, 140, 90);
    p.frameBounds = [rect];


    (lib.wardrobe_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.wardrobe_3_img();
        this.instance.setTransform(-200, -260, 0.87, 0.87);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -260, 400, 226.1);
    p.frameBounds = [rect];


    (lib.wardrobe_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.wardrobe_2_img();
        this.instance.setTransform(-220, -249, 0.957, 0.957);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-220, -249, 440, 497.4);
    p.frameBounds = [rect];


    (lib.title_filter_body_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.title_filter_en_img();
        this.instance.setTransform(-100, -20);

        this.instance_1 = new lib.title_filter_ru_img();
        this.instance_1.setTransform(-100, -20);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-100, -20, 200, 40);
    p.frameBounds = [rect, rect];


    (lib.title_filter_body_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.title_filter_3_en_img();
        this.instance.setTransform(1, 1, 0.95, 0.95);

        this.instance_1 = new lib.title_filter_3_ru_img();
        this.instance_1.setTransform(1, 1, 0.95, 0.95);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(1, 1, 228, 38);
    p.frameBounds = [rect, rect];


    (lib.title_filter_body_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.title_filter_2_en_img();

        this.instance_1 = new lib.title_filter_2_ru_img();

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 240, 40);
    p.frameBounds = [rect, rect];


    (lib.title_filter_body_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.title_filter_1_en_img();
        this.instance.setTransform(1, 1, 0.95, 0.95);

        this.instance_1 = new lib.title_filter_1_ru_img();

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(1, 1, 228, 38);
    p.frameBounds = [rect, new cjs.Rectangle(0, 0, 240, 40)];


    (lib.title_filter_body_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.title_filter_0_en_img();
        this.instance.setTransform(1, 1, 0.95, 0.95);

        this.instance_1 = new lib.title_filter_0_ru_img();
        this.instance_1.setTransform(1, 1, 0.95, 0.95);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(1, 1, 228, 38);
    p.frameBounds = [rect, rect];


    (lib.substrate_option_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.substrate_option_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.stock_icon_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.stock_icon_6_img();
        this.instance.setTransform(-25, -107);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkSR9MAAAgj5IIlAAMAAAAj5g");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-27.5, -115, 55, 230);
    p.frameBounds = [rect];


    (lib.stock_icon_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.stock_icon_5_img();
        this.instance.setTransform(-25, -107);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkSR9MAAAgj5IIlAAMAAAAj5g");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-27.5, -115, 55, 230);
    p.frameBounds = [rect];


    (lib.stock_icon_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.stock_icon_4_img();
        this.instance.setTransform(-25, -107);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkSR9MAAAgj5IIlAAMAAAAj5g");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-27.5, -115, 55, 230);
    p.frameBounds = [rect];


    (lib.stock_icon_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.stock_icon_3_img();
        this.instance.setTransform(-25, -107);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkSR9MAAAgj5IIlAAMAAAAj5g");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-27.5, -115, 55, 230);
    p.frameBounds = [rect];


    (lib.stock_icon_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.stock_icon_2_img();
        this.instance.setTransform(-25, -107);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkSR9MAAAgj5IIlAAMAAAAj5g");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-27.5, -115, 55, 230);
    p.frameBounds = [rect];


    (lib.stock_icon_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.stock_icon_1_img();
        this.instance.setTransform(-25, -107);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkSR9MAAAgj5IIlAAMAAAAj5g");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-27.5, -115, 55, 230);
    p.frameBounds = [rect];


    (lib.stick_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.stick_img();
        this.instance.setTransform(-155, -12, 0.775, 0.775);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-155, -12, 310, 23.3);
    p.frameBounds = [rect];


    (lib.socks_all_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.socks1_img();
        this.instance.setTransform(-89, -108);

        this.instance_1 = new lib.socks2_img();
        this.instance_1.setTransform(-89, -107);

        this.instance_2 = new lib.socks3_img();
        this.instance_2.setTransform(-89, -107);

        this.instance_3 = new lib.socks4_img();
        this.instance_3.setTransform(-89, -108);

        this.instance_4 = new lib.socks5_img();
        this.instance_4.setTransform(-89, -108);

        this.instance_5 = new lib.socks6_img();
        this.instance_5.setTransform(-89, -108);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-89, -108, 179, 214);
    p.frameBounds = [rect, rect = new cjs.Rectangle(-89, -107, 179, 214), rect, rect = new cjs.Rectangle(-89, -108, 179, 214), rect, rect, null];


    (lib.shoes_all_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.shoes1_img();
        this.instance.setTransform(-82, -46.5);

        this.instance_1 = new lib.shoes2_img();
        this.instance_1.setTransform(-83, -19);

        this.instance_2 = new lib.shoes3_img();
        this.instance_2.setTransform(-82.5, -46);

        this.instance_3 = new lib.shoes4_img();
        this.instance_3.setTransform(-81.9, -90.5);

        this.instance_4 = new lib.shoes5_img();
        this.instance_4.setTransform(-82, -48);

        this.instance_5 = new lib.shoes6_img();
        this.instance_5.setTransform(-82, -57);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-82, -46.5, 164, 93);
    p.frameBounds = [rect, new cjs.Rectangle(-83, -19, 164, 66), new cjs.Rectangle(-82.5, -46, 163, 93), new cjs.Rectangle(-81.9, -90.5, 171, 137), new cjs.Rectangle(-82, -48, 163, 93), new cjs.Rectangle(-82, -57, 163, 103), null];


    (lib.shoes_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.shoes_6_icon_img();
        this.instance.setTransform(49, -50, 1, 1, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AngJIIh6iFIAkvqIMNgmIGEO7IhgDgg");
        this.shape.setTransform(-1.2, -0.9);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-61.5, -59.9, 120.8, 118.2);
    p.frameBounds = [rect];


    (lib.shoes_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.shoes_5_icon_img();
        this.instance.setTransform(49, -45, 1, 1, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApEETIB1roIKfhJIF1OPIg8CfIvdAPg");
        this.shape.setTransform(-0.3, -2.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-58.5, -56.4, 116.4, 108.7);
    p.frameBounds = [rect];


    (lib.shoes_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.shoes_4_icon_img();
        this.instance.setTransform(58, -67, 1, 1, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApKLDIhm0oIOkirIG9VyIheCXIwxAYg");
        this.shape.setTransform(1.4, -2.2);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-67.5, -80.6, 137.9, 157);
    p.frameBounds = [rect];


    (lib.shoes_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.shoes_3_icon_img();
        this.instance.setTransform(49, -47, 1, 1, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApbFGIBYtVILrAAIF0NiIhsC6IvnADg");
        this.shape.setTransform(0.2, 0.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60.2, -52.5, 121, 105.7);
    p.frameBounds = [rect];


    (lib.shoes_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.shoes_2_icon_img();
        this.instance.setTransform(49, -33, 1, 1, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnEGfIiFjfIB0pqIN4AAICnMEIhwBRg");
        this.shape.setTransform(-0.5, -2.8);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-59.1, -45.5, 117.4, 85.4);
    p.frameBounds = [rect];


    (lib.shoes_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.shoes_1_icon_img();
        this.instance.setTransform(53, -47, 1, 1, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AptF/IAvuXIM2gRIF2N/IhjDPIvxAFg");
        this.shape.setTransform(0.4, -0.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-61.8, -56.1, 124.5, 111);
    p.frameBounds = [rect];


    (lib.shadows_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.shadows0_img();

        this.instance_1 = new lib.shadows1_img();
        this.instance_1.setTransform(-8.2, -7);

        this.instance_2 = new lib.shadows2_img();
        this.instance_2.setTransform(-8.8, -6.9);

        this.instance_3 = new lib.shadows3_img();
        this.instance_3.setTransform(-9.1, -4.8);

        this.instance_4 = new lib.shadows4_img();
        this.instance_4.setTransform(-9.1, -6);

        this.instance_5 = new lib.shadows5_img();
        this.instance_5.setTransform(-7, -5.3);

        this.instance_6 = new lib.shadows6_img();
        this.instance_6.setTransform(-8.2, -10);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 163, 31);
    p.frameBounds = [rect, new cjs.Rectangle(-8.2, -7, 180, 39), new cjs.Rectangle(-8.8, -6.9, 186, 39), new cjs.Rectangle(-9.1, -4.8, 187, 48), new cjs.Rectangle(-9.1, -6, 185, 50), new cjs.Rectangle(-7, -5.3, 180, 42), new cjs.Rectangle(-8.2, -10, 180, 59)];


    (lib.shadow_nav_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.shadow_nav_3_img();
        this.instance.setTransform(-90, -90);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -90, 180, 180);
    p.frameBounds = [rect];


    (lib.shadow_nav_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.shadow_nav_2_img();
        this.instance.setTransform(-90, -90);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -90, 180, 180);
    p.frameBounds = [rect];


    (lib.set_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("AlgFhQiTiSAAjPQAAjNCTiTQCSiTDOAAQDOAACTCTQCTCTAADNQAADPiTCSQiTCTjOAAQjOAAiSiTg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-50, -50, 100, 100);
    p.frameBounds = [rect];


    (lib.rouge_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.rouge1_img();
        this.instance.setTransform(-114.6, -96.7);

        this.instance_1 = new lib.rouge2_img();
        this.instance_1.setTransform(-118.2, -96.7);

        this.instance_2 = new lib.rouge3_img();
        this.instance_2.setTransform(-118.2, -96.7);

        this.instance_3 = new lib.rouge4_img();
        this.instance_3.setTransform(-118.2, -96.7);

        this.instance_4 = new lib.rouge5_img();
        this.instance_4.setTransform(-118.2, -96.7);

        this.instance_5 = new lib.rouge6_img();
        this.instance_5.setTransform(-118.2, -96.7);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-114.6, -96.7, 229, 207);
    p.frameBounds = [rect, rect = new cjs.Rectangle(-118.2, -96.7, 234, 207), rect, rect, rect, rect, null];


    (lib.podv_all_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.podv1_img();
        this.instance.setTransform(-29, -35.5);

        this.instance_1 = new lib.podv2_img();
        this.instance_1.setTransform(-90.9, -9.5);

        this.instance_2 = new lib.podv3_img();
        this.instance_2.setTransform(-28.9, -29.5);

        this.instance_3 = new lib.podv4_img();
        this.instance_3.setTransform(-28.4, 3.5);

        this.instance_4 = new lib.podv5_img();
        this.instance_4.setTransform(-28.5, 3.5);

        this.instance_5 = new lib.podv6_img();
        this.instance_5.setTransform(-97.9, 29);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-29, -35.5, 58, 71);
    p.frameBounds = [rect, new cjs.Rectangle(-90.9, -9.5, 117, 64), new cjs.Rectangle(-28.9, -29.5, 58, 71), new cjs.Rectangle(-28.4, 3.5, 50, 37), new cjs.Rectangle(-28.5, 3.5, 50, 37), new cjs.Rectangle(-97.9, 29, 114, 41), null];


    (lib.nd12_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_decor1.png
        this.instance = new lib.nail_decor12_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.nd11_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_decor1.png
        this.instance = new lib.nail_decor11_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.nd10_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_decor1.png
        this.instance = new lib.nail_decor10_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.nd9_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_decor1.png
        this.instance = new lib.nail_decor9_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.nd8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_decor1.png
        this.instance = new lib.nail_decor8_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.nd7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_decor1.png
        this.instance = new lib.nail_decor7_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.nd6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_decor1.png
        this.instance = new lib.nail_decor6_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.nd5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_decor1.png
        this.instance = new lib.nail_decor5_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.nd4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_decor1.png
        this.instance = new lib.nail_decor4_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.nd3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_decor1.png
        this.instance = new lib.nail_decor3_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.nd2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_decor1.png
        this.instance = new lib.nail_decor2_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.nd1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_decor1.png
        this.instance = new lib.nail_decor1_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.nail_decor_all_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.nail_decor1_img();
        this.instance.setTransform(-25.5, -49);

        this.instance_1 = new lib.nail_decor2_img();
        this.instance_1.setTransform(-25.5, -49);

        this.instance_2 = new lib.nail_decor3_img();
        this.instance_2.setTransform(-25.5, -49);

        this.instance_3 = new lib.nail_decor4_img();
        this.instance_3.setTransform(-25.5, -49);

        this.instance_4 = new lib.nail_decor5_img();
        this.instance_4.setTransform(-25.5, -49);

        this.instance_5 = new lib.nail_decor6_img();
        this.instance_5.setTransform(-25.5, -49);

        this.instance_6 = new lib.nail_decor7_img();
        this.instance_6.setTransform(-25.5, -49);

        this.instance_7 = new lib.nail_decor8_img();
        this.instance_7.setTransform(-25.5, -49);

        this.instance_8 = new lib.nail_decor9_img();
        this.instance_8.setTransform(-25.5, -49);

        this.instance_9 = new lib.nail_decor10_img();
        this.instance_9.setTransform(-25.5, -49);

        this.instance_10 = new lib.nail_decor11_img();
        this.instance_10.setTransform(-25.5, -49);

        this.instance_11 = new lib.nail_decor12_img();
        this.instance_11.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: [{
                t: this.instance_10
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


    (lib.nail_color_all_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.nail0_1_img();
        this.instance.setTransform(-25.5, -49);

        this.instance_1 = new lib.nail0_2_img();
        this.instance_1.setTransform(-25.5, -49);

        this.instance_2 = new lib.nail0_3_img();
        this.instance_2.setTransform(-25.5, -49);

        this.instance_3 = new lib.nail0_4_img();
        this.instance_3.setTransform(-25.5, -49);

        this.instance_4 = new lib.nail0_5_img();
        this.instance_4.setTransform(-25.5, -49);

        this.instance_5 = new lib.nail0_6_img();
        this.instance_5.setTransform(-25.5, -49);

        this.instance_6 = new lib.nail0_7_img();
        this.instance_6.setTransform(-25.5, -49);

        this.instance_7 = new lib.nail0_8_img();
        this.instance_7.setTransform(-25.5, -49);

        this.instance_8 = new lib.nail0_9_img();
        this.instance_8.setTransform(-25.5, -49);

        this.instance_9 = new lib.nail0_10_img();
        this.instance_9.setTransform(-25.5, -49);

        this.instance_10 = new lib.nail0_11_img();
        this.instance_10.setTransform(-25.5, -49);

        this.instance_11 = new lib.nail0_12_img();
        this.instance_11.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: [{
                t: this.instance_10
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


    (lib.nail_art_all_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.nail_art1_img();
        this.instance.setTransform(-25.5, -49);

        this.instance_1 = new lib.nail_art2_img();
        this.instance_1.setTransform(-25.5, -49);

        this.instance_2 = new lib.nail_art3_img();
        this.instance_2.setTransform(-25.5, -49);

        this.instance_3 = new lib.nail_art4_img();
        this.instance_3.setTransform(-25.5, -49);

        this.instance_4 = new lib.nail_art5_img();
        this.instance_4.setTransform(-25.5, -49);

        this.instance_5 = new lib.nail_art6_img();
        this.instance_5.setTransform(-25.5, -49);

        this.instance_6 = new lib.nail_art7_img();
        this.instance_6.setTransform(-25.5, -49);

        this.instance_7 = new lib.nail_art8_img();
        this.instance_7.setTransform(-25.5, -49);

        this.instance_8 = new lib.nail_art9_img();
        this.instance_8.setTransform(-25.5, -49);

        this.instance_9 = new lib.nail_art10_img();
        this.instance_9.setTransform(-25.5, -49);

        this.instance_10 = new lib.nail_art11_img();
        this.instance_10.setTransform(-25.5, -49);

        this.instance_11 = new lib.nail_art12_img();
        this.instance_11.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: [{
                t: this.instance_10
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


    (lib.na12_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_art1.png
        this.instance = new lib.nail_art12_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.na11_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_art1.png
        this.instance = new lib.nail_art11_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.na10_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_art1.png
        this.instance = new lib.nail_art10_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.na9_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_art1.png
        this.instance = new lib.nail_art9_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.na8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_art1.png
        this.instance = new lib.nail_art8_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.na7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_art1.png
        this.instance = new lib.nail_art7_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.na6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_art1.png
        this.instance = new lib.nail_art6_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.na5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_art1.png
        this.instance = new lib.nail_art5_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.na4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_art1.png
        this.instance = new lib.nail_art4_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.na3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_art1.png
        this.instance = new lib.nail_art3_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.na2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_art1.png
        this.instance = new lib.nail_art2_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.na1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // nail_art1.png
        this.instance = new lib.nail_art1_img();
        this.instance.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // nail0_1.png
        this.instance_1 = new lib.nail0_1_img();
        this.instance_1.setTransform(-25.5, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.5, -49, 51, 98);
    p.frameBounds = [rect];


    (lib.lower_shadow_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.lower_shadow_img();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 1200, 200);
    p.frameBounds = [rect];


    (lib.lips_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.lips0_img();

        this.instance_1 = new lib.lips1_img();

        this.instance_2 = new lib.lips2_img();

        this.instance_3 = new lib.lips3_img();

        this.instance_4 = new lib.lips4_img();

        this.instance_5 = new lib.lips5_img();

        this.instance_6 = new lib.lips6_img();

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 71, 62);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


    (lib.indicator_part_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.indicator_part_4_img();
        this.instance.setTransform(-20, -20);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20, -20, 40, 40);
    p.frameBounds = [rect];


    (lib.indicator_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.indicator_2_img();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 220, 30);
    p.frameBounds = [rect];


    (lib.indicator_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.indicator_1_img();
        this.instance.setTransform(-140, -40);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-140, -40, 280, 80);
    p.frameBounds = [rect];


    (lib.hint_location_3_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("AhsCnQgRgLgPgPQg7g6ABhTQgBhSA7g6QA7g7BRABQBTgBA6A7QA7A6gBBSQABBTg7A6QgQAPgRANQgwAeg8AAQg8ABgwghgAhphpQgsAsAAA9QAAA8ApAqIADAEQAsAsA9AAQA+AAAsgsIACgDQApgrABg8QAAg9gsgsQgsgsg+AAQg9AAgsAsg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20, -20, 40, 40);
    p.frameBounds = [rect];


    (lib.hint_location_2_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.hint_location_2_1_img();
        this.instance.setTransform(-32, -25);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -25, 140, 150);
    p.frameBounds = [rect];


    (lib.hint_location_1_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.hint_location_1_1_img();
        this.instance.setTransform(-150, -125);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-150, -125, 300, 250);
    p.frameBounds = [rect];


    (lib.hint_filter_arrow_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.hint_filter_arrow_img();
        this.instance.setTransform(-60, -60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.hint_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.hint_2_img();
        this.instance.setTransform(-33, -51.1, 0.825, 0.825);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-33, -51.1, 66, 102.3);
    p.frameBounds = [rect];


    (lib.hint_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.hint_1_img();
        this.instance.setTransform(-110, -80);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -80, 220, 160);
    p.frameBounds = [rect];


    (lib.hero_wings_all_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.hero_wings1_img();
        this.instance.setTransform(-116, -38);

        this.instance_1 = new lib.hero_wings2_img();
        this.instance_1.setTransform(-108.5, -27.5);

        this.instance_2 = new lib.hero_wings3_img();
        this.instance_2.setTransform(-93, -51.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-116, -38, 232, 76);
    p.frameBounds = [rect, new cjs.Rectangle(-108.5, -27.5, 241, 75), new cjs.Rectangle(-93, -51.5, 220, 95), null];


    (lib.headdress_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.hat8_img();
        this.instance.setTransform(-38.5, -23.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzGPIAAsdIPnAAIAAMdg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-50, -40, 100, 80);
    p.frameBounds = [rect];


    (lib.headdress_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.hat7_img();
        this.instance.setTransform(-42.5, -33.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzGQIAAsfIPnAAIAAMfg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-50, -40, 100, 80);
    p.frameBounds = [rect];


    (lib.headdress_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.hat6_img();
        this.instance.setTransform(-37, -32);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzGQIAAsfIPnAAIAAMfg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-50, -40, 100, 80);
    p.frameBounds = [rect];


    (lib.headdress_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.hat5_img();
        this.instance.setTransform(-44, -35.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzGQIAAsfIPnAAIAAMfg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-50, -40, 100, 80);
    p.frameBounds = [rect];


    (lib.headdress_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.hat4_img();
        this.instance.setTransform(-49.5, -26.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzGQIAAsfIPnAAIAAMfg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-50, -40, 100, 80);
    p.frameBounds = [rect];


    (lib.headdress_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.hat3_img();
        this.instance.setTransform(-37, -20);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzGQIAAsfIPnAAIAAMfg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-50, -40, 100, 80);
    p.frameBounds = [rect];


    (lib.headdress_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.hat2_img();
        this.instance.setTransform(-44, -18.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-44, -18.5, 88, 37);
    p.frameBounds = [rect];


    (lib.headdress_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.hat1_img();
        this.instance.setTransform(-36.5, -31);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzGQIAAsfIPnAAIAAMfg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-50, -40, 100, 80);
    p.frameBounds = [rect];


    (lib.hat_all_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.hat1_img();
        this.instance.setTransform(-36.5, -31);

        this.instance_1 = new lib.hat2_img();
        this.instance_1.setTransform(-42.9, -11);

        this.instance_2 = new lib.hat3_img();
        this.instance_2.setTransform(-33.5, 2);

        this.instance_3 = new lib.hat4_img();
        this.instance_3.setTransform(-48.5, -1.5);

        this.instance_4 = new lib.hat5_img();
        this.instance_4.setTransform(-41.9, -32);

        this.instance_5 = new lib.hat6_img();
        this.instance_5.setTransform(-35.4, -22.5);

        this.instance_6 = new lib.hat7_img();
        this.instance_6.setTransform(-40.5, -27.5);

        this.instance_7 = new lib.hat8_img();
        this.instance_7.setTransform(-37, -8);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-36.5, -31, 73, 62);
    p.frameBounds = [rect, new cjs.Rectangle(-42.9, -11, 88, 37), new cjs.Rectangle(-33.5, 2, 74, 40), new cjs.Rectangle(-48.5, -1.5, 99, 53), new cjs.Rectangle(-41.9, -32, 88, 71), new cjs.Rectangle(-35.4, -22.5, 74, 64), new cjs.Rectangle(-40.5, -27.5, 85, 67), new cjs.Rectangle(-37, -8, 77, 47), null];


    (lib.hanger2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.hanger2_img();
        this.instance.setTransform(-54, -29.1, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-54, -29.1, 108, 58.3);
    p.frameBounds = [rect];


    (lib.hanger1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.hanger1_img();
        this.instance.setTransform(-54, -29.1, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-54, -29.1, 108, 58.3);
    p.frameBounds = [rect];


    (lib.hand2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.hand2_img();
        this.instance.setTransform(-211, -283);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-211, -283, 422, 566);
    p.frameBounds = [rect];


    (lib.hair_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.hair_0_img();
        this.instance.setTransform(-77.1, -103.8, 0.33, 0.33);

        this.instance_1 = new lib.hair1_img();
        this.instance_1.setTransform(-103.4, -109.3);

        this.instance_2 = new lib.hair2_img();
        this.instance_2.setTransform(-53.4, -76.8);

        this.instance_3 = new lib.hair3_img();
        this.instance_3.setTransform(-67.2, -92.1);

        this.instance_4 = new lib.hair5();
        this.instance_4.setTransform(-52.8, -84.7);

        this.instance_5 = new lib.hair6_img();
        this.instance_5.setTransform(-99.4, -95.3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-77.1, -103.8, 154.2, 207.7);
    p.frameBounds = [rect, new cjs.Rectangle(-103.4, -109.3, 204, 210), new cjs.Rectangle(-53.4, -76.8, 80, 84), new cjs.Rectangle(-67.2, -92.1, 132, 214), null, new cjs.Rectangle(-52.8, -84.7, 103, 92), new cjs.Rectangle(-99.4, -95.3, 209, 259)];


    (lib.glasses_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.glass6_img();
        this.instance.setTransform(-12.7, -34.6, 1, 1, 45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRj2IEbkbIMIMIIkbEbg");
        this.shape.setTransform(0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-53, -53.1, 106.1, 106.1);
    p.frameBounds = [rect];


    (lib.glasses_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.glass5_img();
        this.instance.setTransform(-15.9, -32.1, 1, 1, 45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRj2IEbkbIMIMIIkbEbg");
        this.shape.setTransform(0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-53, -53.1, 106.1, 106.1);
    p.frameBounds = [rect];


    (lib.glasses_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.glass4_img();
        this.instance.setTransform(-16.6, -27.9, 1, 1, 45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRj2IEbkbIMIMIIkbEbg");
        this.shape.setTransform(0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-53, -53.1, 106.1, 106.1);
    p.frameBounds = [rect];


    (lib.glasses_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.glass3_img();
        this.instance.setTransform(-12.7, -30.4, 1, 1, 45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRj2IEbkbIMIMIIkbEbg");
        this.shape.setTransform(0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-53, -53.1, 106.1, 106.1);
    p.frameBounds = [rect];


    (lib.glasses_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.glass2_img();
        this.instance.setTransform(-14.1, -31.1, 1, 1, 45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRj2IEbkbIMIMIIkbEbg");
        this.shape.setTransform(0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-53, -53.1, 106.1, 106.1);
    p.frameBounds = [rect];


    (lib.glasses_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.glass1_img();
        this.instance.setTransform(-15.5, -30.4, 1, 1, 45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRj2IEbkbIMIMIIkbEbg");
        this.shape.setTransform(0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-53, -53.1, 106.1, 106.1);
    p.frameBounds = [rect];


    (lib.glass_all_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.glass1_img();
        this.instance.setTransform(-32.5, -10.5);

        this.instance_1 = new lib.glass2_img();
        this.instance_1.setTransform(-31.5, -11);

        this.instance_2 = new lib.glass3_img();
        this.instance_2.setTransform(-30, -13);

        this.instance_3 = new lib.glass4_img();
        this.instance_3.setTransform(-31, -11.5);

        this.instance_4 = new lib.glass5_img();
        this.instance_4.setTransform(-33, -15);

        this.instance_5 = new lib.glass6_img();
        this.instance_5.setTransform(-32.9, -21);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32.5, -10.5, 65, 21);
    p.frameBounds = [rect, new cjs.Rectangle(-31.5, -11, 64, 24), new cjs.Rectangle(-30, -13, 61, 25), new cjs.Rectangle(-31, -11.5, 63, 16), new cjs.Rectangle(-33, -15, 68, 23), new cjs.Rectangle(-32.9, -21, 67, 31), null];


    (lib.garter_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.garter_6_icon_img();
        this.instance.setTransform(-25, -18);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjfDRIhVjAIBDjnIHRAMIBVDLIhADVg");
        this.shape.setTransform(-0.5, -1.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-31.4, -22.7, 62, 43);
    p.frameBounds = [rect];


    (lib.garter_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.podv5_img();
        this.instance.setTransform(-25, -18.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkiC5IADmTIJCAgIhVGVg");
        this.shape.setTransform(0.4, 0.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-28.7, -21.9, 58.2, 44);
    p.frameBounds = [rect];


    (lib.garter_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.podv4_img();
        this.instance.setTransform(-25, -18.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkjDXIgLnAIJdAVIh6G+g");
        this.shape.setTransform(1.1, 1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-29.2, -22.5, 60.8, 47);
    p.frameBounds = [rect];


    (lib.garter_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.podv3_img();
        this.instance.setTransform(-29, -35.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al3GsIgGs8IL7gkIi9Npg");
        this.shape.setTransform(2.3, -1.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-35.8, -45.3, 76.4, 87.5);
    p.frameBounds = [rect];


    (lib.garter_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.garter_2_icon_img();
        this.instance.setTransform(-28, -30);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmJlcIMTgoIi9LwIm3AZg");
        this.shape.setTransform(-0.4, -0.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-39.8, -39.4, 79, 77.9);
    p.frameBounds = [rect];


    (lib.garter_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.podv1_img();
        this.instance.setTransform(-29, -35.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Alol4ILdgsIikNEIpFAFg");
        this.shape.setTransform(0.9, -2.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-36.4, -44.3, 74.8, 84.4);
    p.frameBounds = [rect];


    (lib.fringe_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.fringe_0_img();
        this.instance.setTransform(-33.5, -27.4, 0.33, 0.33);

        this.instance_1 = new lib.fringe1_img();
        this.instance_1.setTransform(-62.9, -36);

        this.instance_2 = new lib.fringe2_img();
        this.instance_2.setTransform(-75.3, -44.9);

        this.instance_3 = new lib.fringe3_img();
        this.instance_3.setTransform(-55.2, -28.8);

        this.instance_4 = new lib.fringe4_img();
        this.instance_4.setTransform(-39.6, -56);

        this.instance_5 = new lib.fringe5_img();
        this.instance_5.setTransform(-72, -31.6);

        this.instance_6 = new lib.fringe6_img();
        this.instance_6.setTransform(-38.8, -26.6);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-33.5, -27.4, 67.1, 54.8);
    p.frameBounds = [rect, new cjs.Rectangle(-62.9, -36, 118, 242), new cjs.Rectangle(-75.3, -44.9, 118, 258), new cjs.Rectangle(-55.2, -28.8, 105, 117), new cjs.Rectangle(-39.6, -56, 122, 198), new cjs.Rectangle(-72, -31.6, 146, 103), new cjs.Rectangle(-38.8, -26.6, 81, 68)];


    (lib.filters_body_open_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.filters_open_img();
        this.instance.setTransform(-45, -25);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-45, -25, 90, 50);
    p.frameBounds = [rect];


    (lib.filters_body_exit_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.filters_exit_img();
        this.instance.setTransform(-45, -25);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-45, -25, 90, 50);
    p.frameBounds = [rect];


    (lib.filters_bg_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.filters_bg_img();
        this.instance.setTransform(-190, -130);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-190, -130, 380, 260);
    p.frameBounds = [rect];


    (lib.eyes6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.eyes6_1_img();
        this.instance.setTransform(-4.8, 0.5);

        this.instance_1 = new lib.eyes6_2_img();
        this.instance_1.setTransform(-4.8, 0.5);

        this.instance_2 = new lib.eyes1_3_img();
        this.instance_2.setTransform(-4.8, 0.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 2).to({
            state: [{
                t: this.instance_2
            }]
        }, 2).to({
            state: [{
                t: this.instance_1
            }]
        }, 3).to({
            state: [{
                t: this.instance
            }]
        }, 2).wait(46));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-4.8, 0.5, 180, 71);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.eyes5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.eyes5_1_img();
        this.instance.setTransform(-4.5, 0.4);

        this.instance_1 = new lib.eyes5_2_img();
        this.instance_1.setTransform(-4.5, 0.4);

        this.instance_2 = new lib.eyes1_3_img();
        this.instance_2.setTransform(-4.5, 0.4);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 2).to({
            state: [{
                t: this.instance_2
            }]
        }, 2).to({
            state: [{
                t: this.instance_1
            }]
        }, 3).to({
            state: [{
                t: this.instance
            }]
        }, 2).wait(46));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-4.5, 0.4, 180, 71);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.eyes4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.eyes4_1_img();
        this.instance.setTransform(-5, 0.4);

        this.instance_1 = new lib.eyes4_2_img();
        this.instance_1.setTransform(-5, 0.4);

        this.instance_2 = new lib.eyes1_3_img();
        this.instance_2.setTransform(-5, 0.4);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 2).to({
            state: [{
                t: this.instance_2
            }]
        }, 2).to({
            state: [{
                t: this.instance_1
            }]
        }, 3).to({
            state: [{
                t: this.instance
            }]
        }, 2).wait(46));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-5, 0.4, 180, 71);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.eyes3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.eyes3_1_img();
        this.instance.setTransform(-5, 0.5);

        this.instance_1 = new lib.eyes3_2_img();
        this.instance_1.setTransform(-5, 0.5);

        this.instance_2 = new lib.eyes1_3_img();
        this.instance_2.setTransform(-5, 0.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 2).to({
            state: [{
                t: this.instance_2
            }]
        }, 2).to({
            state: [{
                t: this.instance_1
            }]
        }, 3).to({
            state: [{
                t: this.instance
            }]
        }, 2).wait(46));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-5, 0.5, 180, 71);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.eyes2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.eyes2_1_img();
        this.instance.setTransform(-5, 0.5);

        this.instance_1 = new lib.eyes2_2_img();
        this.instance_1.setTransform(-5, 0.5);

        this.instance_2 = new lib.eyes1_3_img();
        this.instance_2.setTransform(-5, 0.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 2).to({
            state: [{
                t: this.instance_2
            }]
        }, 2).to({
            state: [{
                t: this.instance
            }]
        }, 3).to({
            state: [{
                t: this.instance
            }]
        }, 2).wait(46));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-5, 0.5, 180, 71);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.eyes1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.eyes1_1_img();
        this.instance.setTransform(-4.5, 0.4);

        this.instance_1 = new lib.eyes1_2_img();
        this.instance_1.setTransform(-4.5, 0.4);

        this.instance_2 = new lib.eyes1_3_img();
        this.instance_2.setTransform(-4.5, 0.4);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 2).to({
            state: [{
                t: this.instance_2
            }]
        }, 2).to({
            state: [{
                t: this.instance_1
            }]
        }, 3).to({
            state: [{
                t: this.instance
            }]
        }, 2).wait(46));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-4.5, 0.4, 180, 71);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.dress_all_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.dress1_img();
        this.instance.setTransform(-106.5, -121.5);

        this.instance_1 = new lib.dress2_img();
        this.instance_1.setTransform(-109.9, -117.5);

        this.instance_2 = new lib.dress3_img();
        this.instance_2.setTransform(-92.4, -117.5);

        this.instance_3 = new lib.dress4_img();
        this.instance_3.setTransform(-95.9, -121.5);

        this.instance_4 = new lib.dress5_img();
        this.instance_4.setTransform(-95, -120);

        this.instance_5 = new lib.dress6_img();
        this.instance_5.setTransform(-97, -120);

        this.instance_6 = new lib.dress7_img();
        this.instance_6.setTransform(-93.4, -122);

        this.instance_7 = new lib.dress8_img();
        this.instance_7.setTransform(-94, -122);

        this.instance_8 = new lib.dress9_img();
        this.instance_8.setTransform(-94, -116);

        this.instance_9 = new lib.dress10_img();
        this.instance_9.setTransform(-92, -120.5);

        this.instance_10 = new lib.dress11_img();
        this.instance_10.setTransform(-94.5, -121.5);

        this.instance_11 = new lib.dress12_img();
        this.instance_11.setTransform(-95.5, -123);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: [{
                t: this.instance_10
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-106.5, -121.5, 213, 243);
    p.frameBounds = [rect, new cjs.Rectangle(-109.9, -117.5, 212, 247), new cjs.Rectangle(-92.4, -117.5, 198, 243), new cjs.Rectangle(-95.9, -121.5, 190, 251), new cjs.Rectangle(-95, -120, 208, 247), new cjs.Rectangle(-97, -120, 205, 250), new cjs.Rectangle(-93.4, -122, 178, 236), new cjs.Rectangle(-94, -122, 175, 229), new cjs.Rectangle(-94, -116, 175, 251), new cjs.Rectangle(-92, -120.5, 181, 236), new cjs.Rectangle(-94.5, -121.5, 184, 276), new cjs.Rectangle(-95.5, -123, 180, 242)];


    (lib.decor_title_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.decor_title_img();
        this.instance.setTransform(-200, -90);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -90, 400, 180);
    p.frameBounds = [rect];


    (lib.circle_nav_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AmZGXQgJgCgHgGQgGgHgCgJIgbiiIhwgOQgJgBgHgGQgGgFgDgJQgDgIADgIQAniggoi0QgCgJADgIQAEgJAHgFQAHgFAJgBIBmgFIAaiqQACgJAGgHQAGgGAJgDQAJgCAJAEIPVF6QAJAEAFAHQAFAIAAAIQAAAJgFAHQgFAIgJAEIvMF6QgFACgFAAIgHgBgAmciyQgBAKgIAHQgIAIgLAAIhcAFQAcCdgcCOIBmANQAJABAIAHQAHAHACAKIAZCTINhlQItqlQg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -40.9, 120, 81.8);
    p.frameBounds = [rect];


    (lib.check_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.check_1_img();
        this.instance.setTransform(-80, -80);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -80, 160, 160);
    p.frameBounds = [rect];


    (lib.check_1_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.check_1_2_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.check_0_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.check_0_2_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.body_title_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            en: 0,
            ru: 1,
            de: 2,
            fr: 3,
            it: 4,
            es: 5,
            pt: 6,
            tr: 7,
            ja: 8,
            hi: 9,
            ar: 10,
            id: 11,
            zh: 12
        });

        // graph
        this.instance = new lib.title_en_img();
        this.instance.setTransform(-200, -90);

        this.instance_1 = new lib.title_ru_img();
        this.instance_1.setTransform(-200, -90);

        this.instance_2 = new lib.title_de_img();
        this.instance_2.setTransform(-200, -90);

        this.instance_3 = new lib.title_fr_img();
        this.instance_3.setTransform(-200, -90);

        this.instance_4 = new lib.title_it_img();
        this.instance_4.setTransform(-200, -90);

        this.instance_5 = new lib.title_es_img();
        this.instance_5.setTransform(-200, -90);

        this.instance_6 = new lib.title_pt_img();
        this.instance_6.setTransform(-200, -90);

        this.instance_7 = new lib.title_tr_img();
        this.instance_7.setTransform(-200, -90);

        this.instance_8 = new lib.title_ja_img();
        this.instance_8.setTransform(-200, -90);

        this.instance_9 = new lib.title_hi_img();
        this.instance_9.setTransform(-200, -90);

        this.instance_10 = new lib.title_ar_img();
        this.instance_10.setTransform(-200, -90);

        this.instance_11 = new lib.title_id_img();
        this.instance_11.setTransform(-200, -90);

        this.instance_12 = new lib.title_zh_img();
        this.instance_12.setTransform(-200, -90);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: [{
                t: this.instance_10
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.instance_12
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -90, 400, 180);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.body_title_jk_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "en": 0,
            "ru": 1,
            "de": 2,
            "fr": 3,
            "it": 4,
            "es": 5,
            "pt": 6,
            "tr": 7,
            "ja": 8,
            "hi": 9,
            "ar": 10,
            "id": 11,
            "zh": 12
        });

        // graph
        this.instance = new lib.title_jk_en_img();
        this.instance.setTransform(-200, -90);

        this.instance_1 = new lib.title_jk_ru_img();
        this.instance_1.setTransform(-200, -96);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            _off: true
        }, 1).wait(1).to({
            _off: false
        }, 0).wait(11));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -90, 400, 180);
    p.frameBounds = [rect, new cjs.Rectangle(-200, -96, 400, 180), rect = new cjs.Rectangle(-200, -90, 400, 180), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.body_shadow_of_object_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.shadow_of_object_img();
        this.instance.setTransform(-60, -45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -45, 120, 90);
    p.frameBounds = [rect];


    (lib.body_pointer_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.pointer_img();
        this.instance.setTransform(-112, -59);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-112, -59, 120, 120);
    p.frameBounds = [rect];


    (lib.body_nav_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.nav_img();
        this.instance.setTransform(-90, -60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -60, 180, 120);
    p.frameBounds = [rect];


    (lib.body_nav_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.nav_3_img();
        this.instance.setTransform(-90, -90);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -90, 180, 180);
    p.frameBounds = [rect];


    (lib.body_nav_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.nav_2_img();
        this.instance.setTransform(-90, -90);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -90, 180, 180);
    p.frameBounds = [rect];


    (lib.body_halo_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.halo_img();
        this.instance.setTransform(-200, -200);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -200, 400, 400);
    p.frameBounds = [rect];


    (lib.body_current_location_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.current_location_img();
        this.instance.setTransform(-180, -180);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-180, -180, 360, 360);
    p.frameBounds = [rect];


    (lib.bg_title_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.bg_title_1_img();
        this.instance.setTransform(-200, -90);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -90, 400, 180);
    p.frameBounds = [rect];


    (lib.bag_all_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.bag1_img();
        this.instance.setTransform(-40, -43.5);

        this.instance_1 = new lib.bag2_img();
        this.instance_1.setTransform(-40, -40);

        this.instance_2 = new lib.bag3_img();
        this.instance_2.setTransform(-35, -35);

        this.instance_3 = new lib.bag4_img();
        this.instance_3.setTransform(-32, -37);

        this.instance_4 = new lib.bag5_img();
        this.instance_4.setTransform(-41, -39);

        this.instance_5 = new lib.bag6_img();
        this.instance_5.setTransform(-40, -38);

        this.instance_6 = new lib.bag7_img();
        this.instance_6.setTransform(-36, -39);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-40, -43.5, 80, 87);
    p.frameBounds = [rect, new cjs.Rectangle(-40, -40, 80, 74), new cjs.Rectangle(-35, -35, 80, 76), new cjs.Rectangle(-32, -37, 80, 93), new cjs.Rectangle(-41, -39, 85, 78), new cjs.Rectangle(-40, -38, 90, 98), new cjs.Rectangle(-36, -39, 85, 93), null];


    (lib.animation_for_pointer_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.animation_for_pointer_1_img();
        this.instance.setTransform(-90, -90);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -90, 180, 180);
    p.frameBounds = [rect];


    (lib.accessory_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.bag7_img();
        this.instance.setTransform(-42.5, -46.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHzIAAvmIODAAIAAPmg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-45, -50, 90, 100);
    p.frameBounds = [rect];


    (lib.accessory_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.bag6_img();
        this.instance.setTransform(-45, -49);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHzIAAvmIODAAIAAPmg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-45, -50, 90, 100);
    p.frameBounds = [rect];


    (lib.accessory_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.bag5_img();
        this.instance.setTransform(-42.5, -39);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHzIAAvmIODAAIAAPmg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-45, -50, 90, 100);
    p.frameBounds = [rect];


    (lib.accessory_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.bag4_img();
        this.instance.setTransform(-40, -46.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHzIAAvmIODAAIAAPmg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-45, -50, 90, 100);
    p.frameBounds = [rect];


    (lib.accessory_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.bag3_img();
        this.instance.setTransform(-40, -38);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHzIAAvmIODAAIAAPmg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-45, -50, 90, 100);
    p.frameBounds = [rect];


    (lib.accessory_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.bag2_img();
        this.instance.setTransform(-40, -37);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHzIAAvmIODAAIAAPmg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-45, -50, 90, 100);
    p.frameBounds = [rect];


    (lib.accessory_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.bag1_img();
        this.instance.setTransform(-40, -43.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHzIAAvmIODAAIAAPmg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-45, -50, 90, 100);
    p.frameBounds = [rect];


    (lib.curtain_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.curtain_3_img();
        this.instance.setTransform(-300, -300);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-300, -300, 600, 600);
    p.frameBounds = [rect];


    (lib.curtain_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#660099").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
        this.shape.setTransform(600, 300);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.curtain_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.curtain_2_img();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.curtain_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.curtain_1_img();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.copyright_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.copyright_img();
        this.instance.setTransform(-250, -150);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-250, -150, 500, 300);
    p.frameBounds = [rect];


    (lib.copyright_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
        this.shape.setTransform(400, 300);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.Snowflake = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.snowfall_1_img();
        this.instance.setTransform(-32, -32);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect];


    (lib.snowfall_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // viewer
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
        this.shape.setTransform(600, 250, 1.5, 0.833);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 1200, 500);
    p.frameBounds = [rect];


    (lib.radio_button_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.radio_button_0_img();
        this.instance.setTransform(-20, -20, 0.222, 0.222);

        this.instance_1 = new lib.radio_button_1_img();
        this.instance_1.setTransform(-20, -20, 0.222, 0.222);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20, -20, 40, 40);
    p.frameBounds = [rect, rect];


    (lib.output_numbers_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // numbers
        this.instance = new lib.output_numbers_0_img();
        this.instance.setTransform(-20, -20);

        this.instance_1 = new lib.output_numbers_1_img();
        this.instance_1.setTransform(-20, -20);

        this.instance_2 = new lib.output_numbers_2_img();
        this.instance_2.setTransform(-20, -20);

        this.instance_3 = new lib.output_numbers_3_img();
        this.instance_3.setTransform(-20, -20);

        this.instance_4 = new lib.output_numbers_4_img();
        this.instance_4.setTransform(-20, -20);

        this.instance_5 = new lib.output_numbers_5_img();
        this.instance_5.setTransform(-20, -20);

        this.instance_6 = new lib.output_numbers_6_img();
        this.instance_6.setTransform(-20, -20);

        this.instance_7 = new lib.output_numbers_7_img();
        this.instance_7.setTransform(-20, -20);

        this.instance_8 = new lib.output_numbers_8_img();
        this.instance_8.setTransform(-20, -20);

        this.instance_9 = new lib.output_numbers_9_img();
        this.instance_9.setTransform(-20, -20);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20, -20, 40, 40);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.ParticleGravityExplosionMC = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.gravity_explosion_1_img();
        this.instance.setTransform(-18, -18, 0.75, 0.75);

        this.instance_1 = new lib.gravity_explosion_2_img();
        this.instance_1.setTransform(-24, -24);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-18, -18, 36, 36);
    p.frameBounds = [rect, new cjs.Rectangle(-24, -24, 48, 48)];


    (lib.bubble_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // viewer
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
        this.shape.setTransform(600, 275, 1, 0.917);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 1200, 550);
    p.frameBounds = [rect];


    (lib.blinking_light_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.blinking_light_1_img();
        this.instance.setTransform(-25, -25);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25, -25, 50, 50);
    p.frameBounds = [rect];


    (lib.track_move_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.track_move_img();
        this.instance.setTransform(-50, -50);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-50, -50, 100, 100);
    p.frameBounds = [rect];


    (lib.sound_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.sound_2_img();
        this.instance.setTransform(-50, -50);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-50, -50, 100, 100);
    p.frameBounds = [rect];


    (lib.sound_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.sound_1_img();
        this.instance.setTransform(-60, -60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.remove_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

        // bg
        this.instance = new lib.remove_1_img();
        this.instance.setTransform(-40, -40);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-40, -40, 80, 80);
    p.frameBounds = [rect, null];


    (lib.play_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.play_1_img();
        this.instance.setTransform(-95, -95);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect];


    (lib.photo_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.photo_1_img();
        this.instance.setTransform(-95, -95);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect];


    (lib.next_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.next_1_img();
        this.instance.setTransform(-95, -95);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect];


    (lib.more_games_15_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.more_games_19_img();
        this.instance.setTransform(-0.4, -0.2, 0.26, 0.26);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-0.4, -0.2, 8.1, 8);
    p.frameBounds = [rect];


    (lib.more_games_14_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.more_games_18_img();
        this.instance.setTransform(0, 0.1, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0.1, 16.6, 27.4);
    p.frameBounds = [rect];


    (lib.more_games_13_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.more_games_17_img();
        this.instance.setTransform(-0.1, -0.1, 0.24, 0.24);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-0.1, -0.1, 23.8, 24);
    p.frameBounds = [rect];


    (lib.more_games_12_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.more_games_1_img();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 50, 50);
    p.frameBounds = [rect];


    (lib.more_games_11_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.more_games_16_img();
        this.instance.setTransform(2.7, -7.5, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(2.7, -7.5, 41.1, 43.2);
    p.frameBounds = [rect];


    (lib.more_games_10_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.more_games_6_img();
        this.instance.setTransform(-69.8, -64.1, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-69.8, -64.1, 139.7, 128.2);
    p.frameBounds = [rect];


    (lib.more_games_9_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.more_games_15_img();
        this.instance.setTransform(0, 0, 0.822, 0.822);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 82.2, 60);
    p.frameBounds = [rect];


    (lib.more_games_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.more_games_14_img();
        this.instance.setTransform(0.3, 0.1, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0.3, 0.1, 49.7, 67.7);
    p.frameBounds = [rect];


    (lib.more_games_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.more_games_13_img();
        this.instance.setTransform(0.1, -0.1, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0.1, -0.1, 7.2, 7.9);
    p.frameBounds = [rect];


    (lib.more_games_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.more_games_10_img();
        this.instance.setTransform(0, 1.5, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 1.5, 133.9, 135.4);
    p.frameBounds = [rect];


    (lib.more_games_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.more_games_9_img();
        this.instance.setTransform(0.1, -0.1, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0.1, -0.1, 133.9, 114.5);
    p.frameBounds = [rect];


    (lib.more_games_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.more_games_8_img();
        this.instance.setTransform(-0.1, 0, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-0.1, 0, 134.7, 95.1);
    p.frameBounds = [rect];


    (lib.more_games_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.more_games_7_img();
        this.instance.setTransform(-0.3, 0, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-0.3, 0, 134.7, 123.1);
    p.frameBounds = [rect];


    (lib.logotype_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.logotype_img();
        this.instance.setTransform(-170, -40);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4CGPQihABAAigIAAnfQAAigChABMAwFAAAQChgBAACgIAAHfQAACgihgBg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-170, -40, 340, 80);
    p.frameBounds = [rect];


    (lib.logo_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.logo_1_img();
        this.instance.setTransform(-110, -40);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("At5GPQhWABg+g+Qg9g9AAhYIAAl5QAAhYA9g9QA+g+BWABIbzAAQBWgBA+A+QA9A9AABYIAAF5QAABYg9A9Qg+A+hWgBg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -40, 220, 80);
    p.frameBounds = [rect];


    (lib.instruction_1_mc_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.instruction_1_img();
        this.instance.setTransform(-95, -95);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect];


    (lib.full_screen_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.full_screen_2_img();
        this.instance.setTransform(-60, -60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.full_screen_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.full_screen_1_img();
        this.instance.setTransform(-60, -60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.free_games_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.free_games_2_img();
        this.instance.setTransform(-60, -60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.free_games_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.free_games_1_img();
        this.instance.setTransform(-60, -60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.facebook_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.facebook_img();
        this.instance.setTransform(-60, -60, 0.667, 0.667);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.Cursor = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "default": 0
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("Aj2D3QhnhnAAiQQAAiPBnhnQBnhnCPAAQCQAABnBnQBnBnAACPQAACQhnBnQhnBniQAAQiPAAhnhng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-35, -35, 70, 70);
    p.frameBounds = [rect];


    (lib.credits_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.credits_1_img();
        this.instance.setTransform(-60, -60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.bg_small_buttons_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.bg_small_buttons_img();
        this.instance.setTransform(-60, -60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.bg_large_buttons_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.bg_large_buttons_img();
        this.instance.setTransform(-95, -95);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect];


    (lib.beam_light_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.mouseChildren = false;
            this.mouseEnabled = false;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["rgba(255,255,255,0)", "rgba(255,255,255,0.298)", "rgba(255,255,255,0)"], [0.024, 0.494, 0.984], -75.1, 0, 74.9, 0).s().p("EgLsAnEMAAAhOHIXZAAMAAABOHg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -250, 150, 500);
    p.frameBounds = [rect];


    (lib.banner_play_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.banner_play_2_img();
        this.instance.setTransform(-60, -60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.banner_play_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.banner_play_1_img();
        this.instance.setTransform(-60, -60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.again_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.again_1_img();
        this.instance.setTransform(-95, -95);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect];


    (lib.redirect_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // title
        this.instance = new lib.title_redirect_mc();
        this.instance.setTransform(0, 240);
        this.instance.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({
            y: 360
        }, 0).to({
            y: 240,
            alpha: 1
        }, 10).wait(40).to({
            alpha: 0.602
        }, 5).to({
            alpha: 1
        }, 5).to({
            alpha: 0.602
        }, 5).to({
            alpha: 1
        }, 5).wait(110).to({
            y: 360,
            alpha: 0.012
        }, 10).wait(1));

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AAdedIgdgkIgcAkI9OAAMAAAg85MA7VAAAMAAAA85g");
        mask.setTransform(0, 5);

        // image_1
        this.instance_1 = new lib.redirect_4_mc();

        this.instance_1.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({
            alpha: 0.012
        }, 15).to({
            _off: true
        }, 1).wait(149).to({
            _off: false,
            scaleX: 0.5,
            scaleY: 0.5,
            x: 95,
            y: 95
        }, 0).to({
            scaleX: 1,
            scaleY: 1,
            x: 0,
            y: 0,
            alpha: 1
        }, 15).wait(1));

        // image_2
        this.instance_2 = new lib.redirect_5_mc();
        this.instance_2._off = true;

        this.instance_2.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({
            _off: false
        }, 0).wait(55).to({
            alpha: 0.012
        }, 15).to({
            _off: true
        }, 1).wait(39).to({
            _off: false,
            scaleX: 0.5,
            scaleY: 0.5,
            x: -95,
            y: -95
        }, 0).to({
            scaleX: 1,
            scaleY: 1,
            x: 0,
            y: 0,
            alpha: 1
        }, 15).wait(56));

        // image_1
        this.instance_3 = new lib.redirect_4_mc();
        this.instance_3._off = true;

        this.instance_3.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({
            _off: false
        }, 0).wait(70).to({
            _off: true
        }, 1).wait(55));

        // bg
        this.instance_4 = new lib.redirect_3_mc();
        this.instance_4.alpha = 0.398;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(220));

        // hit
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EggyAlgMAAAhK/MBBlAAAMAAABK/g");
        this.shape.setTransform(0, 30);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-210, -210, 420, 480.1);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210, -210, 420, 600), new cjs.Rectangle(-210, -210, 420, 588), new cjs.Rectangle(-210, -210, 420, 576), new cjs.Rectangle(-210, -210, 420, 564), new cjs.Rectangle(-210, -210, 420, 552), new cjs.Rectangle(-210, -210, 420, 540), new cjs.Rectangle(-210, -210, 420, 528), new cjs.Rectangle(-210, -210, 420, 516), new cjs.Rectangle(-210, -210, 420, 504), new cjs.Rectangle(-210, -210, 420, 492), rect = new cjs.Rectangle(-210, -210, 420, 480.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210, -210, 420, 492), new cjs.Rectangle(-210, -210, 420, 504), new cjs.Rectangle(-210, -210, 420, 516), new cjs.Rectangle(-210, -210, 420, 528), new cjs.Rectangle(-210, -210, 420, 540), new cjs.Rectangle(-210, -210, 420, 552), new cjs.Rectangle(-210, -210, 420, 564), new cjs.Rectangle(-210, -210, 420, 576), new cjs.Rectangle(-210, -210, 420, 588), new cjs.Rectangle(-210, -210, 420, 600)];


    (lib.preloader_16_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.preloader_13_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({
            scaleX: 1.25,
            scaleY: 1.25,
            x: -10
        }, 5).to({
            x: 10
        }, 10).to({
            scaleX: 1,
            scaleY: 1,
            x: 0
        }, 5).wait(41));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-46, -60, 96, 120);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-50.3, -63, 100.8, 126), new cjs.Rectangle(-54.5, -66, 105.6, 132), new cjs.Rectangle(-58.8, -69, 110.4, 138), new cjs.Rectangle(-63.2, -72, 115.2, 144), new cjs.Rectangle(-67.5, -75, 120, 150), new cjs.Rectangle(-65.4, -75, 120, 150), new cjs.Rectangle(-63.4, -75, 120, 150), new cjs.Rectangle(-61.4, -75, 120, 150), new cjs.Rectangle(-59.5, -75, 120, 150), new cjs.Rectangle(-57.5, -75, 120, 150), new cjs.Rectangle(-55.5, -75, 120, 150), new cjs.Rectangle(-53.5, -75, 120, 150), new cjs.Rectangle(-51.5, -75, 120, 150), new cjs.Rectangle(-49.5, -75, 120, 150), new cjs.Rectangle(-47.5, -75, 120, 150), new cjs.Rectangle(-47.2, -72, 115.2, 144), new cjs.Rectangle(-47, -69, 110.4, 138), new cjs.Rectangle(-46.7, -66, 105.6, 132), new cjs.Rectangle(-46.4, -63, 100.8, 126), rect = new cjs.Rectangle(-46, -60, 96, 120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.preloader_14_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // icon
        this.instance = new lib.preloader_16_mc();
        this.instance.setTransform(8, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.instance_1 = new lib.preloader_15_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-140, -140, 284.7, 284.7);
    p.frameBounds = [rect];


    (lib.preloader_12_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.preloader_14_mc();
        this.instance.setTransform(0, 0.1, 0.462, 0.462, 0, 0, 0, 0, 0.2);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AntHuQjOjNAAkhQAAkgDOjOQAygyA5gmQCph1DZAAQDaAACqB1QA4AmAzAyQDMDOABEgQgBEhjMDNQjODOkhAAQkgAAjNjOg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // bg
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("Ap7J8QkHkIgBl0QABlzEHkIQBChBBHgxQDbiWEXAAQEYAADbCWQBIAxBBBBQEIEIAAFzQAAF0kIEIQkHEHl1ABQlzgBkIkHg");

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -90, 180, 180);
    p.frameBounds = [rect];


    (lib.preloader_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_99 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

        // decor
        this.instance = new lib.preloader_18_mc();
        this.instance.setTransform(130, 32, 0.4, 0.4);

        this.instance_1 = new lib.preloader_18_mc();
        this.instance_1.setTransform(130, -2, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(100));

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AAVCVIgVgYIgUAYIxtAAQg7gBgqgrQgrgqgCg8IAAgFQACg8ArgqQAqgrA7gCIRtAAIAUAaIAVgaIRtAAQA7ACArArQAqAqACA8IAAAFQgCA8gqAqQgrArg7ABg");
        mask.setTransform(130, 15);

        // shadow
        this.instance_2 = new lib.preloader_10_mc();

        this.instance_2.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

        // animation
        this.instance_3 = new lib.preloader_7_mc();
        this.instance_3.setTransform(0, 0, 0.003, 1);

        this.instance_3.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({
            scaleX: 1
        }, 99).wait(1));

        // bg
        this.instance_4 = new lib.preloader_8_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

        // shadow
        this.instance_5 = new lib.preloader_11_mc();
        this.instance_5.setTransform(-20, -20);
        this.instance_5.alpha = 0.102;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20, -20, 300, 70);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.preloader_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.preloader_2_mc();
        this.instance.setTransform(-525, 0);

        this.instance_1 = new lib.preloader_2_mc();
        this.instance_1.setTransform(-455, 0);

        this.instance_2 = new lib.preloader_2_mc();
        this.instance_2.setTransform(-385, 0);

        this.instance_3 = new lib.preloader_2_mc();
        this.instance_3.setTransform(-315, 0);

        this.instance_4 = new lib.preloader_2_mc();
        this.instance_4.setTransform(-245, 0);

        this.instance_5 = new lib.preloader_2_mc();
        this.instance_5.setTransform(-105.5, 0);

        this.instance_6 = new lib.preloader_2_mc();
        this.instance_6.setTransform(-175, 0);

        this.instance_7 = new lib.preloader_2_mc();
        this.instance_7.setTransform(525, 0);

        this.instance_8 = new lib.preloader_2_mc();
        this.instance_8.setTransform(455, 0);

        this.instance_9 = new lib.preloader_2_mc();
        this.instance_9.setTransform(385, 0);

        this.instance_10 = new lib.preloader_2_mc();
        this.instance_10.setTransform(315, 0);

        this.instance_11 = new lib.preloader_2_mc();
        this.instance_11.setTransform(245, 0);

        this.instance_12 = new lib.preloader_2_mc();
        this.instance_12.setTransform(175, 0);

        this.instance_13 = new lib.preloader_2_mc();
        this.instance_13.setTransform(105, 0);

        this.instance_14 = new lib.preloader_2_mc();
        this.instance_14.setTransform(35, 0);

        this.instance_15 = new lib.preloader_2_mc();
        this.instance_15.setTransform(-35, 0);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_15
            }, {
                t: this.instance_14
            }, {
                t: this.instance_13
            }, {
                t: this.instance_12
            }, {
                t: this.instance_11
            }, {
                t: this.instance_10
            }, {
                t: this.instance_9
            }, {
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-555, -23, 1110, 46.1);
    p.frameBounds = [rect];


    (lib.preloader_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.preloader_2_mc();
        this.instance.setTransform(-560, 0);

        this.instance_1 = new lib.preloader_2_mc();
        this.instance_1.setTransform(-490, 0);

        this.instance_2 = new lib.preloader_2_mc();
        this.instance_2.setTransform(-420, 0);

        this.instance_3 = new lib.preloader_2_mc();
        this.instance_3.setTransform(-350, 0);

        this.instance_4 = new lib.preloader_2_mc();
        this.instance_4.setTransform(-280, 0);

        this.instance_5 = new lib.preloader_2_mc();
        this.instance_5.setTransform(-210, 0);

        this.instance_6 = new lib.preloader_2_mc();
        this.instance_6.setTransform(-140, 0);

        this.instance_7 = new lib.preloader_2_mc();
        this.instance_7.setTransform(-70, 0);

        this.instance_8 = new lib.preloader_2_mc();
        this.instance_8.setTransform(560, 0);

        this.instance_9 = new lib.preloader_2_mc();
        this.instance_9.setTransform(490, 0);

        this.instance_10 = new lib.preloader_2_mc();
        this.instance_10.setTransform(420, 0);

        this.instance_11 = new lib.preloader_2_mc();
        this.instance_11.setTransform(350, 0);

        this.instance_12 = new lib.preloader_2_mc();
        this.instance_12.setTransform(280, 0);

        this.instance_13 = new lib.preloader_2_mc();
        this.instance_13.setTransform(210, 0);

        this.instance_14 = new lib.preloader_2_mc();
        this.instance_14.setTransform(140, 0);

        this.instance_15 = new lib.preloader_2_mc();
        this.instance_15.setTransform(70, 0);

        this.instance_16 = new lib.preloader_2_mc();
        this.instance_16.setTransform(0, 0.1);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_16
            }, {
                t: this.instance_15
            }, {
                t: this.instance_14
            }, {
                t: this.instance_13
            }, {
                t: this.instance_12
            }, {
                t: this.instance_11
            }, {
                t: this.instance_10
            }, {
                t: this.instance_9
            }, {
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-590, -23, 1180, 46.1);
    p.frameBounds = [rect];


    (lib.preloader_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.preloader_4_mc();
        this.instance.setTransform(400, 50);
        this.instance.alpha = 0.199;

        this.instance_1 = new lib.preloader_4_mc();
        this.instance_1.setTransform(400, 550);
        this.instance_1.alpha = 0.199;

        this.instance_2 = new lib.preloader_3_mc();
        this.instance_2.setTransform(400, 500);
        this.instance_2.alpha = 0.148;

        this.instance_3 = new lib.preloader_3_mc();
        this.instance_3.setTransform(400, 100);
        this.instance_3.alpha = 0.148;

        this.instance_4 = new lib.preloader_4_mc();
        this.instance_4.setTransform(400, 450);
        this.instance_4.alpha = 0.102;

        this.instance_5 = new lib.preloader_4_mc();
        this.instance_5.setTransform(400, 150);
        this.instance_5.alpha = 0.102;

        this.instance_6 = new lib.preloader_3_mc();
        this.instance_6.setTransform(400, 400);
        this.instance_6.alpha = 0.051;

        this.instance_7 = new lib.preloader_3_mc();
        this.instance_7.setTransform(400, 200);
        this.instance_7.alpha = 0.051;

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        // graph
        this.instance_8 = new lib.preloader_0_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.orientation_lock_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.orientation_lock_8_mc();
        this.instance.setTransform(60, 0);

        this.instance_1 = new lib.orientation_lock_6_mc();

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-35, -12, 107, 24);
    p.frameBounds = [rect];


    (lib.wings_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.substrate_mc = new lib.remove_1_mc();
        this.substrate_mc.setTransform(0.1, 0, 0.45, 0.45, 0, 0, 0, 0.2, 0);

        this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-18, -18, 36, 36);
    p.frameBounds = [rect];


    (lib.wardrobe_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.wardrobe_3_mc();
        this.instance.setTransform(0, -70);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // graph
        this.instance_1 = new lib.wardrobe_3_mc();
        this.instance_1.setTransform(0, 120);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -330, 400, 416.1);
    p.frameBounds = [rect];


    (lib.title_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /*
            ищем наиболее подходящий язык
            https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
            */
            this.stop();
            this.body_mc.gotoAndStop(0);
            /*
		
            */
            var label_str = "en";
            var lang_str = window.navigator.language || navigator.userLanguage;
            lang_str = lang_str.split("-")[0].toLowerCase();
            /*
		
            */
            if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz")) {
                label_str = "ru";
            }
            if (lang_str == "de") {
                label_str = "de";
            }
            if (lang_str == "fr") {
                label_str = "fr";
            }
            if (lang_str == "it") {
                label_str = "it";
            }
            if (lang_str == "es") {
                label_str = "es";
            }
            if (lang_str == "pt") {
                label_str = "pt";
            }
            if (lang_str == "tr") {
                label_str = "tr";
            }
            if (lang_str == "ja") {
                label_str = "ja";
            }
            if (lang_str == "hi") {
                label_str = "hi";
            }
            if (lang_str == "ar") {
                label_str = "ar";
            }
            if (lang_str == "id") {
                label_str = "id";
            }
            if (lang_str == "zh") {
                label_str = "zh";
            }
            /*
		
            */
            this.body_mc.gotoAndStop(label_str);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // body
        this.body_mc = new lib.body_title_mc();
        this.body_mc.setTransform(-0.5, -0.5, 1, 1, 0, 0, 0, -0.5, -0.5);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -90, 400, 180);
    p.frameBounds = [rect];


    (lib.title_jk_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /*
            ищем наиболее подходящий язык
            https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
            */
            this.stop();
            this.body_mc.gotoAndStop(0);
            /*
		
            */
            var label_str = "en";
            var lang_str = window.navigator.language || navigator.userLanguage;
            lang_str = lang_str.split("-")[0].toLowerCase();
            /*
		
            */
            if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz")) {
                label_str = "ru";
            }
            if (lang_str == "de") {
                label_str = "de";
            }
            if (lang_str == "fr") {
                label_str = "fr";
            }
            if (lang_str == "it") {
                label_str = "it";
            }
            if (lang_str == "es") {
                label_str = "es";
            }
            if (lang_str == "pt") {
                label_str = "pt";
            }
            if (lang_str == "tr") {
                label_str = "tr";
            }
            if (lang_str == "ja") {
                label_str = "ja";
            }
            if (lang_str == "hi") {
                label_str = "hi";
            }
            if (lang_str == "ar") {
                label_str = "ar";
            }
            if (lang_str == "id") {
                label_str = "id";
            }
            if (lang_str == "zh") {
                label_str = "zh";
            }
            /*
		
            */
            this.body_mc.gotoAndStop(label_str);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // body
        this.body_mc = new lib.body_title_jk_mc();
        this.body_mc.setTransform(-0.5, -0.5, 1, 1, 0, 0, 0, -0.5, -0.5);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -90, 400, 180);
    p.frameBounds = [rect];


    (lib.title_filter_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /*
            устанавливаем рус. или англ. название
            */
            this.stop();
            this.body_mc.gotoAndStop(0);
            var lang_str = window.navigator.language || navigator.userLanguage;
            lang_str = lang_str.split("-")[0].toLowerCase();
            if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be")) {
                this.body_mc.gotoAndStop(1);
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // body
        this.body_mc = new lib.title_filter_body_mc();
        this.body_mc.setTransform(0, 0, 1, 1, 0, 0, 0, -0.5, -0.5);
        this.body_mc.alpha = 0.801;

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-99.5, -19.5, 200, 40);
    p.frameBounds = [rect];


    (lib.title_filter_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /*
            устанавливаем рус. или англ. название
            */
            this.stop();
            this.body_mc.gotoAndStop(0);
            var lang_str = window.navigator.language || navigator.userLanguage;
            lang_str = lang_str.split("-")[0].toLowerCase();
            if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be")) {
                this.body_mc.gotoAndStop(1);
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // body
        this.body_mc = new lib.title_filter_body_3_mc();
        this.body_mc.setTransform(0, 0, 1, 1, 0, 0, 0, -0.5, -0.5);
        this.body_mc.alpha = 0.801;

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(1.5, 1.5, 228, 38);
    p.frameBounds = [rect];


    (lib.title_filter_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /*
            устанавливаем рус. или англ. название
            */
            this.stop();
            this.body_mc.gotoAndStop(0);
            var lang_str = window.navigator.language || navigator.userLanguage;
            lang_str = lang_str.split("-")[0].toLowerCase();
            if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be")) {
                this.body_mc.gotoAndStop(1);
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // body
        this.body_mc = new lib.title_filter_body_2_mc();
        this.body_mc.setTransform(0, 0, 1, 1, 0, 0, 0, -0.5, -0.5);
        this.body_mc.alpha = 0.801;

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0.5, 0.5, 240, 40);
    p.frameBounds = [rect];


    (lib.title_filter_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /*
            устанавливаем рус. или англ. название
            */
            this.stop();
            this.body_mc.gotoAndStop(0);
            var lang_str = window.navigator.language || navigator.userLanguage;
            lang_str = lang_str.split("-")[0].toLowerCase();
            if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be")) {
                this.body_mc.gotoAndStop(1);
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // body
        this.body_mc = new lib.title_filter_body_1_mc();
        this.body_mc.setTransform(0, 0, 1, 1, 0, 0, 0, -0.5, -0.5);
        this.body_mc.alpha = 0.801;

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(1.5, 1.5, 228, 38);
    p.frameBounds = [rect];


    (lib.title_filter_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /*
            устанавливаем рус. или англ. название
            */
            this.stop();
            this.body_mc.gotoAndStop(0);
            var lang_str = window.navigator.language || navigator.userLanguage;
            lang_str = lang_str.split("-")[0].toLowerCase();
            if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be")) {
                this.body_mc.gotoAndStop(1);
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // body
        this.body_mc = new lib.title_filter_body_0_mc();
        this.body_mc.setTransform(0, 0, 1, 1, 0, 0, 0, -0.5, -0.5);
        this.body_mc.alpha = 0.801;

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(1.5, 1.5, 228, 38);
    p.frameBounds = [rect];


    (lib.stock_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.substrate_mc = new lib.remove_1_mc();
        this.substrate_mc.setTransform(0.1, 0, 0.45, 0.45, 0, 0, 0, 0.2, 0);

        this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-18, -18, 36, 36);
    p.frameBounds = [rect];


    (lib.shoes_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.substrate_mc = new lib.remove_1_mc();
        this.substrate_mc.setTransform(0.1, 0, 0.45, 0.45, 0, 0, 0, 0.2, 0);

        this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-18, -18, 36, 36);
    p.frameBounds = [rect];


    (lib.shadows_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.substrate_mc = new lib.remove_1_mc();
        this.substrate_mc.setTransform(0.1, 0, 0.6, 0.6, 0, 0, 0, 0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-24, -24, 48, 48);
    p.frameBounds = [rect];


    (lib.shadow_of_object_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.mouseChildren = false;
            this.mouseEnabled = false;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // body
        this.instance = new lib.body_shadow_of_object_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -45, 120, 90);
    p.frameBounds = [rect];


    (lib.rhinestones_12_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.na12_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.rhinestones_11_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.na11_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.rhinestones_10_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.na10_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.rhinestones_9_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.na9_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.rhinestones_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.na8_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.rhinestones_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.na7_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.rhinestones_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.na6_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.rhinestones_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.na5_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.rhinestones_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.na4_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.rhinestones_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.na3_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.rhinestones_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.na2_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.rhinestones_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.na1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.rhinestones_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.substrate_mc = new lib.remove_1_mc();
        this.substrate_mc.setTransform(0.1, 0, 0.6, 0.6, 0, 0, 0, 0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-24, -24, 48, 48);
    p.frameBounds = [rect];


    (lib.pattern_12_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.nd12_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.pattern_11_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.nd11_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.pattern_10_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.nd10_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.pattern_9_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.nd9_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.pattern_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.nd8_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.pattern_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.nd7_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.pattern_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.nd6_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.pattern_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.nd5_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.pattern_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.nd4_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.pattern_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.nd3_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.pattern_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.nd2_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.pattern_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.nd1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -50, 120, 135);
    p.frameBounds = [rect];


    (lib.pattern_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.substrate_mc = new lib.remove_1_mc();
        this.substrate_mc.setTransform(0.1, 0, 0.6, 0.6, 0, 0, 0, 0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-24, -24, 48, 48);
    p.frameBounds = [rect];


    (lib.nav_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("ApAECIiygXQA3jcg3j5ICogIIAokCIUVH0I0JH1g");

        // animation
        this.instance = new lib.beam_light_0_mc();
        this.instance.setTransform(-200, 0, 1, 1, 30);

        this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({
            x: 200
        }, 20).wait(41));

        // graph
        this.instance_1 = new lib.body_nav_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap7J8QkIkHAAl1QAAl0EIkHQEHkIF0AAQF0AAEIEIQEIEHAAF0QAAF1kIEHQkIEIl0AAQl0AAkHkIg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -90, 180.1, 180);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.nav_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.shadow_nav_3_mc();
        this.instance.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({
            alpha: 1
        }, 20).to({
            alpha: 0.012
        }, 20).wait(1));

        // animation
        this.instance_1 = new lib.body_nav_3_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap7J9QkHkIgBl1QABl0EHkHQEHkIF0AAQF1AAEHEIQEHEHABF0QgBF1kHEIQkHEGl1ABQl0gBkHkGg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(110));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -90, 180, 180);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.nav_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.shadow_nav_2_mc();
        this.instance.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({
            alpha: 1
        }, 20).to({
            alpha: 0.012
        }, 20).wait(1));

        // graph
        this.instance_1 = new lib.body_nav_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap7J9QkHkIgBl1QABl0EHkHQEHkIF0AAQF1AAEHEIQEHEHABF0QgBF1kHEIQkHEGl1ABQl0gBkHkGg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(110));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -90, 180, 180);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.lips_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.substrate_mc = new lib.remove_1_mc();
        this.substrate_mc.setTransform(0.1, 0, 0.6, 0.6, 0, 0, 0, 0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-24, -24, 48, 48);
    p.frameBounds = [rect];


    (lib.lacquer_12_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.lak12_img();
        this.instance.setTransform(-25, -69.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 64);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al2MGIAA4MILtAAIAAYMg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -77.5, 120, 186.5);
    p.frameBounds = [rect];


    (lib.lacquer_11_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.lak11_img();
        this.instance.setTransform(-25, -69.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 64);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al2MGIAA4MILtAAIAAYMg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -77.5, 120, 186.5);
    p.frameBounds = [rect];


    (lib.lacquer_10_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.lak10_img();
        this.instance.setTransform(-25, -69.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 64);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al2MGIAA4MILtAAIAAYMg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -77.5, 120, 186.5);
    p.frameBounds = [rect];


    (lib.lacquer_9_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.lak9_img();
        this.instance.setTransform(-25, -69.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 64);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al2MGIAA4MILtAAIAAYMg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -77.5, 120, 186.5);
    p.frameBounds = [rect];


    (lib.lacquer_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.lak8_img();
        this.instance.setTransform(-25, -69.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 64);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al2MGIAA4MILtAAIAAYMg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -77.5, 120, 186.5);
    p.frameBounds = [rect];


    (lib.lacquer_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.lak7_img();
        this.instance.setTransform(-25, -69.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 64);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al2MGIAA4MILtAAIAAYMg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -77.5, 120, 186.5);
    p.frameBounds = [rect];


    (lib.lacquer_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.lak6_img();
        this.instance.setTransform(-25, -69.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 64);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al2MGIAA4MILtAAIAAYMg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -77.5, 120, 186.5);
    p.frameBounds = [rect];


    (lib.lacquer_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.lak5_img();
        this.instance.setTransform(-25, -69.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 64);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al2MGIAA4MILtAAIAAYMg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -77.5, 120, 186.5);
    p.frameBounds = [rect];


    (lib.lacquer_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.lak4_img();
        this.instance.setTransform(-25, -69.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 64);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al2MGIAA4MILtAAIAAYMg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -77.5, 120, 186.5);
    p.frameBounds = [rect];


    (lib.lacquer_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.lak3_img();
        this.instance.setTransform(-25, -69.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 64);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al2MGIAA4MILtAAIAAYMg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -77.5, 120, 186.5);
    p.frameBounds = [rect];


    (lib.lacquer_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.lak2_img();
        this.instance.setTransform(-25, -69.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 64);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al2MGIAA4MILtAAIAAYMg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -77.5, 120, 186.5);
    p.frameBounds = [rect];


    (lib.lacquer_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.lak1_img();
        this.instance.setTransform(-25, -69.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.instance_1 = new lib.shadow_of_object_mc();
        this.instance_1.setTransform(0, 64);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al2MGIAA4MILtAAIAAYMg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -77.5, 120, 186.5);
    p.frameBounds = [rect];


    (lib.lacquer_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.substrate_mc = new lib.remove_1_mc();
        this.substrate_mc.setTransform(0.1, 0, 0.6, 0.6, 0, 0, 0, 0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-24, -24, 48, 48);
    p.frameBounds = [rect];


    (lib.hint_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.hint_2_mc();
        this.instance.setTransform(-59.6, -12.6, 1, 1, -55.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            rotation: -33.5,
            x: -36.6,
            y: -31.6
        }, 7).to({
            rotation: 0,
            x: -0.6,
            y: -40.6
        }, 7).to({
            rotation: 42.2,
            x: 31.4,
            y: -30.6
        }, 8).to({
            rotation: 65.5,
            x: 46.4,
            y: -15.6
        }, 7).to({
            rotation: 42.2,
            x: 31.4,
            y: -30.6
        }, 8).to({
            rotation: 0,
            x: -0.6,
            y: -40.6
        }, 7).to({
            rotation: -33.5,
            x: -36.6,
            y: -31.6
        }, 8).to({
            rotation: -55.9,
            x: -59.6,
            y: -12.6
        }, 7).wait(1));

        // graph
        this.instance_1 = new lib.hint_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-120.5, -80, 230.5, 160);
    p.frameBounds = [rect, new cjs.Rectangle(-116.9, -80, 226.9, 160), new cjs.Rectangle(-113.3, -80, 223.3, 160), new cjs.Rectangle(-110, -80, 220, 160), new cjs.Rectangle(-110, -83.2, 220, 163.3), new cjs.Rectangle(-110, -86.5, 220, 166.5), new cjs.Rectangle(-110, -89.5, 220, 169.6), new cjs.Rectangle(-110, -92.5, 220, 172.6), new cjs.Rectangle(-110, -93.5, 220, 173.6), new cjs.Rectangle(-110, -94.2, 220, 174.2), new cjs.Rectangle(-110, -94.5, 220, 174.6), new cjs.Rectangle(-110, -94.3, 220, 174.4), new cjs.Rectangle(-110, -93.9, 220, 173.9), new cjs.Rectangle(-110, -92.9, 220, 173), new cjs.Rectangle(-110, -91.7, 220, 171.8), new cjs.Rectangle(-110, -93.2, 220, 173.3), new cjs.Rectangle(-110, -94.3, 220, 174.4), new cjs.Rectangle(-110, -94.9, 220, 175), new cjs.Rectangle(-110, -95.1, 220, 175.1), new cjs.Rectangle(-110, -94.7, 220, 174.8), new cjs.Rectangle(-110, -93.8, 220, 173.9), new cjs.Rectangle(-110, -92.4, 220, 172.5), new cjs.Rectangle(-110, -90.6, 220, 170.7), new cjs.Rectangle(-110, -87.7, 220, 167.8), new cjs.Rectangle(-110, -84.8, 220, 164.8), new cjs.Rectangle(-110, -81.5, 220, 161.5), rect = new cjs.Rectangle(-110, -80, 220, 160), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110, -82.7, 220, 162.7), new cjs.Rectangle(-110, -85.4, 220, 165.5), new cjs.Rectangle(-110, -88.1, 220, 168.1), new cjs.Rectangle(-110, -90.6, 220, 170.7), new cjs.Rectangle(-110, -92.7, 220, 172.8), new cjs.Rectangle(-110, -94.2, 220, 174.2), new cjs.Rectangle(-110, -95, 220, 175), new cjs.Rectangle(-110, -95.1, 220, 175.1), new cjs.Rectangle(-110, -94.6, 220, 174.6), new cjs.Rectangle(-110, -93.4, 220, 173.5), new cjs.Rectangle(-110, -91.7, 220, 171.8), new cjs.Rectangle(-110, -92.8, 220, 172.8), new cjs.Rectangle(-110, -93.6, 220, 173.7), new cjs.Rectangle(-110, -94.3, 220, 174.3), rect = new cjs.Rectangle(-110, -94.4, 220, 174.5), rect, new cjs.Rectangle(-110, -94.1, 220, 174.2), new cjs.Rectangle(-110, -93.4, 220, 173.4), new cjs.Rectangle(-110, -92.5, 220, 172.6), new cjs.Rectangle(-110, -89.5, 220, 169.6), new cjs.Rectangle(-110, -86.5, 220, 166.6), new cjs.Rectangle(-110, -83.3, 220, 163.3), new cjs.Rectangle(-110, -80, 220, 160), new cjs.Rectangle(-113.3, -80, 223.4, 160), new cjs.Rectangle(-117, -80, 227, 160), new cjs.Rectangle(-120.5, -80, 230.5, 160)];


    (lib.hero_main_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.hat1_img();
        this.instance.setTransform(-31.6, -308.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // graph
        this.instance_1 = new lib.eyes4_mc();
        this.instance_1.setTransform(7.7, -225.9, 0.33, 0.33, 0, 0, 0, 91.2, 39.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // graph
        this.instance_2 = new lib.fringe5_img();
        this.instance_2.setTransform(-65.5, -281.8);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

        // graph
        this.instance_3 = new lib.lips6_img();
        this.instance_3.setTransform(-6.1, -210.5, 0.33, 0.33);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

        // graph
        this.instance_4 = new lib.shadows1_img();
        this.instance_4.setTransform(-22.9, -234.9, 0.33, 0.33);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

        // graph
        this.instance_5 = new lib.rouge2_img();
        this.instance_5.setTransform(-31.7, -250.9, 0.33, 0.33);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

        // graph
        this.instance_6 = new lib.head_img();
        this.instance_6.setTransform(-32.4, -269.2, 0.33, 0.33);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

        // graph
        this.instance_7 = new lib.dress1_img();
        this.instance_7.setTransform(-74.9, -172);

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

        // graph
        this.instance_8 = new lib.shoes1_img();
        this.instance_8.setTransform(-100, 199.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

        // graph
        this.instance_9 = new lib.podv2_img();
        this.instance_9.setTransform(-26.4, 30.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

        // graph
        this.instance_10 = new lib.socks2_img();
        this.instance_10.setTransform(-99.2, 75);

        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

        // graph
        this.instance_11 = new lib.body_img();
        this.instance_11.setTransform(-98.5, -192.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

        // graph
        this.instance_12 = new lib.hero_wings1_img();
        this.instance_12.setTransform(-130, -204.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

        // graph
        this.instance_13 = new lib.hair5();
        this.instance_13.setTransform(-46.7, -268.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-130, -308.8, 268.1, 601.2);
    p.frameBounds = [rect];


    (lib.hero_for_makeup_main_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.eyes2_mc();
        this.instance.setTransform(20.6, -135.6, 1, 1, 0, 0, 0, 91.2, 39.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // graph
        this.instance_1 = new lib.fringe_0_img();
        this.instance_1.setTransform(-84.2, -292.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // graph
        this.instance_2 = new lib.lips2_img();
        this.instance_2.setTransform(-21.2, -88.9);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

        // graph
        this.instance_3 = new lib.shadows6_img();
        this.instance_3.setTransform(-72.4, -166.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

        // graph
        this.instance_4 = new lib.rouge4_img();
        this.instance_4.setTransform(-102.5, -214);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

        // graph
        this.instance_5 = new lib.head_img();
        this.instance_5.setTransform(-100.5, -266.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

        // graph
        this.instance_6 = new lib.body_makeup_img();
        this.instance_6.setTransform(-213, -57.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

        // graph
        this.instance_7 = new lib.hair_0_img();
        this.instance_7.setTransform(-217.4, -321.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-217.4, -321.4, 467, 629);
    p.frameBounds = [rect];


    (lib.headdress_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.substrate_mc = new lib.remove_1_mc();
        this.substrate_mc.setTransform(0.1, 0, 0.45, 0.45, 0, 0, 0, 0.2, 0);

        this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-18, -18, 36, 36);
    p.frameBounds = [rect];


    (lib.halo_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.mouseChildren = false;
            this.mouseEnabled = false;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

        // body
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AhlBtQgtgqgDg+QgBg8AqguQArgtA9gCQA9gDAsArQAvArACA+QACA8grAtQgqAtg+ADIgFAAQg6AAgrgpg");

        this.instance = new lib.body_halo_mc();
        this.instance.setTransform(0, 0, 0.9, 0.9);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.instance
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-15, -15, 30, 30);
    p.frameBounds = [rect, new cjs.Rectangle(-180, -180, 360, 360)];


    (lib.glasses_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.substrate_mc = new lib.remove_1_mc();
        this.substrate_mc.setTransform(0.1, 0, 0.45, 0.45, 0, 0, 0, 0.2, 0);

        this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-18, -18, 36, 36);
    p.frameBounds = [rect];


    (lib.garter_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.substrate_mc = new lib.remove_1_mc();
        this.substrate_mc.setTransform(0.1, 0, 0.45, 0.45, 0, 0, 0, 0.2, 0);

        this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-18, -18, 36, 36);
    p.frameBounds = [rect];


    (lib.filters_exit_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.filters_body_exit_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            scaleX: 0.9,
            scaleY: 0.9
        }, 19).to({
            scaleX: 1,
            scaleY: 1
        }, 30).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-45, -25, 90, 50);
    p.frameBounds = [rect, new cjs.Rectangle(-44.7, -24.8, 89.6, 49.8), new cjs.Rectangle(-44.5, -24.7, 89.1, 49.5), new cjs.Rectangle(-44.2, -24.6, 88.6, 49.2), new cjs.Rectangle(-44, -24.4, 88.1, 49), new cjs.Rectangle(-43.8, -24.3, 87.7, 48.7), new cjs.Rectangle(-43.5, -24.2, 87.2, 48.4), new cjs.Rectangle(-43.3, -24, 86.7, 48.2), new cjs.Rectangle(-43.1, -23.9, 86.2, 47.9), new cjs.Rectangle(-42.8, -23.8, 85.8, 47.7), new cjs.Rectangle(-42.6, -23.6, 85.3, 47.3), new cjs.Rectangle(-42.3, -23.5, 84.8, 47.1), new cjs.Rectangle(-42.1, -23.4, 84.3, 46.8), new cjs.Rectangle(-41.9, -23.2, 83.9, 46.6), new cjs.Rectangle(-41.6, -23.1, 83.4, 46.3), new cjs.Rectangle(-41.4, -23, 82.9, 46.1), new cjs.Rectangle(-41.2, -22.8, 82.4, 45.8), new cjs.Rectangle(-40.9, -22.7, 82, 45.6), new cjs.Rectangle(-40.7, -22.6, 81.5, 45.3), new cjs.Rectangle(-40.5, -22.5, 81, 45), new cjs.Rectangle(-40.6, -22.5, 81.3, 45.2), new cjs.Rectangle(-40.7, -22.6, 81.6, 45.3), new cjs.Rectangle(-40.9, -22.7, 81.9, 45.5), new cjs.Rectangle(-41, -22.8, 82.2, 45.7), new cjs.Rectangle(-41.2, -22.9, 82.5, 45.8), new cjs.Rectangle(-41.3, -22.9, 82.8, 46), new cjs.Rectangle(-41.5, -23, 83.1, 46.2), new cjs.Rectangle(-41.6, -23.1, 83.4, 46.3), new cjs.Rectangle(-41.8, -23.2, 83.7, 46.5), new cjs.Rectangle(-41.9, -23.3, 84, 46.7), new cjs.Rectangle(-42.1, -23.4, 84.3, 46.8), new cjs.Rectangle(-42.2, -23.4, 84.6, 47), new cjs.Rectangle(-42.4, -23.5, 84.9, 47.2), new cjs.Rectangle(-42.5, -23.6, 85.2, 47.3), new cjs.Rectangle(-42.7, -23.7, 85.5, 47.5), new cjs.Rectangle(-42.8, -23.8, 85.8, 47.7), new cjs.Rectangle(-43, -23.9, 86.1, 47.8), new cjs.Rectangle(-43.1, -23.9, 86.4, 48), new cjs.Rectangle(-43.3, -24, 86.7, 48.2), new cjs.Rectangle(-43.4, -24.1, 87, 48.3), new cjs.Rectangle(-43.6, -24.2, 87.3, 48.5), new cjs.Rectangle(-43.7, -24.3, 87.6, 48.7), new cjs.Rectangle(-43.9, -24.4, 87.9, 48.8), new cjs.Rectangle(-44, -24.4, 88.2, 49), new cjs.Rectangle(-44.2, -24.5, 88.5, 49.2), new cjs.Rectangle(-44.3, -24.6, 88.8, 49.3), new cjs.Rectangle(-44.5, -24.7, 89.1, 49.5), new cjs.Rectangle(-44.6, -24.8, 89.4, 49.7), new cjs.Rectangle(-44.8, -24.9, 89.7, 49.8), new cjs.Rectangle(-45, -25, 90, 50)];


    (lib.eyes_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.eyes1_mc();
        this.instance.setTransform(5.9, 12.3, 1, 1, 0, 0, 0, 91.2, 39.4);

        this.instance_1 = new lib.eyes2_mc();
        this.instance_1.setTransform(5.9, 12.3, 1, 1, 0, 0, 0, 91.2, 39.4);

        this.instance_2 = new lib.eyes3_mc();
        this.instance_2.setTransform(5.9, 12.3, 1, 1, 0, 0, 0, 91.2, 39.4);

        this.instance_3 = new lib.eyes4_mc();
        this.instance_3.setTransform(5.9, 12.3, 1, 1, 0, 0, 0, 91.2, 39.4);

        this.instance_4 = new lib.eyes5_mc();
        this.instance_4.setTransform(5.9, 12.3, 1, 1, 0, 0, 0, 91.2, 39.4);

        this.instance_5 = new lib.eyes6_mc();
        this.instance_5.setTransform(5.9, 12.3, 1, 1, 0, 0, 0, 91.2, 39.4);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-89.8, -26.7, 180, 71);
    p.frameBounds = [rect, rect = new cjs.Rectangle(-90.3, -26.6, 180, 71), rect, new cjs.Rectangle(-90.3, -26.7, 180, 71), new cjs.Rectangle(-89.8, -26.7, 180, 71), new cjs.Rectangle(-90.1, -26.6, 180, 71)];


    (lib.dr12_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // dress1.png
        this.instance = new lib.dress12_img();
        this.instance.setTransform(-96.5, -109.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // hanger2
        this.instance_1 = new lib.hanger2_mc();
        this.instance_1.setTransform(-24, -103.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-96.5, -132.9, 180, 265.8);
    p.frameBounds = [rect];


    (lib.dr11_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // dress1.png
        this.instance = new lib.dress11_img();
        this.instance.setTransform(-95.5, -109.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // hanger2
        this.instance_1 = new lib.hanger1_mc();
        this.instance_1.setTransform(-24, -103.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95.5, -132.9, 184, 299.8);
    p.frameBounds = [rect];


    (lib.dr10_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // dress1.png
        this.instance = new lib.dress10_img();
        this.instance.setTransform(-91.5, -107.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // hanger2
        this.instance_1 = new lib.hanger2_mc();
        this.instance_1.setTransform(-24, -103.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-91.5, -132.9, 181, 261.8);
    p.frameBounds = [rect];


    (lib.dr9_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // dress1.png
        this.instance = new lib.dress9_img();
        this.instance.setTransform(-95.5, -99.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // hanger2
        this.instance_1 = new lib.hanger2_mc();
        this.instance_1.setTransform(-24, -103.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95.5, -132.9, 175, 284.8);
    p.frameBounds = [rect];


    (lib.dr8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // dress1.png
        this.instance = new lib.dress8_img();
        this.instance.setTransform(-94.5, -108.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // hanger2
        this.instance_1 = new lib.hanger2_mc();
        this.instance_1.setTransform(-24, -103.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-94.5, -132.9, 175, 253.8);
    p.frameBounds = [rect];


    (lib.dr7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // dress1.png
        this.instance = new lib.dress7_img();
        this.instance.setTransform(-92.5, -109.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // hanger2
        this.instance_1 = new lib.hanger2_mc();
        this.instance_1.setTransform(-24, -103.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-92.5, -132.9, 178, 259.8);
    p.frameBounds = [rect];


    (lib.dr6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // dress1.png
        this.instance = new lib.dress6_img();
        this.instance.setTransform(-96.5, -105.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // hanger2
        this.instance_1 = new lib.hanger2_mc();
        this.instance_1.setTransform(-24, -103.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-96.5, -132.9, 205, 277.8);
    p.frameBounds = [rect];


    (lib.dr5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // dress1.png
        this.instance = new lib.dress5_img();
        this.instance.setTransform(-96.5, -105.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // hanger2
        this.instance_1 = new lib.hanger2_mc();
        this.instance_1.setTransform(-24, -103.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-96.5, -132.9, 208, 274.8);
    p.frameBounds = [rect];


    (lib.dr4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // dress1.png
        this.instance = new lib.dress4_img();
        this.instance.setTransform(-96.5, -108.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // hanger2
        this.instance_1 = new lib.hanger2_mc();
        this.instance_1.setTransform(-24, -103.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-96.5, -132.9, 190, 275.8);
    p.frameBounds = [rect];


    (lib.dr3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // dress1.png
        this.instance = new lib.dress3_img();
        this.instance.setTransform(-96.5, -103.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // hanger2
        this.instance_1 = new lib.hanger2_mc();
        this.instance_1.setTransform(-24, -103.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-96.5, -132.9, 198, 272.8);
    p.frameBounds = [rect];


    (lib.dr2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // dress1.png
        this.instance = new lib.dress2_img();
        this.instance.setTransform(-109.5, -104.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // hanger2
        this.instance_1 = new lib.hanger2_mc();
        this.instance_1.setTransform(-24, -103.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-109.5, -132.9, 212, 275.8);
    p.frameBounds = [rect];


    (lib.dr1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // dress1.png
        this.instance = new lib.dress1_img();
        this.instance.setTransform(-106.5, -110.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // hanger2
        this.instance_1 = new lib.hanger2_mc();
        this.instance_1.setTransform(-24, -103.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-106.5, -132.9, 213, 265.8);
    p.frameBounds = [rect];


    (lib.current_location_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.body_current_location_mc();
        this.instance.alpha = 0.602;

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            alpha: 0.102
        }, 39).to({
            alpha: 0.602
        }, 40).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-180, -180, 360, 360);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.corner_filters_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // title
        this.instance = new lib.title_filter_mc();
        this.instance.setTransform(14.9, -14.7, 1, 1, 45, 0, 0, 0.6, 0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.instance_1 = new lib.corner_filters_img();
        this.instance_1.setTransform(-90, -90);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -99.3, 189.4, 189.3);
    p.frameBounds = [rect];


    (lib.closet_nail_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // no
        this.lacquer_0 = new lib.lacquer_0_mc();
        this.lacquer_0.setTransform(320, -80);

        this.pattern_0 = new lib.pattern_0_mc();
        this.pattern_0.setTransform(320, -20);

        this.rhinestones_0 = new lib.rhinestones_0_mc();
        this.rhinestones_0.setTransform(320, -20);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.lacquer_0
            }]
        }).to({
            state: [{
                t: this.pattern_0
            }]
        }, 2).to({
            state: [{
                t: this.rhinestones_0
            }]
        }, 2).wait(2));

        // options
        this.lacquer_6 = new lib.lacquer_6_mc();
        this.lacquer_6.setTransform(280, 200);

        this.lacquer_5 = new lib.lacquer_5_mc();
        this.lacquer_5.setTransform(360, 200);

        this.lacquer_4 = new lib.lacquer_4_mc();
        this.lacquer_4.setTransform(320, 40);

        this.lacquer_3 = new lib.lacquer_3_mc();
        this.lacquer_3.setTransform(-260, 200);

        this.lacquer_2 = new lib.lacquer_2_mc();
        this.lacquer_2.setTransform(-360, 100);

        this.lacquer_1 = new lib.lacquer_1_mc();
        this.lacquer_1.setTransform(-280, 40);

        this.lacquer_12 = new lib.lacquer_12_mc();
        this.lacquer_12.setTransform(280, 200);

        this.lacquer_11 = new lib.lacquer_11_mc();
        this.lacquer_11.setTransform(360, 200);

        this.lacquer_10 = new lib.lacquer_10_mc();
        this.lacquer_10.setTransform(320, 40);

        this.lacquer_9 = new lib.lacquer_9_mc();
        this.lacquer_9.setTransform(-260, 200);

        this.lacquer_8 = new lib.lacquer_8_mc();
        this.lacquer_8.setTransform(-360, 100);

        this.lacquer_7 = new lib.lacquer_7_mc();
        this.lacquer_7.setTransform(-280, 40);

        this.pattern_6 = new lib.pattern_6_mc();
        this.pattern_6.setTransform(280, 200);

        this.pattern_5 = new lib.pattern_5_mc();
        this.pattern_5.setTransform(360, 200);

        this.pattern_4 = new lib.pattern_4_mc();
        this.pattern_4.setTransform(320, 80);

        this.pattern_3 = new lib.pattern_3_mc();
        this.pattern_3.setTransform(-270, 200);

        this.pattern_2 = new lib.pattern_2_mc();
        this.pattern_2.setTransform(-360, 160);

        this.pattern_1 = new lib.pattern_1_mc();
        this.pattern_1.setTransform(-290, 80);

        this.pattern_12 = new lib.pattern_12_mc();
        this.pattern_12.setTransform(280, 200);

        this.pattern_11 = new lib.pattern_11_mc();
        this.pattern_11.setTransform(360, 200);

        this.pattern_10 = new lib.pattern_10_mc();
        this.pattern_10.setTransform(320, 80);

        this.pattern_9 = new lib.pattern_9_mc();
        this.pattern_9.setTransform(-270, 200);

        this.pattern_8 = new lib.pattern_8_mc();
        this.pattern_8.setTransform(-360, 160);

        this.pattern_7 = new lib.pattern_7_mc();
        this.pattern_7.setTransform(-290, 80);

        this.rhinestones_6 = new lib.rhinestones_6_mc();
        this.rhinestones_6.setTransform(280, 200);

        this.rhinestones_5 = new lib.rhinestones_5_mc();
        this.rhinestones_5.setTransform(360, 200);

        this.rhinestones_4 = new lib.rhinestones_4_mc();
        this.rhinestones_4.setTransform(320, 80);

        this.rhinestones_3 = new lib.rhinestones_3_mc();
        this.rhinestones_3.setTransform(-270, 200);

        this.rhinestones_2 = new lib.rhinestones_2_mc();
        this.rhinestones_2.setTransform(-360, 160);

        this.rhinestones_1 = new lib.rhinestones_1_mc();
        this.rhinestones_1.setTransform(-290, 80);

        this.rhinestones_12 = new lib.rhinestones_12_mc();
        this.rhinestones_12.setTransform(280, 200);

        this.rhinestones_11 = new lib.rhinestones_11_mc();
        this.rhinestones_11.setTransform(360, 200);

        this.rhinestones_10 = new lib.rhinestones_10_mc();
        this.rhinestones_10.setTransform(320, 80);

        this.rhinestones_9 = new lib.rhinestones_9_mc();
        this.rhinestones_9.setTransform(-270, 200);

        this.rhinestones_8 = new lib.rhinestones_8_mc();
        this.rhinestones_8.setTransform(-360, 160);

        this.rhinestones_7 = new lib.rhinestones_7_mc();
        this.rhinestones_7.setTransform(-290, 80);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.lacquer_1
            }, {
                t: this.lacquer_2
            }, {
                t: this.lacquer_3
            }, {
                t: this.lacquer_4
            }, {
                t: this.lacquer_5
            }, {
                t: this.lacquer_6
            }]
        }).to({
            state: [{
                t: this.lacquer_7
            }, {
                t: this.lacquer_8
            }, {
                t: this.lacquer_9
            }, {
                t: this.lacquer_10
            }, {
                t: this.lacquer_11
            }, {
                t: this.lacquer_12
            }]
        }, 1).to({
            state: [{
                t: this.pattern_1
            }, {
                t: this.pattern_2
            }, {
                t: this.pattern_3
            }, {
                t: this.pattern_4
            }, {
                t: this.pattern_5
            }, {
                t: this.pattern_6
            }]
        }, 1).to({
            state: [{
                t: this.pattern_7
            }, {
                t: this.pattern_8
            }, {
                t: this.pattern_9
            }, {
                t: this.pattern_10
            }, {
                t: this.pattern_11
            }, {
                t: this.pattern_12
            }]
        }, 1).to({
            state: [{
                t: this.rhinestones_1
            }, {
                t: this.rhinestones_2
            }, {
                t: this.rhinestones_3
            }, {
                t: this.rhinestones_4
            }, {
                t: this.rhinestones_5
            }, {
                t: this.rhinestones_6
            }]
        }, 1).to({
            state: [{
                t: this.rhinestones_7
            }, {
                t: this.rhinestones_8
            }, {
                t: this.rhinestones_9
            }, {
                t: this.rhinestones_10
            }, {
                t: this.rhinestones_11
            }, {
                t: this.rhinestones_12
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-420, -104, 840, 413);
    p.frameBounds = [rect, rect, rect = new cjs.Rectangle(-420, -44, 840, 329), rect, rect, rect];


    (lib.closet_nail_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // no
        this.lacquer_0 = new lib.lacquer_0_mc();
        this.lacquer_0.setTransform(320, -80);

        this.pattern_0 = new lib.pattern_0_mc();
        this.pattern_0.setTransform(320, -20);

        this.rhinestones_0 = new lib.rhinestones_0_mc();
        this.rhinestones_0.setTransform(320, -20);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.lacquer_0
            }]
        }).to({
            state: [{
                t: this.pattern_0
            }]
        }, 2).to({
            state: [{
                t: this.rhinestones_0
            }]
        }, 2).wait(2));

        // options
        this.lacquer_6 = new lib.lacquer_6_mc();
        this.lacquer_6.setTransform(280, 200);

        this.lacquer_5 = new lib.lacquer_5_mc();
        this.lacquer_5.setTransform(360, 200);

        this.lacquer_4 = new lib.lacquer_4_mc();
        this.lacquer_4.setTransform(320, 40);

        this.lacquer_3 = new lib.lacquer_3_mc();
        this.lacquer_3.setTransform(-260, 200);

        this.lacquer_2 = new lib.lacquer_2_mc();
        this.lacquer_2.setTransform(-360, 100);

        this.lacquer_1 = new lib.lacquer_1_mc();
        this.lacquer_1.setTransform(-280, 40);

        this.lacquer_12 = new lib.lacquer_12_mc();
        this.lacquer_12.setTransform(280, 200);

        this.lacquer_11 = new lib.lacquer_11_mc();
        this.lacquer_11.setTransform(360, 200);

        this.lacquer_10 = new lib.lacquer_10_mc();
        this.lacquer_10.setTransform(320, 40);

        this.lacquer_9 = new lib.lacquer_9_mc();
        this.lacquer_9.setTransform(-260, 200);

        this.lacquer_8 = new lib.lacquer_8_mc();
        this.lacquer_8.setTransform(-360, 100);

        this.lacquer_7 = new lib.lacquer_7_mc();
        this.lacquer_7.setTransform(-280, 40);

        this.pattern_6 = new lib.pattern_6_mc();
        this.pattern_6.setTransform(280, 200);

        this.pattern_5 = new lib.pattern_5_mc();
        this.pattern_5.setTransform(360, 200);

        this.pattern_4 = new lib.pattern_4_mc();
        this.pattern_4.setTransform(320, 80);

        this.pattern_3 = new lib.pattern_3_mc();
        this.pattern_3.setTransform(-270, 200);

        this.pattern_2 = new lib.pattern_2_mc();
        this.pattern_2.setTransform(-360, 160);

        this.pattern_1 = new lib.pattern_1_mc();
        this.pattern_1.setTransform(-290, 80);

        this.pattern_12 = new lib.pattern_12_mc();
        this.pattern_12.setTransform(280, 200);

        this.pattern_11 = new lib.pattern_11_mc();
        this.pattern_11.setTransform(360, 200);

        this.pattern_10 = new lib.pattern_10_mc();
        this.pattern_10.setTransform(320, 80);

        this.pattern_9 = new lib.pattern_9_mc();
        this.pattern_9.setTransform(-270, 200);

        this.pattern_8 = new lib.pattern_8_mc();
        this.pattern_8.setTransform(-360, 160);

        this.pattern_7 = new lib.pattern_7_mc();
        this.pattern_7.setTransform(-290, 80);

        this.rhinestones_6 = new lib.rhinestones_6_mc();
        this.rhinestones_6.setTransform(280, 200);

        this.rhinestones_5 = new lib.rhinestones_5_mc();
        this.rhinestones_5.setTransform(360, 200);

        this.rhinestones_4 = new lib.rhinestones_4_mc();
        this.rhinestones_4.setTransform(320, 80);

        this.rhinestones_3 = new lib.rhinestones_3_mc();
        this.rhinestones_3.setTransform(-270, 200);

        this.rhinestones_2 = new lib.rhinestones_2_mc();
        this.rhinestones_2.setTransform(-360, 160);

        this.rhinestones_1 = new lib.rhinestones_1_mc();
        this.rhinestones_1.setTransform(-290, 80);

        this.rhinestones_12 = new lib.rhinestones_12_mc();
        this.rhinestones_12.setTransform(280, 200);

        this.rhinestones_11 = new lib.rhinestones_11_mc();
        this.rhinestones_11.setTransform(360, 200);

        this.rhinestones_10 = new lib.rhinestones_10_mc();
        this.rhinestones_10.setTransform(320, 80);

        this.rhinestones_9 = new lib.rhinestones_9_mc();
        this.rhinestones_9.setTransform(-270, 200);

        this.rhinestones_8 = new lib.rhinestones_8_mc();
        this.rhinestones_8.setTransform(-360, 160);

        this.rhinestones_7 = new lib.rhinestones_7_mc();
        this.rhinestones_7.setTransform(-290, 80);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.lacquer_1
            }, {
                t: this.lacquer_2
            }, {
                t: this.lacquer_3
            }, {
                t: this.lacquer_4
            }, {
                t: this.lacquer_5
            }, {
                t: this.lacquer_6
            }]
        }).to({
            state: [{
                t: this.lacquer_7
            }, {
                t: this.lacquer_8
            }, {
                t: this.lacquer_9
            }, {
                t: this.lacquer_10
            }, {
                t: this.lacquer_11
            }, {
                t: this.lacquer_12
            }]
        }, 1).to({
            state: [{
                t: this.pattern_1
            }, {
                t: this.pattern_2
            }, {
                t: this.pattern_3
            }, {
                t: this.pattern_4
            }, {
                t: this.pattern_5
            }, {
                t: this.pattern_6
            }]
        }, 1).to({
            state: [{
                t: this.pattern_7
            }, {
                t: this.pattern_8
            }, {
                t: this.pattern_9
            }, {
                t: this.pattern_10
            }, {
                t: this.pattern_11
            }, {
                t: this.pattern_12
            }]
        }, 1).to({
            state: [{
                t: this.rhinestones_1
            }, {
                t: this.rhinestones_2
            }, {
                t: this.rhinestones_3
            }, {
                t: this.rhinestones_4
            }, {
                t: this.rhinestones_5
            }, {
                t: this.rhinestones_6
            }]
        }, 1).to({
            state: [{
                t: this.rhinestones_7
            }, {
                t: this.rhinestones_8
            }, {
                t: this.rhinestones_9
            }, {
                t: this.rhinestones_10
            }, {
                t: this.rhinestones_11
            }, {
                t: this.rhinestones_12
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-420, -104, 840, 413);
    p.frameBounds = [rect, rect, rect = new cjs.Rectangle(-420, -44, 840, 329), rect, rect, rect];


    (lib.closet_nail_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // no
        this.lacquer_0 = new lib.lacquer_0_mc();
        this.lacquer_0.setTransform(320, -80);

        this.pattern_0 = new lib.pattern_0_mc();
        this.pattern_0.setTransform(320, -20);

        this.rhinestones_0 = new lib.rhinestones_0_mc();
        this.rhinestones_0.setTransform(320, -20);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.lacquer_0
            }]
        }).to({
            state: [{
                t: this.pattern_0
            }]
        }, 2).to({
            state: [{
                t: this.rhinestones_0
            }]
        }, 2).wait(2));

        // options
        this.lacquer_6 = new lib.lacquer_6_mc();
        this.lacquer_6.setTransform(280, 200);

        this.lacquer_5 = new lib.lacquer_5_mc();
        this.lacquer_5.setTransform(360, 200);

        this.lacquer_4 = new lib.lacquer_4_mc();
        this.lacquer_4.setTransform(320, 40);

        this.lacquer_3 = new lib.lacquer_3_mc();
        this.lacquer_3.setTransform(-260, 200);

        this.lacquer_2 = new lib.lacquer_2_mc();
        this.lacquer_2.setTransform(-360, 100);

        this.lacquer_1 = new lib.lacquer_1_mc();
        this.lacquer_1.setTransform(-280, 40);

        this.lacquer_12 = new lib.lacquer_12_mc();
        this.lacquer_12.setTransform(280, 200);

        this.lacquer_11 = new lib.lacquer_11_mc();
        this.lacquer_11.setTransform(360, 200);

        this.lacquer_10 = new lib.lacquer_10_mc();
        this.lacquer_10.setTransform(320, 40);

        this.lacquer_9 = new lib.lacquer_9_mc();
        this.lacquer_9.setTransform(-260, 200);

        this.lacquer_8 = new lib.lacquer_8_mc();
        this.lacquer_8.setTransform(-360, 100);

        this.lacquer_7 = new lib.lacquer_7_mc();
        this.lacquer_7.setTransform(-280, 40);

        this.pattern_6 = new lib.pattern_6_mc();
        this.pattern_6.setTransform(280, 200);

        this.pattern_5 = new lib.pattern_5_mc();
        this.pattern_5.setTransform(360, 200);

        this.pattern_4 = new lib.pattern_4_mc();
        this.pattern_4.setTransform(320, 80);

        this.pattern_3 = new lib.pattern_3_mc();
        this.pattern_3.setTransform(-270, 200);

        this.pattern_2 = new lib.pattern_2_mc();
        this.pattern_2.setTransform(-360, 160);

        this.pattern_1 = new lib.pattern_1_mc();
        this.pattern_1.setTransform(-290, 80);

        this.pattern_12 = new lib.pattern_12_mc();
        this.pattern_12.setTransform(280, 200);

        this.pattern_11 = new lib.pattern_11_mc();
        this.pattern_11.setTransform(360, 200);

        this.pattern_10 = new lib.pattern_10_mc();
        this.pattern_10.setTransform(320, 80);

        this.pattern_9 = new lib.pattern_9_mc();
        this.pattern_9.setTransform(-270, 200);

        this.pattern_8 = new lib.pattern_8_mc();
        this.pattern_8.setTransform(-360, 160);

        this.pattern_7 = new lib.pattern_7_mc();
        this.pattern_7.setTransform(-290, 80);

        this.rhinestones_6 = new lib.rhinestones_6_mc();
        this.rhinestones_6.setTransform(280, 200);

        this.rhinestones_5 = new lib.rhinestones_5_mc();
        this.rhinestones_5.setTransform(360, 200);

        this.rhinestones_4 = new lib.rhinestones_4_mc();
        this.rhinestones_4.setTransform(320, 80);

        this.rhinestones_3 = new lib.rhinestones_3_mc();
        this.rhinestones_3.setTransform(-270, 200);

        this.rhinestones_2 = new lib.rhinestones_2_mc();
        this.rhinestones_2.setTransform(-360, 160);

        this.rhinestones_1 = new lib.rhinestones_1_mc();
        this.rhinestones_1.setTransform(-290, 80);

        this.rhinestones_12 = new lib.rhinestones_12_mc();
        this.rhinestones_12.setTransform(280, 200);

        this.rhinestones_11 = new lib.rhinestones_11_mc();
        this.rhinestones_11.setTransform(360, 200);

        this.rhinestones_10 = new lib.rhinestones_10_mc();
        this.rhinestones_10.setTransform(320, 80);

        this.rhinestones_9 = new lib.rhinestones_9_mc();
        this.rhinestones_9.setTransform(-270, 200);

        this.rhinestones_8 = new lib.rhinestones_8_mc();
        this.rhinestones_8.setTransform(-360, 160);

        this.rhinestones_7 = new lib.rhinestones_7_mc();
        this.rhinestones_7.setTransform(-290, 80);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.lacquer_1
            }, {
                t: this.lacquer_2
            }, {
                t: this.lacquer_3
            }, {
                t: this.lacquer_4
            }, {
                t: this.lacquer_5
            }, {
                t: this.lacquer_6
            }]
        }).to({
            state: [{
                t: this.lacquer_7
            }, {
                t: this.lacquer_8
            }, {
                t: this.lacquer_9
            }, {
                t: this.lacquer_10
            }, {
                t: this.lacquer_11
            }, {
                t: this.lacquer_12
            }]
        }, 1).to({
            state: [{
                t: this.pattern_1
            }, {
                t: this.pattern_2
            }, {
                t: this.pattern_3
            }, {
                t: this.pattern_4
            }, {
                t: this.pattern_5
            }, {
                t: this.pattern_6
            }]
        }, 1).to({
            state: [{
                t: this.pattern_7
            }, {
                t: this.pattern_8
            }, {
                t: this.pattern_9
            }, {
                t: this.pattern_10
            }, {
                t: this.pattern_11
            }, {
                t: this.pattern_12
            }]
        }, 1).to({
            state: [{
                t: this.rhinestones_1
            }, {
                t: this.rhinestones_2
            }, {
                t: this.rhinestones_3
            }, {
                t: this.rhinestones_4
            }, {
                t: this.rhinestones_5
            }, {
                t: this.rhinestones_6
            }]
        }, 1).to({
            state: [{
                t: this.rhinestones_7
            }, {
                t: this.rhinestones_8
            }, {
                t: this.rhinestones_9
            }, {
                t: this.rhinestones_10
            }, {
                t: this.rhinestones_11
            }, {
                t: this.rhinestones_12
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-420, -104, 840, 413);
    p.frameBounds = [rect, rect, rect = new cjs.Rectangle(-420, -44, 840, 329), rect, rect, rect];


    (lib.closet_nail_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // no
        this.lacquer_0 = new lib.lacquer_0_mc();
        this.lacquer_0.setTransform(320, -80);

        this.pattern_0 = new lib.pattern_0_mc();
        this.pattern_0.setTransform(320, -20);

        this.rhinestones_0 = new lib.rhinestones_0_mc();
        this.rhinestones_0.setTransform(320, -20);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.lacquer_0
            }]
        }).to({
            state: [{
                t: this.pattern_0
            }]
        }, 2).to({
            state: [{
                t: this.rhinestones_0
            }]
        }, 2).wait(2));

        // options
        this.lacquer_6 = new lib.lacquer_6_mc();
        this.lacquer_6.setTransform(280, 200);

        this.lacquer_5 = new lib.lacquer_5_mc();
        this.lacquer_5.setTransform(360, 200);

        this.lacquer_4 = new lib.lacquer_4_mc();
        this.lacquer_4.setTransform(320, 40);

        this.lacquer_3 = new lib.lacquer_3_mc();
        this.lacquer_3.setTransform(-260, 200);

        this.lacquer_2 = new lib.lacquer_2_mc();
        this.lacquer_2.setTransform(-360, 100);

        this.lacquer_1 = new lib.lacquer_1_mc();
        this.lacquer_1.setTransform(-280, 40);

        this.lacquer_12 = new lib.lacquer_12_mc();
        this.lacquer_12.setTransform(280, 200);

        this.lacquer_11 = new lib.lacquer_11_mc();
        this.lacquer_11.setTransform(360, 200);

        this.lacquer_10 = new lib.lacquer_10_mc();
        this.lacquer_10.setTransform(320, 40);

        this.lacquer_9 = new lib.lacquer_9_mc();
        this.lacquer_9.setTransform(-260, 200);

        this.lacquer_8 = new lib.lacquer_8_mc();
        this.lacquer_8.setTransform(-360, 100);

        this.lacquer_7 = new lib.lacquer_7_mc();
        this.lacquer_7.setTransform(-280, 40);

        this.pattern_6 = new lib.pattern_6_mc();
        this.pattern_6.setTransform(280, 200);

        this.pattern_5 = new lib.pattern_5_mc();
        this.pattern_5.setTransform(360, 200);

        this.pattern_4 = new lib.pattern_4_mc();
        this.pattern_4.setTransform(320, 80);

        this.pattern_3 = new lib.pattern_3_mc();
        this.pattern_3.setTransform(-270, 200);

        this.pattern_2 = new lib.pattern_2_mc();
        this.pattern_2.setTransform(-360, 160);

        this.pattern_1 = new lib.pattern_1_mc();
        this.pattern_1.setTransform(-290, 80);

        this.pattern_12 = new lib.pattern_12_mc();
        this.pattern_12.setTransform(280, 200);

        this.pattern_11 = new lib.pattern_11_mc();
        this.pattern_11.setTransform(360, 200);

        this.pattern_10 = new lib.pattern_10_mc();
        this.pattern_10.setTransform(320, 80);

        this.pattern_9 = new lib.pattern_9_mc();
        this.pattern_9.setTransform(-270, 200);

        this.pattern_8 = new lib.pattern_8_mc();
        this.pattern_8.setTransform(-360, 160);

        this.pattern_7 = new lib.pattern_7_mc();
        this.pattern_7.setTransform(-290, 80);

        this.rhinestones_6 = new lib.rhinestones_6_mc();
        this.rhinestones_6.setTransform(280, 200);

        this.rhinestones_5 = new lib.rhinestones_5_mc();
        this.rhinestones_5.setTransform(360, 200);

        this.rhinestones_4 = new lib.rhinestones_4_mc();
        this.rhinestones_4.setTransform(320, 80);

        this.rhinestones_3 = new lib.rhinestones_3_mc();
        this.rhinestones_3.setTransform(-270, 200);

        this.rhinestones_2 = new lib.rhinestones_2_mc();
        this.rhinestones_2.setTransform(-360, 160);

        this.rhinestones_1 = new lib.rhinestones_1_mc();
        this.rhinestones_1.setTransform(-290, 80);

        this.rhinestones_12 = new lib.rhinestones_12_mc();
        this.rhinestones_12.setTransform(280, 200);

        this.rhinestones_11 = new lib.rhinestones_11_mc();
        this.rhinestones_11.setTransform(360, 200);

        this.rhinestones_10 = new lib.rhinestones_10_mc();
        this.rhinestones_10.setTransform(320, 80);

        this.rhinestones_9 = new lib.rhinestones_9_mc();
        this.rhinestones_9.setTransform(-270, 200);

        this.rhinestones_8 = new lib.rhinestones_8_mc();
        this.rhinestones_8.setTransform(-360, 160);

        this.rhinestones_7 = new lib.rhinestones_7_mc();
        this.rhinestones_7.setTransform(-290, 80);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.lacquer_1
            }, {
                t: this.lacquer_2
            }, {
                t: this.lacquer_3
            }, {
                t: this.lacquer_4
            }, {
                t: this.lacquer_5
            }, {
                t: this.lacquer_6
            }]
        }).to({
            state: [{
                t: this.lacquer_7
            }, {
                t: this.lacquer_8
            }, {
                t: this.lacquer_9
            }, {
                t: this.lacquer_10
            }, {
                t: this.lacquer_11
            }, {
                t: this.lacquer_12
            }]
        }, 1).to({
            state: [{
                t: this.pattern_1
            }, {
                t: this.pattern_2
            }, {
                t: this.pattern_3
            }, {
                t: this.pattern_4
            }, {
                t: this.pattern_5
            }, {
                t: this.pattern_6
            }]
        }, 1).to({
            state: [{
                t: this.pattern_7
            }, {
                t: this.pattern_8
            }, {
                t: this.pattern_9
            }, {
                t: this.pattern_10
            }, {
                t: this.pattern_11
            }, {
                t: this.pattern_12
            }]
        }, 1).to({
            state: [{
                t: this.rhinestones_1
            }, {
                t: this.rhinestones_2
            }, {
                t: this.rhinestones_3
            }, {
                t: this.rhinestones_4
            }, {
                t: this.rhinestones_5
            }, {
                t: this.rhinestones_6
            }]
        }, 1).to({
            state: [{
                t: this.rhinestones_7
            }, {
                t: this.rhinestones_8
            }, {
                t: this.rhinestones_9
            }, {
                t: this.rhinestones_10
            }, {
                t: this.rhinestones_11
            }, {
                t: this.rhinestones_12
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-420, -104, 840, 413);
    p.frameBounds = [rect, rect, rect = new cjs.Rectangle(-420, -44, 840, 329), rect, rect, rect];


    (lib.closet_nail_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // no
        this.lacquer_0 = new lib.lacquer_0_mc();
        this.lacquer_0.setTransform(320, -80);

        this.pattern_0 = new lib.pattern_0_mc();
        this.pattern_0.setTransform(320, -20);

        this.rhinestones_0 = new lib.rhinestones_0_mc();
        this.rhinestones_0.setTransform(320, -20);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.lacquer_0
            }]
        }).to({
            state: [{
                t: this.pattern_0
            }]
        }, 2).to({
            state: [{
                t: this.rhinestones_0
            }]
        }, 2).wait(2));

        // options
        this.lacquer_6 = new lib.lacquer_6_mc();
        this.lacquer_6.setTransform(280, 200);

        this.lacquer_5 = new lib.lacquer_5_mc();
        this.lacquer_5.setTransform(360, 200);

        this.lacquer_4 = new lib.lacquer_4_mc();
        this.lacquer_4.setTransform(320, 40);

        this.lacquer_3 = new lib.lacquer_3_mc();
        this.lacquer_3.setTransform(-260, 200);

        this.lacquer_2 = new lib.lacquer_2_mc();
        this.lacquer_2.setTransform(-360, 100);

        this.lacquer_1 = new lib.lacquer_1_mc();
        this.lacquer_1.setTransform(-280, 40);

        this.lacquer_12 = new lib.lacquer_12_mc();
        this.lacquer_12.setTransform(280, 200);

        this.lacquer_11 = new lib.lacquer_11_mc();
        this.lacquer_11.setTransform(360, 200);

        this.lacquer_10 = new lib.lacquer_10_mc();
        this.lacquer_10.setTransform(320, 40);

        this.lacquer_9 = new lib.lacquer_9_mc();
        this.lacquer_9.setTransform(-260, 200);

        this.lacquer_8 = new lib.lacquer_8_mc();
        this.lacquer_8.setTransform(-360, 100);

        this.lacquer_7 = new lib.lacquer_7_mc();
        this.lacquer_7.setTransform(-280, 40);

        this.pattern_6 = new lib.pattern_6_mc();
        this.pattern_6.setTransform(280, 200);

        this.pattern_5 = new lib.pattern_5_mc();
        this.pattern_5.setTransform(360, 200);

        this.pattern_4 = new lib.pattern_4_mc();
        this.pattern_4.setTransform(320, 80);

        this.pattern_3 = new lib.pattern_3_mc();
        this.pattern_3.setTransform(-270, 200);

        this.pattern_2 = new lib.pattern_2_mc();
        this.pattern_2.setTransform(-360, 160);

        this.pattern_1 = new lib.pattern_1_mc();
        this.pattern_1.setTransform(-290, 80);

        this.pattern_12 = new lib.pattern_12_mc();
        this.pattern_12.setTransform(280, 200);

        this.pattern_11 = new lib.pattern_11_mc();
        this.pattern_11.setTransform(360, 200);

        this.pattern_10 = new lib.pattern_10_mc();
        this.pattern_10.setTransform(320, 80);

        this.pattern_9 = new lib.pattern_9_mc();
        this.pattern_9.setTransform(-270, 200);

        this.pattern_8 = new lib.pattern_8_mc();
        this.pattern_8.setTransform(-360, 160);

        this.pattern_7 = new lib.pattern_7_mc();
        this.pattern_7.setTransform(-290, 80);

        this.rhinestones_6 = new lib.rhinestones_6_mc();
        this.rhinestones_6.setTransform(280, 200);

        this.rhinestones_5 = new lib.rhinestones_5_mc();
        this.rhinestones_5.setTransform(360, 200);

        this.rhinestones_4 = new lib.rhinestones_4_mc();
        this.rhinestones_4.setTransform(320, 80);

        this.rhinestones_3 = new lib.rhinestones_3_mc();
        this.rhinestones_3.setTransform(-270, 200);

        this.rhinestones_2 = new lib.rhinestones_2_mc();
        this.rhinestones_2.setTransform(-360, 160);

        this.rhinestones_1 = new lib.rhinestones_1_mc();
        this.rhinestones_1.setTransform(-290, 80);

        this.rhinestones_12 = new lib.rhinestones_12_mc();
        this.rhinestones_12.setTransform(280, 200);

        this.rhinestones_11 = new lib.rhinestones_11_mc();
        this.rhinestones_11.setTransform(360, 200);

        this.rhinestones_10 = new lib.rhinestones_10_mc();
        this.rhinestones_10.setTransform(320, 80);

        this.rhinestones_9 = new lib.rhinestones_9_mc();
        this.rhinestones_9.setTransform(-270, 200);

        this.rhinestones_8 = new lib.rhinestones_8_mc();
        this.rhinestones_8.setTransform(-360, 160);

        this.rhinestones_7 = new lib.rhinestones_7_mc();
        this.rhinestones_7.setTransform(-290, 80);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.lacquer_1
            }, {
                t: this.lacquer_2
            }, {
                t: this.lacquer_3
            }, {
                t: this.lacquer_4
            }, {
                t: this.lacquer_5
            }, {
                t: this.lacquer_6
            }]
        }).to({
            state: [{
                t: this.lacquer_7
            }, {
                t: this.lacquer_8
            }, {
                t: this.lacquer_9
            }, {
                t: this.lacquer_10
            }, {
                t: this.lacquer_11
            }, {
                t: this.lacquer_12
            }]
        }, 1).to({
            state: [{
                t: this.pattern_1
            }, {
                t: this.pattern_2
            }, {
                t: this.pattern_3
            }, {
                t: this.pattern_4
            }, {
                t: this.pattern_5
            }, {
                t: this.pattern_6
            }]
        }, 1).to({
            state: [{
                t: this.pattern_7
            }, {
                t: this.pattern_8
            }, {
                t: this.pattern_9
            }, {
                t: this.pattern_10
            }, {
                t: this.pattern_11
            }, {
                t: this.pattern_12
            }]
        }, 1).to({
            state: [{
                t: this.rhinestones_1
            }, {
                t: this.rhinestones_2
            }, {
                t: this.rhinestones_3
            }, {
                t: this.rhinestones_4
            }, {
                t: this.rhinestones_5
            }, {
                t: this.rhinestones_6
            }]
        }, 1).to({
            state: [{
                t: this.rhinestones_7
            }, {
                t: this.rhinestones_8
            }, {
                t: this.rhinestones_9
            }, {
                t: this.rhinestones_10
            }, {
                t: this.rhinestones_11
            }, {
                t: this.rhinestones_12
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-420, -104, 840, 413);
    p.frameBounds = [rect, rect, rect = new cjs.Rectangle(-420, -44, 840, 329), rect, rect, rect];


    (lib.check_3_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.check_1_2_mc();
        this.instance.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            alpha: 1
        }, 14).to({
            alpha: 0.012
        }, 15).wait(1));

        // animation
        this.instance_1 = new lib.check_0_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.check_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_18 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

        // animation
        this.instance = new lib.check_1_mc();
        this.instance.alpha = 0.012;

        this.instance_1 = new lib.check_9_img();
        this.instance_1.setTransform(-80, -80);

        this.instance_2 = new lib.check_8_img();
        this.instance_2.setTransform(-80, -80);

        this.instance_3 = new lib.check_7_img();
        this.instance_3.setTransform(-80, -80);

        this.instance_4 = new lib.check_6_img();
        this.instance_4.setTransform(-80, -80);

        this.instance_5 = new lib.check_5_img();
        this.instance_5.setTransform(-80, -80);

        this.instance_6 = new lib.check_4_img();
        this.instance_6.setTransform(-80, -80);

        this.instance_7 = new lib.check_3_img();
        this.instance_7.setTransform(-80, -80);

        this.instance_8 = new lib.check_2_img();
        this.instance_8.setTransform(-80, -80);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance,
                p: {
                    alpha: 0.012
                }
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 2).to({
            state: [{
                t: this.instance_3
            }]
        }, 2).to({
            state: [{
                t: this.instance_4
            }]
        }, 2).to({
            state: [{
                t: this.instance_5
            }]
        }, 2).to({
            state: [{
                t: this.instance_6
            }]
        }, 2).to({
            state: [{
                t: this.instance_7
            }]
        }, 2).to({
            state: [{
                t: this.instance_8
            }]
        }, 2).to({
            state: [{
                t: this.instance,
                p: {
                    alpha: 1
                }
            }]
        }, 2).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -80, 160, 160);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.check_2_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // bode
        this.instance = new lib.check_0_2_mc();

        this.instance_1 = new lib.check_3_2_mc();

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect, rect];


    (lib.bodyDressupPanel_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // hero_2
        this.hero_2 = new lib.closet_nail_mc();

        this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

        // hero_3
        this.hero_3 = new lib.closet_nail_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

        // hero_4
        this.hero_4 = new lib.closet_nail_3_mc();

        this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

        // hero_5
        this.hero_5 = new lib.closet_nail_4_mc();

        this.timeline.addTween(cjs.Tween.get(this.hero_5).wait(1));

        // hero_6
        this.hero_6 = new lib.closet_nail_5_mc();

        this.timeline.addTween(cjs.Tween.get(this.hero_6).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-420, -104, 840, 413);
    p.frameBounds = [rect];


    (lib.body_hint_location_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.hint_location_2_1_mc();
        this.instance.setTransform(30, -5, 0.714, 0.714);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({
            scaleX: 1,
            scaleY: 1,
            x: -28,
            y: -28
        }, 15).to({
            scaleX: 0.86,
            scaleY: 0.86
        }, 5).to({
            scaleX: 1,
            scaleY: 1
        }, 5).wait(10).to({
            scaleX: 0.71,
            scaleY: 0.71,
            x: 30,
            y: -5
        }, 10).wait(20).to({
            scaleX: 1,
            scaleY: 1,
            x: -28,
            y: -28
        }, 15).to({
            scaleX: 0.86,
            scaleY: 0.86
        }, 5).to({
            scaleX: 1,
            scaleY: 1
        }, 5).wait(10).to({
            scaleX: 0.71,
            scaleY: 0.71,
            x: 30,
            y: -5
        }, 10).wait(41));

        // animation
        this.instance_1 = new lib.hint_location_3_1_mc();
        this.instance_1.setTransform(-28, -28);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({
            _off: false
        }, 0).to({
            scaleX: 2.07,
            scaleY: 2.07
        }, 10).to({
            scaleX: 2.5,
            scaleY: 2.5,
            alpha: 0.102
        }, 4).to({
            _off: true
        }, 1).wait(50).to({
            _off: false,
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 0).to({
            scaleX: 2.07,
            scaleY: 2.07
        }, 10).to({
            scaleX: 2.5,
            scaleY: 2.5,
            alpha: 0.102
        }, 4).to({
            _off: true
        }, 1).wait(51));

        // graph
        this.instance_2 = new lib.hint_location_1_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(200));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-150, -125, 300, 250);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.body_hint_filter_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "en": 0,
            "ru": 1,
            "de": 2,
            "fr": 3,
            "es": 4,
            "pt": 5
        });

        // graph
        this.instance = new lib.hint_filter_en_img();
        this.instance.setTransform(-90, -30);

        this.instance_1 = new lib.hint_filter_ru_img();
        this.instance_1.setTransform(-90, -30);

        this.instance_2 = new lib.hint_filter_de_img();
        this.instance_2.setTransform(-90, -30);

        this.instance_3 = new lib.hint_filter_fr_img();
        this.instance_3.setTransform(-90, -30);

        this.instance_4 = new lib.hint_filter_es_img();
        this.instance_4.setTransform(-90, -30);

        this.instance_5 = new lib.hint_filter_pt_img();
        this.instance_5.setTransform(-90, -30);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1));

        // decor
        this.instance_6 = new lib.hint_filter_arrow_mc();
        this.instance_6.setTransform(60, 60);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -30, 210, 150);
    p.frameBounds = [rect, rect, rect, rect, rect, rect];


    (lib.body_animation_circle_nav_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.circle_nav_mc();
        this.instance.alpha = 0.801;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({
            scaleX: 2.5,
            scaleY: 2.5,
            x: 25,
            alpha: 0.102
        }, 20).to({
            _off: true
        }, 1).wait(20));

        // animation
        this.instance_1 = new lib.circle_nav_mc();
        this.instance_1.alpha = 0.801;
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({
            _off: false
        }, 0).to({
            scaleX: 2.5,
            scaleY: 2.5,
            x: 25,
            alpha: 0.102
        }, 20).to({
            _off: true
        }, 1).wait(10));

        // animation
        this.instance_2 = new lib.circle_nav_mc();
        this.instance_2.alpha = 0.801;
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({
            _off: false
        }, 0).to({
            scaleX: 2.5,
            scaleY: 2.5,
            x: 25,
            alpha: 0.102
        }, 20).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -40.9, 120, 81.8);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-63.2, -44, 129, 87.9), new cjs.Rectangle(-66.5, -47, 138, 94), new cjs.Rectangle(-69.7, -50.1, 147, 100.2), new cjs.Rectangle(-73, -53.2, 156, 106.3), new cjs.Rectangle(-76.2, -56.2, 165, 112.4), new cjs.Rectangle(-79.5, -59.3, 174, 118.6), new cjs.Rectangle(-82.7, -62.4, 183, 124.7), new cjs.Rectangle(-85.9, -65.4, 192, 130.8), new cjs.Rectangle(-89.2, -68.5, 201, 137), new cjs.Rectangle(-92.4, -71.6, 210, 143.1), new cjs.Rectangle(-95.7, -74.7, 219, 149.2), new cjs.Rectangle(-98.9, -77.8, 228, 155.3), new cjs.Rectangle(-102.2, -80.8, 237, 161.4), new cjs.Rectangle(-105.4, -83.9, 246, 167.6), new cjs.Rectangle(-108.7, -86.9, 255, 173.7), new cjs.Rectangle(-111.9, -90, 264, 179.9), new cjs.Rectangle(-115.2, -93.1, 273, 186), new cjs.Rectangle(-118.4, -96.1, 282, 192.1), new cjs.Rectangle(-121.7, -99.2, 291, 198.3), new cjs.Rectangle(-125, -102.2, 300, 204.4), new cjs.Rectangle(-95.7, -74.7, 219, 149.2), new cjs.Rectangle(-98.9, -77.8, 228, 155.3), new cjs.Rectangle(-102.2, -80.8, 237, 161.4), new cjs.Rectangle(-105.4, -83.9, 246, 167.6), new cjs.Rectangle(-108.7, -86.9, 255, 173.7), new cjs.Rectangle(-111.9, -90, 264, 179.9), new cjs.Rectangle(-115.2, -93.1, 273, 186), new cjs.Rectangle(-118.4, -96.1, 282, 192.1), new cjs.Rectangle(-121.7, -99.2, 291, 198.3), new cjs.Rectangle(-125, -102.2, 300, 204.4), new cjs.Rectangle(-95.7, -74.7, 219, 149.2), new cjs.Rectangle(-98.9, -77.8, 228, 155.3), new cjs.Rectangle(-102.2, -80.8, 237, 161.4), new cjs.Rectangle(-105.4, -83.9, 246, 167.6), new cjs.Rectangle(-108.7, -86.9, 255, 173.7), new cjs.Rectangle(-111.9, -90, 264, 179.9), new cjs.Rectangle(-115.2, -93.1, 273, 186), new cjs.Rectangle(-118.4, -96.1, 282, 192.1), new cjs.Rectangle(-121.7, -99.2, 291, 198.3), new cjs.Rectangle(-125, -102.2, 300, 204.4)];


    (lib.blush_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.blush_6_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.blush_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.blush_5_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.blush_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.blush_4_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.blush_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.blush_3_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.blush_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.blush_2_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.blush_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.blush_1_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.blush_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.substrate_mc = new lib.remove_1_mc();
        this.substrate_mc.setTransform(0.1, 0, 0.6, 0.6, 0, 0, 0, 0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-24, -24, 48, 48);
    p.frameBounds = [rect];


    (lib.bg_title_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.bg_title_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // graph
        this.instance_1 = new lib.hero_for_makeup_main_mc();
        this.instance_1.setTransform(7.9, -230.6, 0.8, 0.8, 0, 0, 0, 16.1, -7);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -482.1, 400, 572.2);
    p.frameBounds = [rect];


    (lib.animation_title_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.title_mc();
        this.instance.setTransform(0.5, 0.5, 1, 1, 0, 0, 0, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({
            scaleX: 0.95,
            scaleY: 0.95,
            alpha: 0.602
        }, 5).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 5).to({
            scaleX: 0.98,
            scaleY: 0.98,
            alpha: 0.602
        }, 5).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 5).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -90, 400, 180);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-197.9, -89, 396, 178.2), new cjs.Rectangle(-195.9, -88.1, 392, 176.4), new cjs.Rectangle(-193.9, -87.2, 388, 174.6), new cjs.Rectangle(-191.9, -86.3, 384, 172.8), new cjs.Rectangle(-190, -85.5, 380, 171), new cjs.Rectangle(-191.9, -86.3, 384, 172.8), new cjs.Rectangle(-193.9, -87.2, 388, 174.6), new cjs.Rectangle(-195.8, -88, 392, 176.4), new cjs.Rectangle(-197.8, -88.9, 396, 178.2), new cjs.Rectangle(-200, -90, 400, 180), new cjs.Rectangle(-199.1, -89.5, 398.4, 179.3), new cjs.Rectangle(-198.3, -89.2, 396.8, 178.6), new cjs.Rectangle(-197.5, -88.8, 395.2, 177.9), new cjs.Rectangle(-196.7, -88.5, 393.6, 177.1), new cjs.Rectangle(-196, -88.2, 392, 176.4), new cjs.Rectangle(-196.7, -88.5, 393.6, 177.1), new cjs.Rectangle(-197.5, -88.8, 395.2, 177.9), new cjs.Rectangle(-198.3, -89.2, 396.8, 178.6), new cjs.Rectangle(-199.1, -89.5, 398.4, 179.3), new cjs.Rectangle(-200, -90, 400, 180)];


    (lib.animation_for_pointer_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.animation_for_pointer_2_mc();
        this.instance.setTransform(0, 0, 0.111, 0.111);
        this.instance.alpha = 0.012;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({
            _off: false
        }, 0).to({
            scaleX: 0.22,
            scaleY: 0.22,
            alpha: 0.898
        }, 5).to({
            scaleX: 0.89,
            scaleY: 0.89,
            alpha: 0.012
        }, 15).to({
            _off: true
        }, 1).wait(35));

        // animation
        this.instance_1 = new lib.animation_for_pointer_2_mc();
        this.instance_1.setTransform(0, 0, 0.111, 0.111);
        this.instance_1.alpha = 0.012;
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({
            _off: false
        }, 0).to({
            scaleX: 0.22,
            scaleY: 0.22,
            alpha: 0.898
        }, 5).to({
            scaleX: 0.89,
            scaleY: 0.89,
            alpha: 0.012
        }, 15).to({
            _off: true
        }, 1).wait(30));

        // animation
        this.instance_2 = new lib.animation_for_pointer_2_mc();
        this.instance_2.setTransform(0, 0, 0.111, 0.111);
        this.instance_2.alpha = 0.012;
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({
            _off: false
        }, 0).to({
            scaleX: 0.22,
            scaleY: 0.22,
            alpha: 0.898
        }, 5).to({
            scaleX: 0.89,
            scaleY: 0.89,
            alpha: 0.012
        }, 15).to({
            _off: true
        }, 1).wait(25));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = null;
    p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-10, -10, 20, 20), new cjs.Rectangle(-11.9, -11.9, 24, 24), new cjs.Rectangle(-13.9, -13.9, 28, 28), new cjs.Rectangle(-15.9, -15.9, 32, 32), new cjs.Rectangle(-17.9, -17.9, 36, 36), new cjs.Rectangle(-20, -20, 40, 40), new cjs.Rectangle(-23.9, -23.9, 48, 48), new cjs.Rectangle(-27.9, -27.9, 56, 56), new cjs.Rectangle(-31.9, -31.9, 64, 64), new cjs.Rectangle(-35.9, -35.9, 72, 72), new cjs.Rectangle(-39.9, -39.9, 80, 80), new cjs.Rectangle(-43.9, -43.9, 88, 88), new cjs.Rectangle(-47.9, -47.9, 96, 96), new cjs.Rectangle(-51.9, -51.9, 104, 104), new cjs.Rectangle(-55.9, -55.9, 112, 112), new cjs.Rectangle(-59.9, -59.9, 120, 120), new cjs.Rectangle(-63.9, -63.9, 128, 128), new cjs.Rectangle(-67.9, -67.9, 136, 136), new cjs.Rectangle(-71.9, -71.9, 144, 144), new cjs.Rectangle(-75.9, -75.9, 152, 152), new cjs.Rectangle(-80, -80, 160, 160), new cjs.Rectangle(-63.9, -63.9, 128, 128), new cjs.Rectangle(-67.9, -67.9, 136, 136), new cjs.Rectangle(-71.9, -71.9, 144, 144), new cjs.Rectangle(-75.9, -75.9, 152, 152), new cjs.Rectangle(-80, -80, 160, 160), new cjs.Rectangle(-63.9, -63.9, 128, 128), new cjs.Rectangle(-67.9, -67.9, 136, 136), new cjs.Rectangle(-71.9, -71.9, 144, 144), new cjs.Rectangle(-75.9, -75.9, 152, 152), new cjs.Rectangle(-80, -80, 160, 160), rect = null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.animation_for_pointer_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_mc = new lib.animation_for_pointer_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = null;
    p.frameBounds = [rect];


    (lib.animation_decor_title_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.decor_title_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            y: -10
        }, 29).to({
            y: 10
        }, 60).to({
            y: 0
        }, 30).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -90, 400, 180);
    p.frameBounds = [rect, new cjs.Rectangle(-200, -90.3, 400, 180), new cjs.Rectangle(-200, -90.7, 400, 180), new cjs.Rectangle(-200, -91, 400, 180), new cjs.Rectangle(-200, -91.4, 400, 180), new cjs.Rectangle(-200, -91.7, 400, 180), new cjs.Rectangle(-200, -92, 400, 180), new cjs.Rectangle(-200, -92.4, 400, 180), new cjs.Rectangle(-200, -92.7, 400, 180), new cjs.Rectangle(-200, -93.1, 400, 180), new cjs.Rectangle(-200, -93.4, 400, 180), new cjs.Rectangle(-200, -93.8, 400, 180), new cjs.Rectangle(-200, -94.1, 400, 180), new cjs.Rectangle(-200, -94.5, 400, 180), new cjs.Rectangle(-200, -94.8, 400, 180), new cjs.Rectangle(-200, -95.1, 400, 180), new cjs.Rectangle(-200, -95.5, 400, 180), new cjs.Rectangle(-200, -95.8, 400, 180), new cjs.Rectangle(-200, -96.2, 400, 180), new cjs.Rectangle(-200, -96.5, 400, 180), new cjs.Rectangle(-200, -96.9, 400, 180), new cjs.Rectangle(-200, -97.2, 400, 180), new cjs.Rectangle(-200, -97.6, 400, 180), new cjs.Rectangle(-200, -97.9, 400, 180), new cjs.Rectangle(-200, -98.3, 400, 180), new cjs.Rectangle(-200, -98.6, 400, 180), new cjs.Rectangle(-200, -98.9, 400, 180), new cjs.Rectangle(-200, -99.3, 400, 180), new cjs.Rectangle(-200, -99.6, 400, 180), new cjs.Rectangle(-200, -100, 400, 180), new cjs.Rectangle(-200, -99.6, 400, 180), new cjs.Rectangle(-200, -99.3, 400, 180), new cjs.Rectangle(-200, -99, 400, 180), new cjs.Rectangle(-200, -98.6, 400, 180), new cjs.Rectangle(-200, -98.3, 400, 180), new cjs.Rectangle(-200, -98, 400, 180), new cjs.Rectangle(-200, -97.6, 400, 180), new cjs.Rectangle(-200, -97.3, 400, 180), new cjs.Rectangle(-200, -97, 400, 180), new cjs.Rectangle(-200, -96.6, 400, 180), new cjs.Rectangle(-200, -96.3, 400, 180), new cjs.Rectangle(-200, -96, 400, 180), new cjs.Rectangle(-200, -95.6, 400, 180), new cjs.Rectangle(-200, -95.3, 400, 180), new cjs.Rectangle(-200, -95, 400, 180), new cjs.Rectangle(-200, -94.6, 400, 180), new cjs.Rectangle(-200, -94.3, 400, 180), new cjs.Rectangle(-200, -94, 400, 180), new cjs.Rectangle(-200, -93.6, 400, 180), new cjs.Rectangle(-200, -93.3, 400, 180), new cjs.Rectangle(-200, -93, 400, 180), new cjs.Rectangle(-200, -92.6, 400, 180), new cjs.Rectangle(-200, -92.3, 400, 180), new cjs.Rectangle(-200, -92, 400, 180), new cjs.Rectangle(-200, -91.6, 400, 180), new cjs.Rectangle(-200, -91.3, 400, 180), new cjs.Rectangle(-200, -91, 400, 180), new cjs.Rectangle(-200, -90.6, 400, 180), new cjs.Rectangle(-200, -90.3, 400, 180), new cjs.Rectangle(-200, -90, 400, 180), new cjs.Rectangle(-200, -89.6, 400, 180), new cjs.Rectangle(-200, -89.3, 400, 180), new cjs.Rectangle(-200, -89, 400, 180), new cjs.Rectangle(-200, -88.6, 400, 180), new cjs.Rectangle(-200, -88.3, 400, 180), new cjs.Rectangle(-200, -88, 400, 180), new cjs.Rectangle(-200, -87.6, 400, 180), new cjs.Rectangle(-200, -87.3, 400, 180), new cjs.Rectangle(-200, -87, 400, 180), new cjs.Rectangle(-200, -86.6, 400, 180), new cjs.Rectangle(-200, -86.3, 400, 180), new cjs.Rectangle(-200, -86, 400, 180), new cjs.Rectangle(-200, -85.6, 400, 180), new cjs.Rectangle(-200, -85.3, 400, 180), new cjs.Rectangle(-200, -85, 400, 180), new cjs.Rectangle(-200, -84.6, 400, 180), new cjs.Rectangle(-200, -84.3, 400, 180), new cjs.Rectangle(-200, -84, 400, 180), new cjs.Rectangle(-200, -83.6, 400, 180), new cjs.Rectangle(-200, -83.3, 400, 180), new cjs.Rectangle(-200, -83, 400, 180), new cjs.Rectangle(-200, -82.6, 400, 180), new cjs.Rectangle(-200, -82.3, 400, 180), new cjs.Rectangle(-200, -82, 400, 180), new cjs.Rectangle(-200, -81.6, 400, 180), new cjs.Rectangle(-200, -81.3, 400, 180), new cjs.Rectangle(-200, -81, 400, 180), new cjs.Rectangle(-200, -80.6, 400, 180), new cjs.Rectangle(-200, -80.3, 400, 180), new cjs.Rectangle(-200, -80, 400, 180), new cjs.Rectangle(-200, -80.3, 400, 180), new cjs.Rectangle(-200, -80.6, 400, 180), new cjs.Rectangle(-200, -81, 400, 180), new cjs.Rectangle(-200, -81.3, 400, 180), new cjs.Rectangle(-200, -81.6, 400, 180), new cjs.Rectangle(-200, -82, 400, 180), new cjs.Rectangle(-200, -82.3, 400, 180), new cjs.Rectangle(-200, -82.6, 400, 180), new cjs.Rectangle(-200, -83, 400, 180), new cjs.Rectangle(-200, -83.3, 400, 180), new cjs.Rectangle(-200, -83.6, 400, 180), new cjs.Rectangle(-200, -84, 400, 180), new cjs.Rectangle(-200, -84.3, 400, 180), new cjs.Rectangle(-200, -84.6, 400, 180), new cjs.Rectangle(-200, -85, 400, 180), new cjs.Rectangle(-200, -85.3, 400, 180), new cjs.Rectangle(-200, -85.6, 400, 180), new cjs.Rectangle(-200, -86, 400, 180), new cjs.Rectangle(-200, -86.3, 400, 180), new cjs.Rectangle(-200, -86.6, 400, 180), new cjs.Rectangle(-200, -87, 400, 180), new cjs.Rectangle(-200, -87.3, 400, 180), new cjs.Rectangle(-200, -87.6, 400, 180), new cjs.Rectangle(-200, -88, 400, 180), new cjs.Rectangle(-200, -88.3, 400, 180), new cjs.Rectangle(-200, -88.6, 400, 180), new cjs.Rectangle(-200, -89, 400, 180), new cjs.Rectangle(-200, -89.3, 400, 180), new cjs.Rectangle(-200, -89.6, 400, 180), new cjs.Rectangle(-200, -90, 400, 180)];


    (lib.animation_circle_nav_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.mouseChildren = false;
            this.mouseEnabled = false;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // body
        this.instance = new lib.body_animation_circle_nav_mc();
        this.instance.setTransform(0, 0, 0.889, 0.889);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-53.3, -36.3, 106.6, 72.7);
    p.frameBounds = [rect];


    (lib.accessory_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.substrate_mc = new lib.remove_1_mc();
        this.substrate_mc.setTransform(0.1, 0, 0.45, 0.45, 0, 0, 0, 0.2, 0);

        this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-18, -18, 36, 36);
    p.frameBounds = [rect];


    (lib.curtain_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            mid: 22,
            end: 59
        });

        // timeline functions:
        this.frame_59 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

        // logo
        this.instance = new lib.curtain_4_mc();
        this.instance.setTransform(600, 300, 0.667, 0.667);
        this.instance.alpha = 0.012;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({
            _off: false
        }, 0).wait(1).to({
            scaleX: 0.79,
            scaleY: 0.79,
            x: 600.1,
            y: 300.1,
            alpha: 0.211
        }, 0).wait(1).to({
            scaleX: 0.91,
            scaleY: 0.91,
            alpha: 0.41
        }, 0).wait(1).to({
            regX: 0.1,
            regY: 0.1,
            scaleX: 1.03,
            scaleY: 1.03,
            alpha: 0.609
        }, 0).wait(1).to({
            scaleX: 1.02,
            scaleY: 1.02,
            alpha: 0.801
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            x: 600,
            y: 300,
            alpha: 1
        }, 0).wait(10).to({
            alpha: 0.91
        }, 0).wait(1).to({
            alpha: 0.82
        }, 0).wait(1).to({
            alpha: 0.73
        }, 0).wait(1).to({
            alpha: 0.641
        }, 0).wait(1).to({
            alpha: 0.551
        }, 0).wait(1).to({
            alpha: 0.461
        }, 0).wait(1).to({
            alpha: 0.371
        }, 0).wait(1).to({
            alpha: 0.281
        }, 0).wait(1).to({
            alpha: 0.191
        }, 0).wait(1).to({
            alpha: 0.102
        }, 0).wait(1).to({
            alpha: 0.012
        }, 0).to({
            _off: true
        }, 1).wait(20));

        // curtain_1
        this.instance_1 = new lib.curtain_1_mc();
        this.instance_1.setTransform(-1000, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({
            x: -944.4
        }, 0).wait(1).to({
            x: -888.9
        }, 0).wait(1).to({
            x: -833.3
        }, 0).wait(1).to({
            x: -777.7
        }, 0).wait(1).to({
            x: -722.2
        }, 0).wait(1).to({
            x: -666.6
        }, 0).wait(1).to({
            x: -611.1
        }, 0).wait(1).to({
            x: -555.5
        }, 0).wait(1).to({
            x: -500
        }, 0).wait(1).to({
            x: -444.4
        }, 0).wait(1).to({
            x: -388.9
        }, 0).wait(1).to({
            x: -333.3
        }, 0).wait(1).to({
            x: -277.7
        }, 0).wait(1).to({
            x: -222.2
        }, 0).wait(1).to({
            x: -166.6
        }, 0).wait(1).to({
            x: -111.1
        }, 0).wait(1).to({
            x: -55.5
        }, 0).wait(1).to({
            x: 0
        }, 0).wait(10).to({
            x: -33.3
        }, 0).wait(1).to({
            x: -66.6
        }, 0).wait(1).to({
            x: -100
        }, 0).wait(1).to({
            x: -133.3
        }, 0).wait(1).to({
            x: -166.6
        }, 0).wait(1).to({
            x: -200
        }, 0).wait(1).to({
            x: -233.3
        }, 0).wait(1).to({
            x: -266.6
        }, 0).wait(1).to({
            x: -300
        }, 0).wait(1).to({
            x: -333.3
        }, 0).wait(1).to({
            x: -366.6
        }, 0).wait(1).to({
            x: -400
        }, 0).wait(1).to({
            x: -433.3
        }, 0).wait(1).to({
            x: -466.6
        }, 0).wait(1).to({
            x: -500
        }, 0).wait(1).to({
            x: -533.3
        }, 0).wait(1).to({
            x: -566.6
        }, 0).wait(1).to({
            x: -600
        }, 0).wait(1).to({
            x: -633.3
        }, 0).wait(1).to({
            x: -666.6
        }, 0).wait(1).to({
            x: -700
        }, 0).wait(1).to({
            x: -733.3
        }, 0).wait(1).to({
            x: -766.6
        }, 0).wait(1).to({
            x: -800
        }, 0).wait(1).to({
            x: -833.3
        }, 0).wait(1).to({
            x: -866.6
        }, 0).wait(1).to({
            x: -900
        }, 0).wait(1).to({
            x: -933.3
        }, 0).wait(1).to({
            x: -966.6
        }, 0).wait(1).to({
            x: -1000
        }, 0).wait(2));

        // curtain_2
        this.instance_2 = new lib.curtain_2_mc();
        this.instance_2.setTransform(1000, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({
            x: 944.5
        }, 0).wait(1).to({
            x: 888.9
        }, 0).wait(1).to({
            x: 833.4
        }, 0).wait(1).to({
            x: 777.8
        }, 0).wait(1).to({
            x: 722.2
        }, 0).wait(1).to({
            x: 666.7
        }, 0).wait(1).to({
            x: 611.1
        }, 0).wait(1).to({
            x: 555.6
        }, 0).wait(1).to({
            x: 500
        }, 0).wait(1).to({
            x: 444.5
        }, 0).wait(1).to({
            x: 388.9
        }, 0).wait(1).to({
            x: 333.4
        }, 0).wait(1).to({
            x: 277.8
        }, 0).wait(1).to({
            x: 222.3
        }, 0).wait(1).to({
            x: 166.7
        }, 0).wait(1).to({
            x: 111.1
        }, 0).wait(1).to({
            x: 55.6
        }, 0).wait(1).to({
            x: 0
        }, 0).wait(10).to({
            x: 33.4
        }, 0).wait(1).to({
            x: 66.7
        }, 0).wait(1).to({
            x: 100
        }, 0).wait(1).to({
            x: 133.4
        }, 0).wait(1).to({
            x: 166.7
        }, 0).wait(1).to({
            x: 200
        }, 0).wait(1).to({
            x: 233.4
        }, 0).wait(1).to({
            x: 266.7
        }, 0).wait(1).to({
            x: 300
        }, 0).wait(1).to({
            x: 333.4
        }, 0).wait(1).to({
            x: 366.7
        }, 0).wait(1).to({
            x: 400
        }, 0).wait(1).to({
            x: 433.4
        }, 0).wait(1).to({
            x: 466.7
        }, 0).wait(1).to({
            x: 500
        }, 0).wait(1).to({
            x: 533.4
        }, 0).wait(1).to({
            x: 566.7
        }, 0).wait(1).to({
            x: 600
        }, 0).wait(1).to({
            x: 633.4
        }, 0).wait(1).to({
            x: 666.7
        }, 0).wait(1).to({
            x: 700
        }, 0).wait(1).to({
            x: 733.4
        }, 0).wait(1).to({
            x: 766.7
        }, 0).wait(1).to({
            x: 800
        }, 0).wait(1).to({
            x: 833.4
        }, 0).wait(1).to({
            x: 866.7
        }, 0).wait(1).to({
            x: 900
        }, 0).wait(1).to({
            x: 933.4
        }, 0).wait(1).to({
            x: 966.7
        }, 0).wait(1).to({
            x: 1000
        }, 0).wait(2));

        // bg
        this.instance_3 = new lib.curtain_3_mc();
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({
            _off: false
        }, 0).wait(9).to({
            _off: true
        }, 1).wait(31));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-1000, 0, 3200, 600);
    p.frameBounds = [rect, rect, new cjs.Rectangle(-944.4, 0, 3088.9, 600), new cjs.Rectangle(-888.9, 0, 2977.8, 600), new cjs.Rectangle(-833.3, 0, 2866.7, 600), new cjs.Rectangle(-777.7, 0, 2755.5, 600), new cjs.Rectangle(-722.2, 0, 2644.4, 600), new cjs.Rectangle(-666.6, 0, 2533.3, 600), new cjs.Rectangle(-611.1, 0, 2422.2, 600), new cjs.Rectangle(-555.5, 0, 2311.1, 600), new cjs.Rectangle(-500, 0, 2200, 600), new cjs.Rectangle(-444.4, 0, 2088.9, 600), new cjs.Rectangle(-388.9, 0, 1977.8, 600), new cjs.Rectangle(-333.3, 0, 1866.7, 600), new cjs.Rectangle(-277.7, 0, 1755.5, 600), new cjs.Rectangle(-222.2, 0, 1644.5, 600), new cjs.Rectangle(-166.6, 0, 1533.3, 600), new cjs.Rectangle(-111.1, -10, 1422.2, 620), new cjs.Rectangle(-55.5, -5, 1311.1, 610), rect = new cjs.Rectangle(0, 0, 1200, 600), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-33.3, 0, 1266.7, 600), new cjs.Rectangle(-66.6, 0, 1333.3, 600), new cjs.Rectangle(-100, 0, 1400, 600), new cjs.Rectangle(-133.3, 0, 1466.7, 600), new cjs.Rectangle(-166.6, 0, 1533.3, 600), new cjs.Rectangle(-200, 0, 1600, 600), new cjs.Rectangle(-233.3, 0, 1666.7, 600), new cjs.Rectangle(-266.6, 0, 1733.3, 600), new cjs.Rectangle(-300, 0, 1800, 600), new cjs.Rectangle(-333.3, 0, 1866.7, 600), new cjs.Rectangle(-366.6, 0, 1933.3, 600), new cjs.Rectangle(-400, 0, 2000, 600), new cjs.Rectangle(-433.3, 0, 2066.7, 600), new cjs.Rectangle(-466.6, 0, 2133.3, 600), new cjs.Rectangle(-500, 0, 2200, 600), new cjs.Rectangle(-533.3, 0, 2266.7, 600), new cjs.Rectangle(-566.6, 0, 2333.3, 600), new cjs.Rectangle(-600, 0, 2400, 600), new cjs.Rectangle(-633.3, 0, 2466.7, 600), new cjs.Rectangle(-666.6, 0, 2533.3, 600), new cjs.Rectangle(-700, 0, 2600, 600), new cjs.Rectangle(-733.3, 0, 2666.7, 600), new cjs.Rectangle(-766.6, 0, 2733.3, 600), new cjs.Rectangle(-800, 0, 2800, 600), new cjs.Rectangle(-833.3, 0, 2866.7, 600), new cjs.Rectangle(-866.6, 0, 2933.3, 600), new cjs.Rectangle(-900, 0, 3000, 600), new cjs.Rectangle(-933.3, 0, 3066.7, 600), new cjs.Rectangle(-966.6, 0, 3133.3, 600), rect = new cjs.Rectangle(-1000, 0, 3200, 600), rect];


    (lib.copyright_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_9 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

        // animation
        this.instance = new lib.copyright_3_mc();
        this.instance.setTransform(200, 200, 0.6, 0.6);
        this.instance.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            scaleX: 1,
            scaleY: 1,
            x: 0,
            y: 0,
            alpha: 1
        }, 9, cjs.Ease.get(-1)).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(50, 110, 300, 180);
    p.frameBounds = [rect, new cjs.Rectangle(46.3, 106.8, 302.5, 181.5), new cjs.Rectangle(35.2, 97.1, 309.9, 186), new cjs.Rectangle(16.7, 81.1, 322.2, 193.4), new cjs.Rectangle(-9.3, 58.6, 339.5, 203.7), new cjs.Rectangle(-42.6, 29.7, 361.7, 217.1), new cjs.Rectangle(-83.3, -5.5, 388.9, 233.4), new cjs.Rectangle(-131.4, -47.2, 421, 252.6), new cjs.Rectangle(-187, -95.4, 458, 274.8), new cjs.Rectangle(-250, -150, 500, 300)];


    (lib.snowfall_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /*
             * @author edapskov
             * @copyright 2017 edapskov v 1.0
             */
            this.gotoAndStop(0);
            this.mouseEnabled = false;
            this.mouseChildren = false;
            var container_mc = this.container_mc;
            container_mc.gotoAndStop(0);
            var _containerBounds_rect = container_mc.getBounds();
            /*
            константы
            */
            var _SPEED_NUM = 0.75;
            var _CURRENT_NUM = 0.25;
            var _BUBBLE_DIAMETER_NUM = 50;
            /*
            создаём n-ое количество пузырей
            */
            _createSnowflakesFunc(20);
            /*
            функция, создающая пузыри
            */
            function _createSnowflakesFunc(snowflakes_num) {
                /*
                переменные
                */
                var randomScale_num;
                var i = 0;
                /*
                цикл
                */
                while (i < snowflakes_num) {
                    /*
                    создаём пузырь
                    */
                    var snowflake_mc = new lib.Snowflake();
                    container_mc.addChild(snowflake_mc);
                    snowflake_mc.gotoAndStop(0);
                    snowflake_mc.rad = Math.random() * _CURRENT_NUM - Math.random() * _CURRENT_NUM;
                    randomScale_num = Math.random() * (1 - 0.5) + 0.5;
                    snowflake_mc.scaleX = randomScale_num;
                    snowflake_mc.scaleY = randomScale_num;
                    snowflake_mc.alpha = randomScale_num;
                    snowflake_mc.x = Math.random() * _containerBounds_rect.width;
                    snowflake_mc.y = Math.random() * _containerBounds_rect.height;
                    snowflake_mc.addEventListener("tick", _onTickSnowflakeFunc, false);
                    /*
                    обновление итератора
                    */
                    i++;
                }
            }
            /*
            обновляем в каждом кадре
            */
            function _onTickSnowflakeFunc(event) {
                /*
                получаем пузырь
                */
                var target_mc = event.target;
                target_mc.gotoAndStop(0);
                /*
                обновляем координаты
                */
                target_mc.x -= target_mc.rad;
                target_mc.y += _SPEED_NUM;
                target_mc.rotation += 0.1;
                /*
                если пузырь уходит за границы, то исправляем это
                */
                if (target_mc.y >= _containerBounds_rect.height) {
                    target_mc.y = _BUBBLE_DIAMETER_NUM;
                }
                if (target_mc.x >= _containerBounds_rect.width - _BUBBLE_DIAMETER_NUM) {
                    target_mc.x = 1;
                }
                if (target_mc.x <= 0) {
                    target_mc.x = _containerBounds_rect.width - _BUBBLE_DIAMETER_NUM;
                }
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // snowfall
        this.instance = new lib.Snowflake();
        this.instance.setTransform(600, 650);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // container
        this.container_mc = new lib.snowfall_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 1200, 682);
    p.frameBounds = [rect];


    (lib.radio_button_1_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.radio_button_0_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // text
        this.instance = new lib.title_filter_3_mc();
        this.instance.setTransform(15.5, -20, 1, 1, 0, 0, 0, 0.5, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3aDHIAAmNMAu1AAAIAAGNg");
        this.shape.setTransform(130, 0);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20, -20, 300, 40);
    p.frameBounds = [rect];


    (lib.radio_button_1_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.radio_button_0_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // text
        this.instance = new lib.title_filter_2_mc();
        this.instance.setTransform(15.5, -20, 1, 1, 0, 0, 0, 0.5, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3aDHIAAmNMAu1AAAIAAGNg");
        this.shape.setTransform(130, 0);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20, -20, 300, 40.5);
    p.frameBounds = [rect];


    (lib.radio_button_1_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.radio_button_0_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // text
        this.instance = new lib.title_filter_1_mc();
        this.instance.setTransform(15.5, -20, 1, 1, 0, 0, 0, 0.5, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3aDHIAAmNMAu1AAAIAAGNg");
        this.shape.setTransform(130, 0);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20, -20, 300, 40);
    p.frameBounds = [rect];


    (lib.radio_button_1_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.radio_button_0_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // text
        this.instance = new lib.title_filter_0_mc();
        this.instance.setTransform(15.5, -20, 1, 1, 0, 0, 0, 0.5, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3aDHIAAmNMAu1AAAIAAGNg");
        this.shape.setTransform(130, 0);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20, -20, 300, 40);
    p.frameBounds = [rect];


    (lib.output_numbers_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // chars
        this.char_2 = new lib.output_numbers_3_mc();
        this.char_2.setTransform(26, 0);

        this.char_1 = new lib.output_numbers_3_mc();

        this.char_0 = new lib.output_numbers_3_mc();
        this.char_0.setTransform(-26, 0);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.char_0
            }, {
                t: this.char_1
            }, {
                t: this.char_2
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-46, -20, 92, 40);
    p.frameBounds = [rect];


    (lib.output_numbers_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /*
             * @author edapskov
             * @copyright 2017 edapskov v 3.0
             */
            createjs.EventDispatcher.initialize(this);
            /*
		
            */
            this.gotoAndStop(0);
            this.chars_mc.gotoAndStop(0);
            /*
		
            */
            var _INTERVAL = 100;
            /*
		
            */
            var _that = this;
            var _value_num = 0;
            var _value_str = "0";
            var _startValue_num = 0;
            var _finalValue_num = 0;
            var _duration_num = 0;
            var _partValue_num = 0;
            var _maxChars_num = Number(this.chars_mc.numChildren);
            var _idInterval;
            /*
		
            */
            _updateValueFunc();
            /*
		
            */
            this.setValueFunc = function(value_num) {
                /*
			
                */
                if (value_num === undefined) {
                    value_num = 0;
                } else {
                    value_num = Number(value_num);
                }
                /*
			
                */
                _value_num = value_num;
                /*
			
                */
                _updateValueFunc();
            }
            /*
		
            */
            this.setAnimatedValueFunc = function(startValue_num, finalValue_num, duration_num, delay_num) {
                /*
			
                */
                if (startValue_num === undefined) {
                    startValue_num = 0;
                } else {
                    startValue_num = Number(startValue_num);
                }
                /*
			
                */
                if (finalValue_num === undefined) {
                    finalValue_num = 0;
                } else {
                    finalValue_num = Number(finalValue_num);
                }
                /*
			
                */
                if (duration_num === undefined) {
                    duration_num = 1;
                } else {
                    duration_num = Number(duration_num);
                }
                /*
			
                */
                if (delay_num === undefined) {
                    delay_num = 0;
                } else {
                    delay_num = Number(delay_num);
                }
                /*
			
                */
                _value_num = startValue_num;
                _startValue_num = startValue_num;
                _finalValue_num = finalValue_num;
                _duration_num = duration_num;
                /*
			
                */
                if (delay_num > 0) {
                    setTimeout(_onStartIntervalFunc, delay_num * 1000);
                } else {
                    _onStartIntervalFunc();
                }
            }
            /*
		
            */
            function _onStartIntervalFunc() {
                var tick_num = (_duration_num * 1000) / _INTERVAL;
                _partValue_num = Math.ceil((_finalValue_num - _startValue_num) / tick_num);
                _idInterval = setInterval(_onTickIntervalFunc, _INTERVAL);
            }
            /*
		
            */
            function _onTickIntervalFunc() {
                /*
			
                */
                _value_num += _partValue_num;
                /*
			
                */
                if (_value_num > _finalValue_num) {
                    /*
				
                    */
                    _value_num = _finalValue_num;
                    /*
				
                    */
                    clearInterval(_idInterval);
                    /*
				
                    */
                    var user_event = new createjs.Event("completed_animation");
                    user_event.numberValue = _value_num;
                    _that.dispatchEvent(user_event);
                }
                /*
			
                */
                _updateValueFunc();
            }
            /*
		
            */
            function _updateValueFunc() {
                /*
			
                */
                _value_str = _value_num.toString();
                _value_str = String(_value_str).trim();
                /*
			
                */
                if (_value_str.length > _maxChars_num) {
                    _value_str = _value_str.substr(0, _maxChars_num);
                }
                /*
			
                */
                var i = _maxChars_num - 1;
                var j = _value_str.length - 1;
                var char_mc;
                while (i >= 0) {
                    /*
				
                    */
                    if (_that.chars_mc["char_" + i]) {
                        /*
					
                        */
                        char_mc = _that.chars_mc["char_" + i];
                        char_mc.name = "char_" + i;
                        /*
					
                        */
                        if (j >= 0) {
                            char_mc.visible = true;
                            char_mc.gotoAndStop(parseInt(_value_str.charAt(j)));
                        } else {
                            char_mc.visible = false;
                            char_mc.gotoAndStop(0);
                        }
                    }
                    /*
				
                    */
                    i--;
                    j--;
                }
            }
            /*
		
            */
            function _getNumberValueFunc() {
                /*
			
                */
                var result_num = parseInt(_value_str);
                /*
			
                */
                if (isNaN(result_num)) {
                    result_num = 0;
                }
                /*
			
                */
                return result_num;
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // text
        this.chars_mc = new lib.output_numbers_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.chars_mc).wait(1));

        // bg
        this.instance = new lib.indicator_part_5_mc();
        this.instance.setTransform(60, 0, 0.899, 0.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-46, -20, 124, 40);
    p.frameBounds = [rect];


    (lib.gravity_explosion_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // container
        this.example_mc = new lib.ParticleGravityExplosionMC();

        this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-18, -18, 36, 36);
    p.frameBounds = [rect];


    (lib.blinking_light_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.blinking_light_1_mc();
        this.instance.alpha = 0.801;

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            scaleX: 0.8,
            scaleY: 0.8,
            alpha: 0.012
        }, 14).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 0.801
        }, 15).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25, -25, 50, 50);
    p.frameBounds = [rect, new cjs.Rectangle(-24.6, -24.6, 49.3, 49.3), new cjs.Rectangle(-24.2, -24.2, 48.6, 48.6), new cjs.Rectangle(-23.9, -23.9, 47.8, 47.8), new cjs.Rectangle(-23.5, -23.5, 47.2, 47.2), new cjs.Rectangle(-23.2, -23.2, 46.5, 46.5), new cjs.Rectangle(-22.8, -22.8, 45.7, 45.7), new cjs.Rectangle(-22.5, -22.5, 45, 45), new cjs.Rectangle(-22.1, -22.1, 44.3, 44.3), new cjs.Rectangle(-21.7, -21.7, 43.6, 43.6), new cjs.Rectangle(-21.4, -21.4, 42.8, 42.8), new cjs.Rectangle(-21, -21, 42.2, 42.2), new cjs.Rectangle(-20.7, -20.7, 41.5, 41.5), new cjs.Rectangle(-20.3, -20.3, 40.7, 40.7), new cjs.Rectangle(-20, -20, 40, 40), new cjs.Rectangle(-20.3, -20.3, 40.7, 40.7), new cjs.Rectangle(-20.6, -20.6, 41.3, 41.3), new cjs.Rectangle(-20.9, -20.9, 42, 42), new cjs.Rectangle(-21.3, -21.3, 42.7, 42.7), new cjs.Rectangle(-21.6, -21.6, 43.3, 43.3), new cjs.Rectangle(-21.9, -21.9, 44, 44), new cjs.Rectangle(-22.3, -22.3, 44.7, 44.7), new cjs.Rectangle(-22.6, -22.6, 45.3, 45.3), new cjs.Rectangle(-22.9, -22.9, 46, 46), new cjs.Rectangle(-23.3, -23.3, 46.7, 46.7), new cjs.Rectangle(-23.6, -23.6, 47.3, 47.3), new cjs.Rectangle(-23.9, -23.9, 48, 48), new cjs.Rectangle(-24.3, -24.3, 48.7, 48.7), new cjs.Rectangle(-24.6, -24.6, 49.3, 49.3), new cjs.Rectangle(-25, -25, 50, 50)];


    (lib.TrackMove = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_29 = function() {
            this.parent.removeChild(this);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

        // animation
        this.instance = new lib.track_move_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            scaleX: 0.5,
            scaleY: 0.5
        }, 29).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-50, -50, 100, 100);
    p.frameBounds = [rect, new cjs.Rectangle(-49.1, -49.1, 98.3, 98.3), new cjs.Rectangle(-48.2, -48.2, 96.6, 96.6), new cjs.Rectangle(-47.4, -47.4, 94.9, 94.9), new cjs.Rectangle(-46.5, -46.5, 93.1, 93.1), new cjs.Rectangle(-45.6, -45.6, 91.4, 91.4), new cjs.Rectangle(-44.8, -44.8, 89.7, 89.7), new cjs.Rectangle(-43.9, -43.9, 88, 88), new cjs.Rectangle(-43.1, -43.1, 86.2, 86.2), new cjs.Rectangle(-42.2, -42.2, 84.5, 84.5), new cjs.Rectangle(-41.3, -41.3, 82.8, 82.8), new cjs.Rectangle(-40.5, -40.5, 81.1, 81.1), new cjs.Rectangle(-39.6, -39.6, 79.3, 79.3), new cjs.Rectangle(-38.7, -38.7, 77.6, 77.6), new cjs.Rectangle(-37.9, -37.9, 75.9, 75.9), new cjs.Rectangle(-37, -37, 74.2, 74.2), new cjs.Rectangle(-36.2, -36.2, 72.4, 72.4), new cjs.Rectangle(-35.3, -35.3, 70.7, 70.7), new cjs.Rectangle(-34.4, -34.4, 69, 69), new cjs.Rectangle(-33.6, -33.6, 67.3, 67.3), new cjs.Rectangle(-32.7, -32.7, 65.5, 65.5), new cjs.Rectangle(-31.8, -31.8, 63.8, 63.8), new cjs.Rectangle(-31, -31, 62.1, 62.1), new cjs.Rectangle(-30.1, -30.1, 60.4, 60.4), new cjs.Rectangle(-29.3, -29.3, 58.6, 58.6), new cjs.Rectangle(-28.4, -28.4, 56.9, 56.9), new cjs.Rectangle(-27.5, -27.5, 55.2, 55.2), new cjs.Rectangle(-26.7, -26.7, 53.5, 53.5), new cjs.Rectangle(-25.8, -25.8, 51.7, 51.7), new cjs.Rectangle(-25, -25, 50, 50)];


    (lib.sound_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.sound_4_mc();
        this.instance.setTransform(7, 0, 0.4, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // graph
        this.instance_1 = new lib.sound_0_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.sound_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.sound_0_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({
            rotation: -10
        }, 5).to({
            rotation: 10
        }, 10).to({
            rotation: 0
        }, 5).wait(51));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-62, -62, 124.1, 124.1), new cjs.Rectangle(-64, -64, 128.1, 128.1), new cjs.Rectangle(-65.9, -65.9, 131.9, 131.9), new cjs.Rectangle(-67.7, -67.7, 135.5, 135.5), new cjs.Rectangle(-69.5, -69.5, 139, 139), new cjs.Rectangle(-67.7, -67.7, 135.5, 135.5), new cjs.Rectangle(-65.9, -65.9, 131.9, 131.9), new cjs.Rectangle(-64, -64, 128.1, 128.1), new cjs.Rectangle(-62, -62, 124.1, 124.1), new cjs.Rectangle(-59.9, -59.9, 120, 120), new cjs.Rectangle(-62, -62, 124.1, 124.1), new cjs.Rectangle(-64, -64, 128.1, 128.1), new cjs.Rectangle(-65.9, -65.9, 131.9, 131.9), new cjs.Rectangle(-67.7, -67.7, 135.5, 135.5), new cjs.Rectangle(-69.5, -69.5, 139, 139), new cjs.Rectangle(-67.7, -67.7, 135.5, 135.5), new cjs.Rectangle(-65.9, -65.9, 131.9, 131.9), new cjs.Rectangle(-64, -64, 128.1, 128.1), new cjs.Rectangle(-62, -62, 124.1, 124.1), rect = new cjs.Rectangle(-60, -60, 120, 120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.sound_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.sound_3_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({
            rotation: -10
        }, 5).to({
            rotation: 10
        }, 10).to({
            rotation: 0
        }, 5).wait(51));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-62, -62, 124.1, 124.1), new cjs.Rectangle(-64, -64, 128.1, 128.1), new cjs.Rectangle(-65.9, -65.9, 131.9, 131.9), new cjs.Rectangle(-67.7, -67.7, 135.5, 135.5), new cjs.Rectangle(-69.5, -69.5, 139, 139), new cjs.Rectangle(-67.7, -67.7, 135.5, 135.5), new cjs.Rectangle(-65.9, -65.9, 131.9, 131.9), new cjs.Rectangle(-64, -64, 128.1, 128.1), new cjs.Rectangle(-62, -62, 124.1, 124.1), new cjs.Rectangle(-59.9, -59.9, 120, 120), new cjs.Rectangle(-62, -62, 124.1, 124.1), new cjs.Rectangle(-64, -64, 128.1, 128.1), new cjs.Rectangle(-65.9, -65.9, 131.9, 131.9), new cjs.Rectangle(-67.7, -67.7, 135.5, 135.5), new cjs.Rectangle(-69.5, -69.5, 139, 139), new cjs.Rectangle(-67.7, -67.7, 135.5, 135.5), new cjs.Rectangle(-65.9, -65.9, 131.9, 131.9), new cjs.Rectangle(-64, -64, 128.1, 128.1), new cjs.Rectangle(-62, -62, 124.1, 124.1), rect = new cjs.Rectangle(-60, -60, 120, 120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.remove_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.remove_1_mc();
        this.instance.setTransform(0, 0, 0.875, 0.875);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 1,
            scaleY: 1
        }, 0).wait(1).to({
            scaleX: 0.88,
            scaleY: 0.88,
            alpha: 0.801
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-35, -35, 70, 70);
    p.frameBounds = [rect, new cjs.Rectangle(-40, -40, 80, 80), new cjs.Rectangle(-35, -35, 70, 70), new cjs.Rectangle(-40, -40, 80, 80)];


    (lib.play_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // icon
        this.instance = new lib.play_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({
            x: 5
        }, 5).to({
            x: -5
        }, 10).to({
            x: 0
        }, 5).wait(1));

        // bg
        this.instance_1 = new lib.bg_large_buttons_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({
            scaleX: 1.05,
            scaleY: 1.05
        }, 5).to({
            scaleX: 1,
            scaleY: 1
        }, 10).wait(6));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96, -96, 192, 192), new cjs.Rectangle(-96.9, -96.9, 194, 194), new cjs.Rectangle(-97.9, -97.9, 196, 196), new cjs.Rectangle(-98.9, -98.9, 198, 198), new cjs.Rectangle(-100, -100, 200, 200), new cjs.Rectangle(-99.4, -99.4, 199, 199), new cjs.Rectangle(-98.9, -98.9, 198, 198), new cjs.Rectangle(-98.4, -98.4, 197, 197), new cjs.Rectangle(-97.9, -97.9, 196, 196), new cjs.Rectangle(-97.4, -97.4, 195, 195), new cjs.Rectangle(-96.9, -96.9, 194, 194), new cjs.Rectangle(-97, -96.4, 193.6, 193), new cjs.Rectangle(-98, -95.9, 194.1, 192), new cjs.Rectangle(-99, -95.4, 194.6, 191), new cjs.Rectangle(-100, -95, 195, 190), new cjs.Rectangle(-99, -95, 194, 190), new cjs.Rectangle(-98, -95, 193, 190), new cjs.Rectangle(-97, -95, 192, 190), new cjs.Rectangle(-96, -95, 191, 190), new cjs.Rectangle(-95, -95, 190, 190)];


    (lib.photo_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // icon
        this.instance = new lib.photo_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.instance_1 = new lib.bg_large_buttons_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect];


    (lib.next_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // icon
        this.instance = new lib.next_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({
            scaleX: 1.05,
            scaleY: 1.05
        }, 5).to({
            scaleX: 1,
            scaleY: 1
        }, 10).wait(6));

        // bg
        this.instance_1 = new lib.bg_large_buttons_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({
            scaleX: 1.05,
            scaleY: 1.05
        }, 5).to({
            scaleX: 1,
            scaleY: 1
        }, 10).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96, -96, 192, 192), new cjs.Rectangle(-96.9, -96.9, 194, 194), new cjs.Rectangle(-97.9, -97.9, 196, 196), new cjs.Rectangle(-98.9, -98.9, 198, 198), new cjs.Rectangle(-100, -100, 200, 200), new cjs.Rectangle(-99.4, -99.4, 199, 199), new cjs.Rectangle(-98.9, -98.9, 198, 198), new cjs.Rectangle(-98.4, -98.4, 197, 197), new cjs.Rectangle(-98.9, -98.9, 198, 198), new cjs.Rectangle(-100, -100, 200, 200), new cjs.Rectangle(-99.4, -99.4, 199, 199), new cjs.Rectangle(-98.9, -98.9, 198, 198), new cjs.Rectangle(-98.4, -98.4, 197, 197), new cjs.Rectangle(-97.9, -97.9, 196, 196), new cjs.Rectangle(-97.4, -97.4, 195, 195), new cjs.Rectangle(-96.9, -96.9, 194, 194), new cjs.Rectangle(-96.4, -96.4, 193, 193), new cjs.Rectangle(-95.9, -95.9, 192, 192), new cjs.Rectangle(-95.4, -95.4, 191, 191), new cjs.Rectangle(-95, -95, 190, 190)];


    (lib.more_games_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.more_games_7_mc();
        this.instance.setTransform(97.9, 45, 2.363, 2.363, 0, 0, 0, 3.5, 3.9);

        this.instance_1 = new lib.more_games_7_mc();
        this.instance_1.setTransform(127.2, 56.6, 1.553, 1.553, 0, 0, 0, 3.5, 3.9);

        this.instance_2 = new lib.more_games_7_mc();
        this.instance_2.setTransform(117.9, 50.5, 2.363, 2.363, 0, 0, 0, 3.5, 3.9);

        this.instance_3 = new lib.more_games_7_mc();
        this.instance_3.setTransform(26.9, 80, 2.363, 2.363, 0, 0, 0, 3.5, 3.9);

        this.instance_4 = new lib.more_games_7_mc();
        this.instance_4.setTransform(56.4, 108.1, 2.363, 2.363, 0, 0, 0, 3.5, 3.9);

        this.instance_5 = new lib.more_games_7_mc();
        this.instance_5.setTransform(71.4, 113.1, 2.363, 2.363, 0, 0, 0, 3.5, 3.9);

        this.instance_6 = new lib.more_games_11_mc();
        this.instance_6.setTransform(94.6, 90.6, 0.964, 0.964, -15, 0, 0, 22.1, 10);

        this.instance_7 = new lib.more_games_13_mc();
        this.instance_7.setTransform(16, 64.1, 0.987, 0.987, 60, 0, 0, 11.8, 12);

        this.instance_8 = new lib.more_games_13_mc();
        this.instance_8.setTransform(64, 100.6, 1.051, 1.051, 0, 0, 0, 11.9, 11.9);

        this.instance_9 = new lib.more_games_12_img();
        this.instance_9.setTransform(10.7, 37.7);

        this.instance_10 = new lib.more_games_14_mc();
        this.instance_10.setTransform(82, 109.1, 0.929, 0.929, 180, 0, 0, 8.3, 13.3);

        this.instance_11 = new lib.more_games_9_mc();
        this.instance_11.setTransform(79.8, 80.3, 1, 1, 0, 0, 0, 41.1, 30);

        this.instance_12 = new lib.more_games_15_mc();
        this.instance_12.setTransform(81.5, 45.2, 2.743, 2.743, 0, 0, 0, 3.8, 3.8);

        this.instance_13 = new lib.more_games_14_mc();
        this.instance_13.setTransform(53.4, 48.6, 1.196, 1.196, 150, 0, 0, 8.3, 13.3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_13
            }, {
                t: this.instance_12
            }, {
                t: this.instance_11
            }, {
                t: this.instance_10
            }, {
                t: this.instance_9
            }, {
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        // Слой 3
        this.instance_14 = new lib.more_games_11_img();
        this.instance_14.setTransform(95, 33.3, 0.897, 0.897, -30);

        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

        // Слой 2
        this.instance_15 = new lib.more_games_4_img();
        this.instance_15.setTransform(26.4, 5.4, 0.339, 0.339, -15);

        this.instance_16 = new lib.more_games_5_img();
        this.instance_16.setTransform(98.4, 5.1, 0.239, 0.239, 30);

        this.instance_17 = new lib.more_games_2_img();
        this.instance_17.setTransform(107, 0, 0.529, 0.529, 15);

        this.instance_18 = new lib.more_games_3_img();
        this.instance_18.setTransform(44.2, 4.7, 0.316, 0.316);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_18
            }, {
                t: this.instance_17
            }, {
                t: this.instance_16
            }, {
                t: this.instance_15
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 150.7, 122.4);
    p.frameBounds = [rect];


    (lib.more_games_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.more_games_12_mc();
        this.instance.setTransform(-4.8, -46.8, 0.322, 0.322, 0, 0, 0, 25, 25);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({
            _off: false
        }, 0).to({
            regX: 24.9,
            regY: 24.9,
            scaleX: 0.91,
            scaleY: 0.91,
            y: -46.9
        }, 3).to({
            regX: 25,
            regY: 25,
            scaleX: 0.32,
            scaleY: 0.32,
            y: -46.8
        }, 4).to({
            _off: true
        }, 1).wait(17).to({
            _off: false
        }, 0).to({
            regX: 24.9,
            regY: 24.9,
            scaleX: 0.91,
            scaleY: 0.91,
            y: -46.9
        }, 3).to({
            regX: 25,
            regY: 25,
            scaleX: 0.32,
            scaleY: 0.32,
            y: -46.8
        }, 4).to({
            _off: true
        }, 1).wait(32));

        // animation
        this.instance_1 = new lib.more_games_12_mc();
        this.instance_1.setTransform(-4.8, 25.2, 0.322, 0.322, 0, 0, 0, 25, 25);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({
            _off: false
        }, 0).to({
            regX: 24.9,
            regY: 24.9,
            scaleX: 0.91,
            scaleY: 0.91,
            y: 25.1
        }, 3).to({
            regX: 25,
            regY: 25,
            scaleX: 0.32,
            scaleY: 0.32,
            y: 25.2
        }, 4).to({
            _off: true
        }, 1).wait(17).to({
            _off: false
        }, 0).to({
            regX: 24.9,
            regY: 24.9,
            scaleX: 0.91,
            scaleY: 0.91,
            y: 25.1
        }, 3).to({
            regX: 25,
            regY: 25,
            scaleX: 0.32,
            scaleY: 0.32,
            y: 25.2
        }, 4).to({
            _off: true
        }, 1).wait(37));

        // animation
        this.instance_2 = new lib.more_games_12_mc();
        this.instance_2.setTransform(-45.1, -28.6, 0.418, 0.418, 0, 0, 0, 25, 25);
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({
            _off: false
        }, 0).to({
            regX: 24.9,
            scaleX: 1.18,
            scaleY: 1.18
        }, 3).to({
            regX: 25,
            scaleX: 0.42,
            scaleY: 0.42
        }, 4).to({
            _off: true
        }, 1).wait(17).to({
            _off: false
        }, 0).to({
            regX: 24.9,
            scaleX: 1.18,
            scaleY: 1.18
        }, 3).to({
            regX: 25,
            scaleX: 0.42,
            scaleY: 0.42
        }, 4).to({
            _off: true
        }, 1).wait(41));

        // animation
        this.instance_3 = new lib.more_games_12_mc();
        this.instance_3.setTransform(17.9, 11.3, 0.418, 0.418, 0, 0, 0, 25, 25);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({
            _off: false
        }, 0).to({
            regX: 24.9,
            scaleX: 1.18,
            scaleY: 1.18
        }, 3).to({
            regX: 25,
            scaleX: 0.42,
            scaleY: 0.42
        }, 4).to({
            _off: true
        }, 1).wait(17).to({
            _off: false
        }, 0).to({
            regX: 24.9,
            scaleX: 1.18,
            scaleY: 1.18
        }, 3).to({
            regX: 25,
            scaleX: 0.42,
            scaleY: 0.42
        }, 4).to({
            _off: true
        }, 1).wait(48));

        // animation
        this.instance_4 = new lib.more_games_8_mc();
        this.instance_4.setTransform(38.3, -2.7, 1, 1, -105, 0, 0, 24.9, 33.9);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({
            _off: false
        }, 0).to({
            rotation: 0,
            x: 62.7,
            y: 23.2
        }, 11, cjs.Ease.get(1)).wait(54).to({
            scaleX: 0.69,
            scaleY: 0.69,
            rotation: -105,
            x: 34.8,
            y: 7.2
        }, 12, cjs.Ease.get(-1)).to({
            _off: true
        }, 2).wait(8));

        // animation
        this.instance_5 = new lib.more_games_5_mc();
        this.instance_5.setTransform(0.2, -6.5, 1.074, 0.924, 0, 0, 0, 67.1, 57.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({
            regX: 67.2,
            scaleX: 0.96,
            scaleY: 0.83,
            y: -5
        }, 4, cjs.Ease.get(-1)).to({
            scaleX: 1,
            scaleY: 0.57,
            y: -25.8
        }, 2).to({
            regX: 67.1,
            scaleX: 1.07,
            scaleY: 0.07,
            y: -58.5
        }, 4).to({
            _off: true
        }, 1).wait(72).to({
            _off: false
        }, 0).to({
            scaleY: 0.92,
            y: -6.5
        }, 7).to({
            y: -4.5
        }, 2).to({
            y: -6.5
        }, 2).wait(3));

        // animation
        this.instance_6 = new lib.more_games_3_mc();
        this.instance_6.setTransform(0.3, 21.9, 1.074, 1.074, 0, 0, 0, 67.2, 47.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({
            scaleX: 0.96,
            scaleY: 0.96,
            x: 0.2,
            y: 20.3
        }, 4, cjs.Ease.get(-1)).to({
            scaleX: 1.07,
            scaleY: 1.07,
            x: 0.3,
            y: 21.9
        }, 4, cjs.Ease.get(1)).wait(82).to({
            y: 23.9
        }, 2).to({
            y: 21.9
        }, 2).wait(3));

        // animation
        this.instance_7 = new lib.more_games_4_mc();
        this.instance_7.setTransform(3, 2.2, 0.815, 0.685, 0, 0, 0, 75.3, 61.2);
        this.instance_7._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({
            _off: false
        }, 0).to({
            scaleX: 1,
            scaleY: 0.84,
            x: 3.5,
            y: -3.3
        }, 6).to({
            scaleY: 1.09,
            y: -18.8
        }, 6, cjs.Ease.get(1)).to({
            scaleY: 1,
            y: -13.3
        }, 2).wait(58).to({
            scaleY: 0.88,
            y: -5.7
        }, 6).to({
            regX: 75.4,
            scaleX: 0.91,
            scaleY: 0.79,
            y: 1.4
        }, 7).to({
            _off: true
        }, 1).wait(7));

        // animation
        this.instance_8 = new lib.more_games_2_mc();
        this.instance_8.setTransform(0.3, 6.9, 1.074, 1.074, 0, 0, 0, 67.2, 61.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({
            scaleX: 0.96,
            scaleY: 0.96,
            x: 0.2
        }, 4, cjs.Ease.get(-1)).to({
            scaleX: 1.07,
            scaleY: 1.07,
            x: 0.3
        }, 4, cjs.Ease.get(1)).wait(82).to({
            y: 8.9
        }, 2).to({
            y: 6.9
        }, 2).wait(3));

        // animation
        this.instance_9 = new lib.more_games_6_mc();
        this.instance_9.setTransform(0.2, -61.5, 1.074, 0.039, 0, 180, 0, 67.1, 57.5);
        this.instance_9._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20).to({
            _off: false
        }, 0).to({
            regY: 57.1,
            scaleY: 0.29,
            y: -72.8
        }, 5).wait(60).to({
            regY: 57.5,
            scaleY: 0.04,
            y: -61.5
        }, 6, cjs.Ease.get(-1)).to({
            _off: true
        }, 1).wait(14));

        // graph
        this.instance_10 = new lib.more_games_10_mc();
        this.instance_10.setTransform(2.2, 16.2);

        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(106));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-72.3, -59.4, 145, 139.6);
    p.frameBounds = [rect, rect = new cjs.Rectangle(-72.2, -59.3, 144.9, 139.5), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-72.3, -59.4, 145, 139.6), new cjs.Rectangle(-71.8, -58.9, 144, 139.1), new cjs.Rectangle(-70.3, -57.6, 142.4, 137.8), new cjs.Rectangle(-68, -55.4, 140.1, 135.6), new cjs.Rectangle(-67.6, -52.3, 139.7, 132.6), new cjs.Rectangle(-68, -55.5, 140.1, 135.7), new cjs.Rectangle(-70.4, -58.6, 142.5, 138.9), new cjs.Rectangle(-71.8, -59.5, 144, 139.7), new cjs.Rectangle(-72.3, -60.3, 146.5, 140.6), new cjs.Rectangle(-72.2, -61.3, 148.7, 141.6), new cjs.Rectangle(-72.2, -62.2, 151.1, 142.5), new cjs.Rectangle(-72.2, -64.6, 151.1, 144.8), new cjs.Rectangle(-72.2, -71.8, 158.9, 152), new cjs.Rectangle(-72.2, -77.7, 164.1, 158), new cjs.Rectangle(-72.2, -83.3, 166.4, 163.6), new cjs.Rectangle(-72.2, -89.6, 166.5, 169.9), new cjs.Rectangle(-72.2, -96, 165.6, 176.2), new cjs.Rectangle(-72.2, -95.9, 164.1, 176.2), new cjs.Rectangle(-72.2, -95.9, 162.5, 176.2), new cjs.Rectangle(-72.2, -95.9, 161.1, 176.2), new cjs.Rectangle(-72.2, -95.9, 160.2, 176.2), rect = new cjs.Rectangle(-72.2, -95.9, 160, 176.2), rect, rect, rect, rect, new cjs.Rectangle(-74.5, -95.9, 162.3, 176.2), rect = new cjs.Rectangle(-72.2, -95.9, 160, 176.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-74.5, -95.9, 162.3, 176.2), rect = new cjs.Rectangle(-72.2, -95.9, 160, 176.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-72.3, -96, 160.1, 176.2), new cjs.Rectangle(-72.2, -95.1, 160.6, 175.4), new cjs.Rectangle(-72.2, -92.5, 161.4, 172.7), new cjs.Rectangle(-72.2, -88.1, 162.1, 168.3), new cjs.Rectangle(-72.2, -82, 162.5, 162.3), new cjs.Rectangle(-72.2, -74.2, 162.4, 154.4), new cjs.Rectangle(-72.2, -64.6, 161.3, 144.8), new cjs.Rectangle(-72.2, -62.2, 158.6, 142.5), new cjs.Rectangle(-72.2, -61.8, 153.8, 142), new cjs.Rectangle(-72.2, -61.4, 148, 141.6), new cjs.Rectangle(-72.2, -61, 147.1, 141.2), new cjs.Rectangle(-72.2, -60.6, 146, 140.8), new cjs.Rectangle(-72.2, -60.2, 145, 140.4), new cjs.Rectangle(-72.2, -59.8, 144.9, 140), new cjs.Rectangle(-72.3, -59.4, 145, 139.6), new cjs.Rectangle(-72.2, -58.3, 144.9, 138.5), new cjs.Rectangle(-72.3, -57.4, 145, 137.6), new cjs.Rectangle(-72.2, -58.3, 144.9, 138.6), rect = new cjs.Rectangle(-72.3, -59.4, 145, 139.6), rect, rect];


    (lib.logo_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ak2F3QgagPgdgZIABAAQh0hjg1hFIgFgIIgCgBIgKgOIgBgCQgpAyhWBFQgWASgTALQgNAHgNgFQgWgGgZgLQhmgyg0gnQg7gvgmg1QgWgfgNggQgPgggEgiQgLhiA/g0QAnghA2gGQAdgEAaAEQAbgJAfgDQAjgEAjADQAWACAVAFQAjgZA0gGIAAAAIACAAIAKgBIACAAIADAAQAeg8A+gcQA/geBHAKQBSANAyAuQAkAgAZA2QAmgsAsgVIAAAAQA+gfBPANQBIAKAzAvQAPAOAMAPQAwAJAdAbQAXAVAQAiQAYgcAdgOQAegOAlABIgDgHIgCgNIAAgBIAAgBIgBgDIAAgBQgGg2AigcQAWgSAdgEQAhgDAZANQASAJAPASQAKgWAQgMIgBAAQAWgTAhgDQAdgEAZANQApATAGA2IAAADIABAOIAAAFIAHgIIA/gsIADgBIACgBIAIgDQA4gXA6ANQAxAJAjAkQAYAYARAlIAFAKIAAADQAKAZAGAcIAAABIACAPIAAAAQAEAlgEAqIgBALQgJBIgiBNQgeBDhLBnQgSAagTASQgLALgPgBQgaAAgfgGIAAAAQh+gXhDgcQhOghg5gvQgigdgZggIgaAVIgBAAIAEAIQABAFgKADQgIACgLgBQgqAZhDAeQgXAKgSAFQgMADgKgGQgRgKgTgQQgogjgcgcQgFAGgFACQgRAGgQAEQgiAhgoAfIgBAAIgBABQhGAyiJA9QgiAPgeAIIgLACQgMAAgLgHg");

        // animation
        this.instance = new lib.beam_light_0_mc();
        this.instance.setTransform(-220, 0, 1, 1, 30);

        this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({
            regX: -0.1,
            regY: 0.1,
            scaleX: 0.53,
            scaleY: 0.53,
            x: -200.1
        }, 0).to({
            regX: 0,
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            rotation: 29.9,
            x: 0
        }, 15).to({
            regX: 0.1,
            regY: -0.1,
            scaleX: 0.53,
            scaleY: 0.53,
            rotation: 30,
            x: 200.1
        }, 15).wait(1));

        // graph
        this.instance_1 = new lib.logo_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -40, 220, 80);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.instruction_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // icon
        this.instance = new lib.instruction_1_mc_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.instance_1 = new lib.bg_large_buttons_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect];


    (lib.full_screen_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

        // icon
        this.instance = new lib.full_screen_1_mc();

        this.instance_1 = new lib.full_screen_2_mc();

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));

        // bg
        this.instance_2 = new lib.bg_small_buttons_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect, rect];


    (lib.free_games_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.free_games_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({
            y: -5
        }, 5).to({
            y: 0
        }, 5).to({
            y: -5
        }, 5).to({
            y: 0
        }, 5).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-60, -61, 120, 120), new cjs.Rectangle(-60, -62, 120, 120), new cjs.Rectangle(-60, -63, 120, 120), new cjs.Rectangle(-60, -64, 120, 120), new cjs.Rectangle(-60, -65, 120, 120), new cjs.Rectangle(-60, -64, 120, 120), new cjs.Rectangle(-60, -63, 120, 120), new cjs.Rectangle(-60, -62, 120, 120), new cjs.Rectangle(-60, -61, 120, 120), new cjs.Rectangle(-60, -60, 120, 120), new cjs.Rectangle(-60, -61, 120, 120), new cjs.Rectangle(-60, -62, 120, 120), new cjs.Rectangle(-60, -63, 120, 120), new cjs.Rectangle(-60, -64, 120, 120), new cjs.Rectangle(-60, -65, 120, 120), new cjs.Rectangle(-60, -64, 120, 120), new cjs.Rectangle(-60, -63, 120, 120), new cjs.Rectangle(-60, -62, 120, 120), new cjs.Rectangle(-60, -61, 120, 120), new cjs.Rectangle(-60, -60, 120, 120)];


    (lib.free_games_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // icon
        this.instance = new lib.free_games_3_mc();
        this.instance.setTransform(0, 0, 0.833, 0.833);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // icon
        this.instance_1 = new lib.free_games_1_mc();
        this.instance_1.setTransform(0, 0, 0.833, 0.833);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // bg
        this.instance_2 = new lib.bg_small_buttons_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.facebook_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.facebook_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 1.17,
            scaleY: 1.17
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 0.801
        }, 0).wait(1).to({
            scaleX: 1.17,
            scaleY: 1.17,
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect, new cjs.Rectangle(-70, -70, 140, 140), new cjs.Rectangle(-60, -60, 120, 120), new cjs.Rectangle(-70, -70, 140, 140)];


    (lib.credits_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // icon
        this.instance = new lib.credits_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.instance_1 = new lib.bg_small_buttons_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.banner_play_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.banner_play_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({
            scaleX: 0.83,
            scaleY: 0.83,
            x: -5
        }, 10).to({
            x: 5
        }, 10).to({
            scaleX: 1,
            scaleY: 1,
            x: 0
        }, 10).wait(21));

        // bg
        this.instance_1 = new lib.banner_play_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.banner_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // icon
        this.instance = new lib.banner_play_0_mc();
        this.instance.setTransform(0, 100, 0.75, 0.75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // graph
        this.instance_1 = new lib.banner_2_img();
        this.instance_1.setTransform(-87, -130, 0.867, 0.867);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUUMAAAgomIcHAAMAAAAomg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -130, 180, 275);
    p.frameBounds = [rect];


    (lib.banner_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // icon
        this.instance = new lib.banner_play_0_mc();
        this.instance.setTransform(0, 100, 0.75, 0.75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // graph
        this.instance_1 = new lib.banner_1_img();
        this.instance_1.setTransform(-87, -130, 0.867, 0.867);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUTMAAAgolIcHAAMAAAAolg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -130, 180, 275);
    p.frameBounds = [rect];


    (lib.again_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // icon
        this.instance = new lib.again_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.instance_1 = new lib.bg_large_buttons_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect];


    (lib.redirect_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.remove_btn = new lib.remove_btn();
        this.remove_btn.setTransform(585, 115);
        new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.remove_btn(), 3);

        this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

        // banner
        this.banner_mc = new lib.redirect_2_mc();
        this.banner_mc.setTransform(400, 300);

        this.timeline.addTween(cjs.Tween.get(this.banner_mc).wait(1));

        // bg
        this.instance = new lib.redirect_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.preloader_9_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // indicator
        this.indicator_mc = new lib.preloader_6_mc();
        this.indicator_mc.setTransform(-130, -15);

        this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-150, -35, 300, 70);
    p.frameBounds = [rect];


    (lib.orientation_lock_9_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.orientation_lock_7_mc();
        this.instance.setTransform(-18.5, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-53.5, -12, 107, 24);
    p.frameBounds = [rect];


    (lib.orientation_lock_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.orientation_lock_9_mc();
        this.instance.setTransform(0, -208);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // graph
        this.instance_1 = new lib.orientation_lock_5_mc();
        this.instance_1.setTransform(0, 210);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // graph
        this.instance_2 = new lib.orientation_lock_4_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

        // graph
        this.instance_3 = new lib.orientation_lock_3_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-150, -250, 300, 500);
    p.frameBounds = [rect];


    (lib.orientation_lock_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.orientation_lock_10_mc();
        this.instance.setTransform(440, 210);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // graph
        this.instance_1 = new lib.orientation_lock_2_mc();
        this.instance_1.setTransform(210, 280.1, 0.833, 0.833, 0, 0, 0, 0, 0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // graph
        this.instance_2 = new lib.orientation_lock_2_mc();
        this.instance_2.setTransform(510, 430, 0.833, 0.833, 90);
        this.instance_2.alpha = 0.5;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(85, 71.7, 633.3, 483.3);
    p.frameBounds = [rect];


    (lib.orientation_lock_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.orientation_lock_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("EhduAwcMAAAhg2MC7dAAAMAAABg2g");
        this.shape.setTransform(400, 300);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -10, 1200, 620);
    p.frameBounds = [rect];


    (lib.InstructionScreen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.remove_btn = new lib.remove_btn();
        this.remove_btn.setTransform(750, 50);
        new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.remove_btn(), 3);

        this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

        // text
        this.instance = new lib.instruction_2_mc();
        this.instance.setTransform(400, 300);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.instance_1 = new lib.instruction_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.shadows_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.shadows_7_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.shadows_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.shadows_6_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.shadows_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.shadows_5_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.shadows_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.shadows_4_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.shadows_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.shadows_3_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.shadows_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.shadows_2_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.prev_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.nav_mc();
        this.instance.setTransform(133.3, 0, 0.889, 0.889, 0, 0, 180, -150, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -225.7, 426.5, 451.4);
    p.frameBounds = [rect];


    (lib.prev_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.nav_3_mc();
        this.instance.setTransform(0, 0, 0.611, 0.611, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-55, -55, 110, 110);
    p.frameBounds = [rect];


    (lib.prev_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.nav_2_mc();
        this.instance.setTransform(0, 0, 0.722, 0.722, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-65, -65, 130, 130);
    p.frameBounds = [rect];


    (lib.pointer_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.body_pointer_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            scaleX: 0.83,
            scaleY: 0.83
        }, 14).to({
            scaleX: 1,
            scaleY: 1
        }, 15).wait(1));

        // animation
        this.waves_mc = new lib.animation_for_pointer_0_mc();

        this.timeline.addTween(cjs.Tween.get(this.waves_mc).wait(30));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-112, -59, 120, 120);
    p.frameBounds = [rect, new cjs.Rectangle(-110.6, -58.2, 118.6, 118.6), new cjs.Rectangle(-109.3, -57.5, 117.2, 117.2), new cjs.Rectangle(-107.9, -56.8, 115.7, 115.7), new cjs.Rectangle(-106.6, -56.1, 114.3, 114.3), new cjs.Rectangle(-105.3, -55.4, 112.9, 112.9), new cjs.Rectangle(-104, -54.7, 111.5, 111.5), new cjs.Rectangle(-102.6, -54, 110, 110), new cjs.Rectangle(-101.3, -53.3, 108.6, 108.6), new cjs.Rectangle(-99.9, -52.6, 107.2, 107.2), new cjs.Rectangle(-98.6, -51.9, 105.7, 105.7), new cjs.Rectangle(-97.3, -51.2, 104.3, 104.3), new cjs.Rectangle(-95.9, -50.5, 102.9, 102.9), new cjs.Rectangle(-94.6, -49.8, 101.5, 101.5), new cjs.Rectangle(-93.3, -49.1, 100, 100), new cjs.Rectangle(-94.5, -49.8, 101.4, 101.4), new cjs.Rectangle(-95.8, -50.4, 102.7, 102.7), new cjs.Rectangle(-97, -51.1, 104, 104), new cjs.Rectangle(-98.3, -51.7, 105.4, 105.4), new cjs.Rectangle(-99.5, -52.4, 106.7, 106.7), new cjs.Rectangle(-100.7, -53, 108, 108), new cjs.Rectangle(-102, -53.7, 109.4, 109.4), new cjs.Rectangle(-103.2, -54.4, 110.7, 110.7), new cjs.Rectangle(-104.5, -55, 112, 112), new cjs.Rectangle(-105.7, -55.7, 113.4, 113.4), new cjs.Rectangle(-107, -56.3, 114.7, 114.7), new cjs.Rectangle(-108.2, -57, 116, 116), new cjs.Rectangle(-109.5, -57.6, 117.4, 117.4), new cjs.Rectangle(-110.7, -58.3, 118.7, 118.7), new cjs.Rectangle(-112, -59, 120, 120)];


    (lib.next_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.nav_mc();
        this.instance.setTransform(-133.3, 0, 0.889, 0.889, 0, 0, 0, -150, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // decor
        this.instance_1 = new lib.animation_circle_nav_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-346.5, -225.7, 426.5, 451.4);
    p.frameBounds = [rect];


    (lib.next_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.nav_3_mc();
        this.instance.setTransform(0, 0, 0.611, 0.611);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-55, -55, 110, 110);
    p.frameBounds = [rect];


    (lib.next_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.nav_2_mc();
        this.instance.setTransform(0, 0, 0.722, 0.722);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-65, -65, 130, 130);
    p.frameBounds = [rect];


    (lib.nail5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // rhinestones
        this.rhinestones = new lib.nail_art_all_mc();

        this.timeline.addTween(cjs.Tween.get(this.rhinestones).wait(1));

        // pattern
        this.pattern = new lib.nail_decor_all_mc();

        this.timeline.addTween(cjs.Tween.get(this.pattern).wait(1));

        // lacquer
        this.lacquer = new lib.nail_color_all_mc();

        this.timeline.addTween(cjs.Tween.get(this.lacquer).wait(1));

        // check
        this.check_mc = new lib.halo_mc();
        this.check_mc.setTransform(-3, 0, 0.556, 0.556, 0, 0, 0, -0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsJncIP5m8IH3FtIAjU7I1zCJg");
        this.shape.setTransform(-21.9, 27.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-99.7, -65.1, 155.7, 184.4);
    p.frameBounds = [rect];


    (lib.nail4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // rhinestones
        this.rhinestones = new lib.nail_art_all_mc();

        this.timeline.addTween(cjs.Tween.get(this.rhinestones).wait(1));

        // pattern
        this.pattern = new lib.nail_decor_all_mc();

        this.timeline.addTween(cjs.Tween.get(this.pattern).wait(1));

        // lacquer
        this.lacquer = new lib.nail_color_all_mc();

        this.timeline.addTween(cjs.Tween.get(this.lacquer).wait(1));

        // check
        this.check_mc = new lib.halo_mc();
        this.check_mc.setTransform(-2, 0, 0.5, 0.5, 0, 0, 0, -0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgFNgh8IFyjYIFwC2MAB5BHiIwbARg");
        this.shape.setTransform(-1.4, 158.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-54, -80.3, 105.2, 477.8);
    p.frameBounds = [rect];


    (lib.nail3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // rhinestones
        this.rhinestones = new lib.nail_art_all_mc();

        this.timeline.addTween(cjs.Tween.get(this.rhinestones).wait(1));

        // pattern
        this.pattern = new lib.nail_decor_all_mc();

        this.timeline.addTween(cjs.Tween.get(this.pattern).wait(1));

        // lacquer
        this.lacquer = new lib.nail_color_all_mc();

        this.timeline.addTween(cjs.Tween.get(this.lacquer).wait(1));

        // check
        this.check_mc = new lib.halo_mc();
        this.check_mc.setTransform(-3, -1.9, 0.5, 0.5, 0, 0, 0, -0.1, 0.1);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Alq/FIFIi/IEdCqMADiBBRIu5AOg");
        this.shape.setTransform(4.6, 157.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-43.1, -60.4, 95.5, 436.3);
    p.frameBounds = [rect];


    (lib.nail2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // rhinestones
        this.rhinestones = new lib.nail_art_all_mc();

        this.timeline.addTween(cjs.Tween.get(this.rhinestones).wait(1));

        // pattern
        this.pattern = new lib.nail_decor_all_mc();

        this.timeline.addTween(cjs.Tween.get(this.pattern).wait(1));

        // lacquer
        this.lacquer = new lib.nail_color_all_mc();

        this.timeline.addTween(cjs.Tween.get(this.lacquer).wait(1));

        // check
        this.check_mc = new lib.halo_mc();
        this.check_mc.setTransform(-3, 0, 0.528, 0.528, 0, 0, 0, -0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("All7VIA0lyIFNh9IE4DBMABZBCyItZAWg");
        this.shape.setTransform(0.3, 157.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-42.7, -67.5, 86, 449.2);
    p.frameBounds = [rect];


    (lib.nail1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // rhinestones
        this.rhinestones = new lib.nail_art_all_mc();

        this.timeline.addTween(cjs.Tween.get(this.rhinestones).wait(1));

        // pattern
        this.pattern = new lib.nail_decor_all_mc();

        this.timeline.addTween(cjs.Tween.get(this.pattern).wait(1));

        // lacquer
        this.lacquer = new lib.nail_color_all_mc();

        this.timeline.addTween(cjs.Tween.get(this.lacquer).wait(1));

        // check
        this.check_mc = new lib.halo_mc();
        this.check_mc.setTransform(-1, 0, 0.611, 0.611);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqC84IIUmuIHmEUMAELBAnIw7CSg");
        this.shape.setTransform(7.5, 152.6);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-56.8, -75.3, 128.7, 455.9);
    p.frameBounds = [rect];


    (lib.location_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // decor
        this.instance = new lib.check_2_mc();
        this.instance.setTransform(30, 115, 0.833, 0.833);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({
            _off: false
        }, 0).wait(1));

        // graph
        this.instance_1 = new lib.location_0_5_img();
        this.instance_1.setTransform(-160, -160);

        this.instance_2 = new lib.location_1_5_img();
        this.instance_2.setTransform(-160, -160);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }]
        }).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).wait(1));

        // decor
        this.instance_3 = new lib.current_location_mc();
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({
            _off: false
        }, 0).to({
            _off: true
        }, 1).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwjQkQm4m3AAptQAApsG4m3QG3m4JsAAQJtAAG3G4QG4G3AAJsQAAJtm4G3Qm3G4ptAAQpsAAm3m4g");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-160, -160, 320, 320);
    p.frameBounds = [rect, new cjs.Rectangle(-180, -180, 360, 360), new cjs.Rectangle(-160, -160, 320, 341.7)];


    (lib.location_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // decor
        this.instance = new lib.check_2_mc();
        this.instance.setTransform(30, 115, 0.833, 0.833);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({
            _off: false
        }, 0).wait(1));

        // graph
        this.instance_1 = new lib.location_0_4_img();
        this.instance_1.setTransform(-160, -160);

        this.instance_2 = new lib.location_1_4_img();
        this.instance_2.setTransform(-160, -160);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }]
        }).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).wait(1));

        // decor
        this.instance_3 = new lib.current_location_mc();
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({
            _off: false
        }, 0).to({
            _off: true
        }, 1).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwjQkQm4m3AAptQAApsG4m3QG3m4JsAAQJtAAG3G4QG4G3AAJsQAAJtm4G3Qm3G4ptAAQpsAAm3m4g");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-160, -160, 320, 320);
    p.frameBounds = [rect, new cjs.Rectangle(-180, -180, 360, 360), new cjs.Rectangle(-160, -160, 320, 341.7)];


    (lib.location_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // decor
        this.instance = new lib.check_2_mc();
        this.instance.setTransform(30, 115, 0.833, 0.833);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({
            _off: false
        }, 0).wait(1));

        // graph
        this.instance_1 = new lib.location_0_3_img();
        this.instance_1.setTransform(-160, -160);

        this.instance_2 = new lib.location_1_3_img();
        this.instance_2.setTransform(-160, -160);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }]
        }).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).wait(1));

        // decor
        this.instance_3 = new lib.current_location_mc();
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({
            _off: false
        }, 0).to({
            _off: true
        }, 1).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwjQkQm4m3AAptQAApsG4m3QG3m4JsAAQJtAAG3G4QG4G3AAJsQAAJtm4G3Qm3G4ptAAQpsAAm3m4g");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-160, -160, 320, 320);
    p.frameBounds = [rect, new cjs.Rectangle(-180, -180, 360, 360), new cjs.Rectangle(-160, -160, 320, 341.7)];


    (lib.location_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // decor
        this.instance = new lib.check_2_mc();
        this.instance.setTransform(30, 115, 0.833, 0.833);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({
            _off: false
        }, 0).wait(1));

        // graph
        this.instance_1 = new lib.location_0_2_img();
        this.instance_1.setTransform(-160, -160);

        this.instance_2 = new lib.location_1_2_img();
        this.instance_2.setTransform(-160, -160);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }]
        }).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).wait(1));

        // decor
        this.instance_3 = new lib.current_location_mc();
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({
            _off: false
        }, 0).to({
            _off: true
        }, 1).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwjQkQm4m3AAptQAApsG4m3QG3m4JsAAQJtAAG3G4QG4G3AAJsQAAJtm4G3Qm3G4ptAAQpsAAm3m4g");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-160, -160, 320, 320);
    p.frameBounds = [rect, new cjs.Rectangle(-180, -180, 360, 360), new cjs.Rectangle(-160, -160, 320, 341.7)];


    (lib.location_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // decor
        this.instance = new lib.check_2_mc();
        this.instance.setTransform(30, 115, 0.833, 0.833);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({
            _off: false
        }, 0).wait(1));

        // graph
        this.instance_1 = new lib.location_0_1_img();
        this.instance_1.setTransform(-160, -160);

        this.instance_2 = new lib.location_1_1_img();
        this.instance_2.setTransform(-160, -160);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }]
        }).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).wait(1));

        // decor
        this.instance_3 = new lib.current_location_mc();
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({
            _off: false
        }, 0).to({
            _off: true
        }, 1).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwjQkQm4m3AAptQAApsG4m3QG3m4JsAAQJtAAG3G4QG4G3AAJsQAAJtm4G3Qm3G4ptAAQpsAAm3m4g");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-160, -160, 320, 320);
    p.frameBounds = [rect, new cjs.Rectangle(-180, -180, 360, 360), new cjs.Rectangle(-160, -160, 320, 341.7)];


    (lib.lips_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.lipstick_new21_img();
        this.instance.setTransform(-48.5, -24.8, 1, 1, -45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.substrate_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.lips_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.lipstick_new35_img();
        this.instance.setTransform(-48.5, -24.8, 1, 1, -45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.substrate_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.lips_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.lipstick_new36_img();
        this.instance.setTransform(-48.5, -24.8, 1, 1, -45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.substrate_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.lips_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.lipstick_new4_img();
        this.instance.setTransform(29.9, -42.5, 1, 1, 45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.substrate_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.lips_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.lipstick_new2_img();
        this.instance.setTransform(29.9, -42.5, 1, 1, 45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.substrate_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.lips_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.lipstick_new14_img();
        this.instance.setTransform(29.9, -42.5, 1, 1, 45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.substrate_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.indicator_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AuqCLQg2ABgngmQglgmgBg2QABg0AlgnQAnglA2gBIdqAAQA1ABAmAlQAnAngBA0QABA2gnAmQgmAmg1gBg");
        mask.setTransform(109, 14);

        // text
        this.output_numbers_comp = new lib.output_numbers_1_mc();
        this.output_numbers_comp.setTransform(110.1, -19.4, 0.6, 0.6, 0, 0, 0, 0.1, 1);

        this.output_numbers_comp.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.output_numbers_comp).wait(1));

        // indicator
        this.indicator_mc = new lib.indicator_2_mc();

        this.indicator_mc.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(2, 2, 216, 26);
    p.frameBounds = [rect];


    (lib.hint_location_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.mouseChildren = false;
            this.mouseEnabled = false;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // body
        this.instance = new lib.body_hint_location_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-150, -125, 300, 250);
    p.frameBounds = [rect];


    (lib.hint_filter_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /*
            устанавливаем рус. или англ. название
            https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
            */
            this.stop();
            this.mouseChildren = false;
            this.mouseEnabled = false;
            this.body_mc.gotoAndStop(0);
            var lang_str = window.navigator.language || navigator.userLanguage;
            lang_str = lang_str.split("-")[0].toLowerCase();
            if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be")) {
                this.body_mc.gotoAndStop("ru");
            } else if (lang_str == "de") {
                this.body_mc.gotoAndStop("de");
            } else if (lang_str == "fr") {
                this.body_mc.gotoAndStop("fr");
            } else if (lang_str == "es") {
                this.body_mc.gotoAndStop("es");
            } else if (lang_str == "pt") {
                this.body_mc.gotoAndStop("pt");
            } else {
                this.body_mc.gotoAndStop("en");
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // body
        this.body_mc = new lib.body_hint_filter_mc();
        this.body_mc.setTransform(0, 0, 1, 1, 0, 0, 0, -0.5, -0.5);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-89.5, -29.5, 210, 150);
    p.frameBounds = [rect];


    (lib.hero_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // glasses
        this.glasses = new lib.glass_all_mc();
        this.glasses.setTransform(5.6, -220.5);

        this.timeline.addTween(cjs.Tween.get(this.glasses).wait(1));

        // headdress
        this.headdress = new lib.hat_all_mc();
        this.headdress.setTransform(4.9, -277.8);

        this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

        // accessory
        this.accessory = new lib.bag_all_mc();
        this.accessory.setTransform(-42, 90.4);

        this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

        // eyes
        this.eyes = new lib.eyes_mc();
        this.eyes.setTransform(5.7, -227.4, 0.33, 0.33, 0, 0, 0, 0, 7.7);

        this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

        // fringe
        this.fringe = new lib.fringe_mc();
        this.fringe.setTransform(6.6, -250.2);

        this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

        // lips
        this.lips = new lib.lips_mc();
        this.lips.setTransform(5, -200.1, 0.33, 0.33, 0, 0, 0, 33.6, 31.5);

        this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

        // shadows
        this.shadows = new lib.shadows_mc();
        this.shadows.setTransform(6.1, -227.8, 0.33, 0.33, 0, 0, 0, 81.6, 15.3);

        this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

        // blush
        this.blush = new lib.rouge_mc();
        this.blush.setTransform(6.2, -216.8, 0.33, 0.33, 0, 0, 0, 0, 6.7);

        this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

        // body
        this.instance = new lib.head_img();
        this.instance.setTransform(-32.4, -269.2, 0.33, 0.33);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // dress
        this.dress = new lib.dress_all_mc();
        this.dress.setTransform(31.6, -50.5);

        this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

        // shoes
        this.shoes = new lib.shoes_all_mc();
        this.shoes.setTransform(-18, 245.9);

        this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

        // garter
        this.garter = new lib.podv_all_mc();
        this.garter.setTransform(64.5, 40);

        this.timeline.addTween(cjs.Tween.get(this.garter).wait(1));

        // stock
        this.stock = new lib.socks_all_mc();
        this.stock.setTransform(-9.7, 182);

        this.timeline.addTween(cjs.Tween.get(this.stock).wait(1));

        // body
        this.instance_1 = new lib.body_img();
        this.instance_1.setTransform(-98.5, -192.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // wings
        this.wings = new lib.hero_wings_all_mc();
        this.wings.setTransform(-14, -166.5);

        this.timeline.addTween(cjs.Tween.get(this.wings).wait(1));

        // hair
        this.hair = new lib.hair_mc();
        this.hair.setTransform(6.2, -183.4);

        this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-130, -308.8, 268.1, 601.2);
    p.frameBounds = [rect];


    (lib.hero_main_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.glass1_img();
        this.instance.setTransform(-26.9, -231);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // graph
        this.instance_1 = new lib.hat4_img();
        this.instance_1.setTransform(-43.6, -279.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // graph
        this.instance_2 = new lib.eyes_mc();
        this.instance_2.setTransform(5.7, -227.4, 0.33, 0.33, 0, 0, 0, 0, 7.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

        // graph
        this.instance_3 = new lib.fringe3_img();
        this.instance_3.setTransform(-48.6, -279);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

        // graph
        this.instance_4 = new lib.lips1_img();
        this.instance_4.setTransform(-6.1, -210.5, 0.33, 0.33);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

        // graph
        this.instance_5 = new lib.head_img();
        this.instance_5.setTransform(-32.4, -269.2, 0.33, 0.33);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

        // graph
        this.instance_6 = new lib.dress8_img();
        this.instance_6.setTransform(-63.4, -173);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

        // graph
        this.instance_7 = new lib.shoes6_img();
        this.instance_7.setTransform(-100, 188.9);

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

        // graph
        this.instance_8 = new lib.podv1_img();
        this.instance_8.setTransform(35.5, 4.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

        // graph
        this.instance_9 = new lib.body_img();
        this.instance_9.setTransform(-98.5, -192.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

        // graph
        this.instance_10 = new lib.hero_wings2_img();
        this.instance_10.setTransform(-122.5, -194);

        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

        // graph
        this.instance_11 = new lib.hair3_img();
        this.instance_11.setTransform(-61, -275.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-122.5, -279.3, 241, 571.2);
    p.frameBounds = [rect];


    (lib.hero_for_makeup_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // eyes
        this.eyes = new lib.eyes_mc();
        this.eyes.setTransform(14.7, -140, 1, 1, 0, 0, 0, 0, 7.9);

        this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

        // body
        this.instance = new lib.fringe_0_img();
        this.instance.setTransform(-84.2, -292.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // lips
        this.lips = new lib.lips_mc();
        this.lips.setTransform(12.4, -57.6, 1, 1, 0, 0, 0, 33.6, 31.3);

        this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

        // shadows
        this.shadows = new lib.shadows_mc();
        this.shadows.setTransform(15.7, -141.2, 1, 1, 0, 0, 0, 81.4, 15.4);

        this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

        // blush
        this.blush = new lib.rouge_mc();
        this.blush.setTransform(16.1, -108, 1, 1, 0, 0, 0, 0, 6.6);

        this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

        // body
        this.instance_1 = new lib.head_img();
        this.instance_1.setTransform(-100.5, -266.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // body
        this.instance_2 = new lib.body_makeup_img();
        this.instance_2.setTransform(-213, -57.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

        // body
        this.instance_3 = new lib.hair_0_img();
        this.instance_3.setTransform(-217.4, -321.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-217.4, -321.4, 467, 629);
    p.frameBounds = [rect];


    (lib.hairstyle_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.hairstyle_7_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.hairstyle_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.hairstyle_6_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.hairstyle_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.hairstyle_5_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.hairstyle_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.hairstyle_4_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.hairstyle_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.hairstyle_3_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.hairstyle_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.hairstyle_2_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.hairstyle_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.hairstyle_1_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.eyes_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.eyes_6_img();
        this.instance.setTransform(110, -110, 1, 1, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.eyes_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.eyes_5_img();
        this.instance.setTransform(110, -110, 1, 1, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.eyes_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.eyes_4_img();
        this.instance.setTransform(110, -110, 1, 1, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.eyes_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.eyes_3_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.eyes_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.eyes_2_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.eyes_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_2_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 1
        this.instance = new lib.eyes_1_img();
        this.instance.setTransform(-110, -110);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFCFBAAHHQAAHHlCFCQlCFCnHAAQnHAAlBlCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -110, 220, 220);
    p.frameBounds = [rect];


    (lib.dressupPanel_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.next_mc = new lib.next_3_mc();
        this.next_mc.setTransform(110, 230);

        this.set_1 = new lib.set_0_mc();
        this.set_1.setTransform(0, -500);

        this.prev_mc = new lib.prev_3_mc();
        this.prev_mc.setTransform(-110, 230);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.prev_mc
            }, {
                t: this.set_1
            }, {
                t: this.next_mc
            }]
        }).wait(1));

        // body
        this.body_mc = new lib.bodyDressupPanel_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-420, -550, 840, 859);
    p.frameBounds = [rect];


    (lib.dress_12_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.dr12_mc();
        this.instance.setTransform(25.5, 126.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvMSpICX/YIHHqKIIEAAILsTAIBLWIIt0Erg");
        this.shape.setTransform(18.7, 128.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-78.6, -17.9, 194.7, 293.3);
    p.frameBounds = [rect];


    (lib.dress_11_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.dr11_mc();
        this.instance.setTransform(25.5, 126.6);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvWS+IBI/nIJQseIDSAEIM6OBIEJdVIsDGeIlFAXg");
        this.shape.setTransform(22, 142.2);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-76.3, -18.5, 196.7, 321.6);
    p.frameBounds = [rect];


    (lib.dress_10_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.dr10_mc();
        this.instance.setTransform(25.5, 126.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuCQrIgs9oIHnphIIsgDIK9OkICNW3IsqHog");
        this.shape.setTransform(22.8, 127.6);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-71.5, -16.6, 188.8, 288.5);
    p.frameBounds = [rect];


    (lib.dress_9_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.dr9_mc();
        this.instance.setTransform(25.5, 126.6);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AurPuIDO9fIFgqXIGkAAIMDRDICCUFIm3LJg");
        this.shape.setTransform(16.2, 135.6);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-77.8, -18.9, 188.1, 309.1);
    p.frameBounds = [rect];


    (lib.dress_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.dr8_mc();
        this.instance.setTransform(25.5, 126.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuxR0IB3+iIG/ozIIIAAIJqPZIC7VgItAGKg");
        this.shape.setTransform(18.8, 120.9);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75.8, -16.9, 189.3, 275.7);
    p.frameBounds = [rect];


    (lib.dress_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.dr7_mc();
        this.instance.setTransform(25.5, 126.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtXTGIhC6iIGuu1IImAEIKgPlIC/ZlIroDVg");
        this.shape.setTransform(26.3, 125);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-67, -17.5, 185.5, 285.2);
    p.frameBounds = [rect];


    (lib.dress_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.dr6_mc();
        this.instance.setTransform(25.5, 126.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtmVzIjSrBIBt3eIIHqoIHdADIJrOXIG1bGIwqFJg");
        this.shape.setTransform(31.3, 132.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-76.8, -16.6, 216.3, 298.7);
    p.frameBounds = [rect];


    (lib.dress_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.dr5_mc();
        this.instance.setTransform(25.5, 126.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKSIIC+/fIHVp1IGEAEILGPwIG4U6IlPF6IwgDxg");
        this.shape.setTransform(31.5, 132.4);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-78.4, -16.1, 220, 297.2);
    p.frameBounds = [rect];


    (lib.dress_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.dr4_mc();
        this.instance.setTransform(25.5, 126.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvfSgMACqgi1IFXnbIHbACIJlKsIF+ehIv/GSg");
        this.shape.setTransform(25.3, 135.4);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-73.9, -16.7, 198.5, 304.4);
    p.frameBounds = [rect];


    (lib.dress_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.dr3_mc();
        this.instance.setTransform(25.5, 126.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwOTbMABkggxIIbp/ID+ACIMPPxIGRZTIvYFlg");
        this.shape.setTransform(30.6, 133.6);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-73.2, -15.8, 207.8, 298.9);
    p.frameBounds = [rect];


    (lib.dress_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.dr2_mc();
        this.instance.setTransform(25, 126.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxhRIMAErggGIGWokIGWAGILhMkIGLdyIxzEpg");
        this.shape.setTransform(22.5, 134.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-89.7, -16, 224.6, 301.6);
    p.frameBounds = [rect];


    (lib.dress_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.dr1_mc();
        this.instance.setTransform(25.5, 126.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnSVMIqJnaIDl5kIGXqgIIwAAILRQMIE6T5Iu0Igg");
        this.shape.setTransform(25.2, 126.9);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-86.4, -15.9, 223.3, 285.6);
    p.frameBounds = [rect];


    (lib.closet_makeup_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // no
        this.blush_0 = new lib.blush_0_mc();
        this.blush_0.setTransform(-340, -140);

        this.shadows_1 = new lib.shadows_1_mc();
        this.shadows_1.setTransform(-340, -140);

        this.lips_1 = new lib.lips_1_mc();
        this.lips_1.setTransform(-340, -140);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.blush_0
            }]
        }).to({
            state: [{
                t: this.shadows_1
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.lips_1
            }]
        }, 1).wait(1));

        // options
        this.blush_6 = new lib.blush_6_mc();
        this.blush_6.setTransform(200, 180);

        this.blush_5 = new lib.blush_5_mc();
        this.blush_5.setTransform(290, 0);

        this.blush_4 = new lib.blush_4_mc();
        this.blush_4.setTransform(200, -180);

        this.blush_3 = new lib.blush_3_mc();
        this.blush_3.setTransform(-200, 180);

        this.blush_2 = new lib.blush_2_mc();
        this.blush_2.setTransform(-290, 0);

        this.blush_1 = new lib.blush_1_mc();
        this.blush_1.setTransform(-200, -180);

        this.shadows_7 = new lib.shadows_7_mc();
        this.shadows_7.setTransform(200, 180);

        this.shadows_6 = new lib.shadows_6_mc();
        this.shadows_6.setTransform(290, 0);

        this.shadows_5 = new lib.shadows_5_mc();
        this.shadows_5.setTransform(200, -180);

        this.shadows_4 = new lib.shadows_4_mc();
        this.shadows_4.setTransform(-200, 180);

        this.shadows_3 = new lib.shadows_3_mc();
        this.shadows_3.setTransform(-290, 0);

        this.shadows_2 = new lib.shadows_2_mc();
        this.shadows_2.setTransform(-200, -180);

        this.eyes_6 = new lib.eyes_6_mc();
        this.eyes_6.setTransform(200, 180);

        this.eyes_5 = new lib.eyes_5_mc();
        this.eyes_5.setTransform(290, 0);

        this.eyes_4 = new lib.eyes_4_mc();
        this.eyes_4.setTransform(200, -180);

        this.eyes_3 = new lib.eyes_3_mc();
        this.eyes_3.setTransform(-200, 180);

        this.eyes_2 = new lib.eyes_2_mc();
        this.eyes_2.setTransform(-290, 0);

        this.eyes_1 = new lib.eyes_1_mc();
        this.eyes_1.setTransform(-200, -180);

        this.lips_7 = new lib.lips_7_mc();
        this.lips_7.setTransform(200, 180);

        this.lips_6 = new lib.lips_6_mc();
        this.lips_6.setTransform(290, 0);

        this.lips_5 = new lib.lips_5_mc();
        this.lips_5.setTransform(200, -180);

        this.lips_4 = new lib.lips_4_mc();
        this.lips_4.setTransform(-200, 180);

        this.lips_3 = new lib.lips_3_mc();
        this.lips_3.setTransform(-290, 0);

        this.lips_2 = new lib.lips_2_mc();
        this.lips_2.setTransform(-200, -180);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.blush_1
            }, {
                t: this.blush_2
            }, {
                t: this.blush_3
            }, {
                t: this.blush_4
            }, {
                t: this.blush_5
            }, {
                t: this.blush_6
            }]
        }).to({
            state: [{
                t: this.shadows_2
            }, {
                t: this.shadows_3
            }, {
                t: this.shadows_4
            }, {
                t: this.shadows_5
            }, {
                t: this.shadows_6
            }, {
                t: this.shadows_7
            }]
        }, 1).to({
            state: [{
                t: this.eyes_1
            }, {
                t: this.eyes_2
            }, {
                t: this.eyes_3
            }, {
                t: this.eyes_4
            }, {
                t: this.eyes_5
            }, {
                t: this.eyes_6
            }]
        }, 1).to({
            state: [{
                t: this.lips_2
            }, {
                t: this.lips_3
            }, {
                t: this.lips_4
            }, {
                t: this.lips_5
            }, {
                t: this.lips_6
            }, {
                t: this.lips_7
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-400, -290, 800, 580);
    p.frameBounds = [rect, rect, rect, rect];


    (lib.closet_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // no
        this.accessory_0 = new lib.accessory_0_mc();
        this.accessory_0.setTransform(0, -90);

        this.headdress_0 = new lib.headdress_0_mc();
        this.headdress_0.setTransform(-120, -100);

        this.glasses_0 = new lib.glasses_0_mc();
        this.glasses_0.setTransform(185, -15);

        this.wings_0 = new lib.wings_0_mc();
        this.wings_0.setTransform(0, 90);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.accessory_0
            }]
        }).to({
            state: [{
                t: this.headdress_0
            }]
        }, 1).to({
            state: [{
                t: this.wings_0
            }, {
                t: this.glasses_0
            }]
        }, 1).wait(1));

        // options
        this.accessory_7 = new lib.accessory_7_mc();
        this.accessory_7.setTransform(-50, -19);

        this.accessory_6 = new lib.accessory_6_mc();
        this.accessory_6.setTransform(50, -23);

        this.accessory_5 = new lib.accessory_5_mc();
        this.accessory_5.setTransform(-105, 168);

        this.accessory_4 = new lib.accessory_4_mc();
        this.accessory_4.setTransform(150, -18);

        this.accessory_3 = new lib.accessory_3_mc();
        this.accessory_3.setTransform(0, 170);

        this.accessory_2 = new lib.accessory_2_mc();
        this.accessory_2.setTransform(105, 170);

        this.accessory_1 = new lib.accessory_1_mc();
        this.accessory_1.setTransform(-150, -18);

        this.headdress_8 = new lib.headdress_8_mc();
        this.headdress_8.setTransform(110, 2);

        this.headdress_7 = new lib.headdress_7_mc();
        this.headdress_7.setTransform(110, 172);

        this.headdress_6 = new lib.headdress_6_mc();
        this.headdress_6.setTransform(-110, 172);

        this.headdress_5 = new lib.headdress_5_mc();
        this.headdress_5.setTransform(0, 170);

        this.headdress_4 = new lib.headdress_4_mc();

        this.headdress_3 = new lib.headdress_3_mc();
        this.headdress_3.setTransform(-110, 6);

        this.headdress_2 = new lib.headdress_2_mc();
        this.headdress_2.setTransform(0, 80);

        this.headdress_1 = new lib.headdress_1_mc();
        this.headdress_1.setTransform(0, -82);

        this.wings_3 = new lib.wings_3_mc();
        this.wings_3.setTransform(-80, 160);

        this.wings_2 = new lib.wings_2_mc();
        this.wings_2.setTransform(0, -85);

        this.wings_1 = new lib.wings_1_mc();
        this.wings_1.setTransform(80, 170);

        this.glasses_5 = new lib.glasses_5_mc();
        this.glasses_5.setTransform(90, 20);

        this.glasses_3 = new lib.glasses_3_mc();
        this.glasses_3.setTransform(-30, 20);

        this.glasses_1 = new lib.glasses_1_mc();
        this.glasses_1.setTransform(-150, 20);

        this.glasses_6 = new lib.glasses_6_mc();
        this.glasses_6.setTransform(150, 20);

        this.glasses_4 = new lib.glasses_4_mc();
        this.glasses_4.setTransform(30, 20);

        this.glasses_2 = new lib.glasses_2_mc();
        this.glasses_2.setTransform(-90, 20);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.accessory_1
            }, {
                t: this.accessory_2
            }, {
                t: this.accessory_3
            }, {
                t: this.accessory_4
            }, {
                t: this.accessory_5
            }, {
                t: this.accessory_6
            }, {
                t: this.accessory_7
            }]
        }).to({
            state: [{
                t: this.headdress_1
            }, {
                t: this.headdress_2
            }, {
                t: this.headdress_3
            }, {
                t: this.headdress_4
            }, {
                t: this.headdress_5
            }, {
                t: this.headdress_6
            }, {
                t: this.headdress_7
            }, {
                t: this.headdress_8
            }]
        }, 1).to({
            state: [{
                t: this.glasses_2
            }, {
                t: this.glasses_4
            }, {
                t: this.glasses_6
            }, {
                t: this.glasses_1
            }, {
                t: this.glasses_3
            }, {
                t: this.glasses_5
            }, {
                t: this.wings_1
            }, {
                t: this.wings_2
            }, {
                t: this.wings_3
            }]
        }, 1).wait(1));

        // decor
        this.instance = new lib.wardrobe_2_mc();
        this.instance.setTransform(0, -10);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

        // decor
        this.instance_1 = new lib.stick_mc();
        this.instance_1.setTransform(0, 80);

        this.instance_2 = new lib.stick_mc();
        this.instance_2.setTransform(0, -100);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_2
            }, {
                t: this.instance_1,
                p: {
                    y: 80
                }
            }]
        }, 1).to({
            state: [{
                t: this.instance_1,
                p: {
                    y: -90
                }
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-220, -259, 440, 497.4);
    p.frameBounds = [rect, rect, rect];


    (lib.closet_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // no
        this.garter_0 = new lib.garter_0_mc();
        this.garter_0.setTransform(185, -145);

        this.stock_0 = new lib.stock_0_mc();
        this.stock_0.setTransform(185, 45);

        this.shoes_0 = new lib.shoes_0_mc();
        this.shoes_0.setTransform(0, -90);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.stock_0
            }, {
                t: this.garter_0
            }]
        }, 4).to({
            state: [{
                t: this.shoes_0
            }]
        }, 1).wait(2));

        // options
        this.dress_11 = new lib.dress_11_mc();
        this.dress_11.setTransform(-120, -130);

        this.dress_3 = new lib.dress_3_mc();
        this.dress_3.setTransform(0, -130);

        this.dress_2 = new lib.dress_2_mc();
        this.dress_2.setTransform(120, -130);

        this.dress_5 = new lib.dress_5_mc();
        this.dress_5.setTransform(-120, -130);

        this.dress_6 = new lib.dress_6_mc();
        this.dress_6.setTransform(0, -130);

        this.dress_4 = new lib.dress_4_mc();
        this.dress_4.setTransform(120, -130);

        this.dress_8 = new lib.dress_8_mc();
        this.dress_8.setTransform(-120, -130);

        this.dress_7 = new lib.dress_7_mc();
        this.dress_7.setTransform(0, -130);

        this.dress_9 = new lib.dress_9_mc();
        this.dress_9.setTransform(120, -130);

        this.dress_10 = new lib.dress_10_mc();
        this.dress_10.setTransform(-120, -130);

        this.dress_1 = new lib.dress_1_mc();
        this.dress_1.setTransform(0, -130);

        this.dress_12 = new lib.dress_12_mc();
        this.dress_12.setTransform(120, -130);

        this.garter_6 = new lib.garter_6_mc();
        this.garter_6.setTransform(0, -29);

        this.garter_5 = new lib.garter_5_mc();
        this.garter_5.setTransform(60, -27);

        this.garter_4 = new lib.garter_4_mc();
        this.garter_4.setTransform(-60, -27);

        this.garter_3 = new lib.garter_3_mc();
        this.garter_3.setTransform(70, -100);

        this.garter_2 = new lib.garter_2_mc();
        this.garter_2.setTransform(-70, -105);

        this.garter_1 = new lib.garter_1_mc();
        this.garter_1.setTransform(0, -100);

        this.stock_4 = new lib.stock_icon_4_mc();
        this.stock_4.setTransform(90, 145);

        this.stock_3 = new lib.stock_icon_3_mc();
        this.stock_3.setTransform(30, 145);

        this.stock_2 = new lib.stock_icon_2_mc();
        this.stock_2.setTransform(-30, 145);

        this.stock_1 = new lib.stock_icon_1_mc();
        this.stock_1.setTransform(-90, 145);

        this.stock_6 = new lib.stock_icon_6_mc();
        this.stock_6.setTransform(150, 145);

        this.stock_5 = new lib.stock_icon_5_mc();
        this.stock_5.setTransform(-150, 145);

        this.shoes_4 = new lib.shoes_4_mc();
        this.shoes_4.setTransform(0, 161);

        this.shoes_3 = new lib.shoes_3_mc();
        this.shoes_3.setTransform(70, 1);

        this.shoes_2 = new lib.shoes_2_mc();
        this.shoes_2.setTransform(-60, 14);

        this.shoes_1 = new lib.shoes_1_mc();
        this.shoes_1.setTransform(0, 182);

        this.shoes_6 = new lib.shoes_6_mc();
        this.shoes_6.setTransform(-60, -3);

        this.shoes_5 = new lib.shoes_5_mc();
        this.shoes_5.setTransform(70, 1);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.dress_2
            }, {
                t: this.dress_3
            }, {
                t: this.dress_11
            }]
        }).to({
            state: [{
                t: this.dress_4
            }, {
                t: this.dress_6
            }, {
                t: this.dress_5
            }]
        }, 1).to({
            state: [{
                t: this.dress_9
            }, {
                t: this.dress_7
            }, {
                t: this.dress_8
            }]
        }, 1).to({
            state: [{
                t: this.dress_12
            }, {
                t: this.dress_1
            }, {
                t: this.dress_10
            }]
        }, 1).to({
            state: [{
                t: this.stock_5
            }, {
                t: this.stock_6
            }, {
                t: this.stock_1
            }, {
                t: this.stock_2
            }, {
                t: this.stock_3
            }, {
                t: this.stock_4
            }, {
                t: this.garter_1
            }, {
                t: this.garter_2
            }, {
                t: this.garter_3
            }, {
                t: this.garter_4
            }, {
                t: this.garter_5
            }, {
                t: this.garter_6
            }]
        }, 1).to({
            state: [{
                t: this.shoes_2
            }, {
                t: this.shoes_3
            }, {
                t: this.shoes_4
            }]
        }, 1).to({
            state: [{
                t: this.shoes_5
            }, {
                t: this.shoes_6
            }, {
                t: this.shoes_1
            }]
        }, 1).wait(1));

        // decor
        this.instance = new lib.wardrobe_3_mc();
        this.instance.setTransform(0, -70);

        this.instance_1 = new lib.wardrobe_4_mc();

        this.instance_2 = new lib.wardrobe_2_mc();
        this.instance_2.setTransform(0, -10);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({
            _off: true
        }, 1).wait(3));

        // decor
        this.instance_3 = new lib.stick_mc();
        this.instance_3.setTransform(0, -30);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({
            _off: false
        }, 0).to({
            _off: true
        }, 1).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -330, 454.8, 503.1);
    p.frameBounds = [rect, new cjs.Rectangle(-200, -330, 444.6, 487.6), new cjs.Rectangle(-200, -330, 430.3, 490.2), new cjs.Rectangle(-200, -330, 436.1, 475.4), new cjs.Rectangle(-200, -330, 403, 590), rect = new cjs.Rectangle(-220, -259, 440, 497.4), rect];


    (lib.closet_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // options
        this.hair_4 = new lib.hairstyle_4_mc();
        this.hair_4.setTransform(100, 130);

        this.hair_3 = new lib.hairstyle_3_mc();
        this.hair_3.setTransform(-100, 130);

        this.hair_2 = new lib.hairstyle_2_mc();
        this.hair_2.setTransform(100, -50);

        this.hair_1 = new lib.hairstyle_1_mc();
        this.hair_1.setTransform(-100, -50);

        this.hair_7 = new lib.hairstyle_7_mc();
        this.hair_7.setTransform(0, 130);

        this.hair_6 = new lib.hairstyle_6_mc();
        this.hair_6.setTransform(105, -50);

        this.hair_5 = new lib.hairstyle_5_mc();
        this.hair_5.setTransform(-105, -50);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.hair_1
            }, {
                t: this.hair_2
            }, {
                t: this.hair_3
            }, {
                t: this.hair_4
            }]
        }).to({
            state: [{
                t: this.hair_5
            }, {
                t: this.hair_6
            }, {
                t: this.hair_7
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-210, -160, 420, 400);
    p.frameBounds = [rect, new cjs.Rectangle(-215, -160, 430, 400)];


    (lib.bodyDressupPanel_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // hero_1
        this.hero_1 = new lib.closet_3_mc();

        this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-220, -259, 440, 497.4);
    p.frameBounds = [rect];


    (lib.bodyDressupPanel_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // hero_1
        this.hero_1 = new lib.closet_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -330, 454.8, 503.1);
    p.frameBounds = [rect];


    (lib.bodyDressupPanel_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // hero_1
        this.hero_1 = new lib.closet_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-210, -160, 420, 400);
    p.frameBounds = [rect];


    (lib.bodyDressupPanel_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // hero_1
        this.hero_1 = new lib.closet_makeup_mc();

        this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-400, -290, 800, 580);
    p.frameBounds = [rect];


    (lib.body_locations_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_64 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

        // location_5
        this.location_5 = new lib.location_5_mc();
        this.location_5.setTransform(0, -100);
        this.location_5.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.location_5).wait(24).to({
            scaleX: 0.63,
            scaleY: 0.63
        }, 0).to({
            regY: -0.1,
            scaleX: 1.13,
            scaleY: 1.13,
            y: -100.1,
            alpha: 1
        }, 15).to({
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            y: -100
        }, 5).wait(21));

        // location_1
        this.location_1 = new lib.location_1_mc();
        this.location_1.setTransform(-230, 100);
        this.location_1.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.location_1).wait(39).to({
            y: 500,
            alpha: 1
        }, 0).to({
            scaleX: 0.88,
            scaleY: 0.88,
            y: 50
        }, 11).to({
            scaleX: 1,
            scaleY: 1,
            y: 100
        }, 4).wait(11));

        // location_4
        this.location_4 = new lib.location_4_mc();
        this.location_4.setTransform(230, 100);
        this.location_4.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.location_4).wait(49).to({
            y: 500,
            alpha: 1
        }, 0).to({
            scaleX: 0.88,
            scaleY: 0.88,
            y: 50
        }, 11).to({
            scaleX: 1,
            scaleY: 1,
            y: 100
        }, 4).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-390, -260, 780, 520);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-390, -200, 780, 460), new cjs.Rectangle(-390, -205.3, 780, 465.3), new cjs.Rectangle(-390, -210.6, 780, 470.7), new cjs.Rectangle(-390, -215.9, 780, 476), new cjs.Rectangle(-390, -221.3, 780, 481.4), new cjs.Rectangle(-390, -226.7, 780, 486.7), new cjs.Rectangle(-390, -232, 780, 492), new cjs.Rectangle(-390, -237.3, 780, 497.4), new cjs.Rectangle(-390, -242.7, 780, 502.7), new cjs.Rectangle(-390, -248, 780, 508), new cjs.Rectangle(-390, -253.3, 780, 513.4), new cjs.Rectangle(-390, -258.7, 780, 518.7), new cjs.Rectangle(-390, -264, 780, 524.1), new cjs.Rectangle(-390, -269.4, 780, 529.4), new cjs.Rectangle(-390, -274.7, 780, 534.8), new cjs.Rectangle(-390, -280, 780, 940), new cjs.Rectangle(-388.1, -275.9, 778.2, 893.2), new cjs.Rectangle(-386.3, -271.9, 776.4, 846.5), new cjs.Rectangle(-384.5, -267.9, 774.5, 799.7), new cjs.Rectangle(-382.7, -263.8, 772.7, 752.9), new cjs.Rectangle(-380.9, -260, 770.9, 706.3), new cjs.Rectangle(-379, -260, 769.1, 663.7), new cjs.Rectangle(-377.2, -260, 767.3, 620.9), new cjs.Rectangle(-375.4, -260, 765.5, 578.1), new cjs.Rectangle(-373.6, -260, 763.6, 535.5), new cjs.Rectangle(-371.8, -260, 761.8, 920), new cjs.Rectangle(-370, -260, 758.2, 877.3), new cjs.Rectangle(-374.9, -260, 761.3, 834.6), new cjs.Rectangle(-379.9, -260, 764.5, 791.9), new cjs.Rectangle(-384.9, -260, 767.7, 749.1), new cjs.Rectangle(-390, -260, 770.9, 706.4), new cjs.Rectangle(-390, -260, 769.2, 663.7), new cjs.Rectangle(-390, -260, 767.3, 620.9), new cjs.Rectangle(-390, -260, 765.5, 578.2), new cjs.Rectangle(-390, -260, 763.7, 535.6), new cjs.Rectangle(-390, -260, 761.9, 520), new cjs.Rectangle(-390, -260, 760, 520), new cjs.Rectangle(-390, -260, 765, 520), new cjs.Rectangle(-390, -260, 770, 520), new cjs.Rectangle(-390, -260, 775, 520), new cjs.Rectangle(-390, -260, 780, 520)];


    (lib.body_locations_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_54 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

        // location_4
        this.location_4 = new lib.location_4_mc();
        this.location_4.setTransform(0, -100);
        this.location_4.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.location_4).wait(39).to({
            y: -500,
            alpha: 1
        }, 0).to({
            scaleX: 0.88,
            scaleY: 0.88,
            y: -50
        }, 11).to({
            scaleX: 1,
            scaleY: 1,
            y: -100
        }, 4).wait(1));

        // location_3
        this.location_3 = new lib.location_3_mc();
        this.location_3.setTransform(-230, 100);
        this.location_3.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.location_3).wait(24).to({
            x: -500
        }, 0).to({
            x: -150,
            alpha: 1
        }, 11).to({
            x: -230
        }, 4).wait(16));

        // location_5
        this.location_5 = new lib.location_5_mc();
        this.location_5.setTransform(230, 100);
        this.location_5.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.location_5).wait(24).to({
            x: 500
        }, 0).to({
            x: 150,
            alpha: 1
        }, 11).to({
            x: 230
        }, 4).wait(16));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-390, -260, 780, 520);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-660, -260, 1320, 520), new cjs.Rectangle(-628.2, -260, 1256.4, 520), new cjs.Rectangle(-596.3, -260, 1192.7, 520), new cjs.Rectangle(-564.5, -260, 1129.1, 520), new cjs.Rectangle(-532.7, -260, 1065.5, 520), new cjs.Rectangle(-500.9, -260, 1001.8, 520), new cjs.Rectangle(-469.1, -260, 938.2, 520), new cjs.Rectangle(-437.2, -260, 874.5, 520), new cjs.Rectangle(-405.4, -260, 810.9, 520), new cjs.Rectangle(-373.6, -260, 747.3, 520), new cjs.Rectangle(-341.8, -260, 683.6, 520), new cjs.Rectangle(-310, -260, 620, 520), new cjs.Rectangle(-330, -260, 660, 520), new cjs.Rectangle(-350, -260, 700, 520), new cjs.Rectangle(-370, -260, 740, 520), new cjs.Rectangle(-390, -660, 780, 920), new cjs.Rectangle(-390, -617.2, 780, 877.3), new cjs.Rectangle(-390, -574.5, 780, 834.6), new cjs.Rectangle(-390, -531.7, 780, 791.8), new cjs.Rectangle(-390, -489, 780, 749.1), new cjs.Rectangle(-390, -446.3, 780, 706.4), new cjs.Rectangle(-390, -403.6, 780, 663.6), new cjs.Rectangle(-390, -360.9, 780, 620.9), new cjs.Rectangle(-390, -318.1, 780, 578.2), new cjs.Rectangle(-390, -275.4, 780, 535.4), new cjs.Rectangle(-390, -232.7, 780, 492.7), new cjs.Rectangle(-390, -190, 780, 450), new cjs.Rectangle(-390, -207.4, 780, 467.5), new cjs.Rectangle(-390, -224.9, 780, 485), new cjs.Rectangle(-390, -242.4, 780, 502.5), new cjs.Rectangle(-390, -260, 780, 520)];


    (lib.body_locations_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_64 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

        // location_3
        this.location_3 = new lib.location_3_mc();
        this.location_3.setTransform(0, -100);
        this.location_3.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.location_3).wait(49).to({
            y: -500,
            alpha: 1
        }, 0).to({
            y: -50
        }, 11).to({
            y: -100
        }, 4).wait(1));

        // location_2
        this.location_2 = new lib.location_2_mc();
        this.location_2.setTransform(-230, 100);
        this.location_2.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.location_2).wait(24).to({
            y: 500,
            alpha: 1
        }, 0).to({
            y: 50
        }, 11).to({
            y: 100
        }, 4).wait(26));

        // location_4
        this.location_4 = new lib.location_4_mc();
        this.location_4.setTransform(230, 100);
        this.location_4.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.location_4).wait(34).to({
            y: 500,
            alpha: 1
        }, 0).to({
            y: 50
        }, 11).to({
            y: 100
        }, 4).wait(16));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-390, -260, 780, 520);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-390, -260, 780, 920), new cjs.Rectangle(-390, -260, 780, 879.1), new cjs.Rectangle(-390, -260, 780, 838.2), new cjs.Rectangle(-390, -260, 780, 797.3), new cjs.Rectangle(-390, -260, 780, 756.4), new cjs.Rectangle(-390, -260, 780, 715.5), new cjs.Rectangle(-390, -260, 780, 674.6), new cjs.Rectangle(-390, -260, 780, 633.7), new cjs.Rectangle(-390, -260, 780, 592.7), new cjs.Rectangle(-390, -260, 780, 551.8), new cjs.Rectangle(-390, -260, 780, 920), new cjs.Rectangle(-390, -260, 780, 879.1), new cjs.Rectangle(-390, -260, 780, 838.2), new cjs.Rectangle(-390, -260, 780, 797.3), new cjs.Rectangle(-390, -260, 780, 756.4), new cjs.Rectangle(-390, -260, 780, 715.5), new cjs.Rectangle(-390, -260, 780, 674.6), new cjs.Rectangle(-390, -260, 780, 633.7), new cjs.Rectangle(-390, -260, 780, 592.7), new cjs.Rectangle(-390, -260, 780, 551.8), rect = new cjs.Rectangle(-390, -260, 780, 520), rect, rect, rect, rect, new cjs.Rectangle(-390, -660, 780, 920), new cjs.Rectangle(-390, -619.1, 780, 879.1), new cjs.Rectangle(-390, -578.2, 780, 838.2), new cjs.Rectangle(-390, -537.2, 780, 797.3), new cjs.Rectangle(-390, -496.3, 780, 756.4), new cjs.Rectangle(-390, -455.4, 780, 715.5), new cjs.Rectangle(-390, -414.5, 780, 674.6), new cjs.Rectangle(-390, -373.6, 780, 633.7), new cjs.Rectangle(-390, -332.7, 780, 592.7), new cjs.Rectangle(-390, -291.8, 780, 551.8), new cjs.Rectangle(-390, -250.9, 780, 510.9), new cjs.Rectangle(-390, -210, 780, 470), new cjs.Rectangle(-390, -222.5, 780, 482.5), new cjs.Rectangle(-390, -235, 780, 495), new cjs.Rectangle(-390, -247.5, 780, 507.5), new cjs.Rectangle(-390, -260, 780, 520)];


    (lib.body_locations_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_64 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

        // location_2
        this.location_2 = new lib.location_2_mc();
        this.location_2.setTransform(0, -100);
        this.location_2.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.location_2).wait(44).to({
            y: -700,
            alpha: 1
        }, 0).to({
            y: -50
        }, 15).to({
            y: -100
        }, 5).wait(1));

        // location_1
        this.location_1 = new lib.location_1_mc();
        this.location_1.setTransform(-230, 100);
        this.location_1.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.location_1).wait(24).to({
            y: -500,
            alpha: 1
        }, 0).to({
            y: 150
        }, 15).to({
            y: 100
        }, 5).wait(21));

        // location_3
        this.location_3 = new lib.location_3_mc();
        this.location_3.setTransform(230, 100);
        this.location_3.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.location_3).wait(34).to({
            y: -500,
            alpha: 1
        }, 0).to({
            y: 150
        }, 15).to({
            y: 100
        }, 5).wait(11));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-390, -260, 780, 520);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-390, -660, 780, 920), new cjs.Rectangle(-390, -616.6, 780, 876.7), new cjs.Rectangle(-390, -573.3, 780, 833.4), new cjs.Rectangle(-390, -530, 780, 790), new cjs.Rectangle(-390, -486.6, 780, 746.7), new cjs.Rectangle(-390, -443.3, 780, 703.4), new cjs.Rectangle(-390, -400, 780, 660), new cjs.Rectangle(-390, -356.6, 780, 616.7), new cjs.Rectangle(-390, -313.3, 780, 573.4), new cjs.Rectangle(-390, -270, 780, 530), new cjs.Rectangle(-390, -660, 780, 753.4), new cjs.Rectangle(-390, -616.6, 780, 753.3), new cjs.Rectangle(-390, -573.3, 780, 753.4), new cjs.Rectangle(-390, -530, 780, 753.4), new cjs.Rectangle(-390, -486.6, 780, 753.3), new cjs.Rectangle(-390, -443.3, 780, 753.4), new cjs.Rectangle(-390, -400, 780, 700), new cjs.Rectangle(-390, -356.6, 780, 646.7), new cjs.Rectangle(-390, -313.3, 780, 593.4), new cjs.Rectangle(-390, -270, 780, 540), new cjs.Rectangle(-390, -860, 780, 1120), new cjs.Rectangle(-390, -816.6, 780, 1076.7), new cjs.Rectangle(-390, -773.3, 780, 1033.4), new cjs.Rectangle(-390, -730, 780, 990), new cjs.Rectangle(-390, -686.6, 780, 953.3), new cjs.Rectangle(-390, -643.3, 780, 953.4), new cjs.Rectangle(-390, -600, 780, 900), new cjs.Rectangle(-390, -556.6, 780, 846.7), new cjs.Rectangle(-390, -513.3, 780, 793.4), new cjs.Rectangle(-390, -470, 780, 740), new cjs.Rectangle(-390, -426.6, 780, 686.7), new cjs.Rectangle(-390, -383.3, 780, 643.4), new cjs.Rectangle(-390, -340, 780, 600), new cjs.Rectangle(-390, -296.6, 780, 556.7), new cjs.Rectangle(-390, -253.3, 780, 513.4), new cjs.Rectangle(-390, -210, 780, 470), new cjs.Rectangle(-390, -220, 780, 480), new cjs.Rectangle(-390, -230, 780, 490), new cjs.Rectangle(-390, -240, 780, 500), new cjs.Rectangle(-390, -250, 780, 510), new cjs.Rectangle(-390, -260, 780, 520)];


    (lib.body_locations_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_64 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

        // location_1
        this.location_1 = new lib.location_1_mc();
        this.location_1.setTransform(0, -100);
        this.location_1.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.location_1).wait(44).to({
            scaleX: 0.63,
            scaleY: 0.63
        }, 0).to({
            regY: -0.1,
            scaleX: 1.13,
            scaleY: 1.13,
            y: -100.1,
            alpha: 1
        }, 15).to({
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            y: -100
        }, 5).wait(1));

        // location_2
        this.location_2 = new lib.location_2_mc();
        this.location_2.setTransform(230, 100);
        this.location_2.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.location_2).wait(34).to({
            scaleX: 0.63,
            scaleY: 0.63
        }, 0).to({
            regX: 0.1,
            regY: 0.1,
            scaleX: 1.13,
            scaleY: 1.13,
            x: 230.1,
            y: 100.1,
            alpha: 1
        }, 15).to({
            regX: 0,
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            x: 230,
            y: 100
        }, 5).wait(11));

        // location_3
        this.location_3 = new lib.location_3_mc();
        this.location_3.setTransform(-230, 100);
        this.location_3.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.location_3).wait(24).to({
            scaleX: 0.63,
            scaleY: 0.63
        }, 0).to({
            regX: -0.1,
            regY: 0.1,
            scaleX: 1.13,
            scaleY: 1.13,
            x: -230.1,
            y: 100.1,
            alpha: 1
        }, 15).to({
            regX: 0,
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            x: -230,
            y: 100
        }, 5).wait(21));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-390, -260, 780, 520);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-330, -260, 720, 520), new cjs.Rectangle(-335.3, -260, 725.3, 520), new cjs.Rectangle(-340.6, -260, 730.7, 520), new cjs.Rectangle(-345.9, -260, 736, 520), new cjs.Rectangle(-351.3, -260, 741.3, 520), new cjs.Rectangle(-356.6, -260, 746.7, 520), new cjs.Rectangle(-361.9, -260, 752, 520), new cjs.Rectangle(-367.3, -260, 757.3, 520), new cjs.Rectangle(-372.7, -260, 762.7, 520), new cjs.Rectangle(-378, -260, 768, 520), new cjs.Rectangle(-383.3, -260, 713.4, 513.4), new cjs.Rectangle(-388.7, -260, 724, 518.7), new cjs.Rectangle(-394, -260, 734.7, 524.2), new cjs.Rectangle(-399.3, -260, 745.4, 529.5), new cjs.Rectangle(-404.7, -260, 756, 534.8), new cjs.Rectangle(-410, -260, 766.7, 540), new cjs.Rectangle(-405.9, -260, 768, 536.1), new cjs.Rectangle(-401.9, -260, 769.3, 532), new cjs.Rectangle(-397.9, -260, 770.6, 528), new cjs.Rectangle(-393.9, -260, 772, 524), new cjs.Rectangle(-390, -200, 773.4, 460), new cjs.Rectangle(-390, -205.3, 778.7, 465.3), new cjs.Rectangle(-390, -210.6, 784.1, 474.8), new cjs.Rectangle(-390, -215.9, 789.4, 485.4), new cjs.Rectangle(-390, -221.3, 794.7, 496.1), new cjs.Rectangle(-390, -226.7, 800, 506.7), new cjs.Rectangle(-390, -232, 796, 508.1), new cjs.Rectangle(-390, -237.3, 792, 509.4), new cjs.Rectangle(-390, -242.7, 788, 510.7), new cjs.Rectangle(-390, -248, 784, 512), new cjs.Rectangle(-390, -253.3, 780, 513.4), new cjs.Rectangle(-390, -258.7, 780, 518.7), new cjs.Rectangle(-390, -264, 780, 524.1), new cjs.Rectangle(-390, -269.4, 780, 529.4), new cjs.Rectangle(-390, -274.7, 780, 534.8), new cjs.Rectangle(-390, -280, 780, 540), new cjs.Rectangle(-390, -275.9, 780, 536), new cjs.Rectangle(-390, -271.9, 780, 531.9), new cjs.Rectangle(-390, -267.9, 780, 527.9), new cjs.Rectangle(-390, -263.8, 780, 523.9), new cjs.Rectangle(-390, -260, 780, 520)];


    (lib.animations_title_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // title
        this.instance = new lib.animation_title_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // decor
        this.instance_1 = new lib.animation_decor_title_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // jk
        this.instance_2 = new lib.title_jk_mc();
        this.instance_2.setTransform(0.5, 0.5, 1, 1, 0, 0, 0, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

        // bg
        this.instance_3 = new lib.bg_title_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -482.1, 400, 572.1);
    p.frameBounds = [rect];


    (lib.animation_hint_location_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_199 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(199).call(this.frame_199).wait(1));

        // animation
        this.instance = new lib.hint_location_1_mc();
        this.instance.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({
            alpha: 1
        }, 10).wait(150).to({
            alpha: 0.012
        }, 19).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-150, -125, 300, 250);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


    (lib.animation_hint_filter_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_149 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(149).call(this.frame_149).wait(1));

        // animation
        this.instance = new lib.hint_filter_mc();
        this.instance.setTransform(0.5, 0.5, 1, 1, 0, 0, 0, 0.5, 0.5);
        this.instance.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({
            alpha: 1
        }, 10).wait(70).to({
            alpha: 0.012
        }, 10).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-89.5, -29.5, 210, 150);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.CurtainScreen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_mc = new lib.curtain_0_mc();
        this.body_mc.setTransform(-200, 0);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-1200, 0, 3200, 600);
    p.frameBounds = [rect];


    (lib.CopyrightScreen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // screen
        this.screen_mc = new lib.copyright_2_mc();
        this.screen_mc.setTransform(1000, 600, 1, 1, 0, 0, 0, 600, 300);

        this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

        // bg
        this.instance = new lib.copyright_1_mc();
        this.instance.alpha = 0.801;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.radio_button_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // button_0
        this.button_0_mc = new lib.radio_button_1_0_mc();

        this.timeline.addTween(cjs.Tween.get(this.button_0_mc).wait(1));

        // button_1
        this.button_1_mc = new lib.radio_button_1_1_mc();
        this.button_1_mc.setTransform(0, 40);

        this.timeline.addTween(cjs.Tween.get(this.button_1_mc).wait(1));

        // button_2
        this.button_2_mc = new lib.radio_button_1_2_mc();
        this.button_2_mc.setTransform(0, 80);

        this.timeline.addTween(cjs.Tween.get(this.button_2_mc).wait(1));

        // button_3
        this.button_3_mc = new lib.radio_button_1_3_mc();
        this.button_3_mc.setTransform(0, 120);

        this.timeline.addTween(cjs.Tween.get(this.button_3_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20, -20, 300, 160);
    p.frameBounds = [rect];


    (lib.radio_button_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /*
             * @author edapskov
             * @copyright 2018 edapskov v 1.0
             */
            createjs.EventDispatcher.initialize(this);
            /*
		
            */
            this.gotoAndStop(0);
            this.mouseEnabled = true;
            this.mouseChildren = true;
            /*
		
            */
            var container_mc = this.body_mc;
            container_mc.gotoAndStop(0);
            container_mc.mouseEnabled = true;
            container_mc.mouseChildren = true;
            /*
		
            */
            var _that = this;
            var _value_num = 0;
            var _totalButtons_num = Number(container_mc.numChildren);
            /*
		
            */
            this.setValueFunc = function(value_num) {
                _updateValueFunc(value_num);
            }
            /*
		
            */
            this.getValueFunc = function() {
                return _getValueFunc();
            }
            /*
		
            */
            function _updateButtonsFunc() {
                /*
			
                */
                var button_mc;
                var i = 0;
                /*
			
                */
                while (i < _totalButtons_num) {
                    /*
				
                    */
                    if (container_mc["button_" + i + "_mc"]) {
                        /*
					
                        */
                        button_mc = container_mc["button_" + i + "_mc"];
                        button_mc.gotoAndStop(0);
                        button_mc.name = "button_" + i + "_mc";
                        /*
					
                        */
                        if (i == _value_num) {
                            /*
						
                            */
                            button_mc.mouseEnabled = false;
                            button_mc.mouseChildren = false;
                            button_mc.cursor = "default";
                            button_mc.removeEventListener("click", _onClickButtonMcFunc, false);
                            /*
						
                            */
                            if (button_mc.check_mc) {
                                button_mc.check_mc.gotoAndStop(1);
                            }
                        } else {
                            /*
						
                            */
                            button_mc.mouseEnabled = true;
                            button_mc.mouseChildren = true;
                            button_mc.cursor = "pointer";
                            button_mc.addEventListener("click", _onClickButtonMcFunc, false);
                            /*
						
                            */
                            if (button_mc.check_mc) {
                                button_mc.check_mc.gotoAndStop(0);
                            }
                        }
                    }
                    /*
				
                    */
                    i++;
                }
            }
            /*
		
            */
            function _onClickButtonMcFunc(event) {
                var current_mc = event.currentTarget;
                var temp_arr = current_mc.name.split("_");
                _updateValueFunc(temp_arr[1]);
            }
            /*
             
            */
            function _updateValueFunc(value_num) {
                /*
			
                */
                if (value_num === undefined) {
                    value_num = 0;
                } else {
                    value_num = Number(value_num);
                }
                /*
			
                */
                if (value_num < 0) {
                    value_num = 0;
                } else if (value_num >= _totalButtons_num) {
                    value_num = Number(_totalButtons_num - 1);
                }
                /*
			
                */
                _value_num = value_num;
                /*
			
                */
                _updateButtonsFunc();
                /*
			
                */
                var user_event = new createjs.Event("change_radio_button");
                user_event.numberValue = _value_num;
                _that.dispatchEvent(user_event);
            }
            /*
		
            */
            function _getValueFunc() {
                return _value_num;
            }
            /*
		
            */
            _updateButtonsFunc();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // body
        this.body_mc = new lib.radio_button_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20, -20, 300, 160);
    p.frameBounds = [rect];


    (lib.GravityExplosionMC = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /*
             * @author edapskov
             * @copyright 2019 edapskov v 1.0
             */
            this.gotoAndStop(0);
            this.mouseEnabled = false;
            this.mouseChildren = false;
            var body_mc = this.body_mc;
            body_mc.gotoAndStop(0);
            var example_mc = body_mc.example_mc;
            example_mc.gotoAndStop(0);
            example_mc.visible = false;
            /*
            переменные
            */
            var _that = this;
            var _particleMaxSpeed_num = 4;
            var _particleFadeSpeed_num = 0.01;
            var _particleTotal_num = 25;
            var _particleRange_num = 100;
            var _gravity_num = 0.4;
            /*
            функция добавления частиц
            */
            function _createExplosionFunc() {
                /*
			
                */
                var particle_mc;
                var i = 0;
                /*
			
                */
                while (i < _particleTotal_num) {
                    /*
				
                    */
                    var particle_mc = new lib.ParticleGravityExplosionMC();
                    body_mc.addChild(particle_mc);
                    particle_mc.gotoAndStop(0);
                    particle_mc.gotoAndStop(Math.floor(Math.random() * particle_mc.totalFrames));
                    particle_mc.x = 0;
                    particle_mc.y = 0;
                    particle_mc.rotation = Math.random() * 360;
                    particle_mc.alpha = Math.random() * (1 - 0.5) + 0.5;
                    /*
				
                    */
                    particle_mc.boundyLeft_num = -_particleRange_num;
                    particle_mc.boundyTop_num = -_particleRange_num;
                    particle_mc.boundyRight_num = _particleRange_num;
                    particle_mc.boundyBottom_num = _particleRange_num;
                    /*
				
                    */
                    particle_mc.speedX_num = Math.random() * _particleMaxSpeed_num - Math.random() * _particleMaxSpeed_num;
                    particle_mc.speedY_num = Math.random() * _particleMaxSpeed_num - (Math.random() * _particleMaxSpeed_num);
                    particle_mc.speedX_num *= _particleMaxSpeed_num;
                    particle_mc.speedY_num *= _particleMaxSpeed_num;
                    /*
				
                    */
                    particle_mc.fadeSpeed_num = Math.random() * _particleFadeSpeed_num;
                    /*
				
                    */
                    particle_mc.addEventListener("tick", _onTickParticleFunc, false);
                    /*
				
                    */
                    i++;
                }
            }
            /*
            обновляем в каждом кадре
            */
            function _onTickParticleFunc(event) {
                /*
                получаем частицу
                */
                var target_mc = event.target;
                //target_mc.gotoAndStop(0);
                /*
			
                */
                target_mc.alpha -= target_mc.fadeSpeed_num;
                target_mc.x += target_mc.speedX_num;
                target_mc.y += target_mc.speedY_num;
                /*
			
                */
                if (target_mc.speedY_num < _particleMaxSpeed_num) {
                    target_mc.speedY_num += _gravity_num;
                }
                /*
			
                */
                if (target_mc.alpha <= 0 || target_mc.x < target_mc.boundyLeft_num || target_mc.x > target_mc.boundyRight_num || target_mc.y < target_mc.boundyTop_num || target_mc.y > target_mc.boundyBottom_num) {
                    /*
				
                    */
                    target_mc.parent.removeChild(target_mc);
                    /*
				
                    */
                    _particleTotal_num--;
                    if (_particleTotal_num <= 0) {
                        _that.parent.removeChild(_that);
                    }
                }
            }
            /*
            запускаем
            */
            _createExplosionFunc();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // body
        this.body_mc = new lib.gravity_explosion_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-18, -18, 36, 36);
    p.frameBounds = [rect];


    (lib.blinking_light_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /*
             * @author edapskov
             * @copyright 2019 edapskov v 1.0
             */
            this.gotoAndStop(0);
            this.mouseEnabled = false;
            this.mouseChildren = false;
            /*
		
            */
            var _body_mc = this.body_mc;
            _body_mc.gotoAndStop(0);
            _body_mc.visible = false;
            /*
		
            */
            var timeOut_id = setTimeout(_startAnimationBlinkingLightFunc, Math.random() * 2000);

            function _startAnimationBlinkingLightFunc() {
                /*
			
                */
                clearTimeout(timeOut_id);
                /*
			
                */
                _body_mc.play();
                _body_mc.visible = true;
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // body
        this.body_mc = new lib.blinking_light_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25, -25, 50, 50);
    p.frameBounds = [rect];


    (lib.sound_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

        // icon
        this.instance = new lib.sound_1_mc();

        this.instance_1 = new lib.sound_2_mc();

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));

        // bg
        this.instance_2 = new lib.bg_small_buttons_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect, rect];


    (lib.play_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.play_0_mc();
        this.instance.setTransform(0, 0, 0.842, 0.842);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95
        }, 0).wait(1).to({
            scaleX: 0.84,
            scaleY: 0.84,
            alpha: 0.801
        }, 0).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95,
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -80, 160, 160);
    p.frameBounds = [rect, new cjs.Rectangle(-90, -90, 180, 180), new cjs.Rectangle(-80, -80, 160, 160), new cjs.Rectangle(-90, -90, 180, 180)];


    (lib.photo_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.photo_0_mc();
        this.instance.setTransform(0, 0, 0.842, 0.842);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95
        }, 0).wait(1).to({
            scaleX: 0.84,
            scaleY: 0.84,
            alpha: 0.801
        }, 0).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95,
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -80, 160, 160);
    p.frameBounds = [rect, new cjs.Rectangle(-90, -90, 180, 180), new cjs.Rectangle(-80, -80, 160, 160), new cjs.Rectangle(-90, -90, 180, 180)];


    (lib.next_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.next_0_mc();
        this.instance.setTransform(0, 0, 0.842, 0.842);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95
        }, 0).wait(1).to({
            scaleX: 0.84,
            scaleY: 0.84,
            alpha: 0.801
        }, 0).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95,
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -80, 160, 160);
    p.frameBounds = [rect, new cjs.Rectangle(-90, -90, 180, 180), new cjs.Rectangle(-80, -80, 160, 160), new cjs.Rectangle(-90, -90, 180, 180)];


    (lib.more_games_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.more_games_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApNOEQhXgBg9g9Qg9g+gBhWIAA1jQABhWA9g+QA9g9BXgBISbAAQBWABA+A9QA9A+ABBWIAAVjQgBBWg9A+Qg+A9hWABg");
        this.shape.setTransform(0, -9);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -99, 160, 180);
    p.frameBounds = [rect];


    (lib.more_games_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.more_games_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -99, 160, 180);
    p.frameBounds = [rect, rect, rect, rect];


    (lib.logo_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.logo_0_mc();
        this.instance.setTransform(0, 0, 0.909, 0.909);

        this.instance_1 = new lib.logo_1_mc();

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1,
                p: {
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }
            }]
        }, 1).to({
            state: [{
                t: this.instance_1,
                p: {
                    scaleX: 0.909,
                    scaleY: 0.909,
                    alpha: 0.801
                }
            }]
        }, 1).to({
            state: [{
                t: this.instance_1,
                p: {
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-372.6, -230.8, 472.7, 461.7);
    p.frameBounds = [rect, new cjs.Rectangle(-110, -40, 220, 80), new cjs.Rectangle(-100, -36.3, 200, 72.7), new cjs.Rectangle(-110, -40, 220, 80)];


    (lib.instruction_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.instruction_0_mc();
        this.instance.setTransform(0, 0, 0.842, 0.842);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95
        }, 0).wait(1).to({
            scaleX: 0.84,
            scaleY: 0.84,
            alpha: 0.801
        }, 0).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95,
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -80, 160, 160);
    p.frameBounds = [rect, new cjs.Rectangle(-90, -90, 180, 180), new cjs.Rectangle(-80, -80, 160, 160), new cjs.Rectangle(-90, -90, 180, 180)];


    (lib.free_games_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.free_games_0_mc();
        this.instance.setTransform(0, 0, 0.917, 0.917);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 1,
            scaleY: 1
        }, 0).wait(1).to({
            scaleX: 0.92,
            scaleY: 0.92,
            alpha: 0.801
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-55, -55, 110, 110);
    p.frameBounds = [rect, new cjs.Rectangle(-60, -60, 120, 120), new cjs.Rectangle(-55, -55, 110, 110), new cjs.Rectangle(-60, -60, 120, 120)];


    (lib.credits_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.credits_0_mc();
        this.instance.setTransform(0, 0, 0.917, 0.917);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 1,
            scaleY: 1
        }, 0).wait(1).to({
            scaleX: 0.92,
            scaleY: 0.92,
            alpha: 0.801
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-55, -55, 110, 110);
    p.frameBounds = [rect, new cjs.Rectangle(-60, -60, 120, 120), new cjs.Rectangle(-55, -55, 110, 110), new cjs.Rectangle(-60, -60, 120, 120)];


    (lib.again_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.again_0_mc();
        this.instance.setTransform(0, 0, 0.842, 0.842);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95
        }, 0).wait(1).to({
            scaleX: 0.84,
            scaleY: 0.84,
            alpha: 0.801
        }, 0).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95,
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -80, 160, 160);
    p.frameBounds = [rect, new cjs.Rectangle(-90, -90, 180, 180), new cjs.Rectangle(-80, -80, 160, 160), new cjs.Rectangle(-90, -90, 180, 180)];


    (lib.RedirectScreen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_mc = new lib.redirect_0_mc();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.PreloaderScreen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // logo
        this.logo_mc = new lib.preloader_5_mc();
        this.logo_mc.setTransform(400, 260);

        this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(1));

        // play
        this.play_mc = new lib.preloader_12_mc();
        this.play_mc.setTransform(400, 495);

        this.timeline.addTween(cjs.Tween.get(this.play_mc).wait(1));

        // indicator
        this.indicator_mc = new lib.preloader_9_mc();
        this.indicator_mc.setTransform(400, 495);

        this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

        // bg
        this.bg_mc = new lib.preloader_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.OrientationLockScreen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // screen
        this.screen_mc = new lib.orientation_lock_0_mc();

        this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -10, 1200, 620);
    p.frameBounds = [rect];


    (lib.preview_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // frame
        this.instance = new lib.select0_2_img();
        this.instance.setTransform(-163, -163);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AvKPMQmTmTAAo5QAAo4GTmTQGSmTI4ABQI5gBGTGTIAgAhIAAAxIAsAAQFGF6AAH/QAAI5mSGTQmTGTo5gBQo4ABmSmTg");
        mask.setTransform(0.5, 5.6);

        // heroes
        this.hero_6 = new lib.nail5_mc();
        this.hero_6.setTransform(96, 38, 0.347, 0.502, 19.2);

        this.hero_2 = new lib.nail1_mc();
        this.hero_2.setTransform(-81, -23, 0.331, 0.331, 1.8);

        this.hero_5 = new lib.nail4_mc();
        this.hero_5.setTransform(26, -87, 0.426, 0.426, -3);

        this.hero_3 = new lib.nail2_mc();
        this.hero_3.setTransform(-39, -75, 0.426, 0.426, 2);

        this.hero_4 = new lib.nail3_mc();
        this.hero_4.setTransform(-8, -108, 0.473, 0.473);

        this.hero_6.mask = this.hero_2.mask = this.hero_5.mask = this.hero_3.mask = this.hero_4.mask = mask;

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.hero_4
            }, {
                t: this.hero_3
            }, {
                t: this.hero_5
            }, {
                t: this.hero_2
            }, {
                t: this.hero_6
            }]
        }).wait(1));

        // decor
        this.instance_1 = new lib.hand2_mc();
        this.instance_1.setTransform(5, 13, 0.473, 0.473);

        this.instance_1.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // bg
        this.instance_2 = new lib.select0_1_img();
        this.instance_2.setTransform(-163, -163);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-163, -163, 326, 326);
    p.frameBounds = [rect];


    (lib.preview_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // frame
        this.instance = new lib.select0_2_img();
        this.instance.setTransform(-163, -163);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AvKPMQmTmTAAo5QAAo4GTmTQGSmTI4ABQI5gBGTGTQGSGTAAI4QAAI5mSGTQmHGGojAMIgYgYIgXAYQowgFmNmNg");
        mask.setTransform(0.5, 5.6);

        // hero
        this.hero_1 = new lib.hero_for_makeup_mc();
        this.hero_1.setTransform(2.4, 107.3, 1, 1, 0, 0, 0, 16.1, -7);

        this.hero_1.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

        // bg
        this.instance_1 = new lib.select0_1_img();
        this.instance_1.setTransform(-163, -163);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-163, -163, 326, 326);
    p.frameBounds = [rect];


    (lib.locations_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            location_1: 0,
            location_2: 1,
            location_3: 2,
            location_4: 3,
            location_5: 4
        });

        // body
        this.body_1_mc = new lib.body_locations_1_mc();

        this.body_2_mc = new lib.body_locations_2_mc();

        this.body_3_mc = new lib.body_locations_3_mc();

        this.body_4_mc = new lib.body_locations_4_mc();

        this.body_5_mc = new lib.body_locations_5_mc();

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.body_1_mc
            }]
        }).to({
            state: [{
                t: this.body_2_mc
            }]
        }, 1).to({
            state: [{
                t: this.body_3_mc
            }]
        }, 1).to({
            state: [{
                t: this.body_4_mc
            }]
        }, 1).to({
            state: [{
                t: this.body_5_mc
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-390, -260, 780, 520);
    p.frameBounds = [rect, rect, rect, rect, rect];


    (lib.indicator_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // indicator
        this.indicator_mc = new lib.indicator_1_mc();
        this.indicator_mc.setTransform(-110, -15);

        this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

        // bg
        this.instance = new lib.indicator_0_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-140, -47, 280, 87);
    p.frameBounds = [rect];


    (lib.heroes_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.hero_1 = new lib.hero_mc();
        this.hero_1.setTransform(398, 311.8, 1, 1, 0, 0, 0, 4, -8.2);

        this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(4));

        // graph
        this.container_2_mc = new lib.preview_2_mc();
        this.container_2_mc.setTransform(640, 280);

        this.container_1_mc = new lib.preview_1_mc();
        this.container_1_mc.setTransform(160, 280);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.container_1_mc
            }, {
                t: this.container_2_mc
            }]
        }).wait(4));

        // bg
        this.instance = new lib.background_2_img();
        this.instance.setTransform(-200, 0);

        this.instance_1 = new lib.background_4_img();
        this.instance_1.setTransform(-200, 0);

        this.instance_2 = new lib.background_5_img();
        this.instance_2.setTransform(-200, 0);

        this.instance_3 = new lib.background_6_img();
        this.instance_3.setTransform(-200, 0);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 701.9);
    p.frameBounds = [rect, rect, rect, rect];


    (lib.heroes_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.hero_main_mc();
        this.instance.setTransform(900, 325);
        this.instance.alpha = 0.012;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(179).to({
            _off: false
        }, 0).to({
            x: 480,
            alpha: 1
        }, 15).to({
            x: 530
        }, 5).wait(1));

        // animation
        this.instance_1 = new lib.hero_main_2_mc();
        this.instance_1.setTransform(900, 325);
        this.instance_1.alpha = 0.012;
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({
            _off: false
        }, 0).to({
            x: 480,
            alpha: 1
        }, 15).to({
            x: 530
        }, 5).wait(80).to({
            x: 900,
            alpha: 0.012
        }, 10).to({
            _off: true
        }, 1).wait(10));

        // animation
        this.instance_2 = new lib.hero_main_mc();
        this.instance_2.setTransform(530, 325);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({
            x: 900,
            alpha: 0.012
        }, 10).to({
            _off: true
        }, 1).wait(110));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(400, 16.2, 268.1, 601.2);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(400, 16.2, 618.5, 601.2), new cjs.Rectangle(437, 16.2, 553.5, 601.2), new cjs.Rectangle(474, 16.2, 488.5, 601.2), new cjs.Rectangle(511, 16.2, 423.5, 601.2), new cjs.Rectangle(548, 16.2, 358.5, 601.2), new cjs.Rectangle(585, 16.2, 293.5, 601.2), new cjs.Rectangle(609.5, 16.2, 280.6, 601.2), new cjs.Rectangle(581.5, 16.2, 345.6, 601.2), new cjs.Rectangle(553.5, 16.2, 410.6, 601.2), new cjs.Rectangle(525.5, 16.2, 475.6, 601.2), new cjs.Rectangle(497.5, 16.2, 540.6, 601.2), new cjs.Rectangle(469.5, 45.7, 241, 571.2), new cjs.Rectangle(441.5, 45.7, 241, 571.2), new cjs.Rectangle(413.5, 45.7, 241, 571.2), new cjs.Rectangle(385.5, 45.7, 241, 571.2), new cjs.Rectangle(357.5, 45.7, 241, 571.2), new cjs.Rectangle(367.5, 45.7, 241, 571.2), new cjs.Rectangle(377.5, 45.7, 241, 571.2), new cjs.Rectangle(387.5, 45.7, 241, 571.2), new cjs.Rectangle(397.5, 45.7, 241, 571.2), rect = new cjs.Rectangle(407.5, 45.7, 241, 571.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(407.5, 16.2, 630.6, 601.2), new cjs.Rectangle(444.5, 16.2, 565.6, 601.2), new cjs.Rectangle(481.5, 16.2, 500.6, 601.2), new cjs.Rectangle(518.5, 16.2, 435.6, 601.2), new cjs.Rectangle(555.5, 16.2, 370.6, 601.2), new cjs.Rectangle(592.5, 16.2, 305.6, 601.2), new cjs.Rectangle(602, 16.2, 268.5, 601.2), new cjs.Rectangle(574, 16.2, 333.5, 601.2), new cjs.Rectangle(546, 16.2, 398.5, 601.2), new cjs.Rectangle(518, 16.2, 463.5, 601.2), new cjs.Rectangle(490, 16.2, 528.5, 601.2), new cjs.Rectangle(462, 16.2, 268.1, 601.2), new cjs.Rectangle(434, 16.2, 268.1, 601.2), new cjs.Rectangle(406, 16.2, 268.1, 601.2), new cjs.Rectangle(378, 16.2, 268.1, 601.2), new cjs.Rectangle(350, 16.2, 268.1, 601.2), new cjs.Rectangle(360, 16.2, 268.1, 601.2), new cjs.Rectangle(370, 16.2, 268.1, 601.2), new cjs.Rectangle(380, 16.2, 268.1, 601.2), new cjs.Rectangle(390, 16.2, 268.1, 601.2), new cjs.Rectangle(400, 16.2, 268.1, 601.2)];


    (lib.filters_open_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // hint
        this.instance = new lib.animation_hint_filter_mc();
        this.instance.setTransform(-105, -135);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

        // animation
        this.instance_1 = new lib.filters_body_open_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            alpha: 0.801
        }, 19).to({
            alpha: 1
        }, 30).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-194.5, -164.5, 239.5, 189.5);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.filters_container_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.exit_mc = new lib.filters_exit_mc();
        this.exit_mc.setTransform(0, -145);

        this.open_mc = new lib.filters_open_mc();
        this.open_mc.setTransform(0, -155);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.open_mc
            }, {
                t: this.exit_mc
            }]
        }).wait(1));

        // title
        this.instance = new lib.corner_filters_mc();
        this.instance.setTransform(118, -58, 0.833, 0.833);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // filters
        this.filters_mc = new lib.radio_button_1_mc();
        this.filters_mc.setTransform(-120, -65);

        this.timeline.addTween(cjs.Tween.get(this.filters_mc).wait(1));

        // bg
        this.instance_1 = new lib.filters_bg_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-194.5, -319.5, 395.3, 449.5);
    p.frameBounds = [rect];


    (lib.filters_animation_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            open: 0,
            exit: 9
        });

        // timeline functions:
        this.frame_9 = function() {
            this.stop();
        }
        this.frame_19 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(1));

        // animation
        this.filters_container_mc = new lib.filters_container_mc();
        this.filters_container_mc.setTransform(400, 730);

        this.timeline.addTween(cjs.Tween.get(this.filters_container_mc).to({
            y: 450
        }, 9).to({
            y: 730
        }, 10).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(205.5, 410.5, 395.3, 449.5);
    p.frameBounds = [rect, new cjs.Rectangle(205.5, 379.4, 395.3, 449.5), new cjs.Rectangle(205.5, 348.3, 395.3, 449.5), new cjs.Rectangle(205.5, 317.2, 395.3, 449.5), new cjs.Rectangle(205.5, 286.1, 395.3, 449.5), new cjs.Rectangle(205.5, 255, 395.3, 449.5), new cjs.Rectangle(205.5, 223.9, 395.3, 449.5), new cjs.Rectangle(205.5, 192.7, 395.3, 449.5), new cjs.Rectangle(205.5, 161.6, 395.3, 449.5), new cjs.Rectangle(205.5, 130.5, 395.3, 449.5), new cjs.Rectangle(205.5, 158.5, 395.3, 449.5), new cjs.Rectangle(205.5, 186.5, 395.3, 449.5), new cjs.Rectangle(205.5, 214.5, 395.3, 449.5), new cjs.Rectangle(205.5, 242.5, 395.3, 449.5), new cjs.Rectangle(205.5, 270.5, 395.3, 449.5), new cjs.Rectangle(205.5, 298.5, 395.3, 449.5), new cjs.Rectangle(205.5, 326.5, 395.3, 449.5), new cjs.Rectangle(205.5, 354.5, 395.3, 449.5), new cjs.Rectangle(205.5, 382.5, 395.3, 449.5), new cjs.Rectangle(205.5, 410.5, 395.3, 449.5)];


    (lib.dressupPanel_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.next_mc = new lib.next_3_mc();
        this.next_mc.setTransform(105, 290);

        this.set_4 = new lib.set_0_mc();
        this.set_4.setTransform(0, -500);

        this.prev_mc = new lib.prev_3_mc();
        this.prev_mc.setTransform(-105, 290);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.prev_mc
            }, {
                t: this.set_4
            }, {
                t: this.next_mc
            }]
        }).wait(1));

        // body
        this.body_mc = new lib.bodyDressupPanel_5_mc();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-220, -550, 440, 895);
    p.frameBounds = [rect];


    (lib.dressupPanel_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.next_mc = new lib.next_3_mc();
        this.next_mc.setTransform(110, 290);

        this.set_3 = new lib.set_0_mc();
        this.set_3.setTransform(0, -500);

        this.prev_mc = new lib.prev_3_mc();
        this.prev_mc.setTransform(-110, 290);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.prev_mc
            }, {
                t: this.set_3
            }, {
                t: this.next_mc
            }]
        }).wait(1));

        // body
        this.body_mc = new lib.bodyDressupPanel_4_mc();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -550, 454.8, 895);
    p.frameBounds = [rect];


    (lib.dressupPanel_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.next_mc = new lib.next_2_mc();
        this.next_mc.setTransform(115, 290);

        this.set_2 = new lib.set_0_mc();
        this.set_2.setTransform(0, -500);

        this.prev_mc = new lib.prev_2_mc();
        this.prev_mc.setTransform(-115, 290);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.prev_mc
            }, {
                t: this.set_2
            }, {
                t: this.next_mc
            }]
        }).wait(1));

        // body
        this.body_mc = new lib.bodyDressupPanel_3_mc();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

        // bg
        this.instance = new lib.wardrobe_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-220, -550, 440, 905);
    p.frameBounds = [rect];


    (lib.dressupPanel_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.next_mc = new lib.next_2_mc();
        this.next_mc.setTransform(130, 30);

        this.set_1 = new lib.set_0_mc();
        this.set_1.setTransform(0, -500);

        this.prev_mc = new lib.prev_2_mc();
        this.prev_mc.setTransform(-130, 30);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.prev_mc
            }, {
                t: this.set_1
            }, {
                t: this.next_mc
            }]
        }).wait(1));

        // body
        this.body_mc = new lib.bodyDressupPanel_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-400, -550, 800, 840);
    p.frameBounds = [rect];


    (lib.Bubble = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.blinking_light_3_mc();
        this.instance.setTransform(0, 0, 0.92, 0.92);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-23, -23, 46, 46);
    p.frameBounds = [rect];


    (lib.WelcomeScreen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.moreGames_btn = new lib.more_games_btn();
        this.moreGames_btn.setTransform(400, 920);
        new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

        this.sound_mc = new lib.sound_mc();
        this.sound_mc.setTransform(760, 40, 0.583, 0.583);

        this.fullScreen_mc = new lib.full_screen_mc();
        this.fullScreen_mc.setTransform(690.1, 40.1, 0.583, 0.583, 0, 0, 0, 0.1, 0.1);

        this.freeGames_mc = new lib.free_games_btn();
        this.freeGames_mc.setTransform(400, 820, 0.727, 0.727);
        new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

        this.credits_btn = new lib.credits_btn();
        this.credits_btn.setTransform(590, 550, 0.727, 0.727);
        new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

        this.instruction_btn = new lib.instruction_btn();
        this.instruction_btn.setTransform(400, 700);
        new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

        this.play_btn = new lib.play_btn();
        this.play_btn.setTransform(710, 510);
        new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

        this.logo_btn = new lib.logo_btn();
        this.logo_btn.setTransform(110, 40);
        new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.logo_btn
            }, {
                t: this.play_btn
            }, {
                t: this.instruction_btn
            }, {
                t: this.credits_btn
            }, {
                t: this.freeGames_mc
            }, {
                t: this.fullScreen_mc
            }, {
                t: this.sound_mc
            }, {
                t: this.moreGames_btn
            }]
        }).wait(1));

        // title
        this.instance = new lib.animations_title_mc();
        this.instance.setTransform(220, 510);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // decor
        this.instance_1 = new lib.lower_shadow_mc();
        this.instance_1.setTransform(-200, 400);
        this.instance_1.alpha = 0.398;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // heroes
        this.instance_2 = new lib.heroes_0_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

        // decor
        this.snowfall_comp = new lib.snowfall_1_mc();
        this.snowfall_comp.setTransform(-200, 0);

        this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(1));

        // bg
        this.instance_3 = new lib.background_2_img();
        this.instance_3.setTransform(-200, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-262.6, -190.8, 1262.7, 1191.9);
    p.frameBounds = [rect];


    (lib.quest_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // pointers
        this.pointer_2 = new lib.pointer_mc();
        this.pointer_2.setTransform(460, -80);

        this.pointer_1 = new lib.pointer_mc();
        this.pointer_1.setTransform(340, -80);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.pointer_1
            }, {
                t: this.pointer_2
            }]
        }).wait(1));

        // indicator
        this.instance = new lib.hint_mc();
        this.instance.setTransform(400, -260, 0.868, 0.867);

        this.indicator_mc = new lib.indicator_mc();
        this.indicator_mc.setTransform(400, -160);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.indicator_mc
            }, {
                t: this.instance
            }]
        }).wait(1));

        // tools
        this.dressupPanel_1_mc = new lib.dressupPanel_5_mc();
        this.dressupPanel_1_mc.setTransform(560, 230);

        this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

        // decor
        this.instance_1 = new lib.lower_shadow_mc();
        this.instance_1.setTransform(-200, 400);
        this.instance_1.alpha = 0.398;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // objects
        this.hero_1 = new lib.hero_mc();
        this.hero_1.setTransform(190, 320);

        this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -329.4, 1200, 941.8);
    p.frameBounds = [rect];


    (lib.quest_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // pointers
        this.pointer_2 = new lib.pointer_mc();
        this.pointer_2.setTransform(460, -80);

        this.pointer_1 = new lib.pointer_mc();
        this.pointer_1.setTransform(340, -80);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.pointer_1
            }, {
                t: this.pointer_2
            }]
        }).wait(1));

        // indicator
        this.instance = new lib.hint_mc();
        this.instance.setTransform(400, -260, 0.868, 0.867);

        this.indicator_mc = new lib.indicator_mc();
        this.indicator_mc.setTransform(400, -160);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.indicator_mc
            }, {
                t: this.instance
            }]
        }).wait(1));

        // tools
        this.dressupPanel_1_mc = new lib.dressupPanel_4_mc();
        this.dressupPanel_1_mc.setTransform(250, 230);

        this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

        // objects
        this.hero_1 = new lib.hero_mc();
        this.hero_1.setTransform(610, 310, 0.965, 0.965);

        this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(50, -329.4, 693.2, 921.5);
    p.frameBounds = [rect];


    (lib.quest_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // pointers
        this.pointer_2 = new lib.pointer_mc();
        this.pointer_2.setTransform(460, -80);

        this.pointer_1 = new lib.pointer_mc();
        this.pointer_1.setTransform(340, -80);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.pointer_1
            }, {
                t: this.pointer_2
            }]
        }).wait(1));

        // indicator
        this.instance = new lib.hint_mc();
        this.instance.setTransform(400, -260, 0.868, 0.867);

        this.indicator_mc = new lib.indicator_mc();
        this.indicator_mc.setTransform(400, -160);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.indicator_mc
            }, {
                t: this.instance
            }]
        }).wait(1));

        // tools
        this.dressupPanel_1_mc = new lib.dressupPanel_3_mc();
        this.dressupPanel_1_mc.setTransform(560, 230);

        this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

        // decor
        this.instance_1 = new lib.lower_shadow_mc();
        this.instance_1.setTransform(-200, 400);
        this.instance_1.alpha = 0.398;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // objects
        this.hero_1 = new lib.hero_mc();
        this.hero_1.setTransform(170, 330);

        this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -329.4, 1200, 951.8);
    p.frameBounds = [rect];


    (lib.quest_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // pointers
        this.pointer_2 = new lib.pointer_mc();
        this.pointer_2.setTransform(460, -80);

        this.pointer_1 = new lib.pointer_mc();
        this.pointer_1.setTransform(340, -80);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.pointer_1
            }, {
                t: this.pointer_2
            }]
        }).wait(1));

        // indicator
        this.instance = new lib.hint_mc();
        this.instance.setTransform(400, -260, 0.868, 0.867);

        this.indicator_mc = new lib.indicator_mc();
        this.indicator_mc.setTransform(400, -160);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.indicator_mc
            }, {
                t: this.instance
            }]
        }).wait(1));

        // tools
        this.dressupPanel_1_mc = new lib.dressupPanel_2_mc();
        this.dressupPanel_1_mc.setTransform(400, 300);

        this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

        // decor
        this.instance_1 = new lib.lower_shadow_mc();
        this.instance_1.setTransform(-200, 400);
        this.instance_1.alpha = 0.398;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // objects
        this.hero_1 = new lib.hero_for_makeup_mc();
        this.hero_1.setTransform(385, 340);

        this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -329.4, 1200, 977);
    p.frameBounds = [rect];


    (lib.quest_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // pointers
        this.pointer_2 = new lib.pointer_mc();
        this.pointer_2.setTransform(460, -80);

        this.pointer_1 = new lib.pointer_mc();
        this.pointer_1.setTransform(340, -80);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.pointer_1
            }, {
                t: this.pointer_2
            }]
        }).wait(1));

        // indicator
        this.instance = new lib.hint_mc();
        this.instance.setTransform(400, -260, 0.868, 0.867);

        this.indicator_mc = new lib.indicator_mc();
        this.indicator_mc.setTransform(400, -160);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.indicator_mc
            }, {
                t: this.instance
            }]
        }).wait(1));

        // decor
        this.instance_1 = new lib.animation_hint_location_1_mc();
        this.instance_1.setTransform(630, 160);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // tools
        this.dressupPanel_1_mc = new lib.dressupPanel_1_mc();
        this.dressupPanel_1_mc.setTransform(400, 300);

        this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

        // objects
        this.hero_6 = new lib.nail5_mc();
        this.hero_6.setTransform(611, 376, 0.735, 1.061, 19.2);

        this.hero_2 = new lib.nail1_mc();
        this.hero_2.setTransform(237, 246, 0.7, 0.7, 1.8);

        this.hero_5 = new lib.nail4_mc();
        this.hero_5.setTransform(463, 112, 0.9, 0.9, -3);

        this.hero_3 = new lib.nail2_mc();
        this.hero_3.setTransform(325, 136, 0.9, 0.9, 2);

        this.hero_4 = new lib.nail3_mc();
        this.hero_4.setTransform(391, 67);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.hero_4
            }, {
                t: this.hero_3
            }, {
                t: this.hero_5
            }, {
                t: this.hero_2
            }, {
                t: this.hero_6
            }]
        }).wait(1));

        // decor
        this.instance_2 = new lib.hand2_mc();
        this.instance_2.setTransform(419, 324);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20, -329.4, 840, 938.4);
    p.frameBounds = [rect];


    (lib.photoContainer_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // logo
        this.logo_btn = new lib.logotype_mc();
        this.logo_btn.setTransform(160, 575, 0.824, 0.823);

        this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

        // heroes
        this.heroes_mc = new lib.heroes_mc();

        this.timeline.addTween(cjs.Tween.get(this.heroes_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 701.9);
    p.frameBounds = [rect];


    (lib.LocationScreen_5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.next_btn = new lib.next_btn();
        this.next_btn.setTransform(560, 520, 0.813, 0.813);
        new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

        this.moreGames_btn = new lib.more_games_btn();
        this.moreGames_btn.setTransform(400, 900, 0.875, 0.875);
        new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

        this.sound_mc = new lib.sound_mc();
        this.sound_mc.setTransform(40, 40, 0.583, 0.583);

        this.fullScreen_mc = new lib.full_screen_mc();
        this.fullScreen_mc.setTransform(40.1, 110.1, 0.583, 0.583, 0, 0, 0, 0.1, 0.1);

        this.logo_btn = new lib.logo_btn();
        this.logo_btn.setTransform(560, -50);
        new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.logo_btn
            }, {
                t: this.fullScreen_mc
            }, {
                t: this.sound_mc
            }, {
                t: this.moreGames_btn
            }, {
                t: this.next_btn
            }]
        }).wait(1));

        // body
        this.body_mc = new lib.quest_5_mc();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

        // bg
        this.instance = new lib.background_2_img();
        this.instance.setTransform(-200, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -329.4, 1200, 1300.3);
    p.frameBounds = [rect];


    (lib.LocationScreen_4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.next_btn = new lib.next_btn();
        this.next_btn.setTransform(250, 520, 0.875, 0.875);
        new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

        this.moreGames_btn = new lib.more_games_btn();
        this.moreGames_btn.setTransform(400, 900, 0.875, 0.875);
        new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

        this.sound_mc = new lib.sound_mc();
        this.sound_mc.setTransform(760, 40, 0.583, 0.583);

        this.fullScreen_mc = new lib.full_screen_mc();
        this.fullScreen_mc.setTransform(760.1, 110.1, 0.583, 0.583, 0, 0, 0, 0.1, 0.1);

        this.logo_btn = new lib.logo_btn();
        this.logo_btn.setTransform(248, -50);
        new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.logo_btn
            }, {
                t: this.fullScreen_mc
            }, {
                t: this.sound_mc
            }, {
                t: this.moreGames_btn
            }, {
                t: this.next_btn
            }]
        }).wait(1));

        // body
        this.body_mc = new lib.quest_4_mc();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

        // bg
        this.instance = new lib.background_6_img();
        this.instance.setTransform(-200, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -329.4, 1200, 1300.3);
    p.frameBounds = [rect];


    (lib.LocationScreen_3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.next_btn = new lib.next_btn();
        this.next_btn.setTransform(560, 520, 0.875, 0.875);
        new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

        this.moreGames_btn = new lib.more_games_btn();
        this.moreGames_btn.setTransform(400, 900, 0.875, 0.875);
        new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

        this.sound_mc = new lib.sound_mc();
        this.sound_mc.setTransform(40, 40, 0.583, 0.583);

        this.fullScreen_mc = new lib.full_screen_mc();
        this.fullScreen_mc.setTransform(40.1, 110.1, 0.583, 0.583, 0, 0, 0, 0.1, 0.1);

        this.logo_btn = new lib.logo_btn();
        this.logo_btn.setTransform(560, -50);
        new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.logo_btn
            }, {
                t: this.fullScreen_mc
            }, {
                t: this.sound_mc
            }, {
                t: this.moreGames_btn
            }, {
                t: this.next_btn
            }]
        }).wait(1));

        // body
        this.body_mc = new lib.quest_3_mc();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

        // bg
        this.instance = new lib.background_2_img();
        this.instance.setTransform(-200, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -329.4, 1200, 1300.3);
    p.frameBounds = [rect];


    (lib.LocationScreen_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.next_btn = new lib.next_btn();
        this.next_btn.setTransform(400.1, 520.3, 0.875, 0.875, 0, 0, 0, 0.1, 0.3);
        new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

        this.moreGames_btn = new lib.more_games_btn();
        this.moreGames_btn.setTransform(400, 900, 0.875, 0.875);
        new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

        this.sound_mc = new lib.sound_mc();
        this.sound_mc.setTransform(760, 40, 0.583, 0.583);

        this.fullScreen_mc = new lib.full_screen_mc();
        this.fullScreen_mc.setTransform(690.1, 40.1, 0.583, 0.583, 0, 0, 0, 0.1, 0.1);

        this.logo_btn = new lib.logo_btn();
        this.logo_btn.setTransform(110, -50);
        new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.logo_btn
            }, {
                t: this.fullScreen_mc
            }, {
                t: this.sound_mc
            }, {
                t: this.moreGames_btn
            }, {
                t: this.next_btn
            }]
        }).wait(1));

        // body
        this.body_mc = new lib.quest_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

        // bg
        this.instance = new lib.background_1_img();
        this.instance.setTransform(-200, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-262.6, -329.4, 1262.7, 1300.3);
    p.frameBounds = [rect];


    (lib.LocationScreen_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.next_btn = new lib.next_btn();
        this.next_btn.setTransform(400.3, 525.3, 0.875, 0.875, 0, 0, 0, 0.3, 0.3);
        new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

        this.moreGames_btn = new lib.more_games_btn();
        this.moreGames_btn.setTransform(400, 900, 0.875, 0.875);
        new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

        this.sound_mc = new lib.sound_mc();
        this.sound_mc.setTransform(760, 40, 0.583, 0.583);

        this.fullScreen_mc = new lib.full_screen_mc();
        this.fullScreen_mc.setTransform(690.1, 40.1, 0.583, 0.583, 0, 0, 0, 0.1, 0.1);

        this.logo_btn = new lib.logo_btn();
        this.logo_btn.setTransform(110, -50);
        new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.logo_btn
            }, {
                t: this.fullScreen_mc
            }, {
                t: this.sound_mc
            }, {
                t: this.moreGames_btn
            }, {
                t: this.next_btn
            }]
        }).wait(1));

        // body
        this.body_mc = new lib.quest_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

        // bg
        this.instance = new lib.background_3_img();
        this.instance.setTransform(-200, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-262.6, -329.4, 1262.7, 1300.3);
    p.frameBounds = [rect];


    (lib.bubble_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /*
             * @author edapskov
             * @copyright 2017 edapskov v 1.2
             */
            this.gotoAndStop(0);
            this.mouseEnabled = false;
            this.mouseChildren = false;
            var container_mc = this.container_mc;
            container_mc.gotoAndStop(0);
            var _containerBounds_rect = container_mc.getBounds();
            /*
            константы
            */
            var _SPEED_NUM = 0.75;
            var _CURRENT_NUM = 0.25;
            var _BUBBLE_DIAMETER_NUM = 50;
            /*
            создаём n-ое количество пузырей
            */
            _createBubblesFunc(20);
            /*
            функция, создающая пузыри
            */
            function _createBubblesFunc(bubbles_num) {
                /*
                переменные
                */
                var randomScale_num;
                var i = 0;
                /*
                цикл
                */
                while (i < bubbles_num) {
                    /*
                    создаём пузырь
                    */
                    var bubble_mc = new lib.Bubble();
                    container_mc.addChild(bubble_mc);
                    bubble_mc.gotoAndStop(0);
                    bubble_mc.gotoAndStop(Math.floor(Math.random() * bubble_mc.totalFrames));
                    bubble_mc.rad = Math.random() * _CURRENT_NUM - Math.random() * _CURRENT_NUM;
                    randomScale_num = Math.random() * (1 - 0.5) + 0.5;
                    bubble_mc.scaleX = randomScale_num;
                    bubble_mc.scaleY = randomScale_num;
                    bubble_mc.alpha = randomScale_num;
                    bubble_mc.x = Math.random() * _containerBounds_rect.width;
                    bubble_mc.y = Math.random() * _containerBounds_rect.height;
                    bubble_mc.addEventListener("tick", _onTickBubbleFunc, false);
                    /*
                    обновление итератора
                    */
                    i++;
                }
            }
            /*
            обновляем в каждом кадре
            */
            function _onTickBubbleFunc(event) {
                /*
                получаем пузырь
                */
                var target_mc = event.target;
                target_mc.gotoAndStop(0);
                /*
                обновляем координаты
                */
                target_mc.x -= target_mc.rad;
                target_mc.y -= _SPEED_NUM;
                /*
                если пузырь уходит за границы, то исправляем это
                */
                if (target_mc.y <= 0) {
                    target_mc.y = _containerBounds_rect.height - _BUBBLE_DIAMETER_NUM;
                }
                if (target_mc.x >= _containerBounds_rect.width - _BUBBLE_DIAMETER_NUM) {
                    target_mc.x = 1;
                }
                if (target_mc.x <= 0) {
                    target_mc.x = _containerBounds_rect.width - _BUBBLE_DIAMETER_NUM;
                }
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // bubble
        this.instance = new lib.Bubble();
        this.instance.setTransform(600, 650);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // container
        this.container_mc = new lib.bubble_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 1200, 673);
    p.frameBounds = [rect];


    (lib.SelectionScreen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.moreGames_btn = new lib.more_games_btn();
        this.moreGames_btn.setTransform(400, 900);
        new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

        this.sound_mc = new lib.sound_mc();
        this.sound_mc.setTransform(760, 40, 0.583, 0.583);

        this.fullScreen_mc = new lib.full_screen_mc();
        this.fullScreen_mc.setTransform(690.1, 40.1, 0.583, 0.583, 0, 0, 0, 0.1, 0.1);

        this.logo_btn = new lib.logo_btn();
        this.logo_btn.setTransform(110, -50);
        new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.logo_btn
            }, {
                t: this.fullScreen_mc
            }, {
                t: this.sound_mc
            }, {
                t: this.moreGames_btn
            }]
        }).wait(1));

        // locations
        this.locations_mc = new lib.locations_mc();
        this.locations_mc.setTransform(400, 290);

        this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

        // decor
        this.instance = new lib.lower_shadow_mc();
        this.instance.setTransform(-200, 400);
        this.instance.alpha = 0.398;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // decor
        this.bubble_comp = new lib.bubble_1_mc();
        this.bubble_comp.setTransform(200, 300, 1, 1, 0, 0, 0, 400, 300);

        this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

        // bg
        this.instance_1 = new lib.background_1_img();
        this.instance_1.setTransform(-200, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-262.6, -280.8, 1262.7, 1261.9);
    p.frameBounds = [rect];


    (lib.ResultScreen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // filters
        this.filters_animation_mc = new lib.filters_animation_mc();
        this.filters_animation_mc.setTransform(0, 600);

        this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

        // btn
        this.facebook_btn = new lib.facebook_btn();
        this.facebook_btn.setTransform(100, 700);
        new cjs.ButtonHelper(this.facebook_btn, 0, 1, 2, false, new lib.facebook_btn(), 3);

        this.freeGames_mc = new lib.free_games_btn();
        this.freeGames_mc.setTransform(580, 700, 0.727, 0.727);
        new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

        this.photo_btn = new lib.photo_btn();
        this.photo_btn.setTransform(700, 500);
        new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

        this.playAgain_btn = new lib.again_btn();
        this.playAgain_btn.setTransform(100, 500);
        new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

        this.next_mc = new lib.next_mc();
        this.next_mc.setTransform(500, 530);

        this.prev_mc = new lib.prev_mc();
        this.prev_mc.setTransform(300, 530);

        this.sound_mc = new lib.sound_mc();
        this.sound_mc.setTransform(760, 40, 0.583, 0.583);

        this.fullScreen_mc = new lib.full_screen_mc();
        this.fullScreen_mc.setTransform(690.1, 40.1, 0.583, 0.583, 0, 0, 0, 0.1, 0.1);

        this.logo_btn = new lib.logo_btn();
        this.logo_btn.setTransform(110, 40);
        new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.logo_btn
            }, {
                t: this.fullScreen_mc
            }, {
                t: this.sound_mc
            }, {
                t: this.prev_mc
            }, {
                t: this.next_mc
            }, {
                t: this.playAgain_btn
            }, {
                t: this.photo_btn
            }, {
                t: this.freeGames_mc
            }, {
                t: this.facebook_btn
            }]
        }).wait(1));

        // banners
        this.banner_2_mc = new lib.banner_2_mc();
        this.banner_2_mc.setTransform(720, -200, 0.923, 0.923);

        this.banner_1_mc = new lib.banner_1_mc();
        this.banner_1_mc.setTransform(80, -200, 0.923, 0.923);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.banner_1_mc
            }, {
                t: this.banner_2_mc
            }]
        }).wait(1));

        // decor
        this.instance = new lib.lower_shadow_mc();
        this.instance.setTransform(-200, 400);
        this.instance.alpha = 0.012;
        this.instance.cache(-2, -2, 1204, 204);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // photoContainer
        this.photoContainer_mc = new lib.photoContainer_mc();
        this.photoContainer_mc.setTransform(0, 56.4, 1, 1, 0, 0, 0, 0, 56.4);

        this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-262.6, -319.9, 1262.7, 1780);
    p.frameBounds = [rect];


    (lib.storage_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

        // storage
        this.text = new cjs.Text("storage", "64px 'Arial'", "#FF0000");
        this.text.textAlign = "center";
        this.text.lineHeight = 74;
        this.text.lineWidth = 252;
        this.text.setTransform(128.2, 2);

        this.instance = new lib.PreloaderScreen();

        this.instance_1 = new lib.CopyrightScreen();

        this.instance_2 = new lib.WelcomeScreen();

        this.instance_3 = new lib.SelectionScreen();

        this.instance_4 = new lib.LocationScreen_1();
        this.instance_4.setTransform(0, -0.3, 1, 1, 0, 0, 0, 0, -0.3);

        this.instance_5 = new lib.LocationScreen_2();
        this.instance_5.setTransform(0, -0.3, 1, 1, 0, 0, 0, 0, -0.3);

        this.instance_6 = new lib.LocationScreen_3();
        this.instance_6.setTransform(0, 0.3, 1, 1, 0, 0, 0, 0, 0.3);

        this.instance_7 = new lib.LocationScreen_4();
        this.instance_7.setTransform(0, 0.3, 1, 1, 0, 0, 0, 0, 0.3);

        this.instance_8 = new lib.LocationScreen_5();
        this.instance_8.setTransform(0, 0.3, 1, 1, 0, 0, 0, 0, 0.3);

        this.instance_9 = new lib.RedirectScreen();

        this.instance_10 = new lib.ResultScreen();
        this.instance_10.setTransform(0, 56.4, 1, 1, 0, 0, 0, 0, 56.4);

        this.instance_11 = new lib.InstructionScreen();

        this.gravity_explosion_comp = new lib.GravityExplosionMC();
        this.gravity_explosion_comp.setTransform(345, 50);

        this.instance_12 = new lib.TrackMove();
        this.instance_12.setTransform(270, 50);

        this.instance_13 = new lib.Cursor();
        this.instance_13.setTransform(185, 50);

        this.fullScreen_mc = new lib.full_screen_mc();
        this.fullScreen_mc.setTransform(115.1, 50, 0.583, 0.583, 0, 0, 0, 0.1, 0);

        this.sound_mc = new lib.sound_mc();
        this.sound_mc.setTransform(45.1, 50, 0.583, 0.583, 0, 0, 0, 0.1, 0);

        this.instance_14 = new lib.OrientationLockScreen();

        this.instance_15 = new lib.CurtainScreen();

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text
            }]
        }).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: [{
                t: this.instance_10
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.sound_mc
            }, {
                t: this.fullScreen_mc
            }, {
                t: this.instance_13
            }, {
                t: this.instance_12
            }, {
                t: this.gravity_explosion_comp
            }]
        }, 1).to({
            state: [{
                t: this.instance_14
            }]
        }, 1).to({
            state: [{
                t: this.instance_15
            }]
        }, 1).to({
            state: []
        }, 1).wait(4));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 256.5, 75.5);
    p.frameBounds = [rect, rect = new cjs.Rectangle(-200, 0, 1200, 600), rect, new cjs.Rectangle(-262.6, -190.8, 1262.7, 1191.9), new cjs.Rectangle(-262.6, -280.8, 1262.7, 1261.9), rect = new cjs.Rectangle(-262.6, -329.4, 1262.7, 1300.3), rect, rect = new cjs.Rectangle(-200, -329.4, 1200, 1300.3), rect, rect, new cjs.Rectangle(-200, 0, 1200, 600), new cjs.Rectangle(-262.6, -319.9, 1262.7, 1780), new cjs.Rectangle(-200, 0, 1200, 600), new cjs.Rectangle(10, 0, 353, 100), new cjs.Rectangle(-200, -10, 1200, 620), new cjs.Rectangle(-1200, 0, 3200, 600), rect = null, rect, rect, rect];


    // stage content:
    (lib.storage = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // storage
        this.instance = new lib.storage_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(400, 300, 256.5, 75.5);
    p.frameBounds = [rect];

})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {});
var lib, images, createjs, ss;