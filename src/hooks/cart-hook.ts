import { useState, useEffect } from "react"

const listeners = []
let state = 0

const setState = (newState: number) => {
    state = newState
    listeners.forEach((listener) => {
        listener(state)
    })
}

const useCart = (): any => {
    const newListener = useState()[1]
    useEffect(() => {
        listeners.push(newListener)
    }, [])
    return [state, setState]
}

export default useCart