import React from 'react';

interface IProps {
    subject: string,
    listStore: []
}

const ToDoList = ({ subject, listStore }: IProps) => {

    return (
        <div className="list-card">
            <h3>{subject}</h3>
            <ol>
                {
                    listStore.map(list => <li key={list}>{list}</li>)
                }
            </ol>
        </div>
    );
};

export default ToDoList;