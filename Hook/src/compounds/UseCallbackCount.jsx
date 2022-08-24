import React from 'react'

function UseCallbackCount({text , count}) {
    console.log(text)
    return (
        <div>
            {text} = {count}
        </div>
    )
}

export default React.memo(UseCallbackCount)
