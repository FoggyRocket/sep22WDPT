function FormTask({completedTask}) {
  return (
    <div id="myDIV" className="header">
      <h2>My To Do List</h2>
      <input type="text" id="myInput" placeholder="Title..." />
      <span className="addBtn">Add</span>
      <h2>Task completed = {completedTask()}</h2>
    </div>
  );
}

export default FormTask;
