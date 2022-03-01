import { useState, useEffect } from 'react'
import Filter from './filter'
import List from './list'
import NewContact from './newContact'
const initialValues = [
    { name: 'Ross', number: 1 },
    { name: 'Chandler', number: 2 },
    { name: 'Rachel', number: 3 },
    { name: 'Monica', number: 4 },
    { name: 'Phobe', number: 5 },
    { name: 'Joey', number: 6 },
]
function Contacts() {
    const [contacts, setContacts] = useState(initialValues)
    const [filteredContacts, setFilteredContacts] = useState(initialValues)
    const [filterText, setFilterText] = useState('')
    useEffect(() => {
        console.log(filterText, 'filter changed');
        const filteredArray = contacts.filter((item) => {
            return Object.keys(item).some((key) =>
                item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
            )
        })
        console.log(filteredArray, 'filteredArray');
        setFilteredContacts(() => filteredArray)
    }, [filterText])
    return (
        <>
            <h1>Contact List App</h1>
            <br />
            <br />
            <Filter setFilterText={setFilterText} />
            <br />
            <br />
            <List contacts={filteredContacts} />
            <br />
            <br />
            <NewContact addContacts={setContacts} contacts={contacts} />
        </>
    )
}
export default Contacts