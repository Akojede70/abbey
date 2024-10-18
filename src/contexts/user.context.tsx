import React, { 
    createContext,  
    // useState
} from "react";

export const UserContext = createContext<any>(null)


export const UserContextProvider: React.FC = ({ children }: any) => {
    // const [users, setUsers] = useState<any>([])
    // const [loading, setLoading] = useState(false)


    return (
        <UserContext.Provider 
        value={{ 
          // users,
          // loading
        }}>
            {children}
        </UserContext.Provider>
      )
}

export default UserContextProvider;