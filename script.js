console.log("test");

function functionA (x) {
	var number=2;
	return (number*x);
};

console.log(functionA(2));

function functionB (x) {
	var number=4;
	return (number+x);
};

console.log(functionA(functionB(2)));

function functionC (x) {
	var number=10;
	return (number/x);
};

console.log(functionA(functionB(functionC(2))));
