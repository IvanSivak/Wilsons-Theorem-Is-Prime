// Factorial function
function fact(num){
	return (num <= 1 ? num : num * fact(num - 1));
}

// Wilson's Theorem
function isPrime(p){
  var f = fact(p - 1);
  return ((f + 1) % p) == 0;
}

alert(isPrime(9))
