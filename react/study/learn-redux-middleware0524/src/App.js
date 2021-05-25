import CounterContainer from "./containers/CounterContainer";
import SampleContainer from "./containers/SampleContainer";
import UserListPage from "./pages/UserListPage";
import { Route } from "react-router-dom";
import UserList from "./components/UserList";
import PostPage from "./pages/PostPage";
import PostListPage from "./pages/PostListPage";

function App() {
  return (
    // <div>
    //   <SampleContainer />
    // </div>
    <>
      <Route path="/" component={PostListPage} exact={true} />
      <Route path="/:id" component={PostPage} />
      {/* <Route path="/" component={UserListPage} exact />
      <Route path="/:id" component={UserList} /> */}
    </>
  );
}

export default App;
