import { signOut } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { auth, createUserDocumentFromAuth, onAuthStateChangedListner } from "../utils/firebase/firebase.utils";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => {}
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser}
    // signOut(auth)
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListner((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])
    

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}






























// import { createContext, useState } from "react";


// export const UserContext = createContext({
//     currentUser: null,
//     setCurrentUser: () => {}
// })

// export const UserProvider = ({children}) => {

//     const [currentUser, setCurrentUser] = useState(null)
//     const value = {currentUser, setCurrentUser}

//     return (
//         <UserContext.Provider value={value}>
//             {children}
//         </UserContext.Provider>
//     )
// }
