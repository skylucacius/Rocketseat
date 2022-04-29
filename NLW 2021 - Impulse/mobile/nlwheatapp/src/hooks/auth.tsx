import React, {createContext, useContext, useState} from "react";
import * as AuthSessions from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser';
import { ensureAuthenticated } from './../../../../src/middlewares/ensureAuthenticated';

const CLIENT_ID = '57f382b75acef0580b2e'
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
        code?: string,
        error?: string
    },
    type?:string
}


WebBrowser.maybeCompleteAuthSession()

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider( {children }: AuthProviderProps ) {
    const [isSigning, setIsSigning] = useState(false)
    const [user, setUser] = useState(null)
    async function signIn() {
            const authUrl = `http://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`
            await AuthSessions.startAsync({authUrl})
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

