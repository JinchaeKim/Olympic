import React from "react";
import styles from "./components/Header/Header.module.css";

const Radio = ({ sortType, setSortType }) => {
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
    </div>
  );
};

export default Radio;
