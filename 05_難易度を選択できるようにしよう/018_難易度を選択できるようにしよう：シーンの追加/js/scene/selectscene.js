/**
 * SelectScene
 */
(function(ns) {

    // ラベルのリスト
    var UI_DATA = {
        LABELS: {
            children: [{
                type: "Label",
                name: "label",
                x: 40,
                y: 80,
                width: ns.SCREEN_WIDTH,
                fillStyle: "red",
                text: "ここはSelectSceneです。",
                fontSize: 30,
                align: "left"
            }]
        }
    };

    var GAME_START_BUTTON_SIZE_WIDTH  = 280;
    var GAME_START_BUTTON_SIZE_HEIGHT = 60;
    var GAME_START_BUTTON_X    = 480;
    var GAME_START_BUTTON_Y    = ns.SCREEN_HEIGHT-70;

    ns.SelectScene = tm.createClass({
        superClass : tm.app.Scene,

        init : function() {
            this.superInit();

            // ラベル表示
            this.fromJSON(UI_DATA.LABELS);

            // ゲーム開始ボタン
            var startGameButton = tm.app.GlossyButton(
                    GAME_START_BUTTON_SIZE_WIDTH,
                    GAME_START_BUTTON_SIZE_HEIGHT,
                    "blue",
                    "ゲーム開始");
            startGameButton.position.set(GAME_START_BUTTON_X, GAME_START_BUTTON_Y);
            // ボタンをタッチした時の動作
            startGameButton.addEventListener("pointingend", function(e) {
                // 入力を受付たらMainSceneに遷移
                e.app.replaceScene(ns.MainScene());
            });
            this.addChild(startGameButton);
        },
    });

})(game);