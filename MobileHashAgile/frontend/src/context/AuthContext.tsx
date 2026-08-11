import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextType {
    token: string | null;
    loading: boolean;
    login: (dummyToken: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem("jwt_token")
            .then((savedToken) => setToken(savedToken))
            .catch(() => {})
            .finally(() => setLoading(false));
    }, []);

    const login = async (newToken: string) => {
        try {
            await AsyncStorage.setItem("jwt_token", newToken);
            setToken(newToken);
        } catch (err) {
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem("jwt_token");
            setToken(null);
        } catch (err) {
        }
    };

    return (
        <AuthContext.Provider value={{ token, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
}
