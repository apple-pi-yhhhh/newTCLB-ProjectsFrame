let conf = {}

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
        account: () => {
            return conf.user
        },
    },
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        conf.user = user
        document.querySelector('#account').innerHTML = `${user.displayName}<img id="avatar" src="${user.photoURL}">`
    }
    else {
    }
});

let ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', {
    // ログイン完了時のリダイレクト先
    signInSuccessUrl: '',

    // 利用する認証機能
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
/*
    // 利用規約のURL(任意で設定)
    tosUrl: 'URL',
    // プライバシーポリシーのURL(任意で設定)
    privacyPolicyUrl: 'URL'
*/
});