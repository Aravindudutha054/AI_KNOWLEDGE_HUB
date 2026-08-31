import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [token, setToken] = useState(localStorage.getItem("token"));

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const storedUser = localStorage.getItem("user");

        if (storedUser) {

            setUser(JSON.parse(storedUser));

        }

        setLoading(false);

    }, []);

    const login = (userData, jwt) => {

        localStorage.setItem("token", jwt);

        localStorage.setItem(

            "user",

            JSON.stringify(userData)

        );

        setToken(jwt);

        setUser(userData);

    };

    const logout = () => {

        localStorage.removeItem("token");

        localStorage.removeItem("user");

        setToken(null);

        setUser(null);

    };

    return (

        <AuthContext.Provider

            value={{

                user,

                token,

                login,

                logout,

                loading,

                isAuthenticated: !!token

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(AuthContext);

}