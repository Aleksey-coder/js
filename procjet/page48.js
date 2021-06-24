let arr = ["aawe", 'zzz', 'pp', 'rga'],
    i = arr.sort();  //Сортирует по алфавиту
    console.log(i);    

    //[ 'aawe', 'pp', 'rga', 'zzz' ] Сортирует по алфавиту


let arr = [1, 15, 4],
    i = arr.sort(compareNum); 

    function compareNum(a,b) {
        return a-b;
}

    console.log(arr);    //Сортирует по цифрам

    //[ 1, 4, 15 ]