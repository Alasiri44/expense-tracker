import React, {createContext, useState} from "react";

const userContext = createContext();

function UserProvider({children}){
    const [obj, setObj] = useState(newObj);
    return(
        <userContext.Provider value={{obj, setObj}}>{children} </userContext.Provider>
    )
}

export {userContext, UserProvider};