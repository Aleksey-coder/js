// Два велосипедиста одновременно выехали навстречу
// друг-другу из двух поселков и встретились через
// 3 часа. Первый велосипедист ехал со скоростью
// 12 км/ч, а второй — 14 км/ч. На каком расстоянии
// находятся поселки?

let calculateDistance = function(time, speedOfFirstCyclist, speedOfSecondCyclist) {
    // Алгоритм
    // 1. Найти расстояние, которое проехал первый
    //    велосипедист, умножив скорость на время
    let distanceOfFirstCyclist = speedOfFirstCyclist * time;
    
    // 2. Найти расстояние, которое проехал второй
    //    велосипедист
    let distanceOfSecondCyclist = speedOfSecondCyclist * time;
    
    // 3. Сложить полученные расстояния
   let totalDistance = distanceOfFirstCyclist + distanceOfSecondCyclist;
    
    return totalDistance;
};

let measureUnit = 'км';
console.log('Расстояние между первыми поселками: ' + calculateDistance(3, 12, 14) + measureUnit);
console.log('Расстояние между вторыми поселками: ' + calculateDistance(5, 1, 2) + measureUnit);