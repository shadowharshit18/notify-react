import { Card,Button } from "react-bootstrap";
function Shownotes(props) {
	
	function deletebtn(ele,i) {
		console.log(ele,i) 
		
	 }
	return (
		<div className="row container-fluid ">
			{props.data.map((element , index) => (
			

				<Card style={{ width: "18rem" }} className="show_notes">
					<Card.Body>
						<Card.Title className="fontheader">{element.notes_and_todo.note}</Card.Title>
						<hr/>
						<Card.Text>{element.notes_and_todo.subject}</Card.Text>
						<Button onClick={()=>(
							props.removeEventHandler({
								data:element,
								id:index
							})
							)} variant="primary">Delete</Button>
					</Card.Body>
				</Card>
			
			))}
		</div>
	);
}

export default Shownotes;
