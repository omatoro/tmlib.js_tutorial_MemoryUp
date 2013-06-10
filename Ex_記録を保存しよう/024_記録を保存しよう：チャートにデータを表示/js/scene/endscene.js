/**
 * EndScene
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
                text: "ここはEndSceneです。",
                fontSize: 30,
                align: "left"
            }]
        }
    };

    var RESULT_PARAM = {
            score: 256,
            msg:      "【WEBack制作チュートリアル】",
            hashtags: ["omatoro", "tmlibチュートリアル"],
            url:      "http://testcording.com",
            width:    ns.SCREEN_WIDTH,
            height:   ns.SCREEN_HEIGHT,
            related:  "tmlib.js testcording",
    };

    ns.EndScene = tm.createClass({
        superClass : tm.app.ResultScene,

        init: function(quest, answer) {
            // スコア計算(答え合わせ)
            var rightNumber = 0;
            for (var i = 0; i < quest.length; ++i) {
                if (quest[i] === parseInt(answer[i])) {
                    ++rightNumber;
                }
            }

            RESULT_PARAM.score = rightNumber + " / " + quest.length + " 問正解！"

            // スコア
            this.superInit(RESULT_PARAM);

            // ラベル表示
            this.fromJSON(UI_DATA.LABELS);

            // ローカルストレージからデータを取得
            var loadLocalStorage = localStorage["WEBackTutorial"];
            if (loadLocalStorage) {
                // ローカルストレージにデータがあったら、JSON形式にパースして保存
                loadLocalStorage = JSON.parse(loadLocalStorage);
            }
            else {
                // ローカルストレージにデータがなかったら空データを作成
                loadLocalStorage = {
                    data: []
                };
            }

            // 保存するデータ用に日付を習得
            var date = new Date();
            var alldate = date.format("Y/m/d");
            var year    = date.format("Y");
            var month   = date.format("m");
            var day     = date.format("d");

            //　保存するデータを作成
            memorizeData = {
                date: {
                    all:    alldate,
                    year:   year,
                    month:  month,
                    day:    day,
                },
                score:          rightNumber,
                questNumber:    quest.length,
            };

            // データの保存
            loadLocalStorage.data.push(memorizeData);
            localStorage["WEBackTutorial"] = JSON.stringify(loadLocalStorage);
        },

        // Backボタンを押したらTitleSceneに戻る
        onnextscene: function () {
            ns.app.replaceScene(ns.SelectScene());
        },
    });

})(game);