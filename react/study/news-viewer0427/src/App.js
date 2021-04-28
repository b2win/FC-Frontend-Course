import React from "react";
// import NewsList from "./components/NewsList";
// import Categories from "./components/Categories";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

function App() {
  // const [category, setCategory] = useState("all");
  // const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <Route path="/:category?" component={NewsPage} />
    // <Route>
    //   <Categories category={category} onSelect={onSelect} />
    //   <NewsList category={category} />
    // </Route>
  );
}

export default App;
