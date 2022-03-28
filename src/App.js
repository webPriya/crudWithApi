import {BrowserRouter,Switch ,Route} from "react-router-dom"
import Home from "./components/pages/Home";
import View from "./components/student/View"
import Edit from './components/student/Edit'
function App() {
  return (
  
        <BrowserRouter>
        <Switch>
    {/* <Routes> */}
      <Route exact path="/" component={Home} />
      <Route  exact path="/view/:id" component={View} />
      <Route path="/edit/:id" component={Edit} />
      {/* <Route path="about" element={<About />} /> */}
      </Switch>
    {/* </Routes> */}
  </BrowserRouter>

     
    
  );
}

export default App;
