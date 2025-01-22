import { useState } from "react";
import styles from "./Header.module.css";

export const Header = () => {
  const [nation, setNation] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  // const addNewItem = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className={styles.entire}>
      <form
        className={styles.formStyle}
        // onSubmit={addNewItem}
      >
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
              value={nation}
              onChange={(e) => {
                setNation(e.target.value);
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
          <button
            type="submit"
            onSubmit={(e) => {
              console.log(e.target.nation);
              console.log(gold);
              console.log(silver);
              console.log(bronze);
            }}
            className={styles.btnStyle}
          >
            국가 추가
          </button>
          <button type="submit" className={styles.btnStyle}>
            업데이트
          </button>
        </div>
      </form>
    </div>
  );
};
