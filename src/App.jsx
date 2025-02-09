import { Header } from "./components/Header/Header";
import List from "./components/List/List";
import styles from "../src/components/Header/Header.module.css";
import { OlympicProvider } from "./context/OlympicContext";

const App = () => {
  //UI 영역
  return (
    <OlympicProvider>
      <div className={styles.entire}>
        <Header />
        <List />
      </div>
    </OlympicProvider>
  );
};

export default App;
