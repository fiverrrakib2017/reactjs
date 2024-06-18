
import { useEffect, useState } from "react"
import ClickCounter from "./Component/ClickCounter"
import HoverCounter from "./Component/HoverCounter"

function App() {
  return (
    <div className="container">
      <div className="row">
      <ClickCounter/>
      <HoverCounter/>
      </div>
    </div>
  );
}

export default App;
