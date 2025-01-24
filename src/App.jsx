import { useState } from "react";
import { Header } from "./components/Header/Header";
import List from "./components/List/table";
import styles from "./components/Header/Header.module.css";

//JS 영역
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

  // 리스트 추가 로직
  const addNewItem = (e) => {
    e.preventDefault();

    // 금메달 기준 내림차순 수정 중!!!!!!
    const goldList = nationList.map((nationEl) => {
      return nationEl.gold;
    });

    const goldRanking = goldList.sort((a, b) => {
      return b - a;
    });

    setNationList(goldRanking);

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

    // 중복 방지 로직
    if (nationList.some((nationEl) => nationEl.name === nation.name)) {
      alert("이미 등록된 국가명입니다.");
    } else {
      setNationList(newArray);
    }

    setNation(defaultNation);
  };

  // 리스트 삭제 로직
  const removeNation = (id) => {
    const filteredNation = nationList.filter((i) => {
      return i.id !== id;
    });
    alert("정말 삭제하시겠습니까?");
    setNationList(filteredNation);
  };

  // 업데이트 로직
  const upDate = () => {
    const findNation = nationList.find((nationEl) => {
      return nationEl.name === nation.name;
    });
    const mapNation = nationList.map((nationEl) => {
      if (nationEl.name === findNation.name) {
        return { ...nation, id: nationEl.id };
      }
      return nationEl;
    });
    setNationList(mapNation);
    console.log("findNation", findNation);

    // 존재하지 않는 국가 로직  수정 중!!!!!!
    if (!nationList.some((nationEl) => nationEl.name === nation.name)) {
      alert("존재하지 않는 국가입니다.");
    }
    return setNation(defaultNation);
  };

  //UI 영역
  return (
    <div className={styles.entire}>
      <Header
        nation={nation}
        setNation={setNation}
        addNewItem={addNewItem}
        upDate={upDate}
      />
      <List nationList={nationList} removeNation={removeNation} />
    </div>
  );
};

export default App;
