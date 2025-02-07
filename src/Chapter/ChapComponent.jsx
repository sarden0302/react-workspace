// function 과 const 차이 확인하기

/*
    객체 메서드나 클래스 = function
    간단한 함수나 콜백 = const
 */
/*
function ChapComponent() {
    // 자바스크립트


    // return
    return (
        <div>
            {/!* html 태그 사용 *!/}
            <함수 />
            <화살표함수 />
        </div>
    )
}

// 일반 함수 선언
function 함수() {
    // 자바스크립트


    // return
    return (
        <div>
            {/!* html 태그 사용 *!/}
        </div>
    )
}

// 화살표 함수 컴포넌트 선언
// function 보단 const 형식이 대세 -> 메모리 누수 문제
const 화살표함수 = () => {
    // 자바스크립트


    // return
    return (
        <div>
            {/!* html 태그 사용 *!/}
        </div>
    )
}

const 객체 = {
    value : 10,
    // function 익명 함수 function()
    normalFunc : function () {
        console.log(this.value);    // this 는 객체를 가리킴
    },
    // const 익명 함수 () => {}
    arrowFunc : () => {
        console.log(this.value); // const 안에서는 this 개념 존재하지 않기 때문
    }
};

// 메서드란 함수의 한 종류로 단독으로 쓰이지 못하며, .뒤에 메서드 기능 명칭 작성
객체.normalFunc(); // 객체 내의 메서드 형식으로 호출 // 10 출력
객체.arrowFunc();  // 객체 내의 메서드 형식으로 호출 // undefined 값을 가져오지 못함

console.log(더하기(2,3)); // function 은 어디에 있던 호출 가능
// console.log(add1(2,3));  // const 는 밑에 작성 시 읽을 수 없다
// console.log(add2(2,3));  // const 는 밑에 작성 시 읽을 수 없다
// js 형식 비교
function 더하기 (a, b) {
    return a + b;
}

// function 의 경우 위 아래 구분 없이 기능을 호출
// const    의 경우 const 기능명칭이 선언되기 전에 호출 사용 불가! 작성 순서 중요
const add1 = (a, b) => {
    return a + b;
}

const add2 = (a, b) => a + b;
// add1 && add2 가 동일한 기능
// return 에 단일 코드 작성할 경우 {} 와 return 생략 가능

console.log(add1(2,3));  // const 는 밑에 작성 시 읽을 수 없다
console.log(add2(2,3));  // const 는 밑에 작성 시 읽을 수 없다

export default ChapComponent;*/
