import { Button } from '@mui/base'
import React from 'react'


function Sort({ users, setUsers }) {
    let handleClick = () => {
        const sorted = [...users]
        sorted.sort((a, b) => a.unitPrice - b.unitPrice)
        setUsers(sorted)
    }
    return (
        <Button variant="text" onClick={handleClick}>sort</Button>
    )
}

export default Sort