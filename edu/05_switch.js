let food = '김밥';

// switch(검증 대상)
switch(food){
  // case : 일치 검증 값:
  case '김밥':
    //실행할 처리
    console.log('분식');
    break; // 각 조건의 처리의 마지막에 break를 해줘야 다음 조건의 처리를 진행하지 않음
  case '돈까스':
    console.log('양식');
    break;
  default:
    console.log('이상한 음식');
    break;
}

let num = 1;

switch(num){
  case 1:
    console.log('일');
    break;
  case 2:
    console.log('이');
    break;
  case 3:
    console.log('삼');
    break;
  default:
    console.log('끝');
    break;
}