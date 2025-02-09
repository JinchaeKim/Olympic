import { useState } from "react";
import { Header } from "./components/Header/Header";
import List from "./components/List/List";
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

    if (
      nation.name === "" &&
      nation.gold === 0 &&
      nation.silver === 0 &&
      nation.bronze === 0
    ) {
      alert("값을 입력해주세요.");
      return;
    }
    const newCountry = { ...nation, id: Date.now() };
    const newArray = [...nationList, newCountry];

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
    setNationList(filteredNation);

    setNation(defaultNation);
  };

  // 업데이트 로직
  const upDate = () => {
    // 존재하지 않는 국가 로직 *위치 중요*
    if (nationList.some((nationEl) => nationEl.name !== nation.name)) {
      alert("존재하지 않는 국가입니다.");
      return;
    }

    const findNation = nationList.find((nationEl) => {
      return nationEl.name === nation.name;
    });
    const mapNation = nationList.map((nationEl) => {
      if (nationEl.name === findNation.name) {
        return { ...nation, id: nationEl.id };
      }
      return nationEl; // 업데이트 되지 않는 요소들은 그대로 반환
    });

    setNationList(mapNation);
    setNation(defaultNation);
  };

  // 정렬 함수
  const [sortType, setSortType] = useState("gold");

  const getSortMedals = () => {
    const tempNationList = [...nationList]; //sort 메서드는 원본 배열 직접 변경, 정렬된 배열 반환
    if (sortType === "gold") {
      return tempNationList.sort((a, b) => b.gold - a.gold);
    }

    // '+'를 사용 시 문자열이 더해짐 => 입력하는 값의 형변환이 필요함 (메달 상태값 자체를 숫자타입으로 관리)
    if (sortType === "total") {
      return tempNationList.sort((a, b) => {
        // console.log(b.gold + b.silver + b.bronze);
        // console.log(a.gold + a.silver + a.bronze);

        return b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze);
      });
    }
  };

  const medalRank = getSortMedals();

  //UI 영역
  return (
    <div className={styles.entire}>
      <h1 className={styles.titleStyle}>2024 파리 올림픽</h1>
      <div className="radioBtn">
        <label>
          <input
            type="radio"
            value="gold"
            checked={sortType === "gold"}
            onChange={(e) => {
              setSortType(e.target.value);
            }}
          />
          금메달 순
        </label>
        <label>
          <input
            type="radio"
            value="total"
            checked={sortType === "total"}
            onChange={(e) => {
              setSortType(e.target.value);
            }}
          />
          총 메달 순
        </label>
      </div>
      <Header
        nation={nation}
        setNation={setNation}
        addNewItem={addNewItem}
        upDate={upDate}
      />
      <List nationList={medalRank} removeNation={removeNation} />
    </div>
  );
};

export default App;
