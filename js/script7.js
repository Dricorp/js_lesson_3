

//7.	З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

let userTimeYear = prompt('Введите название или номер месяца');

if ((userTimeYear == 1) || (userTimeYear == 'январь') || (userTimeYear == 'Январь') ||
	(userTimeYear == 2) || (userTimeYear == 'февраль') || (userTimeYear == 'Февраль') ||
	(userTimeYear == 12) || (userTimeYear == 'декабрь') || (userTimeYear == 'Декабрь'))
	document.write(`
	<p>Зима</p>
	`)
else if ((userTimeYear == 3) || (userTimeYear == 'март') || (userTimeYear == 'Март') ||
	(userTimeYear == 4) || (userTimeYear == 'апрель') || (userTimeYear == 'Апрель') ||
	(userTimeYear == 5) || (userTimeYear == 'май') || (userTimeYear == 'Май'))
	document.write(`
	<p>Весна</p>
	`)
else if ((userTimeYear == 6) || (userTimeYear == 'июнь') || (userTimeYear == 'июнь') ||
	(userTimeYear == 7) || (userTimeYear == 'июль') || (userTimeYear == 'Июль') ||
	(userTimeYear == 8) || (userTimeYear == 'август') || (userTimeYear == 'Август'))
	document.write(`
	<p>Лето</p>
	`)
else if ((userTimeYear == 9) || (userTimeYear == 'Сентябрь') || (userTimeYear == 'Сентябрь') ||
	(userTimeYear == 10) || (userTimeYear == 'Октябрь') || (userTimeYear == 'Октябрь') ||
	(userTimeYear == 11) || (userTimeYear == 'Ноябрь') || (userTimeYear == 'Ноябрь'))
	document.write(`
	<p>Сегодня Зима</p>
	`)
else
	document.write(`
		<p>Такого месяца нет или проверьте правописание</p>
		`)