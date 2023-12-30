import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainfrom from "./component/checkoutform/Mainfrom";
import Aftercheck from "./component/Aftercheckout/Aftercheck";
import Home from "./component/homepage/Homepage";
import Protected from "./component/protectedroute/Protected";
import Login from "./component/login/Login";
import Aboutpage from "./component/aboutpage/Aboutpage";
import Contactpage from "./component/contact/Contactpage";
// import Temple from "./component/temple/Temple";
import Templedt from "./component/temple/Templedt";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/temple" element={<Templedt />} />
          {/* <Route path="/login" element={<Login />} />

          <Route path='/user' element={<Protected />} >
        <Route path="form" element={<Mainfrom />} />
        <Route path="checkout/:name/:lname/:email/:phone/:address/:add/:city/:state/:code/:country/:reqi/" element={<Aftercheck />} />
        
        </Route> */}

          <Route path="/" element={<Mainfrom />} />
          <Route
            path="/checkout/:name/:lname/:email/:phone/:address/:add/:city/:state/:code/:country/:reqi/"
            element={<Aftercheck />}
          />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
