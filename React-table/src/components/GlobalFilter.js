import React from 'react'

function GlobalFilter({filter,setFilter}) {
    return (
        <div>
            search: <input value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
        </div>
    )
}

export default GlobalFilter
