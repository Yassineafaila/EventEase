import React, { createContext, useState, ReactNode, FC } from 'react';

interface User {
    username: string;
    email: string;
    password:string
    // Add other user properties as needed
}

interface AuthContextType {
    user: User | null;
    isLoggedIn:boolean
    signIn: (userData: User) => void;
    signUp: (userData: User) => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const signUp = (userData: User) => {
        setUser(userData)
        setIsLoggedIn(true)
    }

    const signIn = (userData: User) => {
        setUser(userData);
        setIsLoggedIn(true)
        
    };

    const signOut = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedIn,signIn, signUp,signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = (): AuthContextType => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };
