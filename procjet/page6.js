const age = prompt ("write your age: ");
if (age >= 21  && age <= 30) {
	console.log('you can buy alcohol, but you better buy juice');
} else if (age >= 30) {
    console.log("stop drinking alcohol, it's time to think about health") 
} else {
	console.log('you are still small');
}