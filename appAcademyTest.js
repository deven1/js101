/*Write a method named crazy_sum(numbers) that takes an array of numbers.
crazy_sum should multiply each number in the array by its position in the array, and return the sum.

crazy_sum([2]) == 0 # (2*0)
crazy_sum([2, 3]) == 3 # (2*0) + (3*1)
crazy_sum([2, 3, 5]) == 13 # (2*0) + (3*1) + (5*2)
crazy_sum([2, 3, 5, 2]) == 19 # (2*0) + (3*1) + (5*2) + (2*3)
Make sure your code works for arrays with repeats of the same number (like [2, 3, 5, 2]).
Hint: be careful about using Array#index; why?
*/
function crazy_sum(numbers){
  var sum =0;
  for (var i=0; i<numbers.length; i++){
    sum += i*numbers[i];
  }
  console.log(sum);
}
crazy_sum([2]);
crazy_sum([2, 3]);
crazy_sum([2, 3, 5]);
crazy_sum([2, 3, 5, 2]);
/*
Write a method square_nums that takes a number max and returns
the number of perfect squares less than max.
Do not use Math.sqrt(x) or x ** 0.5; we don't want you to calculate
square roots for this problem. You will, however, want to find squares (x * x is fine).

square_nums(5) == 2
square_nums(10) == 3
square_nums(25) == 4
*/
function square_nums(max){
  var count = 0;
  for(var i =1; i < max; i++){
    if(i*i < max){
      count++;
    }
  }
  console.log(count);
}
square_nums(5);
square_nums(10);
square_nums(25);

/*
Write a method crazy_nums that takes a number, max, and returns an array of the integers that

ARE less than max
AND ARE divisible by either three or five
BUT ARE NOT divisible by _both_ three and five
You should return the result in increasing order.

You may wish to use the modulo operation: 5 % 2 returns the remainder when dividing 5 by 2: 1.
If num is divisible by i, then num % i == 0.

crazy_nums(3) == []
crazy_nums(10) == [3, 5, 6, 9]
crazy_nums(20) == [3, 5, 6, 9, 10, 12, 18]
*/
function crazy_nums(max){
  var outputArray = [];
  for(var i =0; i < max; i++){
    if((i%3 == 0 || i%5 == 0) && (i%15 != 0)){
      outputArray.push(i);
    }
  }
  console.log(outputArray);
}
crazy_nums(3);
crazy_nums(10);
crazy_nums(20);
