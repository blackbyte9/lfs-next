"use client";

import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';

export default function NavLinks() {
    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, [])
    
    return(
        <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home"><Image src="/logo.png" alt="" width="50" height="50" fluid /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" >
                    <Nav.Link href="/lfb/lease">Ausleihen</Nav.Link>
                    <Nav.Link href="/lfb/return">Zurückgebe</Nav.Link>
                    <NavDropdown title="Bücher" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="/lfb/books">Büchertypen</NavDropdown.Item>
                        <NavDropdown.Item href="/lfb/books/items">Bücherliste</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Schüler" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="/lfb/students">Schülerliste</NavDropdown.Item>
                        <NavDropdown.Item href="/lfb/students/info/leases">Ausleihen</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/admin/students/import">Schülerliste importieren</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Adminsitration" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="/admin/users">Helferzugang</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/admin/data/import">Import</NavDropdown.Item>
                        <NavDropdown.Item href="/admin/data/export">Export</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="justify-content-end">
                    <Navbar.Text>
                        Benutzer: <a href="#login">Klaus Mustermann</a>
                    </Navbar.Text>
                </Nav>
            </Container>
        </Navbar>
    );
}