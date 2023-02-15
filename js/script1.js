

// 1.	З клавіатури вводяться імена двох дітей та кількість у них цукерок. 
// Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

const childName1 = prompt('Введите имя Первого Ребенка');
let valueCandyChild1 = parseInt(prompt('Введите количество конфет у первого Ребенка'));
const childName2 = prompt('Введите имя второго Ребенка');
let valueCandyChild2 = parseInt(prompt('Введите количество конфет у второго Ребенка'));


if (valueCandyChild1 > valueCandyChild2)
	document.write(`
	<p>У ${childName1} больше конфет</p>
	`)
else if (valueCandyChild1 == valueCandyChild2)
	document.write(`
	<p>У ${childName1} и ${childName2} одинаковое количество конфет</p>
	`)
else
	document.write(`
<p>У ${childName2} больше конфет</p>
`)