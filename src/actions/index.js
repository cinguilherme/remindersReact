import { ADD_REMINDER, DEL_REMINDER, CLEAR_REMINDERS } from '../constants';


export const addReminder = (text, dueDate) => {

    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    }

    console.log('action in addReminder', action);
    return action;
}

export const delReminder = (id) => {
    const action = {
        type: DEL_REMINDER,
        id
    }

    console.log('action in delete reminder', action);
    return action;
}

export const clearReminder = () => {
    const action = {
        type: CLEAR_REMINDERS
    }

    return action;
}