import CounterContainer from "./containers/CounterContainer";
import SampleContainer from "./containers/SampleContainer";
import UserListPage from "./pages/UserListPage";
import { Route } from "react-router-dom";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <CounterContainer />
    </div>
    // <>
    //   <Route path="/" component={UserListPage} exact />
    //   <Route path="/:id" component={UserList} />
    // </>
  );
}

export default App;
