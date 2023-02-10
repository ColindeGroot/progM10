import Item from "../Item/Item";
import "./Todo.css";

const Todo = () => {

    const tasks = [
        
    ];

    let listItems = tasks.map(task => {
        return <Item name={task.name} done={task.done}/>
    });

    return (
        <article className="todo">
            <header class="todo__header">
                <h1 class="todo__heading">Things to do:</h1>
            </header>
            <ul className="todo__list">
                {listItems}
            </ul>
        </article>
    );
}

export default Todo;