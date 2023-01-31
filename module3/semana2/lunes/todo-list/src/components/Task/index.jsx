//function Task(props) sin destructurar
//props.nameTask || props.status
//...props || ...restProps = {....} = restProps.OTROELEMENTO
function Task({ nameTask, status, ...props }) {
  return (
    //<li className={status ? "checked": ""}> {nameTask}</li>
 
    <li className={`myStyle ${status ? "checked" : ""}`}>
      <p onClick={props.done}>{nameTask} </p>
      <span onClick={() => console.log("Eliminar")} className="close">
        {"\u00D7"}
      </span>
    </li>
    // status ?  <li className="checked">{nameTask}</li> : <li >{nameTask}</li>
  );
}

export default Task;
