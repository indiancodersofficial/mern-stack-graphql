import Header from "./components/header/Header";
import Footer from "./components/home/Footer";
import Homepage from "./components/home/Homepage";
import { Routes, Route } from "react-router-dom";
import Blogs from "./components/blogs/Blogs";
import Auth from "./components/auth/Auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { authActions } from "./store/auth-slice";
import AddBlog from "./components/blogs/AddBlog";
import Profile from "./components/header/user/Profile";
import ViewBlog from "./components/blogs/ViewBlog";
import { Toaster } from "react-hot-toast";
import UpdateBlog from "./components/blogs/UpdateBlog";
import NotFound from "./components/not found/NotFound";
function App() {
  const dispatch = useDispatch();
  const isLoggedIn: boolean = useSelector((state: any) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    const data: string = localStorage.getItem("userData") as string;
    if (JSON.parse(data) !== null) {
      dispatch(authActions.login());
    }
  }, []);
  return (
    <div className="wrapper">
      <Toaster />
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs" element={<Blogs />} />
          {!isLoggedIn && <Route path="/auth" element={<Auth />} />}
          {isLoggedIn && <Route path="/add" element={<AddBlog />} />}
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog/view/:id" element={<ViewBlog />} />
          {isLoggedIn && (
            <Route path="/blog/update/:id" element={<UpdateBlog />} />
          )}{" "}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
