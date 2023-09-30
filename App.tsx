import Navigator from "@nav/tabs"
import { NavigationContainer } from "@react-navigation/native"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import { Provider } from "react-redux"
import store from "@redux/store"
import React from "react"

let persistor = persistStore(store)

/**
 * Main entry point of the application
 * 
 * @returns Entire application as a JSX Component
 */
export default function App(): JSX.Element {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Navigator/>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    )
}
