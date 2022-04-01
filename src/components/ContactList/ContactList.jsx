import s from './ContactList.module.css';
import { useGetContactsQuery, useDeleteContactMutation } from '../../redux/contactsApi';

export const ContactList = ({ filter }) => {

    const response = useGetContactsQuery();
    const { data: contacts } = response;

    // const [deleteContact, { data: contacts/id, error, isLoading }] = useDeleteContactMutation();
    const [deleteContact] = useDeleteContactMutation();

    const findContact = () => {
        if (!filter) {
            return contacts || []
        }
        return contacts?.filter(contact =>
            contact.name.toLowerCase().includes(filter?.toLowerCase())
        ) || [];
    }

    return (
        <div className={s.contactsSection}>
            <h2 className={s.contactsTitle}>Contacts:</h2>
            <ul className={s.contactsList} >
                {findContact().map(contact => (
                    <li className={s.contactsItem} key={contact.id}>
                        <p className={s.contactName}>{contact.name}: {contact.number}</p>
                        <button type="button" className={s.deleteBtn} onClick={() => deleteContact(contact.id)}>
                            Delete
                        </button>
                    </li>

                ))}
            </ul>
        </div>
    )
}