/**
 * RecordScene
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
                text: "ここはRecordSceneです。",
                fontSize: 30,
                align: "left"
            }]
        }
    };

    var BACK_BUTTON_SIZE_WIDTH  = 280;
    var BACK_BUTTON_SIZE_HEIGHT = 60;
    var BACK_BUTTON_X    = 160;
    var BACK_BUTTON_Y    = ns.SCREEN_HEIGHT-70;

    var DELETE_BUTTON_SIZE_WIDTH  = 120;
    var DELETE_BUTTON_SIZE_HEIGHT = 60;
    var DELETE_BUTTON_X    = 560;
    var DELETE_BUTTON_Y    = ns.SCREEN_HEIGHT-70;


    ns.RecordScene = tm.createClass({
        superClass : tm.app.Scene,

        init: function() {
            this.superInit();

            // ラベル表示
            this.fromJSON(UI_DATA.LABELS);

            // 戻るボタン
            var backButton = tm.app.GlossyButton(
                    BACK_BUTTON_SIZE_WIDTH, 
                    BACK_BUTTON_SIZE_HEIGHT, 
                    "green", 
                    "戻る");
            backButton.setPosition(BACK_BUTTON_X, BACK_BUTTON_Y);
            // ボタンをタッチした時の動作
            backButton.addEventListener("pointingend", function(e) {
                // 入力を受付たらMainSceneに遷移
                e.app.replaceScene(ns.SelectScene());
            });
            this.addChild(backButton);

            // 記録削除ボタン
            var deleteButton = tm.app.GlossyButton(
                    DELETE_BUTTON_SIZE_WIDTH, 
                    DELETE_BUTTON_SIZE_HEIGHT, 
                    "red", 
                    "記録削除");
            deleteButton.setPosition(DELETE_BUTTON_X, DELETE_BUTTON_Y);
            // ボタンをタッチした時の動作
            deleteButton.addEventListener("pointingend", function(e) {
            });
            this.addChild(deleteButton);
        }
    });

})(game);