import React from 'react';

interface IProps {
    subject: string,
    listStore: [],
    handleRemove: (subject: string) => void
}

const ToDoList = ({ subject, listStore, handleRemove }: IProps) => {

    return (
        <div className="list-card">
            <h3>{subject}</h3>
            <ol>
                {
                    listStore.map(list => <li key={list}>{list}</li>)
                }
            </ol>
            <button onClick={() => handleRemove(subject)}>Remove</button>
        </div>
    );
};

export default ToDoList;