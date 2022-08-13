let conf = {}
const tech = {
    // ヘッダーテキスト
    headerText: (text) => {
        const a = $('#headerText')[0];
        if (text != undefined) conf.headerText = text , a.innerHTML = text
        return a.innerHTML
    },
    // アプリケーションの名前
    appName: (text) => {
        if (text != undefined) conf.appName = text
        return conf.appName
    },
    // タイトル
    title: (text) => {
        if (text != undefined) conf.title = text , document.title = `${text} - ${tech.appName()} | 技術科部`
        return conf.title
    },
    // 作者
    author: (text) => {
        if (text != undefined) conf.author = text
        return conf.author
    },
    // GoogleAuth
    GoogleAuth: {
        login: (path) => {
            
        },
        account: () => {},
    },
}
