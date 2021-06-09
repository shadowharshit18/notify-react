import { Navbar, Nav } from "react-bootstrap";
import { Link, BrowserRouter,Route } from "react-router-dom";

function Header() {
	return (
		<div>
					<Navbar bg="primary" expand="lg" className="fixed-top">
					<Link className="nav-header" to="/">
						Notify
					</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
					
								<Link className="nav-item" to="/addnotes">
									Add Notes
								</Link>
								<Link className="nav-item" to="/addtodo">
									Add To-Do
								</Link>
								<Link className="nav-item" to="/shownotesandtodo">
									Show
								</Link>
		
						</Nav>
					</Navbar.Collapse>
				</Navbar>
        
		</div>
	);
}

export default Header;
