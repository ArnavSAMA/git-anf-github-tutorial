function Todo({task, togglepopup}){
    function HandleClick(){
        console.log("button clicked");
    }
    return (
        <div className="todo-item">
            <h2>{task}</h2>
            <button onClick={() => togglepopup()}>Delete</button>
        </div>
    )
}
export default Todo;