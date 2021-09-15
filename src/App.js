import React from "react";
import "./App.css";
import { Component } from "react";
import IterateList from "./components/MyForm/IterateList";
import FetchingData from "./components/FetchingData";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Welcome from "./components/Welcome";
export default class App extends Component {
  // state(){}
  render() {
    return (
      <>
        {/* <IterateList/> */}
        <Router>
          <div>
            <nav>
              <ul>
                <Link to="/">Welcome User</Link>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/userList">User List</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <Switch>
              {/* <Route path="/home">
                <Home />
              </Route> */}
              <Route path="/home" component={Home}/>
              <Route path="/userList">
                <FetchingData />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Welcome />
              </Route>
              
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <p>Welcome to react</p>
//     </div>
//   );
// }

// export default App;
// export default class App extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         name: ""
//       };
//       this.text = "hello";

//       this.changeHandler = this.changeHandler.bind(this);
//     }
//     clicked = () => {
//       this.setState({ age: 3, city: "bangalore" }); //asynchrous
//     };
//     changeHandler(event, name) {
//       console.log(event.target.value, name);
//       this.setState({ name: event.target.value });
//     }
//     render() {
//       let name = "Anubha";
//       return (
//         <Fragment>
//           <input onChange={(event) => this.changeHandler(event, name)} />
//           <h1>My name is {this.state.name}</h1>
//           <button onClick={this.clicked}>Click me</button>
//         </Fragment>
//       );
//     }
//   }
