import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/frontend/Home";
import MasterLayout from "./layouts/admin/MasterLayout";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            
            <Route exact path="/" component={ Home } />
            <Route path='/admin' name="Admin" render={(props) => < MasterLayout {...props} />} />           
                  

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
