

// 2.	З клавіатури вводиться ціна товару і кількість грошей.
// Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

const priceProduct = parseFloat(prompt('Введите цену за продукт'));
let valueProduct = parseInt(prompt('Введите количество продукта'));
const sumInWallet = parseInt(prompt('Введите сумму в вашем кошельке'));
const lotteryPrice = 4;

let totalSumProduct = priceProduct * valueProduct;
let changeInWallet = sumInWallet - totalSumProduct;
console.log(changeInWallet);

if (changeInWallet > lotteryPrice)
	confirm('Предлагаю купить лотерею за 4 грн');
else if (sumInWallet < totalSumProduct)
	document.write(`
	<p class="nomoney">Упсс..., у Вас недостаточно денег для совершения покупки</p>
	`)
else
	document.write(`
	<p class="successfully">Спасибо за покупку!!!</p>
	<p class="nomoney">Увы, у вас мало денег на лотерею, где у вас был шанс выйграть Миллион</p>
	`);