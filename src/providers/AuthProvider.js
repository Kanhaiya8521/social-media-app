import { createContext } from "react"; //we want to excess authorization to all components with parent and child concepts
import { useProviderAuth } from '../hooks'

const initialState = {
    user: null,
    login: () => {},
    logout: () => {},
    loading: true,

}
export const AuthContext = createContext(initialState);
// console.log('AuthContext', AuthContext);
export const AuthProvider = ({ children }) => {
    const auth = useProviderAuth();

    return <AuthContext.Provider value={auth}> {children}</AuthContext.Provider>

}
