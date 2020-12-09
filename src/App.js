import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.css';
import TodoListing from './component/todoListing';
import CreateTodo from './component/addTodoForm';


export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/todos">
                        <div className="App">
                            <TodoListing />
                        </div>
                    </Route>
                    <Route path="/createTodo">
                        <CreateTodo />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
