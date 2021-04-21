import React, { useCallback, useState } from "react";
// import Categories from "./components/Categories";
// import NewsList from "./components/NewsList";
import NewsPage from "./pages/NewsPage";
import { Route } from "react-router-dom";
// import axios from "axios";

function App() {
  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://newsapi.org/v2/top-headlines?country=kr&apiKey=cb7f2c87059e431aac872c465d1287bd"
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // const [category, setCategory] = useState("all");
  // const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <Route path="/:category?" component={NewsPage} />;
      {/* <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} /> */}
    </>
  );
  // <div>
  //   <div>
  //     <button onClick={onClick}>불러오기</button>
  //   </div>
  //   {data && (
  //     <textarea
  //       rows={7}
  //       value={JSON.stringify(data, null, 2)}
  //       readOnly={true}
  //     />
  //   )}
  // </div>
}

export default App;
