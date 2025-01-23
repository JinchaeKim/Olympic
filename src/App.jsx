import { useState } from "react";
import { Header } from "./components/Header/Header";
import List from "./components/List/table";

//자바스크립트 영역
const defaultNations = [];
const App = () => {
  const defaultNation = {
    id: 1,
    name: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  };
  const [nation, setNation] = useState(defaultNation);

  const [nationList, setNationList] = useState(defaultNations);

  const addNewItem = (e) => {
    e.preventDefault();

    const newCountry = { ...nation, id: Date.now() };
    const newArray = [...nationList, newCountry];

    setNationList(newArray);
    console.log(newArray);

    setNation(defaultNation);
  };

  const removeNation = (id) => {
    const filteredNation = nationList.filter((i) => {
      return i.id !== id;
    });
    setNationList(filteredNation);
  };

  return (
    //UI 영역
    <>
      <Header
        nation={nation}
        setNation={setNation}
        addNewItem={addNewItem}
        warnningMessage={warningMessage}
      />
      <List newNations={nationList} removeNation={removeNation} />
    </>
  );
};

export default App;
