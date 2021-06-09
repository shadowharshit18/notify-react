import { Card, Button, Form, FloatingLabel } from "react-bootstrap";
import {useState} from 'react'
function AddTodo(props) {
    const [notetodo,setTodo]=useState(null);
    const [notedate,setDate]=useState(null);
    const [notetime,setTime]=useState(null);
    function addnote_btn(){
		props.addtodo({
			todo:notetodo,
            date:notedate,
            time:notetime
		})
        setTodo("")
        setDate("")
        setTime("")
		
	}
    return(
        <div className="deafult">
            <div className="container-fluid mt-3 height-45">
				<Card className="text-center" border="primary">
					<Card.Header className="bg-primary font-color-white">
						Add Notes
					</Card.Header>
                    
					<div className="mt-4 mb-4 ml-5 mr-4 margin-left-right">
                    <div className="form__div">
                    <form action="" className="form">
                    <div>
                    <input type="text" value={notetodo} onChange={(e)=>setTodo(e.target.value)} className="form__input width-94" placeholder=" "/>
                    <label for="" className="form__label" >Enter the task here</label>
                  
                    <input type="date" value={notedate}  onChange={(e)=>setDate(e.target.value)} className="form__input mt-8 width-45" placeholder=" "/>
                    <label for="" className="form__label mt-8">Enter the date</label>
                    <input type="time" value={notetime} onChange={(e)=>setTime(e.target.value)} className="form__input mt-8 width-45 todo-time-holder" placeholder=" "/>
                    <label for="" className="form__label mt-8 todo-time-holder">Enter the time</label>
                    </div>
                    </form>
                </div>
					</div>
                    <div className="mb-4 mt-8">
                    <Button onClick={addnote_btn} variant="primary">Add To-Do</Button>
                    </div>
					
				</Card>
			</div>
        </div>
    )
}
export default AddTodo;