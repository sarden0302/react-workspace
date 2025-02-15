import { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const CafeDetail = () => {

    const {id} = useParams();

    const [cafe, setCafe] = useState(null);

    const navigate = useNavigate();

    const backBtn = () => {
        navigate(-1);
    }

    const backToMainBtn = () => {
        navigate("/");
    }

    useEffect(() => {
        axios
            .get(`/api/cafes/${id}`)
            .then((res) => {
                setCafe(res.data);
            })
            .catch((error) => {
                console.log("Cafe Detail Error : ", error);
            })
    }, []);

    return (
        <div>
            {
                cafe ? (
                    <div>
                        <h1>cafe.name 상세 정보</h1>
                        <p>📍 주소: {cafe.address}</p>
                        <p>📞 전화번호: {cafe.phoneNumber}</p>
                        <p>🕒 영업시간: {cafe.openingTime} - {cafe.closingTime}</p>
                        <p>📖 설명: {cafe.description}</p>
                        <button onClick={backBtn}>뒤로 가기</button>
                        <button onClick={backToMainBtn}>메인화면으로 돌아가기</button>
                    </div>
                ) :
                (
                    <div>
                        <p>로딩 중...</p>
                    </div>

                )
            }
        </div>
    );
};

export default CafeDetail;