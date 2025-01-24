import styles from "./List.module.css";

const List = ({ newNations, removeNation }) => {
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
        {newNations.map(function (newNations) {
          return (
            <tr key={newNations.id}>
              <td className={styles.td}>{newNations.name}</td>
              <td className={styles.td}>{newNations.gold}</td>
              <td className={styles.td}>{newNations.silver}</td>
              <td className={styles.td}>{newNations.bronze}</td>
              <td className={styles.td}>
                <button
                  className={styles.deleteBtn}
                  onClick={() => {
                    {
                      removeNation(newNations.id);
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
