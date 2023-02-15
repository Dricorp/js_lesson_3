

//6.	З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

let userDay = prompt('Для получения информации о дне недели введите цифру от 1 до 7');

if (userDay == 1)
	document.write(`
	<p>Сегодня понедельник</p>
	`)
else if (userDay == 2)
	document.write(`
		<p>Сегодня вторник</p>
		`)
else if (userDay == 3)
	document.write(`
			<p>Среда</p>
			`)
else if (userDay == 4)
	document.write(`
			<p>Сегодня четверг</p>
		`)
else if (userDay == 5)
	document.write(`
		<p>Сегодня пятница</p>
		`)
else if (userDay == 6)
	document.write(`
	<p>Сегодня суббота</p>
		`)
else if (userDay == 7)
	document.write(`
		<p>Сегодня воскресенье</p>
	`)
else
	document.write(`
		<p>Сегодня никакой день!)))) Введите коректно число от 1 до 7</p>
		`)