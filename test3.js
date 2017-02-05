// Function to reverse input array
function reversedArray(inputArray){
  var outputArray = [];
  for(var i = inputArray.length-1; i >= 0; i--){
    outputArray.push(inputArray[i]);
  }
  console.log(outputArray);
}
reversedArray([1,2,3]);
reversedArray([10,9,8,7,6,5,4,3,2,1,0]);

// Function to find the maximum possible profit given historical stock market data
// For instance, for Market data of [26, 32, 40, 19], maximum profit would occur if
// the user bought on day 1 and sold on day 3 for a max profit of $40-$26 = $14

function maxStockProfit(historicalPrices){
  var lowDay = 0;
  var highDay = 0;
  var maxProfit = 0;
  for (var i = 0; i < historicalPrices.length; i++){
    for (var j = i+1; j < historicalPrices.length; j++){
      if(historicalPrices[j]-historicalPrices[i] > maxProfit){
        maxProfit = historicalPrices[j]-historicalPrices[i];
        var highDay = j+1;
        var lowDay = i+1;
      }
    }
  }
  console.log("Buy on day " + lowDay + " and sell on day " + highDay + " for a maximum profit of $" + maxProfit);
}
maxStockProfit([26, 32, 40, 19]);
