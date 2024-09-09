import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./pages/signup"
import { Signin } from "./pages/Signin"
import { PasswordChange } from "./pages/PasswordChange"




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup/>} ></Route>
          <Route path="/signin" element={<Signin/>} ></Route>
          <Route path="/passwordchange" element={<PasswordChange/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App