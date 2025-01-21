import React, { useState } from "react";
//자바스크립트 영역

const App = () => {
  const contentStyle = {
    display: "align",
    alignItems: "center",
  };

  const pStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  };

  const inputStyle = {
    height: "30px",
  };

  const btnStyle = {
    // display: "align",
    height: "40px",
    backgroundColor: "#86A788",
    alignItems: "flex-end",
  };

  const titleStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  };

  const formStyle = {
    width: "900px",
    display: "align",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFE2E2",
    borderRadius: "10px",
  };

  const [nation, setNation] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  return (
    //UI 영역
    <div
      style={{
        padding: "300px",
        display: "flex",
        backgroundColor: "#FFFDEC",
      }}
    >
      <form style={formStyle}>
        <h1 style={titleStyle}>2024 파리 올림픽</h1>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <div tyle={contentStyle}>
            <p style={pStyle}>국가명</p>
            <input
              type="text"
              style={inputStyle}
              value={nation}
              onChange={(e) => {
                setNation(e.target.value);
              }}
            />
          </div>
          <div style={contentStyle}>
            <p style={pStyle}>금메달</p>
            <input
              type="number"
              min={0}
              style={inputStyle}
              valsue={gold}
              onChange={(e) => {
                setGold(e.target.value);
              }}
            />
          </div>
          <div style={contentStyle}>
            <p style={pStyle}>은메달</p>
            <input
              type="number"
              min={0}
              style={inputStyle}
              value={silver}
              onChange={(e) => {
                setSilver(e.target.value);
              }}
            />
          </div>
          <div style={contentStyle}>
            <p style={pStyle}>동메달</p>
            <input
              type="number"
              min={0}
              style={inputStyle}
              value={bronze}
              onChange={(e) => {
                setBronze(e.target.value);
              }}
            />
          </div>
          <button
            type="button"
            onSubmit={(e) => {
              console.log(e.target.nation);
              console.log(gold);
              console.log(silver);
              console.log(bronze);
            }}
            style={btnStyle}
          >
            국가 추가
          </button>
          <button type="button" style={btnStyle}>
            업데이트
          </button>
        </div>
      </form>

      {/* <list></list> */}
    </div>
  );
};

export default App;
