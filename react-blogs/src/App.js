
import "./App.css";
import CreateBlog from "./createBlog";
import Viewblogs from "./viewblogs";
import { useState } from "react";

function App() {
  const [show, setshow] = useState(false);
  return (
    <div className="">
      <CreateBlog />

      <button
        onClick={() => {
          setshow(!show);
        }}
      >
        View blogs
      </button>
      {show && <Viewblogs />}
    </div>
  );
}

export default App;
