const tech = {
    // 設定
    set: {
        // ヘッダーテキスト
        headerText: (text) => {
            const a = $('#headerText')[0];
            if (text != undefined) a.innerHTML = text
            return a.innerHTML
        },
        // アプリケーションの名前
        appName: () => {
            
        },
        // タイトル
        title: (text) => {
            text
        },
        author: (name) => {
        },
    },
}