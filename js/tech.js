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
        return conf.headerText
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
firebase.auth().onAuthStateChanged( (user) => {
    let h1   = document.querySelector('h1');
    let info = document.querySelector('#info');

    if(user) {
    h1.innerText   = 'Login Complete!';
    info.innerHTML = `${user.displayName}さんがログインしました<br>(${user.uid})`;
    console.log(user);
    }
    else {
    h1.innerText = 'Not Login';
    }
});
firebase.auth().onAuthStateChanged( (user) => {
    if (user) {
        document.querySelector('#account').innerHTML = `<img src="${user.photoURL}"><p>${user.displayName}</p>`
    }
    else {
    }
});