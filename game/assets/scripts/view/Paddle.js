cc.Class({
    extends: cc.Component,

    onLoad: function () {
        this.node.parent.on("touchmove", (event) => {
            let touchPoint = this.node.parent.convertToNodeSpace(event.getLocation());
            this.node.x = touchPoint.x;
        });
    },

    init(){
        this.node.x = 360;
    }

});