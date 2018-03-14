//1.
for (let i = 0; i <= 20; i++) {
	if (i % 2 === 0) {
		console.log(i + " is even");
	} 
	else {
		console.log(i + " is odd");
	}
}

//2.
for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0){
		console.log("FizzBuzz");
	}
	else if (i % 5 === 0){
		console.log("Buzz");
	}
	else if (i % 3 === 0){
		console.log("Fizz");
	}
	else{
		console.log(i);
	}
}

//3.
let pyr =[];

for (let i = 0; i < 5; i ++){
	pyr.push('#');
	console.log(pyr);
}


//4.
for(let i = 99; i >= 0;){
	console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around, ");
	i--; 
	console.log( i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around, ");
	i--;
	console.log( i + " bottles of beer on the wall.");
  } 
