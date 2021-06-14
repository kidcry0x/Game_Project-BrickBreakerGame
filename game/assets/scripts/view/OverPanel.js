cc.Class({
    extends: cc.Component,

    properties: {
        resultLabel:cc.Label,
        
        scoreLabel:cc.Label,

        gameOverAudio:cc.AudioClip,

        gameWinAudio: cc.AudioClip,
    },

    onLoad: function () {

    },

    init(gameCtl){
        this.gameCtl = gameCtl;
        this.node.active = false;
    },

    show(score,isWin){
        this.node.active = true;
        if(isWin){
            this.resultLabel.string = 'YOU WIN!';
            cc.audioEngine.playEffect(this.gameWinAudio, false);
        }else{
            this.resultLabel.string = 'YOU LOSE!';
            cc.audioEngine.playEffect(this.gameOverAudio, false);
        }
        this.scoreLabel.string = score+'';
    },

    onBtnRestart(){
        this.gameCtl.startGame();
    }

});
