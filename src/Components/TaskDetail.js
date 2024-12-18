import React from 'react';
import './TaskDetail.css';

const TaskDetail = ({ tasks }) => {
    return (
        <div className="task-detail-page">
            <h2 className="task-detail-header">Task Details</h2>
            {tasks.length === 0 ? (
                <div className="alert alert-warning" role="alert">
                    No tasks available.
                </div>
            ) : (
                tasks.map((task, index) => (
                    <div className="Todo-List" key={index}>
                        <p className="task-name"><strong>{task.name}</strong></p>
                        <p className="task-detail">{task.detail}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default TaskDetail;
