import { createContext } from "react";
import { useProviderAuth } from '../hooks'

const initialState = {
    user: null,
    login: () => {},
    logout: () => {},
    loading: true,

}
export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
    const auth = useProviderAuth();

    return <AuthContext.Provider value={auth}> {children}</AuthContext.Provider>

}