import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import s from './Phonebook.module.css';

const Phonebook = () => {

    return (
        <div className={s.form}>
            <h1>Phonebook</h1>
            <ContactForm />
            <div className={s.contactsList}>
                <ContactList />
                <Filter />
            </div>
        </div>
    )
}

export default Phonebook;