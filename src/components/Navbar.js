import { useAuth } from '../hooks';
import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const auth = useAuth();
    return (
      <div className={styles.nav}>
        <div className={styles.leftDiv}>
          <Link to="/">
            <img
              alt="user-pic"
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
            />
          </Link>
        </div>

        <div className={styles.rightNav}>
          {auth.user && (
            <div className={styles.user}>
              <Link to="/">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                  alt=""
                  className={styles.userDp}
                />
              </Link>
              <span> {auth.user.name}</span>
            </div>
          )}

          <div className={styles.navLinks}>
            <ul>
              {auth.user ? (
                <>
                  <li onClick={auth.logout}>
                    Log out
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Log in</Link>
                  </li>
                  <li>
                    <Link to="/">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar ;