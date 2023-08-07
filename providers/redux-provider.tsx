"use client"

import { Provider } from "react-redux"
import { store } from '@/store/store'

interface AuthContextProps {
    children: React.ReactNode;
}

export default function ReduxProvider({
    children
}: AuthContextProps) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
