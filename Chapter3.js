// var square = function(x) {
// 	return x*x;
// };
// console.log(square(12));

// var makeSomeNoise = function() {
// 	console.log("Pling!");
// };
// makeSomeNoise();

// var power = function(base, exponent) {
// 	var result = 1;
// 	for (var i = 0; i < exponent; i++) {
// 		result *= base;
// 	}
// 	return result;
// };
// console.log(power(2, 3));

////////////////////////////////////////////////////////

// var x = "outside";

// var f1 = function() {
// 	var x = "inside";
// };

// f1();
// console.log(x);

// var f2 = function() {
// 	x = "inside f2";
// };

// f2();
// console.log(x);

////////////////////////////////////////////////////////

// // nested scopes
// var landscape = function() {
// 	var result = "";
// 	var flat = function(size) {
// 		for (var count = 0; count < size; count++) {
// 			result += "_";
// 		}
// 	};
// 	var mountain = function(size) {
// 		result += "/";
// 		for (var count = 0; count < size; count++){
// 			result += "'";
// 		}
// 		result += "\\";
// 	};

// 	flat(3);
// 	mountain(4);
// 	flat(6);
// 	mountain(1);
// 	flat(1);
// 	return result;
// };

// console.log(landscape());

////////////////////////////////////////////////////////

// var something = 1;
// {
// 	var something = 2;
// }
// console.log(something); // 输出是2

////////////////////////////////////////////////////////

// // function as values
// var launchMissiles = function(value) {
// 	missileSystem.launch("now");
// };

// if (true) {
// 	launchMissiles = function(value) {
// 		/* do nothing here*/
// 	};
// }

////////////////////////////////////////////////////////

// // function 也能被定义成一下样子, 但是最好不用这样子的形式。 why - 这种形式的function会被自动提到最顶端，当这种代码放在if或者循环代码中，就可能造成错误

// function square(x) {
// 	return x * x;
// };

// console.log(square(3));

////////////////////////////////////////////////////////

// // 用一个参数实现两数相乘. closure
// var multiplied = function(factor) {
// 	return function(number) {
// 		return factor * number;
// 	};
// };

// var twice = multiplied(2);
// console.log(twice(5));

////////////////////////////////////////////////////////

// // recursion 递归,一定要有终止条件和返回值
// function power(base, exponent) {
// 	if (exponent == 0) {
// 		return 1;
// 	} else {
// 		return base * power(base, exponent-1);
// 	}
// }

// console.log(power(2,3));

////////////////////////////////////////////////////////

// // 判断一个能否是，从1开始反复加5或者乘3
// function findSolution(target) {
// 	function find(start, history) {
// 		if (start == target) {
// 			return history;
// 		} else if (start > target) {
// 			return null;
// 		} else {
// 			return find(start + 5, "(" + history + " + 5)")|| find(start * 3, "(" + history + " * 3)");
// 		}
// 	}
// 	return find(1,"1");
// }

// console.log(findSolution(13));

////////////////////////////////////////////////////////

// 将小于[0,1000)的数表示为3位

function printFarmInventory(cows, chickens) {
	var cowString = String(cows);
	while (cowString.length < 3) {
		cowString = "0" + cowString;
	}
	console.log(cowString + " Cows");
	var chickenString = String(chickens);
	while (chickenString.length < 3) {
		chickenString = "0" + chickenString;
	}
	console.log(chickenString + " Chickens");
}

printFarmInventory(3,99);

////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
