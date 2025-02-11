// ajax, axios 이전에 JavaScript 내에서 만든 api 전달, 전송 기능
import {useEffect, useState} from "react";
import axios from "axios";
// axios 가져올 때 프로젝트당 최초 1회 해야할 작업
// npm i axios = axios 기능 설치
/* npm 으로 JavaScript 기본 기능이 아닌 회사 or 개인이 만든 특정 기능을 설치하기 원한다면
    npm i 기능명칭        or        npm install 기능명칭
    https://www.npmjs.com/              -> 설치와 사용관련 내용
 */

const AxiosApiCat = () => {
    const [cat, setCat] = useState("");

    const catBtn = () => {
        axios
            .get("https://api.thecatapi.com/v1/images/search")
            .then(
                (res) => {
                    setCat(res.data[0].url);
                }
            )
            .catch(
                (error) => {
                    alert("API 에서 데이터를 가져올 수 없습니다. 백엔드를 확인하세요. : " + error);
                }
            );
    }

    useEffect(() => {
        catBtn();
    }, [])
    return (
        <div>
            <h1>랜덤 고양이 사진</h1>
            {cat ? <img src={cat} /> : <p>로딩 중</p>}
            <button onClick={catBtn}>새로운 고양이 보기</button>
        </div>
    )
}

const FetchApiCat = () => {
    // useEffect 안에 기능을 다시 재사용하지 않으므로 익명함수 사용 -> a 라는 명칭이 존재하는 함수 useEffect(() => function a() {}, []); x
    const [cat, setCat] = useState("");     // cat 에 고양이 사진이 들어있는 url 을 가져와서 화면에 랜더링할 예정

    const [loading, setLoading] = useState(true);
    // timer, 데이터 가져오기
    // 데이터를 가져오는 속도와 useEffect 가 실행되는 속도 차이
    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search") // url api 를 작성하는 공간
            .then((res) => res.json())                   // fetch 는 데이터 형식을 지정해줘야한다.
            .then(                                                // 데이터 가져오기 성공했다면 -> success
                (data) => {                                 // 가져온 데이터를 특정 값에 전달해서 화면으로 보여주기
                    /* 특정 값에 데이터 전달 */
                    setCat(data[0].url) // https://api.thecatapi.com/v1/images/search 가 배열 형태이기 때문에
                                        // index 0 번째 url 주소를 가져와서 cat 에 전달 할 수 있도록 설정
                })
            .catch(                                               // 데이터 가져오기 실패했다면 -> error
                (error) => {
                    alert("API 주소에서 데이터를 가져올 수 없습니다. 백엔드를 확인하세요. : " + error);
                }
            )
            .finally(() => {
                setLoading(false);  // 로딩 완료 후 상태 변경
            })
    }, []);
    return (
        <div>
            <h1>랜덤 고양이 사진</h1>
            {cat ? <img src={cat} /> : <p>로딩 중</p>}
        </div>
    )
}

const ChapUseEffect = () => {
    /*
        useEffect 컴포넌트의 생명주기 관리
        컴포넌트가 랜더링될 때 특정 작업을 실행할 수 있음

        랜더링 : 서버로부터 html 파일을 받아서 브라우저에 표기하는 방법
        예를 들어) 로그인 랜더링 : 로그인 화면과 로그인에 관련된 스타일, 스크립트 실행

        render = rendere : 주다, 제공하다, 표현한다
        랜더링 (rendering) :
            백엔드에서 랜더링이란    ? DB 에서 데이터를 가져와 눈에 보이는 형태로 화면에 표기
            프론트엔드에서 랜더링이란 ? HTML, CSS, JS 를 눈에 보이는 형태로 화면에 표기
    */

    /* 특정 JavaScript 화면이 보여질 때마다
        최초, 몇 초, 몇 분, 몇 시간 마다 새로고침하여 데이터를 보여주는 hook
     */

    /*
        작성방법 :
        1. useEffect((event) => {실행할 기능}, [특정 값이 변경될 때마다 실행]);

        2. useEffect(()      => {실행할 기능}, []);
            ->                      만약에 [] 비어있을 경우 최초 1회 실행

        3. useEffect(()      => {}, []);
            -> 특정 JS 를 호출할 때마다 실행

        4. useEffect(() => {
            // ex) 로그인화면 로그인 완료 로그인한 상태를 유지하는 경우

            // 특정 컴포넌트 사용을 더이상 하지 않을 때 실행할 내용 작성
            return () => {
                // ex) 로그아웃 했을 경우
            }
        }, []);

        5. useEffect(()      => {
            return () => {}
        });

        ※ 만약에 [] 비어있을 경우 최초 1회 실행
     */
    return (
        <div>
            {/* <FetchApiCat /> */}
            <AxiosApiCat />
        </div>
    )
}

export default ChapUseEffect;