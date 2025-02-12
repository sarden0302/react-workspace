import axios from "axios";

const ChapAxios = () => {

    /*
        Axios 란?
        fetch 보다 간결하고 자동으로 JSON 변환 및 에러 처리를 지원하는 http 요청 라이브러리

        라이브러리   :
                     권한 : 기술 제공 업체 < 개발자
                     특정 언어에서 추가적으로 필요한 기능이 모여있는 도서관 같은 개념
                     특정 언어 기능이 보관되어 있는 도서관에서 개발자가 필요한 기능을 가져와서 사용
                     ex) 뷔페
       vs 프레임워크 :
                     권한 : 기술 제공 업체 > 개발자
                     특정 언어에서 추가적으로 필요한 기능이 모여있는 도서관 같은 개념은 동일하지만
                     개발자가 필요한 기능을 가져와서 사용하는데 기준과 제한이 존재함
                     ex) 밀키트, Spring Boot

        1. 설치 방법
            npm install axios
            npm i axios
            yarn add axios          // facebook 에서 만든 기능

        ************  axios 기본 코드 : GET 방식 ************
        axios
            .get("api url 주소 작성")
            .then(  // 데이터 가져오기 성공 시
                (res) => {
                    set데이터(res.data);   // 자동으로 JSON 변환된 데이터 활용
                    alert("데이터 가져오기 성공");
                }
            )
            .catch( // 데이터 가져오기 실패 시
                (error) => {
                    alert("데이터 가져오기 실패, " + error);
                }
            )

        ************  axios 기본 코드 : POST 방식 : 파일 x 문자형식만 전달 ************
        axios
            .post("api url 주소 작성", {
                title: '제목',
                description: "DB에 저장할 설명"
            })
            .then(  // 데이터 가져오기 성공 시
                (res) => {
                    set데이터(res.data);   // 자동으로 JSON 변환된 데이터 활용
                    alert("데이터 가져오기 성공");
                }
            )
            .catch( // 데이터 가져오기 실패 시
                (error) => {
                    alert("데이터 가져오기 실패, " + error);
                }
            )

        ************  axios 기본 코드 : POST 방식 : 파일 형식 포함해서 전달 ************
        const formData = new FormData();    // JS 에 기본 내장 되어 있는 기능 (파일 형식 전달하기 위한 기능)
        formData.append('title', '제목');
        formData.append('description', '설명');
        formData.append('image_file', file);    // <input type="file"> 에서 가져온 파일 객체 설정

        axios
            .post("api url 주소 작성", {
                formData,
                {headers : {
                    'Content-Type' : "multipart/form-data"
                }
            })
            .then(  // 데이터 가져오기 성공 시
                (res) => {
                    set데이터(res.data);   // 자동으로 JSON 변환된 데이터 활용
                    alert("데이터 가져오기 성공");
                }
            )
            .catch( // 데이터 가져오기 실패 시
                (error) => {
                    alert("데이터 가져오기 실패, " + error);
                }
            )
     */



    return (
        <>
        </>
    )
}

export default ChapAxios;