import React from 'react'

export default function Data() {
    return (
        <form>
                    <input type="text" onFocus={e => e.currentTarget.type = "date"} onBlur={e => e.currentTarget.type = "text"} placeholder="enter date"/>
    
        </form>
    )
}
