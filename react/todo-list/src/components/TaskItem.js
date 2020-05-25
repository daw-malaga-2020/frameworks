import React from "react"

function TaskItem(props){
	return (
    <li className={props.done? "completed": ""}>
      <a href="#" className="form-check" onClick={props.onChange}>
       {props.title}
      </a>
      <i className="remove mdi mdi-close-circle-outline" onClick={props.onRemove}></i>
    </li>
  );
}

export default TaskItem