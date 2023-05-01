  import React from 'react';
import {Container, Row} from 'react-bootstrap';

function Header() {
    return (
        <Container>
            <Row>
                <div className="Header">
                    <h1 className="app-title">
                        <span className='pixels'> </span>
                        Notes
                        <span className='pixels'> </span>
                    </h1>           
                </div>
            </Row>
        </Container>
    );
  }
  
//Exports Header Component to be used in app.js
export default Header;