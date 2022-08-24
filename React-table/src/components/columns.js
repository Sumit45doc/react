import { format } from "date-fns"

export const COLUMNS = [
    {
        Header: 'ID',
        Footer: 'IDs',
        accessor: 'id',
        disableFilters: true
    },
    {
        Header: 'First_Name',
        Footer: 'First_Name',
        accessor: 'first_name',
    },
    {
        Header: 'Last_Name',
        Footer: 'Last_Name',
        accessor: 'last_name',
    },
    {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth',
        Cell: ({value}) => format(new Date(value),'dd/MM/yyyy') ,
    },
    {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country',
    },
    {
        Header: 'Phone Number',
        Footer: 'Phone Number',
        accessor: 'phone',
    },
    {
        Header: 'Delete',
        accessor: (str) => 'delete',
    }
]


export const GROUPED_COLUMNS = [
    {
        Header: 'ID',
        Footer: 'IDs',
        accessor: 'id'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            {
                Header: 'First_Name',
                Footer: 'First_Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last_Name',
                Footer: 'Last_Name',
                accessor: 'last_name'
            },
        ]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header: 'Country',
                Footer: 'Country',
                accessor: 'country'
            },
            {
                Header: 'Phone Number',
                Footer: 'Phone Number',
                accessor: 'phone'
            },
        ]
    }
]