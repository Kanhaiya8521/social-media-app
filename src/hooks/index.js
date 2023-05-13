import { useContext, useState } from "react";
import {AuthContext} from '../providers/AuthProvider';
import {login as userlogin} from '../api';

export const useAuth = () => {
    return useContext(AuthContext);
}

export const useProviderAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (email, password) => {
        const response = await userlogin(email, password);

        if(response.success) {
            setUser(response.data.user);
            return {
                success: true,
            };
        } else {
            return {
                success: false,
                message: response.message,
            }
        }
    };

    const logout = () => {
        setUser(null);
    };

    return {
        user,
        login,
        logout,
        loading,
    }

};