import { useState } from "react";
import styles from "./Header.module.css";

export const Header = () => {
  const initialState = [
    { id: 1, nationName: "대한민국", gold: 6, silver: 4, bronze: 7 },
  ];

  const [nationName, setNationName] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [newNations, setNewNations] = useState(initialState);

  const addNewItem = (e) => {
    e.preventDefault();
    const newCountry = { id: Date.now(), nationName, gold, silver, bronze };
    const newArray = [...newNations, newCountry];
    setNewNations(newArray);
    console.log(newArray);

    // setNationName("");
    // setGold("");
    // setSilver("");
    // setBronze("");
  };

  const removeNation = (id) => {
    const filteredNation = newNations.filter((i) => {
      return i.id !== id;
    });
    setNewNations(filteredNation);
  };

  return (
    <div className={styles.entire}>
      <form className={styles.formStyle} onSubmit={addNewItem}>
        <h1 className={styles.titleStyle}>2024 파리 올림픽</h1>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <div className={styles.contentStyle}>
            <p className={styles.pStyle}>국가명</p>
            <input
              type="text"
              className={styles.inputStyle}
              value={nationName}
              onChange={(e) => {
                setNationName(e.target.value);
              }}
            />
          </div>
          <div className={styles.contentStyle}>
            <p className={styles.pStyle}>금메달</p>
            <input
              type="number"
              min={0}
              className={styles.inputStyle}
              valsue={gold}
              onChange={(e) => {
                setGold(e.target.value);
              }}
            />
          </div>
          <div className={styles.contentStyle}>
            <p className={styles.pStyle}>은메달</p>
            <input
              type="number"
              min={0}
              className={styles.inputStyle}
              value={silver}
              onChange={(e) => {
                setSilver(e.target.value);
              }}
            />
          </div>
          <div className={styles.contentStyle}>
            <p className={styles.pStyle}>동메달</p>
            <input
              type="number"
              min={0}
              className={styles.inputStyle}
              value={bronze}
              onChange={(e) => {
                setBronze(e.target.value);
              }}
            />
          </div>
          <div className={styles.btnGroupStyle}>
            <button type="submit" className={styles.btnStyle}>
              국가 추가
            </button>
            <button type="submit" className={styles.btnStyle}>
              업데이트
            </button>
          </div>
        </div>
      </form>
      {/* 리스트 부분 start */}
      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>액션</th>
          </tr>
        </thead>
      </table>
      {/* mapping */}
      {newNations.map(function (newNation) {
        return (
          <tbody key={newNation.id} className={styles.tableBody}>
            <tr>
              <td>{newNations.nationName}</td>
              <td>{newNations.gold}</td>
              <td>{newNations.silver}</td>
              <td>{newNations.bronze}</td>
              <td>
                <button
                  onClick={() => {
                    removeNation(newNation.id);
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          </tbody>
        );
      })}
    </div>
  );
};
