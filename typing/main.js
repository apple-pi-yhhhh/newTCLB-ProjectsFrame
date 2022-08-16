let chars = '',
	qn = 0,
	nowQ = allQ[qn],
	nokori = nowQ.kana.replace(new RegExp(`^${nowQ.fin}`),'').split(''),
	sTime = new Date,
	total = { time:0, type:0, miss:0 }

const nokoriR = () => {
	nokori = nowQ.kana.replace(new RegExp(`^${nowQ.fin}`), '').split('')
}

const type = e => {
	if(allQ.length<=qn) return false//print('あ"？')
	// 大文字小文字変換入れないとね
	const key = e.key
	chars += key
	const r2hR = r2h(chars)
	tech.headerText(`${nowQ.fin + r2hR}`)
	
	const kanas = r2hR.replace(/[a-z]/g,'').split('')
	// const kanas = r2hR.match(/[---]/g)
	if(kanas[0]){
		for(let i1 = 0, i2 = 0; i1 < kanas.length; i1++){
			if(kanas[i1] == nokori[i2]){
				nowQ.fin += kanas[i1];
				i2++
			}
		}
		nokoriR()
		chars = ''
	}
	// print(nokori)
	if(!nokori[0]){
		qn++
		total.time += new Date - sTime
		alert(
`${qn}問目終了　ーNEXTー＞　${qn+1}問目
成績：
> \t---
> ミス\t---
> 時間\t${((new Date)-sTime)/1000}秒`)
		setDisplay()
		sTime = new Date
	}
	return false;
}

const setDisplay = () => {
	nowQ = allQ[qn]
	if(!nowQ) return finish()
	nokoriR()
	const position = $(`#Q${qn}`).offset().top - 100;
    $('body').animate({scrollTop:position}, 500, "swing");
}

const start = () => {
	alert('スタートします')
	
	document.addEventListener('keypress', type)
	// setDisplay()
	for (let i = 0; i < allQ.length; i++) {
		document.querySelector('main').innerHTML += `
		<div id="Q${i}" class="Q">
			<h2 class="roma">${allQ[i].roma}</h2>
			<h2 class="kana">${allQ[i].kana}</h2>
			<h1 class="main">${allQ[i].main}</h1>
		</div>`
	}
	sTime = new Date
	const position = $(`#Q${qn}`).offset().top - 100;
    $('body').animate({scrollTop:position}, 500, "swing");
}

const finish = () => {
	document.removeEventListener('keypress', type);
	alert(
`全問終了！
合計成績：
> タイプ\t---
> ミス\t---
> 時間\t${total.time/1000}秒
> スコア\t---`)
}


/*
document.addEventListener('keyup', e => {
	document.getElementById('output').innerHTML = '';
	return false;
});
*/
