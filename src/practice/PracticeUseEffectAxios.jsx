/*
  package.json
     "dependencies": {
         "axios": "^1.7.9",

        작성되어 있을 시 이미 설치되어 있기 때문에 터미널에 npm i axios 작성 필요 x
 */

import {useEffect, useState} from "react";
import axios from "axios";

const APIDog = () => {
    const [dog, setDog] = useState("");

    // axios 형식으로
    // 최초 1회 강아지 사진 랜덤 출력 후
    // 강아지 사진 새로고침 버튼을 클릭했을 때
    // 새로운 강아지 사진이 보일 수 있도록 코드 설정

    const dogBtn = () => {
        axios
            .get("https://api.thedogapi.com/v1/images/search")
            .then((res) => {
                setDog(res.data[0].url);
            })
            .catch((error) => {
                alert("DOG API 가져오던 중 error 발생")
            })
    }

    useEffect(() => {
        dogBtn();
    }, []);

    return (
        <div>
            <h1>랜덤 강아지 사진</h1>
            {/* 반드시 태그 닫을 때 / 닫는 태그 작성할 것 */}
            {dog ? <img src={dog} /> : <p>로딩 중</p>}
            <button onClick={dogBtn}>새로고침</button>
        </div>
    )
}

const APIRandomJoke = () => {
    const [setup, setSetup] = useState("");
    const [delivery, setDelivery] = useState("");
    // https://v2.jokeapi.dev/joke/Any

    useEffect(() => {
        // jokeapi = [] 로 이루어진 배열 형태가 아님!
        // category, setup, delivery
        axios
            .get("https://v2.jokeapi.dev/joke/Any")
            .then(
                (res) => {
                    setSetup(res.data.setup)
                    setDelivery(res.data.delivery)
                })
    }, []);

    return (
        <div>
            <h1>랜덤으로 농담 설정하기</h1>
            {setup ? <p>{setup}</p> : <p>로딩 중</p>}
            {delivery ? <p>{delivery}</p> : <p>로딩 중</p>}
        </div>
    )
}

const APIUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [picture, setPicture] = useState("");

    useEffect(() => {
        axios
            .get("https://randomuser.me/api/")
            .then((res) => {
                setName(res.data.results[0].name.title + ". " + res.data.results[0].name.first + " " + res.data.results[0].name.last);
                setEmail(res.data.results[0].email);
                setPicture(res.data.results[0].picture.medium);
            })
            .catch((error) => {
                alert("error occurred : " + error)
            })
    }, [])

    return (
        <div>
            <p>이름 : {name}</p>
            <p>이메일 : {email}</p>
            {picture ? <img src={picture} /> : <p>로딩 중</p>}
        </div>
    )

}

const PracticeUseEffectAxios = () => {
    return (
        <div>
            <APIDog />
            <APIRandomJoke />
            <APIUser />
        </div>
    )
}

export default PracticeUseEffectAxios;