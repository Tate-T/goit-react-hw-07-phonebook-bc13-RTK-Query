import { addContactApi } from "services/mockapi";
import { addContactApiRequest, addContactSuccess, addContactError } from './contactsActions';

export const addContact = (contact) => {
    return (dispatch) => {
        dispatch(addContactApiRequest());

        addContactApi(contact)
            .then((data) => dispatch(addContactSuccess(data)))
            .catch((err) => dispatch(addContactError(err.message)));
    }
}