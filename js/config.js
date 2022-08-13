//----------------------------------------------
// Firebaseの初期化
//----------------------------------------------
// コンソールの内容をそのままコピペ
var config = {
    apiKey: "AIzaSyAGBU088P94XgInBEH6VTJjgK5NgPvdlX4",
    authDomain: "eighth-keyword-352714.firebaseapp.com",
    projectId: "eighth-keyword-352714",
    storageBucket: "eighth-keyword-352714.appspot.com",
    messagingSenderId: "898973519838",
    appId: "1:898973519838:web:3cd21c2a0e2ba815f2974f",
    measurementId: "G-G05JJQPLGQ"
};
firebase.initializeApp(config);

//----------------------------------------------
// ドメインとポート番号
//----------------------------------------------
var domain = document.domain;
var port   = (domain === 'localhost')?  5000:80;