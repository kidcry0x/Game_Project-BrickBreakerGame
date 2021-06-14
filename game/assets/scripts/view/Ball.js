cc.Class({
    extends: cc.Component,

    properties: {
        scoreAudio: cc.AudioClip,
        touchAudio: cc.AudioClip,
    },

    init(gameCtl) {
        this.gameCtl = gameCtl;
        this.node.position = cc.v2(360,270);
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(800,800);
    },

    onBeginContact(contact, self, other) {
        switch (other.tag) {
            case 1:
                this.gameCtl.onBallContactBrick(self.node, other.node);
                cc.audioEngine.playEffect(this.scoreAudio, false);
                break;
            case 2:
                this.gameCtl.onBallContactGround(self.node, other.node);
                break;
            case 3:
                this.gameCtl.onBallContactPaddle(self.node, other.node);
                cc.audioEngine.playEffect(this.touchAudio, false);
                break;
            case 4:
                this.gameCtl.onBallContactWall(self.node, other.node);
                break;
        }
    },
});