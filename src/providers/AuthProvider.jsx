import { createContext, useState } from "react";

 

 const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser]  = useState(null);
    const [loading, setLoading] = useState(true);
    const authInfo ={
    user,
    loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;