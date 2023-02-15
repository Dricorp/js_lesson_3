

//4.	З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

let userAge = parseInt(prompt('Введите свой возраст'))

if (userAge <= 6)
	document.write(`
	<p>Ребенок дошкольного возраста</p>
	`)
else if ((userAge > 6) && (userAge <= 17))
	document.write(`
	<p>Школьник</p>
	`)
else if ((userAge > 17) && (userAge <= 24))
	document.write(`
	<p>Студент</p>
	`)
else if ((userAge > 24) && (userAge < 60)) document.write(`
<p>Работник</p>
`)
else
	document.write(`
	<p>Пенсионер</p>
	`)
