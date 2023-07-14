import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'
export default function User() {
    const users = useSelector((state) => {
        console.log(state.users.entities, 'hehe')
        return state.users
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <>
            <div>
                {users.errorMessage && 'error nih'}
                {
                    users.isPending ? 'loading...' : users.entities.map((user) => {
                        return (
                            <div key={user.id}>
                                <p>{user.id}</p>
                                <p>{user.name}</p>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}
