/**
 * TitleScene
 */
(function(ns) {

    ns.TitleScene = tm.createClass({
        superClass : tm.app.TitleScene,

        init : function() {
            this.superInit({
                title :  "WEBack制作チュートリアル",
                width :  ns.SCREEN_WIDTH,
                height : ns.SCREEN_HEIGHT
            });
        },
    });

})(game);