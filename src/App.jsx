import { useEffect, useMemo, useState } from "react";
import Start from "./Landing/Landing";
import Timer from "./components/Timer";
import Trivia from "./components/trivia";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QCM from "./Qcm/Qcm";
import Cours from "./Cours/cours";

function App() {
  
  return(
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Start/>} />
          <Route path="/QCM" element={<QCM/>}/>
          <Route path="/Cours" element={<Cours />}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App;
