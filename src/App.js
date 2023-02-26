import "./App.css";
import Approuter from "./router/Approuter";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { UpdateUser } from "./utils/function";
import Data from "./helpers/data1.js";
import Card from "./pages/Card";
import CardModal from "./modal/CardModal";

function App() {
  const [info, setInfo] = useState(Data);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      UpdateUser(info);
    }
  };
  const editUser = (id, title, image) => {
    setInfo({ id, title, image });
  };
  return (
    <div className="App">
      <Approuter
      
      
      
      
      />
      
      <CardModal info={info} setInfo={setInfo} handleSubmit={handleSubmit} />
      <ToastContainer />
    </div>
  );
}

export default App;
