

//3.	Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.



let minNum = 1;
let maxNum = 5
let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
let userNum = parseInt(prompt('Угадайте число от 1го до 5ти'))

if ((randomNum < 1) || (randomNum > 5)) {
	document.write(`
	<p>Вы ввели некоректное чиcло, читайте условие внимательнее!!!</p>
	`)
	userNum = parseInt(prompt('Угадайте число от 1го до 5ти'))
} else if (randomNum == userNum)
	document.write(`
		<p>Вы читаете мои мысли! Соверешенно верно!!!</p>
 	`)
else {
	userNum = prompt('Практически! Попробуйте еще раз. Угадайте число от 1го до 5ти')
	if (randomNum == userNum)
		document.write(`
		<p>Вы читаете мои мысли! Соверешнно верно!!!</p>
 	`)
	else
		document.write(`
			<p>Увы, не играйте в лотерею)))))</p>
			`)
}

