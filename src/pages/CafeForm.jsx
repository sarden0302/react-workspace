import { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const CafeForm = () => {
    const [cafeName, setCafeName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [openingTime, setOpeningTime] = useState("");
    const [closingTime, setClosingTime] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const backBtn = () => {
        navigate("/");
    }

    const handleChangeValue = (e) => {
        const {name, value} = e.target;

        if (name === "cafeName") setCafeName(value);
        else if (name === "address") setAddress(value);
        else if (name === "phoneNumber") setPhoneNumber(value);
        else if (name === "openingTime") setOpeningTime(value);
        else if (name === "closingTime") setClosingTime(value);
        else if (name === "description") setDescription(value);
    }

    const handleSubmit = (e) => {
        if (!cafeName || !address || !phoneNumber || !openingTime || !closingTime || !description) {
            let msg = "필수 입력 : ";
            if (!cafeName) {
                msg += "카페 이름을 입력하세요.\n";
            } else if (!address) {
                msg += "카페 주소를 입력하세요.\n";
            } else if (!phoneNumber) {
                msg += "카페 전화번호를 입력하세요.\n";
            } else if (!openingTime) {
                msg += "카페 오픈 시간을 입력하세요.\n";
            } else if (!closingTime) {
                msg += "카페 마감 시간을 입력하세요.\n";
            } else if (description) {
                msg += "카페 정보를 입력하세요.\n";
            }
            alert(msg);
            return;
        }
        const formData = new FormData();
        formData.append("name", cafeName);
        formData.append("address", address);
        formData.append("phoneNumber", phoneNumber);
        formData.append("openingTime", openingTime);
        formData.append("closingTime", closingTime);
        formData.append("description", description);

        axios
            .post("http://localhost:8080/api/cafes",
                formData, {
                    headers : {"Content-Type" : "application/json"}
                }
            )
            .then((response) => {
                console.log("카페 추가 : ", response);
                setCafeName("");
                setAddress("");
                setPhoneNumber("");
                setOpeningTime("");
                setClosingTime("");
                setDescription("");
            })
            .catch((error) => {
                console.log("errorrrr : ", error)
            })
    }

    return (
        <div>
            <h1>새로운 카페 추가</h1>
            <label>이름</label>
            <input type="text" name="cafeName" value={cafeName} onChange={handleChangeValue} required/>

            <label>주소</label>
            <input type="text" name="address" value={address} onChange={handleChangeValue} required/>


            <label>전화번호</label>
            <input type="text" name="phoneNumber" value={phoneNumber} onChange={handleChangeValue} required/>


            <label>영업 시작 시간</label>
            <input type="time" name="openingTime" value={openingTime} onChange={handleChangeValue} required/>

            <label>영업 종료 시간</label>
            <input type="time" name="closingTime" value={closingTime} onChange={handleChangeValue} required/>

            <label>설명</label>
            <input type="text" name="description" value={description} onChange={handleChangeValue} required/>

            <button type={"button"} onClick={handleSubmit}>추가하기</button>
            <button onClick={backBtn}>메인페이지 이동</button>
        </div>
    );
}
export default CafeForm;