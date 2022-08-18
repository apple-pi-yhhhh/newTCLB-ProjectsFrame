// スリープ
const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) );

// array を n個ずつに分ける
const division = (array, n) => array.reduce((a, c, i) => i % n == 0 ? [...a, [c]] : [...a.slice(0, -1), [...a[a.length - 1], c]], [])

// 出力
const print = console.log
// 出力 エラー
const error = console.error

// https://qiita.com/t_o_d/items/3c363993442b3d5f10c1
// 指定の各配列の差分を求める
const diff = (...manyArgs) => {
    const targetArr = manyArgs.flat();
    const map = new Map();
    targetArr.forEach(a => map.set(a, (map.get(a) || 0) + 1));
    return targetArr.filter(a => map.get(a) === 1);
}

// 指定の条件で対象のオブジェクトを選別(フィルタリング)する
const filterObj = (target, condition) => Object.fromEntries(Object.entries(target).filter(condition))

// 配列全部Number化
const arrNum = arr => arr.map(Number)

// 二次元配列の回転
const turnR = arr => arr.map((line, i) => line.map((cell, j) => arr[arr.length - 1 - j][i]))
const turnL = arr => arr.map((line, i) => line.map((cell, j) => arr[j][arr.length - 1 - i]))

// 二次元配列の反転
const reversY = arr => arr.map((line, i) => line.map((cell, j) => arr[i][arr.length - 1 - j]))
const reversX = arr => arr.map((line, i) => line.map((cell, j) => arr[arr.length - 1 - i][j]))

// 配列の重複確認
const multiple = arr => {
    for (var i = 0, count = {}; i < arr.length; i++) {
        var elm = arr[i];
        count[elm] = (count[elm] || 0) + 1;
    }
    return count
}

// ２次元配列の連想配列化
const arrObj = arr => Object.fromEntries(arr);

// 文字列を逆さにする
const reversStr = str => str.split('').reverse().join('');



// urlのパラメーターを連想配列にする
const urlPalamater = () => {
    let a = location.search.replace(/^\?/g,'').split('&')
    let b = []
    for(let i = 0; i < a.length; i++){
        b.push(a[i].split('='))
    }
    return arrObj(b)
}

const cookie = {
    get: () => {
        let result = [];
        let cookies = document.cookie;

        if(cookies != ''){
            let cookieArray = cookies.split(';');
            for(let i = 0; i < cookieArray.length; i++){
                let cookie = cookieArray[i].split('=');
                result[cookie[0]] = decodeURIComponent(cookie[1]);
            }
        }
        return result;
    },
    set: (obj) => {
        let cookies = '';
        for (let key in obj) {
            cookies += key + '=' + encodeURIComponent(data[key]) + '; ';
        }

        let expire = new Date();
        expire.setTime( expire.getTime() + 1000 * 3600 * 24 * period);
        expire.toUTCString();

        cookies += 'expires=' + expire+';';

        document.cookie = cookies;
    },
}