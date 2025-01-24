import styles from "./List.module.css";

const List = ({ nationList, removeNation }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.tr}>국가명</th>
          <th className={styles.tr}>금메달</th>
          <th className={styles.tr}>은메달</th>
          <th className={styles.tr}>동메달</th>
          <th className={styles.tr}>액션</th>
        </tr>
      </thead>

      <tbody>
        {/* mapping start*/}
        {nationList.map(function (nation) {
          return (
            <tr key={nation.id}>
              <td className={styles.td}>{nation.name}</td>
              <td className={styles.td}>{nation.gold}</td>
              <td className={styles.td}>{nation.silver}</td>
              <td className={styles.td}>{nation.bronze}</td>
              <td className={styles.td}>
                <button
                  className={styles.deleteBtn}
                  onClick={() => {
                    {
                      removeNation(nation.id);
                    }
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          );
        })}
        {/* mapping end*/}
      </tbody>
    </table>
  );
};

export default List;
