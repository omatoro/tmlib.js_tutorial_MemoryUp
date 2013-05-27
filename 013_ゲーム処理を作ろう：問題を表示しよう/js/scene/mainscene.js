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
                fontSize: 130,
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

    var QUEST_NUMBER = 10;

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
                    // シーンの遷移しないようにする
                    // e.app.replaceScene(ns.EndScene());
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

            // カウンター
            var counter = 0;

            // 問題を作る(1～9のランダムな数)
            var quest = [];                   // 問題を入れる配列
            var questNumber = QUEST_NUMBER;   // 問題数
            for (var i = 0; i < questNumber; ++i) {
                quest.push(Math.rand(1, 9));
            }

            // 最初の問題を表示する
            this.animationLabel.text = quest[counter];

            // ラベルのアニメーション
            this.animationLabel.tweener.
                setLoop(true).
                call(function() {
                    if (counter < questNumber) {
                        // 問題を書き換え
                        this.animationLabel.text = quest[counter] || this.animationLabel.text;

                        // カウントアップ
                        ++counter;
                    }
                    // 問題を全て出し終わったらEndSceneに遷移する
                    else {
                        this.animationLabel.tweener.pause();
                        ns.app.replaceScene(ns.EndScene());
                    }
                }.bind(this)).
                set({"alpha": 1,   "scaleX": 1.0, "scaleY": 1.0}).
                to({"alpha": 0.3, "scaleX": 0.6, "scaleY": 0.6}, TIMER_TO_MILLISECOND).
                call(function() {
                    // 問題を全て出し終わったらEndSceneに遷移する
                    if (counter >= questNumber) {
                        this.animationLabel.tweener.pause();
                        ns.app.replaceScene(ns.EndScene());
                    }
                }.bind(this));
        },

        update: function () {
            // バーのカウントダウン
            this.bar.countDown();
        },
    });

})(game);