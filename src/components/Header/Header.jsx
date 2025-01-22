import { useState } from "react";
import styles from "./Header.module.css";

export const Header = () => {
  const [nation, setNation] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [country, setCountry] = useState("");

  const addNewItem = (e) => {
    e.preventDefault();
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
      {/* 리스트 부분 작성 start */}
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
        <tbody className={styles.tableBody}>
          <tr>대한민국</tr>
          <tr>1</tr>
          <tr>2</tr>
          <tr>3</tr>
        </tbody>
      </table>
    </div>
  );
};
