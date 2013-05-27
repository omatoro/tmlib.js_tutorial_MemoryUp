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

    var CHART_TOP_PADDING  = 0;
    var CHART_LEFT_PADDING = 0;


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

            // チャートの設定データ
            var CHART = {
                config: {
                    // width: ,                     // 指定無しで自動計算
                    height: ns.SCREEN_HEIGHT-120,   // チャートの表示高さ
                    column: 0,                      // 列数
                    minColumn: 5,                   // 最低列数
                    row: 10,                        // 行数
                    gridWidth: 1,                   // グリッドの線の幅
                    gridStyle: "rgba(255, 255, 255, 1.0)",  // グリッドの色
                    rightPadding: 220,              // 右の余白
                    topPadding: 100,                // 上の余白
                    leftPadding: 120,               // 左の余白
                    bottomPadding: 50,              // 下の余白
                    type: "ring",                   // チャート表示ポイントの種類
                    line: true,                     // 線グラフ？
                    lineChartWidth: 10,             // 線幅
                    lineChartStyle: "rgba(55, 120, 220, 1.0)",  // 線のスタイル
                    maxData: 10, // 左側の見出しの数値を切り良くするときは、maxDataとrowの数をあわせる
                    isLeftHead: true,               // 左の見出しを表示するか
                },
                data: {
                    // 見出しデータ
                    head: " ",
                    // 左の見出しデータ
                    leftHead: [],
                    // 下の見出しデータ
                    bottomHead: [],
                    // チャートのデータ
                    chart: [        
                        []
                    ],
                    // クリックしたら表示される詳細データ
                    baloon: [
                        []
                    ]
                }
            };

            // チャート表示
            var chart = ns.TMChart(CHART);
            chart.setPositionTopLeft(CHART_LEFT_PADDING, CHART_TOP_PADDING);
            this.addChild(chart);
        }
    });

})(game);