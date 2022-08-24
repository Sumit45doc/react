import React from 'react'

function Errorfile({name}) {
    if(name == "sumit"){
        throw new Error("Sumit is not allowed")
    }
    return (
        <div>
            {name}
        </div>
    )
}

export default Errorfile
