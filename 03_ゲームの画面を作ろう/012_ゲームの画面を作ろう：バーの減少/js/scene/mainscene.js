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
                y: 130,
                width: ns.SCREEN_WIDTH,
                fillStyle: "white",
                text: "アニメーションします",
                fontSize: 50,
                align: "center"
            }]
        }
    };

    var BUTTON_SIZE  = 213;
    var BUTTON_COLOR = "grey";
    var BUTTON_TEXT  = "ボタンです";
    var BUTTON_START_DRAW_Y = 320;
    var BUTTON_FONT_SIZE = 80;

    var BAR_X = ns.SCREEN_WIDTH / 2;
    var BAR_Y = BUTTON_START_DRAW_Y - 70;

    var TIMER = 30;
    var TIMER_TO_MILLISECOND = TIMER / 30 * 1000;

    ns.MainScene = tm.createClass({
        superClass : tm.app.Scene,

        init : function() {
            this.superInit();

            // ラベル表示
            this.fromJSON(UI_DATA.LABELS);

            // まとめてボタンを作る
            this.buttonGroup = tm.app.CanvasElement();
            for (var i = 0; i < 9; ++i) {
                // ボタンの表示位置を計算
                var buttonPositionX = ~~(i % 3) * BUTTON_SIZE + (BUTTON_SIZE / 2);
                var buttonPositionY = ~~(i / 3) * BUTTON_SIZE + (BUTTON_SIZE / 2) + BUTTON_START_DRAW_Y;

                // ボタン作成
                var button = tm.app.GlossyButton(BUTTON_SIZE, BUTTON_SIZE, BUTTON_COLOR, i+1);
                // ボタン内の文字の大きさを指定
                button.label.fontSize = BUTTON_FONT_SIZE;
                // 表示位置
                button.position.set(buttonPositionX, buttonPositionY);
                // ボタンをタッチした時の動作
                button.addEventListener("pointingend", function(e) {
                    // シーンの遷移
                    e.app.replaceScene(ns.EndScene());
                });
                // グループに追加
                this.buttonGroup.addChild(button);
            }

            // まとめて表示する
            this.addChild(this.buttonGroup);

            // バーを表示
            this.bar = ns.Timer(TIMER);
            this.bar.position.set(BAR_X, BAR_Y);
            this.addChild(this.bar);

            // ラベルのアニメーション
            this.animationLabel.tweener.
                setLoop(true).
                to({"alpha": 0.3, "scaleX": 0.8, "scaleY": 0.8}, TIMER_TO_MILLISECOND).
                to({"alpha": 1,   "scaleX": 1.0, "scaleY": 1.0}, 1);
        },

        update: function () {
            // バーのカウントダウン
            this.bar.countDown();
        },
    });

})(game);