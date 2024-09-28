import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css'
import Dashboard from "./Pages/Dashboard.tsx";



function RouterHolder(){
    return(
        <Routes>
            <Route path={"/"} element={<Link to={"/dashboard"}>dashboard</Link>}/>
            <Route path={"/dashboard"} element={<Dashboard/>}/>
        </Routes>
    )
}
function App() {

  return (
      <BrowserRouter>
          <RouterHolder/>
      </BrowserRouter>
  )
}

export default App
