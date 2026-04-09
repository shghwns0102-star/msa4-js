// 원본은 보존하면서 오름차순 정렬 해주세요.
const ARR1 = [ 6, 3, 5, 8, 92, 3, 7, 5, 100, 80, 40 ];
let ccc = [...ARR1];
resultArr = ARR1.sort((a,b) => a - b); 
console.log(ccc,resultArr);


// 짝수와 홀수를 분리해서 각각 새로운 배열 만들어 주세요.
const ARR2 = [5,7,3,4,5,1,2];
resultArr = ARR2.filter(item => item % 2 === 0);
resultArr1 = ARR2.filter(item => item % 2 === 1);
console.log(resultArr,resultArr1);

// 각 요소에 3으로 나눈 나머지를 구해서, 새로운 배열로 생성해 주세요.
const ARR3 = [5,7,3,4,5,1,2,0];
resultArr = ARR3.map(val => val % 3);
console.log(resultArr);