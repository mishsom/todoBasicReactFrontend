import React from 'react';
import {useFormHook} from "../hooks/formHook";

/**
 * "title": "buy bread",
 "description": "buy 2 bread packets",
 "completeBy": "8-12-2020",
 "isCompleted": true,
 * @returns {*}
 */
export default () => {
    const [state, onChangeHandler, submit] = useFormHook({title: '', description: '', completeBy: ''});
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: "90%",
            margin: "20px",
            border: "1px solid black",
            borderRadius: "10px",
            padding: "20px",
        }}>
            <form onSubmit={submit}>
                <div>
                    <label>
                        title:
                        <input
                            name="title" value={state["title"]}
                            onChange={(event) => {onChangeHandler("title", event.target.value)}}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        description:
                        <input
                            name="description" value={state["description"]}
                            onChange={(event) => {onChangeHandler("description", event.target.value)}}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        completedBy:
                        <input
                            name="completeBy" value={state["completeBy"]}
                            onChange={(event) => {onChangeHandler("completeBy", event.target.value)}}
                        />
                    </label>
                </div>

                <div>
                    <button type="submit">create todo</button>
                </div>

            </form>
        </div>
    )
}
