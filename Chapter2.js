// var theNumber = Number(prompt("给我一个数值", "..."));
// alert("该数的平方是" + theNumber * theNumber);

// // if else语句
// if (!isNaN(theNumber)) {
// 	alert("你给我的是个数，该数的平方是" + theNumber * theNumber);
// } else {
// 	alert("你给我的不是个数！");
// }

// // if else if语句
// if (theNumber < 10){
// 	alert("该数小于10");
// } else if (theNumber < 100){
// 	alert("该数小于100");
// } else{
// 	alert("该数大于100");
// }

// // while循环语句
// var number = 0;
// while (number <= 12) {
// 	console.log(number);
// 	number = number + 2;
// }

// // do while循环语句
// do {
// 	var name = prompt("你的名字是什么？");
// } while (!name) {
// 	console.log(name);
// }

// // for和break语句
// for (var current = 20; ; current++) {
// 	if (current % 7 == 0) {
// 		break;
// 	}
// }
// console.log(current);

// // switch case语句
// switch(prompt("输入1~3的数字", "1")) {
// 	case "1":
// 		console.log("你输入的是1");
// 		break;
// 	// 由于在这个case中没有break语句，一旦匹配到这个case，则会一直运行到break或者整个switch case语句结束
// 	case "2":
// 		console.log("你输入的是2");
// 	case "3":
// 		console.log("你输入的是3");
// 		break;
// 	default:
// 		console.log("你输入的值不在1~3范围之内");
// 		break;
// }

// // exercises
// // 三角
// console.log("ok");
// var output = "";
// for (var i = 0; i < 7; i = i + 1) {
// 	 output = output + "#";
// 	console.log(output);
// }
// console.log("结束循环");

// // FizzBuzz
// for (var i = 1; i <= 100; i += 1) {
// 	if (i % 3 == 0) {
// 		console.log("Fizz");
// 	} else if (i % 5 == 0) {
// 		console.log("Buzz");
// 	} else {
// 		console.log(i);
// 	}
// }

var siza = 8;
var string1 = "# # # #";
var string2 = " # # # #";
var outputString = "";
for (var i = 1; i < 8; i += 1) {
	if (i % 2 == 1) {
		outputString = outputString + string1 + "\n";
	} else {
		outputString = outputString + string2 + "\n";
	}
}
console.log(outputString);