import React, { useState } from "react";
import TaskItem from "./components/TaskItem";

function App() {
    
  const [tasks, setTasks] = useState([
    { title: "Tarea 1", done: false },
    { title: "Tarea 2", done: false },
    { title: "Tarea 3", done: true },
  ]);

  const [value, setValue] = useState("")

  function addItem(){
    const newItem = {title: value, done: false}
    const newTasks = [...tasks];
    newTasks.push(newItem);
    setTasks(newTasks)
    setValue("")
  }

  function doRemove(index){
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks)
  }

  function doChange(index) {
    const newTasks = [...tasks]
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-lg-12">
              <div className="card px-3">
                <div className="card-body">
                  <h4 className="card-title">Awesome Todo list</h4>
                  <div className="add-items d-flex">
                    <input
                      type="text"
                      value={value}
                      onChange={ e => setValue(e.target.value) }
                      className="form-control todo-list-input"
                      placeholder="What do you need to do today?"
                    />
                    <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={addItem}>
                      Add
                    </button>
                  </div>
                  <div className="list-wrapper">
                    <ul className="d-flex flex-column-reverse todo-list">
                      {tasks.map((item, index) => (
                        <TaskItem
                          key={index}
                          title={item.title}
                          done={item.done}
                          onChange={() => doChange(index)}
                          onRemove={() => doRemove(index)}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
