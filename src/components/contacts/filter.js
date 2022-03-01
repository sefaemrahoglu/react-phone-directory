import {useState,useEffect} from 'react'
function Input({setFilterText}) {
    const [filter, setFilter] = useState('')
    const filterChanged = (event) =>{
        setFilterText(event.target.value)
    }
    return (
        <>
            <input name='filter' placeholder='Filter Items' onChange={filterChanged} />
        </>
    )
}
export default Input