import React from 'react'
import { useAsyncDebounce } from 'react-table';
function ColumnFilter({ column }) {
    const { filterValue, setFilter } = column;
    const [value, setValue] = React.useState(filterValue);
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 400);

    return (
        <div onClick={(e) => e.preventDefault()}>
            <input value={value || ''} onChange={(e) => {
                setValue(e.target.value)
                onChange(e.target.value)
            }} />
        </div>
    )
}

export default ColumnFilter
