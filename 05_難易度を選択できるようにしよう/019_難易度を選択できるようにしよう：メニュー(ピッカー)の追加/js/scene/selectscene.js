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

    var SETTING_SPEED_DATA = {
        "ゲーム速度： 遅い"  : 60,
        "ゲーム速度： 早い"  : 30,
        "ゲーム速度： 最速"  : 20
    };
    var SETTING_SPEED_BUTTON_SIZE_WIDTH  = ns.SCREEN_WIDTH-200;
    var SETTING_SPEED_BUTTON_SIZE_HEIGHT = 60;
    var SETTING_SPEED_BUTTON_X    = ns.SCREEN_WIDTH/2;
    var SETTING_SPEED_BUTTON_Y    = 250;

    ns.SelectScene = tm.createClass({
        superClass : tm.app.Scene,

        init: function() {
            this.superInit();

            // ラベル表示
            this.fromJSON(UI_DATA.LABELS);

            // メニュー表示ボタン
            var settingSpeedButton = tm.app.GlossyButton(
                    SETTING_SPEED_BUTTON_SIZE_WIDTH,
                    SETTING_SPEED_BUTTON_SIZE_HEIGHT,
                    "gray",
                    "速度を決める");
            settingSpeedButton.position.set(SETTING_SPEED_BUTTON_X, SETTING_SPEED_BUTTON_Y);
            // ボタンをタッチした時の動作
            settingSpeedButton.addEventListener("pointingend", function(e) {
                // メニュー(ピッカー)を表示
                e.app.pushScene(ns.iPhonePicker(this, SETTING_SPEED_DATA));
            });
            this.addChild(settingSpeedButton);

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