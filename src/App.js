import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Mainpage from "./components/Mainpage";
import Sidebar from "./components/Sidebar";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="mainpage">
        <Sidebar />
        <Mainpage />
      </div>
    </Provider>
  );
}

export default App;
