import LogIn from "./components/user/LogIn";
import SignUp from "./components/user/SignUp.js";
import DashBoard from "./components/user/DashBoard.js";
import Profile from "./components/user/Profile.js"

import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    
    <Router>
      <Route exact path="/">
        <LogIn/>
      </Route>

      <Route exact path="/sign-up">
        <SignUp/>
      </Route>


      <Route exact path="/dash-board">
        <DashBoard/>
      </Route>


      <Route exact path="/profile">
        <Profile/>
      </Route>


    </Router>
    
  );
}

export default App;
