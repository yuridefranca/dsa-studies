function maxProfit(prices: number[]): number {
	let nextDay = 1;
	let profit = 0;
	let onHold = 0;

  // First working answer
	// for (let day = 0; day < prices.length; day++) {
	// 	const currentDayStockPrice = prices[day];
	// 	const nextDayStockPrice = prices[nextDay];

	// 	console.log(`day ${day} current stock ${currentDayStockPrice} X next stock ${nextDayStockPrice}`);

	// 	if (currentDayStockPrice >= nextDayStockPrice && onHold === 0) {
	// 		console.log('we should skip buying the stock');
	// 		nextDay++;
	// 		console.log('----- \n');
	// 		continue;
	// 	}

	// 	if (onHold > 0) {
	// 		console.log('we should sell the stock', onHold);
	// 		profit += currentDayStockPrice - onHold;
	// 		onHold = 0;
	// 	}

	//   if (currentDayStockPrice < nextDayStockPrice) {
	//     console.log('we should buy the stock');
	//     onHold += currentDayStockPrice;
	//   }

	// 	nextDay++;
	// 	console.log('----- \n');
	// }

	for (let i = 0; i < prices.length - 1; i++) {
		const difference = prices[i + 1] - prices[i];
		if (difference >= 0) {
			profit += difference;
		}
	}

	return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([1, 2, 3, 4, 5]));
// console.log(maxProfit([7, 6, 4, 3, 1]));
