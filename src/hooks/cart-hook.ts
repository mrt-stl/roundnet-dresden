import { useState, useEffect } from "react"

let listeners = []
let state = 0

const setState = (newState: number) => {
    state = newState
    listeners.forEach((listener) => {
        listener(state)
    })
}

const useCart = (): [number, (state: number) => void] => {
    const newListener = useState()[1]
    useEffect(() => {
        listeners.push(newListener)

        return () => {
            listeners = listeners.filter(listener => listener !== newListener)
        }
    }, [])
    return [state, setState]
}

export default useCart