function List({ contacts }) {
    return (
        <div>
            <ul>
                {contacts.map((contact, index) =>
                    <li key={index} className='contact-list-item'>
                        <h3>Name : {contact.name}</h3>
                        <h4>Number : {contact.number}</h4>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default List