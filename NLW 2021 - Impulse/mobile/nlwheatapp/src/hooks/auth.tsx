import React, {createContext, useContext, useState} from "react";
import * as authSession from 'expo-auth-session'

const CLIENT_ID = '6034131077647e5b4710'
const SCOPE = 'read:user'

type User = {
    id: string,
    avatar_url: string,
    name: string,
    login: string
}

type AuthContextData = {
    user: User | null,
    isSigning: boolean,
    signIn: () => Promise<void>
    signOut: () => Promise<void>
}

type AuthProviderProps = {
    children: React.ReactNode
}

type authResponse = {
    token: string,
    user: User
}

type AuthorizationResponse = {
    params : {
        code?: string
    }
}



export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider( {children }: AuthProviderProps ) {
    const [isSigning, setIsSigning] = useState(false)
    const [user, setUser] = useState(null)
    async function signIn() {
        const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`
        const {params} = await authSession.startAsync({authUrl}) as AuthorizationResponse
        console.log(params)
    }
    async function signOut() {

    }

    return (
<AuthContext.Provider value={{user, isSigning, signIn, signOut}}>
            {children}
</AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    return context
}

