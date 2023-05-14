import { Home, Login, Signup, Settings } from './../pages/index'
import {Loader, Navbar} from './';
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks";


function PrivateRoute({ children }) {
  // console.log('children', children);
  const auth = useAuth();
  if(auth.user) {
    return children;
  } else {
    return <Navigate to='/login' />
  }
}
const Page404 = () => {
  return <h1>404</h1>;
};

function App() {
  // const [posts, setPosts] = useState([]);
  // loading islia hataya ki auth me loading hai
  // const [loading, setLoading] = useState(true);
  const auth = useAuth();

  if(auth.loading) {
    return <Loader />;
  }
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
