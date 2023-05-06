import React from 'react'
import { useState } from 'react'

function Pagination({users}) {
    const [currentPage, setcurrentPage] = useState(1)
    const recordPerPages = 5
    const lastIndex = currentPage * recordPerPages
    const firstIndex = lastIndex - recordPerPages
    const records=users.data.slice(firstIndex,lastIndex)
    const npage =Math.ceil(users.data.length/recordPerPages)
    return (
        <h1>odsfijiosefj</h1>
    )
}

export default Pagination