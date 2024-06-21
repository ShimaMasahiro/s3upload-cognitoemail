// Program Name: labels/navigationLabels.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-04-04
// Last Modified Date: 2024-06-04

const navigationLabels = {

    VideoAnalysys: {
        title: "動画 文字起こし・要約・翻訳・字幕",
        headerText: "動画ファイルから音声を文字起こし、要約とタイトル案を生成し、翻訳します。字幕データ(WebVTT)を生成します。"
    },
    Transcription_Proofreading: {
        title: "動画 文字起こし・要約",
        headerText: "動画ファイルから音声を文字起こし、100字以内に要約してタイトル案を生成します。"
    },

    Caption: {
        title: "動画 字幕データ",
        headerText: "動画ファイルから字幕データ(WebVTT)を生成します。"
    },
    Translate: {
        title: "テキスト 翻訳",
        headerText: "テキストファイルの内容を翻訳します。（日本語→英語 英語→日本語）"
    },

    Summarize: {
        title: "テキスト 要約",
        headerText: "テキストファイルの内容を100字以内に要約してタイトル案を生成します。"
    },


    EMC_HLS: {
        title: "動画 配信",
        headerText: "動画ファイルからプレビューのURLとHTMLタグを生成します。"
    },
    EMC_mp3: {
        title: "動画 音声変換",
        headerText: "動画ファイルを音声ファイル(mp3)に変換します。"
    },

    PDFtoText_Summarize: {
        title: "PDF テキスト抽出・要約",
        headerText: "PDFファイルからテキストを抽出し、100字以内に要約してタイトル案を生成します。"
    },

    AmazonPolly: {
        title: "テキスト 読み上げ",
        headerText: "テキストファイルの内容を読み上げて音声ファイルを生成します。"
    },
    DALL_E: {
        title: "テキスト 画像生成",
        headerText: "テキストファイルの内容にあわせて画像ファイルを生成します。"
    },
    Rekognition: {
        title: "動画 テキスト検出",
        headerText: "動画ファイルからテキストを検出します。"
    },
    Multimodal_AI: {
        title: "テスト　Multimodal_AI",
        headerText: "Multimodal_AIのテスト"
    },
};

export default navigationLabels;
