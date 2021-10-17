/*function external() {
	const externalVar = 'Я - внешняя функция'; 
	
  function internal() {
	  const internalVar = 'Я - внутренняя функция';
	  console.log('internalVar >', internalVar)
	  console.log('externalVar >', externalVar)
  }	
   //internal();
   return internal;
}

//external();

const internalFn = external();
 //console.log(internalFn);
 internalFn(); */


function createAddress(type) {
		const address = type.toUpperCase();
		return function(name) {
			return `${address} ${name}`;
		}
 }
 
 const addressMan = createAddress('Муж');
 const addressFemale = createAddress('Жена');
 console.log(addressMan('Aleksey'))
 console.log(addressFemale('Larysa'))
