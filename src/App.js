import Register from "./Pages/Signup/Register";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Pages/Signin/Login";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/ChangeProfile/Profile";
import "./App.css"
import NavBar from "./components/NavBar/NavBar";
import DefaultHome from "./Pages/HomePage/DefaultHome";
import Movies from "./Pages/SearchMovie/movies"
import ForgotPwd from "./Pages/ForgotPassword/ForgotPwd";
import MovieDetailsPage from "./Pages/SearchMovie/MovieDetailsPage";
import Payment from "./Pages/Payment/Payment";
import ReserveMovie from "./Pages/ReserveMovie/ReserveMovie";
import SeatSelection from "./Pages/ReserveMovie/SeatSelection";

function App() {
  return (
    <div class = "app">
      
        <BrowserRouter>
            <Routes>
              <Route path="/home/:id" element= { <Home/>} />
              <Route path="/register" element= { <Register/>} />
              <Route path="/" element= { <Login/>} />
              <Route path="/resetpwd" element={<ForgotPwd/>}/>
              <Route path="/home/profile/:id" element={<Profile/>}/>
              <Route path="/home page" element={<DefaultHome/>}/>
              <Route path="/home/movies" element={<Movies/>}/>
              <Route path="/movie/:id" element={<MovieDetailsPage/>}/>
              <Route path="/payment" element={<Payment/>}/>
              <Route path="/available-schedule/:id" element={<ReserveMovie/>}/>
              <Route path="/seat-selection/:name/:date/:time" element={<SeatSelection/>}/>
              <Route path="/payment" element={<Payment/>}/>
            </Routes>
        </BrowserRouter>
        
      
    </div>
    
  );
}

export default App;
