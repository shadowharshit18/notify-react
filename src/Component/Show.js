import { Nav } from "react-bootstrap";
import {Link} from 'react-router-dom'
function Show() {
	return (
		<div className="deafult">
			<Nav variant="tabs" defaultActiveKey="/home">
				<Nav.Item>
				<Nav.Link>	<Link to='/shownotesandtodo/notesshow'>Notes</Link> </Nav.Link>
				</Nav.Item>
				<Nav.Item>
                <Nav.Link><Link to='/shownotesandtodo/todo'>ToDo</Link></Nav.Link>
				</Nav.Item>
			</Nav>
		</div>
	);
}
export default Show;
