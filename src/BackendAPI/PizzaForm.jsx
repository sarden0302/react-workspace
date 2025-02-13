import {useState} from "react";
import "./PizzaForm.css";
import axios from "axios";

/*
    PizzaFormChapterOne : <input 태그 내부에 onChange = {(e) => setData(e.target.value)} >
    처럼 직접적으로 기능 작성 후 사용

    PizzaFormChapterTwo : <input 태그 내부에 onChange = {handleChangeName} >
    처럼 기능 명칭을 호출하여 간접적으로 기능 사용
 */
const PizzaFormChapterTwo = () => {
    const [pizzaName, setPizzaName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    // input 값 변할 때 마다 데이터 변경
    const handleChangeValue = (e) => {
        /* name 은 target 에서 가져올 key 값으로 default
           name  = input 내 name 에 작성된 값 key 로 받기
           value = input 내 value 의 value 값
         */
        const {name, value} = e.target;

        if (name === "pizzaName") setPizzaName(value);
        else if (name === "price") setPrice(value);
        else if (name === "description") setDescription(value);
    }

    // 버튼 태그 클릭시 실행
    const handleAddPizza = () => {
        // 피자 이름 / 가격/ 작성하지 않은 설명 존재한다면
        if (!pizzaName || !price || !description) {
            let msg = "필수 입력 : \n";
            if (!pizzaName) msg += " - 피자 이름을 입력하세요.\n";
            if (!price) msg += " - 피자 가격을 입력하세요.\n";
            if (!description) msg += " - 피자 설명을 입력하세요.\n";

            alert(msg);
            return; // axios 에서 DB 저장하지 못하게 돌려보내기
        }

        // formData 외부에 작성 -> 13 ~ 16 줄에 작성된 null 값으로 설정
        // const 버튼 안 내부에 작성할 것!
        // 모든 값이 입력이 됐는지 확인 후 formData 에 데이터 입력 -> 메모리 관리
        // formData 는 이미지와 같은 파일형식을 가져올 수 있도록 설정해주는 JavaScript 기능 사용
        const formData = new FormData();
        formData.append("name", pizzaName);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("imagePath", image);

        axios
            .post("http://localhost:8080/api/savePizzaMenu",
                formData,
                {
                    headers: {"Content-Type" : "multipart/form-data"}
                }
            )
            .then(  // DB 에 피자 메뉴 추가를 성공했다면
                (response) => {
                    console.log("데이터 추가 : " + response.data)
                    alert(pizzaName + "가 추가되었습니다.");
                    // 기존에 사용자가 작성해놓은 input textarea 값 비워주기
                    setPizzaName("");
                    setPrice("");
                    setDescription("");
                    setImage(null);
                }
            )
            .catch(
                (err) => {
                    alert("피자 데이터를 저장하던 중 문제가 발생했습니다.");
                    console.log("Pizza Form Error : ", err);
                }
            )
    }

    return (
        <div className="pizza-form">
            <h1>새로운 피자 추가</h1>
            {/*
                [value 용도]
                : input 내 작성된 값 초기화 or 변경
                therefore, 목록페이지로 이동시킨다면 value 필요하지 않음

                e (event = 행위) 에 대한 target(특정) value(값) 을
                set변수이름에 변경된 값을 실시간으로 저장해주고,
                set변수이름에 저장된 값은 변수이름으로 전달되어 DB 에 저장
                onChange= {handleChangeValue}
            */}
            <label htmlFor="pizzaName">피자 이름</label>
            <input type="text"
                   placeholder="피자 이름"
                   id="pizzaName"
                   name="pizzaName"
                   value={pizzaName}
                   onChange={handleChangeValue}/>

            <label htmlFor="price">피자 가격</label>
            <input type="number"
                   placeholder="피자 가격"
                   id="price"
                   name="price"
                   value={price}    // 기본 값 초기화
                   onChange={handleChangeValue}/>

            <label htmlFor="description">피자 설명</label>
            <textarea placeholder="피자 설명"
                      id="description"
                      name="description"
                      value={description}
                      onChange={handleChangeValue}>
            </textarea>

            <label>사진추가</label>
            {/*
                input 태그에서 type="file" 기능 설정할 때
                다량의 파일을 가져옴을 인지할 수 있기 때문에
                e.target.files[0] 와 같은 형식으로 이미지 Array 중 0번째 데이터를 가져오겠다고 설정
            */}
            <input type="file"
                   onChange={(e) => {setImage(e.target.files[0])}}/>
            <button type={"button"} onClick={handleAddPizza}>추가하기</button>
        </div>
    )
}

const PizzaFormChapterOne = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    // formData 는 이미지와 같은 파일형식을 가져올 수 있도록 설정해주는 JavaScript 기능 사용
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("imagePath", image);

    const handleAddPizza = () => {
        // 피자 이름 / 가격/ 작성하지 않은 설명 존재한다면
        if (!name || !price || !description) {
            let msg = "필수 입력 : \n";
            if (!name) msg += " - 피자 이름을 입력하세요.\n";
            if (!price) msg += " - 피자 가격을 입력하세요.\n";
            if (!description) msg += " - 피자 설명을 입력하세요.\n";

            alert(msg);
            return; // axios 에서 DB 저장하지 못하게 돌려보내기
        }
        axios
            .post("http://localhost:8080/api/savePizzaMenu",
                formData,
            {
                headers: {"Content-Type" : "multipart/form-data"}
            }
            )
            .then(  // DB 에 피자 메뉴 추가를 성공했다면
                (response) => {
                    console.log("데이터 추가 : " + response.data)
                    alert(name + "가 추가되었습니다.");
                    // 기존에 사용자가 작성해놓은 input textarea 값 비워주기
                    setName("");
                    setPrice("");
                    setDescription("");
                    setImage(null);
                }
            )
            .catch(
                (err) => {
                    alert("피자 데이터를 저장하던 중 문제가 발생했습니다.");
                    console.log("Pizza Form Error : ", err);
                }
            )
    }

    return (
        <div className="pizza-form">
            <h1>새로운 피자 추가</h1>
            <label>피자 이름</label>
            <input type="text"
                   placeholder="피자 이름"
                   value={name}
                   onChange={(e) => {setName(e.target.value)}}/>

            <label>피자 가격</label>
            <input type="number"
                   placeholder="피자 가격"
                   value={price}
                   onChange={(e) => {setPrice(e.target.value)}}/>

            <textarea placeholder="피자 설명"
                      value={description}
                      onChange={(e) => {setDescription(e.target.value)}}>
            </textarea>

            <label>사진추가</label>
            {/* 
                input 태그에서 type="file" 기능 설정할 때 
                다량의 파일을 가져옴을 인지할 수 있기 때문에
                e.target.files[0] 와 같은 형식으로 이미지 Array 중 0번째 데이터를 가져오겠다고 설정
            */}
            <input type="file"
                   onChange={(e) => {setImage(e.target.files[0])}}/>
            <button type={"button"} onClick={handleAddPizza}>추가하기</button>
        </div>
    )
}

export default PizzaFormChapterTwo;