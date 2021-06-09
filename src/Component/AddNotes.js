import { Card, Button, Form, FloatingLabel } from "react-bootstrap";
import {useState} from "react"
function AddNotes(props) {
	const [noteText,setnoteText] = useState(null)
	const [noteSubject,setnoteSubject] = useState(null)
	function addnote_btn(){
		props.addNoteHandler({
			note:noteText,
			subject:noteSubject
		})
		setnoteText("")
		setnoteSubject("")
	}
	return (
		<div className="deafult">
			<div className="container-fluid mt-3 height-45">
				<Card className="text-center" border="primary">
					<Card.Header className="bg-primary font-color-white">
						Add Notes
					</Card.Header>

					<div className="mt-4 mb-4 ml-4 mr-4 ">
						<div className="form__div">
							<form action="" class="form ">
								<div>
									<input type="text" className="form__input margin-left-right-notes" 
									value={noteText} onChange={(e)=>setnoteText(e.target.value)} placeholder=" " />
									<label for="" className="form__label margin-left-right ">
										Add Subject
									</label>

									<input type="text" className="form__input mt-8 margin-left-right-notes" 
									value={noteSubject} onChange={(e)=>setnoteSubject(e.target.value)} placeholder=" " />
									<label for="" className="margin-left-right form__label mt-8">
										Write Note Here
									</label>
								</div>
							</form>
						</div>
					</div>
					<div className="mb-4 mt-8">
						<Button variant="primary" onClick={addnote_btn}>Add Notes</Button>
					</div>
				</Card>
			</div>
		</div>
	);
}
export default AddNotes;
