import LogIn from "./components/user/logIn";
import SignUp from "./components/user/signUp.js";
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

    </Router>
    
  );
}

export default App;
