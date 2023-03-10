//As the code was repeat able in some component "HOC is used"
import React, { Component } from 'react'
import HocCounter from './HocCounter'
class HocClick extends Component {
    render() {
        const { count, changehandler,name } = this.props;
        return (
            <div onMouseOver={changehandler} >
                count: {count}
                {name}
            </div>
        )
    }
}

export default HocCounter(HocClick);
