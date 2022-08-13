let conf = {
    headerText: 'こーんにーちわー！',
    appName: 'Typing',
    title: '技術科部のプロジェクト',
    author: 'とぴ。',
}
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
        const title = `${text} - ${tech.appName()} | 技術科部`
        if (text != undefined) conf.title = title , document.title = title
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
