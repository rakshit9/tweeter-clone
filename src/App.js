import React from "react";

import "./App.css";
import Sidebar from "./Component/Sidebar";
import Feed from "./Component/Feed";
import Widgets from "./Component/Widgets";

function App() {
  return (
    <div className="app">
      <Sidebar />
      {/* sidebar */}

      {/* Feed */}
      <Feed />
      {/* widgets */}
      <Widgets />
    </div>
  );
}

export default App;
