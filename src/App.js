import React from "react";
import Feed from "./Feed";
import "./App.css";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
