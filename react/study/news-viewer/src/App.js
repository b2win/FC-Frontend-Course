import React from "react";
// import axios from "axios";
import NewsList from "./components/NewsList";

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

  return <NewsList />;
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
