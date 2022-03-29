// import logo from "./logo.svg";
// import { Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Friends from "./components/Friends/Friends";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
// import Home from "./components/Home/Home";
// import Friends from "./components/Friends/Friends";
// import About from "./components/About/About";
// import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Posts from "./components/Posts/Posts";
import Post from "./components/Post/Post";

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/friends" element={<Friends />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/friends" element={<Friends />}></Route>
        <Route path="/friend/:friendId" element={<FriendDetail />}></Route>
        <Route path="/posts" element={<Posts />}>
          <Route path=":postId" element={<Post />}></Route>
        </Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
