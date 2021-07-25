import React, { useState } from 'react';
import ToDoList from './ToDoList';

interface ISubmit {
    subject: string,
    listStore: any
}

const ToDoLists = () => {

    // Subject State
    const [subject, setSubject] = useState<string>("");

    // List State
    const [list, setList] = useState<string>("");

    // List Store State
    const [listStore, setListStroe] = useState<string[]>([]);

    // Submit List State
    const [submitList, setSubmitList] = useState<ISubmit[]>([]);

    // add list function
    const addList = () => {
        setList("")
        setListStroe([...listStore, list])
    }

    // Submit To do list function
    const submitLists = () => {
        let newList = { subject, listStore };
        setSubmitList([...submitList, newList])
        setSubject("");
        setListStroe([]);
    }

    // Remove To do list handle
    const handleRemove = (subject: string) => {
        const newArray = submitList.filter(list => list.subject !== subject);
        setSubmitList(newArray);
    }


    return (
        <div className="to-lists">
            <h2>To Do List</h2>
            <input
                className="input-sub"
                type="text"
                name="sub"
                placeholder="Your To Do Subject..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />

            <ol className="list-item">
                {
                    listStore.map(list => <li key={list}>{list}</li>)
                }
            </ol>

            <div className="list-input">
                <input
                    type="text"
                    name="list"
                    placeholder="Your list..."
                    value={list}
                    onChange={(e) => setList(e.target.value)}
                />
                <button onClick={addList}>Add+</button>
            </div>
            <button onClick={submitLists}>Submit List</button>


            {
                submitList.map(list =>
                    <ToDoList
                        key={list.subject}
                        subject={list.subject}
                        listStore={list.listStore}
                        handleRemove={handleRemove}
                    />)
            }

        </div>
    );
};

export default ToDoLists;