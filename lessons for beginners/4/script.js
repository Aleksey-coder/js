function external() {
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
 internalFn();
