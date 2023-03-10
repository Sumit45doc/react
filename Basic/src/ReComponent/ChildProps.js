import React from 'react'

function ChildProps(props) {
    const {name} = props;
    const {getfun} = props;
    return (
        <div>
            {getfun("sumit",12)}            
            {`my name is ${name}`}
        </div>
    )
}

export default ChildProps
