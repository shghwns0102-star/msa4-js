// for 문 
// 기본법
// for(초기값; 조건식; 1회루프당 증감 값){
//      //반복하고 싶은 처리
// }

// 2씩 증가시키고 싶을때 (1 += 2)
// for(let i = 0; i < 3; i++){
//   if(i === 1){
//    // break : 처리중 break를 만나면 그 즉시 루프 종료
//     break;
//   }
//   console.log(`${i}번째 루프문`);
// }

// for(let i = 1; i < 5; i++) {
//   // continue : 만나는 즉시 그 다음 루프로 진행
//   if(i % 2 === 0){
//     continue;
//   }
//   console.log(`${i}번째 루프문`);
// }

// for(let i = 0; i < 3; i++){
//   console.log(`부모: ${i}번째`);
  
//   for(let z = 0; z < 3; z++){
//     console.log(`자식: ${z}번째`);
//   }
// }

// let dan = 3;
// let multi = 19;
// for(let i = 1; i <= multi; i++){
//     console.log(`${dan} x ${i} = ${dan * i}`);
//   }

// 구구단
// let startDan = 2;
// for(let startDan; startDan <= 9; startDan++){
//   console.log(` ** ${startDan}단 **`);

//   for(let z = 1; z <= 9; z++){
//     console.log(`${startDan} x ${z} = ${startDan * z}`);
//   }  
// }

// for(let i = 1; i <=5; i++){
//   let line = "";
  
//   for(let z = 1; z<=i; z++){
//     line += "*";
//   }
//   console.log(line); 
// }

// for(let i = 5; i >= 1 ; i--){
//   let line = "";
//   for(let z = 1; z <= i; z++){
//     line += "*";
//   }
//   console.log(line);
// }