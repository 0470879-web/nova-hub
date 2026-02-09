"use strict";
//time in seconds from window.onload
var time_playing = -1;
function on_window_load() {
    LaggedAPI.init();
}
function on_press_run() {
    //console.log("on_press_run");
}
function on_game_tick() {
    //console.log(time_playing);
}

function on_win() {

  console.log("win");

var boardinfo={};
boardinfo.score=Math.round(game.SCORE * game.MULTIPLIER);
boardinfo.board="tall_manrunner_hsbdozb";
LaggedAPI.Scores.save(boardinfo, function(response) {
if(response.success) {
console.log('high score saved')
}else {
console.log(response.errormsg);
}
});


  console.log("level: ", game.LEVEL);

  var api_awards=[];

  if(game.LEVEL>1){
      api_awards.push("tall_manrunner_duxmy001");
  }
  if(game.LEVEL>4){
      api_awards.push("tall_manrunner_duxmy002");
  }
  if(game.LEVEL>9){
      api_awards.push("tall_manrunner_duxmy003");
  }

  if(api_awards.length>0){
    LaggedAPI.Achievements.save(api_awards, function(response) {
    if(response.success) {
    console.log('achievement saved')
    }else {
    console.log(response.errormsg);
    }
    });
  }

  LaggedAPI.APIAds.show(function() {

    //
    // ad is finished, unpause game/music
    //

  console.log("ad completed");

  });

}
