import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Mainpage from "./components/Mainpage";
import {store} from "./app/store"

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Mainpage />
    </Provider>
  );
}

export default App;
