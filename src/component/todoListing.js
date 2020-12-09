import React, {useState, useEffect} from 'react';


export default () => {
    const [completedList, setCompletedList] = useState([]);
    const [todoList, setTodoList] = useState([]);
    useEffect(() => {
        // const fetchPromise = fetch("http://localhost:5000/todo");
        // const response = fetchPromise.then((response) => {
        //     return response.json();
        // });
        // response.then((jsonResponse) => {
        //     console.log("inside list page", jsonResponse);
        // })

        const apiCallerFunction = async () => {
          const response = await fetch("http://localhost:5000/todo");
          const parsedResponse = await response.json();
          console.log("inside list page", parsedResponse);
          const completedTodo = parsedResponse.filter(todo => todo.isCompleted);
          const todoItems = parsedResponse.filter(todo => !todo.isCompleted);
          setTodoList(todoItems);
          setCompletedList(completedTodo);
        };
        apiCallerFunction();
    }, []);

    const markTodoComplete = async (todoId) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const res = await fetch(`http://localhost:5000/todo/${todoId}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify({
                "isCompleted": true
            })
        });
        const parsedRes = await res.json();
        if(parsedRes && parsedRes.id === todoId) {
            const currentTodoList = [...todoList];
            setTodoList(currentTodoList.filter(todo => todo.id !== todoId));
            setCompletedList([...completedList, parsedRes]);
        }
    };
    return (
        <div>
            <p>todo listing</p>
            {todoList.map((todo) => {
                return (
                    <div style={{paddingBottom: "20px", border: "1px solid black", margin: "auto", width: "90%", borderRadius: "10px"}}>
                        <p>{todo.title}</p>
                        <p>{todo.description}</p>
                        <p>{todo.completeBy}</p>
                        <button onClick={() => {markTodoComplete(todo.id)}}>mark complete</button>
                    </div>
                )
            })}
            <p>completed todo listing</p>
            {completedList.map((todo) => {
                return (
                    <div style={{border: "1px solid black", margin: "auto", width: "90%", borderRadius: "10px"}}>
                        <p>{todo.title}</p>
                        <p>{todo.description}</p>
                        <p>{todo.completeBy}</p>
                    </div>
                )
            })}
        </div>
    )
}
