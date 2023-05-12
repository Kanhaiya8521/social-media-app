import { useEffect, useState } from "react";
import {getPosts} from '../api'
import { Home } from './../pages/index'
import {Loader, Navbar} from './';
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [check, setCheck] = useState(true);
  let {pathname} = useLocation();
  console.log('pathname', pathname);

  useEffect(() => {
    const istrue = () => {
      if (pathname === '/login') {
        setCheck(false);
      }
    };
    istrue();
  }, [pathname]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log('response', response);
      if(response.success) {
        setPosts(response.data.posts);
      }
      setLoading(false);
    };
    
    
    fetchPosts();
  }, []);

  if(loading) {
    return <Loader />;
  }
  const Login = () => {
    return <h1>login page</h1>
  }
  const Signup = () => {
    return <h1>signup page</h1>
  };
  const Register = () => {
    return <h1>register page</h1>
  };
  const Page404 = () => {
    return <h1>404</h1>;
  };
  
  
  
  // console.log('check', check);
  return (
    <div className="App">
      {check && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home posts={posts} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Page404 />} />

        {/* <Home posts={posts} /> */}
      </Routes>
    </div>
  );
}

export default App;
