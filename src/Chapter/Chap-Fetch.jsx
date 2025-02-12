import {useState} from "react";

const ChapFetch = () => {
    const [데이터, set데이터] = useState("");

    /*
        fetch 란? vanilla (기본 자바스크립트에서 사용 가능)
        자바스크립트에 기본적으로 내장된 비동기 http 요청 함수
        따로 설치할 필요 없이 브라우저에서 바로 사용 가능

        장점 : 자바스크립트에 기본 기능이기 때문에 따로 설치할 필요가 없음
            .json() 을 이용해서 쉽게 객체 -> json 형식으로 데이터 변환
            json 형식이 간결하고 읽기 편하기 때문에 속도나 사용 측면 용이

        단점 :
            1. http 400 이나 500 에러가 발생해도 fetch 실패로 간주하지 않음
            -> response.ok 라는 속성을 통해 정상적으로 동작하는지 확인
            response.ok = http 200

            2. 자체적으로 데이터 종료 시점 설정 (타임아웃 설정할 수 없음)
            axios 는 JSON 으로 자동 변환을 해주지만, fetch 는 직접 변환

            3. POST 요청 보낼 때 headers 와 body 설정을 직접적으로 설정해야 함
     */

    /* fetch 기본 코드 : GET 방식
        fetch("api url 주소")
            // 데이터 가져오기를 성공했다면
            .then(  // json 형식 변환
                (res) => {
                    res.json()
                }
            )
            .then(  // 데이터 가져오기 성공 && JSON 형식으로 변환 성공했다면
                // ABC 함수 -> function ABC() => {}
                // 익명 함수 -> () => {}
                (data) => {
                    set데이터(data);
                }
            )
            .catch( // 데이터 가져오기 실패 || JSON 형식 변환 실패 || data 변환 실패
                (error) => {
                    console.log(error);
                }
            )
     */

    /* fetch 기본 코드 : POST 방식
        fetch("api url 주소", {
            method : "POST",
            headers: {
                'Content-Type' : 'application/json' // 문자를 json 형식으로 전송하겠다.
            },
            body: JSON.stringify({
                title: '제목',
                description: "DB에 저장할 설명"
            })
        })
            // 데이터 가져오기를 성공했다면
            .then(  // json 형식 변환
                (res) => {
                    res.json()
                }
            )
            .then(  // 데이터 저장하기 성공 && JSON 형식으로 변환 성공했다면
                // ABC 함수 -> function ABC() => {}
                // 익명 함수 -> () => {}
                () => {
                    alert("데이터가 성공적으로 DB에 저장되었습니다.")
                }
            )
            .catch( // 데이터 저장하기 실패 || JSON 형식 변환 실패 || data 변환 실패
                (error) => {
                    alert("데이터가 저장하는데 문제가 발생 되었습니다.")
                    console.log(error);
                }
            )
    */
    return (
        <>
        </>
    )
}

export default ChapFetch;