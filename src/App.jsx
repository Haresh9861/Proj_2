import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./pages/signup"
import { Signin } from "./pages/Signin"




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup/>} ></Route>
          <Route path="/signin" element={<Signin/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App