import { Header } from "./components/Header/Header";
import List from "./components/List/List";
import styles from "../src/components/Header/Header.module.css";
import { store } from "./redux/store/configStore";
import { Provider } from "react-redux";

const App = () => {
  //UI 영역
  return (
    <Provider store={store}>
      <div className={styles.entire}>
        <Header />
        <List />
      </div>
    </Provider>
  );
};

export default App;
