import { useEffect, useState } from 'react';
import './Form.css';

let Form = (Props) => {
    let [TaskName, setTaskName] = useState('');
    let [TaskDetail, setTaskDetail] = useState('');

    const handleNameInput = (Inp) => {
        setTaskName(Inp);
    };

    const handleDetailInput = (Inp) => {
        setTaskDetail(Inp);
    };

    const handleClick = () => {
        if (TaskName === '') {
            alert("Task Name Can't Be Empty");
        } else {
            Props.Take(TaskName, TaskDetail);
            setTaskName('');
            setTaskDetail('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    };

    useEffect(() => {
        setTaskName(Props.String);
        setTaskDetail(Props.Detail);
    }, [Props.String, Props.Detail]);

    return (
        <div className="Form">
            <input
                type="text"
                placeholder="Enter Task Name..."
                value={TaskName}
                onChange={(Event) => { handleNameInput(Event.target.value); }}
                onKeyDown={handleKeyPress}
            />
            <textarea
                placeholder="Enter Task Detail..."
                value={TaskDetail}
                onChange={(Event) => { handleDetailInput(Event.target.value); }}
                rows="3"
            />
            <div className="Plus" onClick={() => { handleClick(); }}>
                <i className={Props.Icon}></i>
            </div>
        </div>
    );
};

export default Form;
