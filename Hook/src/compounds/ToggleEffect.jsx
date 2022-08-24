import React, { useState } from 'react'
import UnmountEffect from './UnmountEffect'

function ToggleEffect() {
    const  [toggle, setToggle] = useState(true)
    return (
        <div>
            <button onClick={()=>setToggle(false)}>Toggle</button>
            {
                toggle && <UnmountEffect/>
            }
        </div>
    )
}

export default ToggleEffect
