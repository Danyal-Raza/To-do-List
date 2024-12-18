import { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Todo from './Components/Todo';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskDetail from './Components/TaskDetail';
import Contact from './Components/Contact';

const App = () => {
    const [ToDoArray, setToDoArray] = useState([]);
    const [In, setIn] = useState(-1);
    const [Str, setStr] = useState('');
    const [Detail, setDetail] = useState('');

    const CollectInput = (TaskName, TaskDetail) => {
        if (Str !== '') {
            const Temp = [...ToDoArray];
            Temp[In] = { name: TaskName, detail: TaskDetail };
            localStorage.setItem('Todo', JSON.stringify(Temp));
            setToDoArray(Temp);

            setStr('');
            setDetail('');
            setIn(-1);
        } else {
            const Temp = [{ name: TaskName, detail: TaskDetail }, ...ToDoArray];
            localStorage.setItem('Todo', JSON.stringify(Temp));
            setToDoArray(Temp);
        }
    };

    const Delete = (Ind) => {
        const newArr = [...ToDoArray];
        newArr.splice(Ind, 1);
        localStorage.setItem('Todo', JSON.stringify(newArr));
        setToDoArray(newArr);
    };

    const EditText = (Ind, Elem) => {
        setIn(Ind);
        setStr(Elem.name);
        setDetail(Elem.detail);
    };

    useEffect(() => {
        const Ar = JSON.parse(localStorage.getItem('Todo'));
        if (Ar) setToDoArray(Ar);
    }, []);

    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">To-Do App</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/task-detail">Task Detail</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={
                        <div className="App-Content mt-4">
                            <Form 
                                Take={CollectInput} 
                                Icon={In === -1 ? "fa-solid fa-plus" : "fa-solid fa-marker"} 
                                String={Str === '' ? '' : Str} 
                                Detail={Detail === '' ? '' : Detail} 
                            />

                            {ToDoArray.length === 0 ? (
                                <div className="alert alert-success mt-2" role="alert">
                                    No To-Do Available Yet!
                                </div>
                            ) : (
                                <Todo GetTodos={ToDoArray} Del={Delete} Edit={EditText} />
                            )}
                        </div>
                    } />
                    <Route path="/task-detail" element={<TaskDetail tasks={ToDoArray} />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;