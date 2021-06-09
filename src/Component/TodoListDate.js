import Todolist from "./Todolist";
function TodoListDate(props){
    const line = new Array();
    const time = new Array();
    var count = 0
    // console.log(props.list)
    props.list.forEach(element => {
        if(element.todo.date==props.date){
            line[count]={
                todo:element.todo.todo,
                time:element.todo.time,
                index:count
            }
            
            count=count+1
        }
    });
    // console.log(line);
    return(
        <div>
            <span className="badge bg-secondary">{props.date}</span>
            {
                line.map((e)=>(
                    <Todolist line={e}  />
                ))
            }
        </div>
    )
}

export default TodoListDate;