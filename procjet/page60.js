// let func1 = function(param, func1){
//     func2(function(param, func3){
//         func3(function(param, func4){
//             func4(function(param, funct5){

//             })
//         })
//     })
// }
let drink = 0;

function shoot(arrow, headshot, fait) {
    console.log('Вы сделали выстрел...')

  
    setTimeout(function(){
        Math.random() > .5 ? headshot({}) : fail("Вы промахнулись");
    }, 3000)
};


function win(){
    console.log('Вы победили!');
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer(){
    console.log('Вам купили пиво!')
}

function giveMoney(){
    console.log('Вам заплатили!')
}

function loose(){
    console.log('Вы проиграли!')
}

shoot({},
        function(mark){
            console.log('Вы попали в цель!');
            win(mark, buyBeer, giveMoney);
        }, 
        function(miss){
            console.error(miss)
            loose();
        }
    )



    //Promise
let drink = 1;

function shoot(arrow) {
    console.log('Вы сделали выстрел...');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function(){
            Math.random() > .5 ? resolve({}) : reject("Вы промахнулись");
        }, 3000);
    }); 
    return promise;
};


function win(){
    console.log('Вы победили!');
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer(){
    console.log('Вам купили пиво!')
}

function giveMoney(){
    console.log('Вам заплатили!')
}

function loose(){
    console.log('Вы проиграли!')
}

shoot({})
        .then(mark => console.log('Вы попали!'))
        .then(win)
        .catch(loose)