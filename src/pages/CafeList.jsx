import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CafeList = () => {
    const [cafes, setCafes] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/cafes")
            .then((res) => {
                console.log("res.data : " + res.data);
                setCafes(res.data);
            })
            .catch(() => {
                alert("백엔드에서 카페 목록 가졍")
            })
    }, []);

    return (
        <div>
            <h1>☕ 카페 목록</h1>
            {
                cafes.map((cafe) => {
                    return (
                        <div key={cafe.id}>
                            <ul>
                                <li>카페 이름 : {cafe.name}</li>
                                <li>카페 주소 : {cafe.address}</li>
                                <li>카페 전화번호 : {cafe.phoneNumber}</li>
                                <li>카페 오픈 시간 : {cafe.openingTime}</li>
                                <li>카페 마감 시간 : {cafe.closingTime}</li>
                                <li>카페 상세 정보 : {cafe.description}</li>
                                <li>정보 입력 날 : {cafe.createdAt}</li>
                                <li>정보 수정 날 : {cafe.updatedAt}</li>
                                <li>
                                    <Link to={`/cafes/${cafe.id}`}>
                                        <button>상세보기</button>
                                    </Link>

                                </li>
                            </ul>
                        </div>
                    )
                })
            }
            <Link to={"/cafes/add"}>
                <button>새 카페 추가</button>
            </Link>
        </div>
    );
};

export default CafeList;