import React from 'react'
import ReactTooltip from 'react-tooltip'

function ToolTip() {
    return (
        <div>
            <p data-tip="abc"  data-delay-hide="2000" data-text-color="pink" data-background-color="black" >hello</p>
            <ReactTooltip/>
        </div>
    )
}

export default ToolTip
