import {useState} from 'react';
import { useHistory } from "react-router-dom";

export function useFormHook(initialState={}) {
    const history = useHistory();
    const [formState, setFormState] = useState(initialState);
    const updateFn = (name, value) => {
        setFormState(currentState => {
            return {...currentState, [name]: value}
        });
    };
    const onSubmit = async (event, fetchParams) => {
        if(event && typeof event.preventDefault === 'function') {
            event.preventDefault();
        }
        // form validation validations
        console.log(formState);
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const res = await fetch("http://localhost:5000/todo", {
            method: 'POST',
            headers,
            body: JSON.stringify(formState)
        });
        if (res && res.ok) {
            history.push("/todos")
        }
    };
    return [formState, updateFn, onSubmit];
}
