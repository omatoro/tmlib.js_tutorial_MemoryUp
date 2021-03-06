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

        init : function() {
            // スコア
            this.superInit(RESULT_PARAM);

            // ラベル表示
            this.fromJSON(UI_DATA.LABELS);
        },
    });

})(game);