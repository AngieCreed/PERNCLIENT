import React, { Component } from 'react'; 
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    Button
} from 'reactstrap';

class NavBar extends Component {
    constructor(props) {   
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        return (
            <div>
                <Navbar  dark expand="md">
                    <NavbarBrand href='/'>Home</NavbarBrand>
                    <nav className="nav">
                        <a className="nav-link" href="/survey">App Survey</a>
                    </nav>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className='ml-auto' navbar>
                                <NavItem>
                                    <Button className='logout-button' onClick={() => this.props.clickLogout()}>Logout</Button>
                                </NavItem>
                            </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
//props.clickLogout() passed from app.js