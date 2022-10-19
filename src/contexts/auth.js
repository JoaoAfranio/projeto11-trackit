import { createContext } from "react";

const AuthContext = createContext({
    user: undefined,
    setUser: () => {},
    progress: 0
});

export default AuthContext;