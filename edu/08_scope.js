// 스코프
// 변수나 함수의 유효범위
// 어디에 선언되었는지에 따라서 접근 가능 여부가 달라진다.

// 전역 스코프 (Global Scope) - 주로 const 사용
// 전역 스코프로 선언된 변수와 함수는 코드 어디에서나 접근 가능
// 프로그램이 실행되는 동안 계속 유지
let test = '전역 스코프'; // Global Scope
// 중복적용이 불가능하다는것은 같은 스코프내에서의 선언이 불가능하다는것
function output(){
  // 지역 스코프(Local Scope)
  // 함수 내에서 선언 된 변수와 함수는 해당 함수 내부에서 유효
  // 함수가 실행 될때마다 새로운 지역 스코프가 생성
  let test = '지역 스코프'; // 스코프가 다르므로 let으로 중복적용 가능
  // 스코프 체인 (Scope Chain) : 안에 변수가 없으면 바깥에서 찾고
  //                           가까운 변수 먼저 사용
  if(true){
    // 블록레벨 스코프(Block Level Scope)
    // '{}'로 둘러 싸인 범위를 의미
    let test = '블록레벨 스코프';
    console.log(test);
  }
  console.log(test);
}
// 스코프내 let,const 생략시 전역설정으로 바뀜으로 꼭 설정필요
output();
console.log(test);