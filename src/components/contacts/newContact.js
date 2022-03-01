import { useState } from "react";
const initialValues = { name: '', number: '' }
function NewContact({addContacts,contacts}) {
    const [form, setForm] = useState(initialValues)
    const onInputChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const saveContact = () => {
        console.log('save')
        if (form.name !== '' || form.number !== '') {
            addContacts([...contacts,form])
            setForm(initialValues)
        }
    }
    return (
        <>
            <div>
                <input name="name" value={form.name} placeholder="please input contact name" onChange={onInputChange} />
            </div>
            <div>
                <input name="number" value={form.number} placeholder="please input contact number" onChange={onInputChange} />
            </div>
            <div>
                <button onClick={saveContact}>Add</button>
            </div>
        </>
    )
}
export default NewContact