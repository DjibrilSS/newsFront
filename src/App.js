import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Mainpage from "./components/Mainpage";
import Sidebar from "./components/Sidebar";
import Newscart from "./components/Newscart";
import Authorization from "./components/Authorization";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="APP">
      <Sidebar />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/category/:id" element={<Mainpage />} />
          <Route path="/news/:id" element={<Newscart />} />
        </Routes>
        <Authorization />
      </div>
    </Provider>
  );
}

export default App;
