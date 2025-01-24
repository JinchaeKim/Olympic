import { useState } from "react";
import { Header } from "./components/Header/Header";
import List from "./components/List/table";
import styles from "./components/Header/Header.module.css";

//자바스크립트 영역
const defaultNations = [];
const App = () => {
  const defaultNation = {
    id: 1,
    name: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  };
  const [nation, setNation] = useState(defaultNation);

  const [nationList, setNationList] = useState(defaultNations);

  // 리스트의 name만 추출
  const listNames = nationList.map((e) => {
    return e.name;
  });

  const addNewItem = (e) => {
    e.preventDefault();
    const newCountry = { ...nation, id: Date.now() };
    const newArray = [...nationList, newCountry];
    if (
      nation.name === "" &&
      nation.gold === 0 &&
      nation.silver === 0 &&
      nation.bronze === 0
    ) {
      alert("값을 입력해주세요.");
      return;
    }
    setNationList(newArray);
    setNation(defaultNation);

    // 중복 방지 로직
    const isInList = (nation) => {
      const isInListCheck = listNames.includes(nation.name);
      isInListCheck ? alert("이미 등록된 국가입니다.") : setNationList(nation);
      isInList();
    };
  };

  const removeNation = (id) => {
    const filteredNation = nationList.filter((i) => {
      return i.id !== id;
    });
    alert("정말 삭제하시겠습니까?");
    setNationList(filteredNation);
  };

  // 폼 하단 경고 메세지 로직 수정 중!!!!!!
  const warningMessage = (nationList) => {
    if (nationList.length === 0) {
      <p>"아직 값이 추가되지 않았습니다! 메달 정보를 입력해주세요."</p>;
    } else {
      addNewItem();
    }
    return;
  };

  console.log(nationList); // [] / [[Prototype]]: Array(0)
  console.log(typeof nationList); //object

  if (Array.isArray(nationList)) {
    console.log("배열입니다:", nationList); // 배열입니다.
  } else {
    console.log("배열이 아닙니다.");
  }

  // // 리스트의 name만 추출 -> 20으로 이동
  // const listNames = nationList.map((e) => {
  //   return e.name;
  // });s

  console.log(listNames); //  [] / [[Prototype]]: Array(0)
  console.log(typeof listNames); // object
  console.log(nation.name);
  console.log(typeof nation.name); // string
  console.log(nation); // 미작성:초기값
  console.log(typeof nation); //object

  // 업데이트 로직
  const upDate = (nation) => {
    // 업데이트 버튼 클릭 시 오류 여부 판정
    // nation의 값이 falsy 하거나 nation.name의 타입이 문자열이 아닐 때
    if (!nation || typeof nation.name !== "string") {
      alert("유효하지 않은 입력입니다.");
      return;
    }

    const upDateCheck = listNames.includes(nation.name);

    upDateCheck ? setNationList(nation) : alert("등록되지 않은 국가입니다.");
  };

  //UI 영역
  return (
    <div className={styles.entire}>
      <Header
        nation={nation}
        setNation={setNation}
        addNewItem={addNewItem}
        warnningMessage={warningMessage}
        upDate={upDate}
      />
      <List newNations={nationList} removeNation={removeNation} />
    </div>
  );
};

export default App;
