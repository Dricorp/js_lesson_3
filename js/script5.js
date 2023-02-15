

//5.	З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). 
//       Вивести на екран назву транспортного засобу, яким він може керувати.



let userDriverLicenseCategory = prompt('Введите одну из категорий вашего водительского удостоверения');

if ((userDriverLicenseCategory == 'A') || (userDriverLicenseCategory == 'a'))
	document.write(`
	<p>Вы имеет право на вождение мотоциклом</p>
	`)
else if ((userDriverLicenseCategory == 'B') || (userDriverLicenseCategory == 'b'))
	document.write(`
<p>Вы имеет право на вождение легковым автомобилем</p>
`)
else if ((userDriverLicenseCategory == 'C') || (userDriverLicenseCategory == 'c'))
	document.write(`
<p>Вы имеет право на вождение грузовым автомобилем</p>
`)
else
	document.write(`
	<p>У вас нет прав управлять транспортным средством</p>
	`)
