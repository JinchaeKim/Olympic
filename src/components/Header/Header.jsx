import styles from "./Header.module.css";

export const Header = ({ nation, setNation, addNewItem, upDate }) => {
  return (
    <div>
      <form className={styles.formStyle} onSubmit={addNewItem}>
        {/* <h1 className={styles.titleStyle}>2024 파리 올림픽</h1> */}
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
              value={nation.name}
              onChange={(e) => {
                setNation({ ...nation, name: e.target.value });
              }}
            />
          </div>
          <div className={styles.contentStyle}>
            <p className={styles.pStyle}>금메달</p>
            <input
              type="text"
              className={styles.inputStyle}
              value={nation.gold}
              onChange={(e) => {
                if (Number.isNaN(+e.target.value) || +e.target.value < 0) {
                  alert("숫자만 입력하세요.");
                  return;
                }
                setNation({ ...nation, gold: +e.target.value });
              }}
            />
          </div>
          <div className={styles.contentStyle}>
            <p className={styles.pStyle}>은메달</p>
            <input
              type="text"
              className={styles.inputStyle}
              value={nation.silver}
              onChange={(e) => {
                if (Number.isNaN(+e.target.value) || +e.target.value < 0) {
                  alert("숫자만 입력하세요.");
                  return;
                }
                setNation({ ...nation, silver: +e.target.value });
              }}
            />
          </div>
          <div className={styles.contentStyle}>
            <p className={styles.pStyle}>동메달</p>
            <input
              type="text"
              className={styles.inputStyle}
              value={nation.bronze}
              onChange={(e) => {
                if (Number.isNaN(+e.target.value) || +e.target.value < 0) {
                  alert("숫자만 입력하세요.");
                  return;
                }
                setNation({ ...nation, bronze: +e.target.value });
              }}
            />
          </div>
          <div className={styles.btnGroupStyle}>
            <button type="submit" className={styles.btnStyle}>
              국가 추가
            </button>
            <button type="button" onClick={upDate} className={styles.btnStyle}>
              업데이트
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
