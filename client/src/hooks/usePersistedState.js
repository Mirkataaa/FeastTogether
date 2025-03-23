import { useState } from "react";

export default function usePersistedState(stateKey, initalState) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(stateKey);
        if (!persistedState) {
            return typeof initalState === 'function' 
                ? initalState() 
                : initalState;
        }
                
        try {
            return JSON.parse(persistedState)
        } catch (error) {
            console.log(error);
            return initalState
        }

    });

    const setPersistedState = (input) => {
        const data = typeof input === 'function' 
            ? input(state) 
            : input;

        const persistedData = JSON.stringify(data);

        localStorage.setItem(stateKey, persistedData);

        setState(data);
    };

    return [
        state,
        setPersistedState,
    ]
}
