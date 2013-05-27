/**
 * MainScene
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
                text: "ここはMainSceneです。",
                fontSize: 30,
                align: "left"
            },{
                type: "Label",
                name: "animationLabel", // 新しく作ったラベル名
                x: ns.SCREEN_WIDTH/2,
                y: ns.SCREEN_HEIGHT/2 + 150,
                width: ns.SCREEN_WIDTH,
                fillStyle: "white",
                text: "アニメーションします",
                fontSize: 30,
                align: "center"
            }]
        }
    };

    var BUTTON_SIZE  = 128;
    var BUTTON_COLOR = "green";
    var BUTTON_TEXT  = "ボタンです";
    var BUTTON_X     = ns.SCREEN_WIDTH/2;
    var BUTTON_Y     = ns.SCREEN_HEIGHT/2;

    ns.MainScene = tm.createClass({
        superClass : tm.app.Scene,

        init : function() {
            this.superInit();

            // ラベル表示
            this.fromJSON(UI_DATA.LABELS);

            // ボタンを作る
            var button = tm.app.GlossyButton(BUTTON_SIZE, BUTTON_SIZE, BUTTON_COLOR, BUTTON_TEXT);
            // 表示位置
            button.position.set(BUTTON_X, BUTTON_Y);
            // 表示する
            this.addChild(button);

            // ボタンをタッチした時の動作
            button.addEventListener("pointingend", function(e) {
                // シーンの遷移
                e.app.replaceScene(ns.EndScene());
            });

            // ラベルのアニメーション
            this.animationLabel.tweener.
                setLoop(true).
                to({"alpha": 0.3, "scaleX": 0.8, "scaleY": 0.8}, 700).
                to({"alpha": 1,   "scaleX": 1.0, "scaleY": 1.0}, 700);
        },
    });

})(game);