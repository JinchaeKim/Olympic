import styles from "./List.module.css";

const List = ({ newNations, removeNation }) => {
  return (
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
        {/* mapping start*/}
        {newNations.map(function (newNations) {
          return (
            <tr key={newNations.id}>
              <td>{newNations.nationName}</td>
              <td>{newNations.gold}</td>
              <td>{newNations.silver}</td>
              <td>{newNations.bronze}</td>
              <td>
                <button
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
