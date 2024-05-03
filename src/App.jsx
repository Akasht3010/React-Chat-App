import { useState } from "react";
import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <List/>
      <Chat/>
      <Detail/>
      
    </div>
  );
}

export default App;
