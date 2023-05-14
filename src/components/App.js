import { Home, Login, Signup, Settings } from './../pages/index'
import {Loader, Navbar} from './';
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../hooks";

const Page404 = () => {
  return <h1>404</h1>;
};

function App() {
  // const [posts, setPosts] = useState([]);
  // loading islia hataya ki auth me loading hai
  // const [loading, setLoading] = useState(true);
  const auth = useAuth();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await getPosts();
  //     console.log('response', response);
  //     if(response.success) {
  //       setPosts(response.data.posts);
  //     }
  //     // setLoading(false);
  //   };
    
  //   fetchPosts();
  // }, []);

  if(auth.loading) {
    return <Loader />;
  }
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
