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

    // 중복 방지 로직
    const isInList = (nationEl) => {
      const isInListCheck = nationList.find(() => {
        if (nationEl.name === nation.name) {
          return alert("이미 등록된 국가입니다.");
        }
        return;
      });
    };

    setNationList(newArray);
    setNation(defaultNation);
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

    console.log(mapNation);
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
      <List nationList={nationList} removeNation={removeNation} />
    </div>
  );
};

export default App;
