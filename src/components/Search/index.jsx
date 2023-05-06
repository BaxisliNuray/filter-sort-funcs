import { TextField } from '@mui/material'
import React from 'react'

function Search({storage,setUsers}) {
    let handleSearch=(e)=>{
        const filteredusers=storage.current.filter(x=> x.name.toLowerCase().includes(e.target.value.toLowerCase().trim()))
        setUsers(filteredusers)
    }

  return (
    <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleSearch} ></TextField>
  )
}

export default Search