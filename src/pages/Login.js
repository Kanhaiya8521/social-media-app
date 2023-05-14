import styles from '../styles/login.module.css';
import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useAuth } from '../hooks';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggingIn, setLoggingIn] = useState(false);
    const { addToast } = useToasts();
    const auth = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoggingIn(true);

        if(!email || !password) {
            return addToast(
              'Please enter both email and password',
              {
                appearance: 'error',
                // autoDismiss: true,
              },
            );
        }
        const response = await auth.login(email, password);

        if(response.success) {
          navigate('/settings');
            addToast('Successfully logged in', {
                appearance: 'success',
            });
        }
        else {
            addToast(response.message, {
              appearance: 'error',
            });

        }
        setLoggingIn(false);
        console.log('loggingIn', loggingIn);
    };


    return (
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <spam className={styles.loginSignupHeader}>Log In</spam>

        <div className={styles.field}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <button disabled={loggingIn}>
            {loggingIn ? 'Logging in...' : 'Log In'}
          </button>
        </div>
      </form>
    );
};   

export default Login;