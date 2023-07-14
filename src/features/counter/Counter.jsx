import React from 'react'
import { increment } from './counterSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
    const count = useSelector((state) => {
        return state.counter.value
    })
    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(increment())}>
            count is {count}
        </button>
    )
}
