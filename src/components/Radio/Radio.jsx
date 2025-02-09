import React, { useContext } from "react";
import styles from "../Radio/Radio.module.css";
import { OlympicContext } from "../../context/OlympicContext";

const Radio = () => {
  const { sortType, setSortType } = useContext(OlympicContext);
  return (
    <>
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
    </>
  );
};

export default Radio;
