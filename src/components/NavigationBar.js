import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

function NavigationBar() {
  return (
    <div className='side-navigation-bar'>
        <Navbar data-bs-theme="dark" >
            <Nav id="side-menu-nav" className='side-menu-nav flex-row flex-xl-column border border-1 rounded-pill border-secondary p-md-2' defaultActiveKey="#introduction-section">
              <Nav.Link href='#introduction-section'><i className="fa fa-home"></i></Nav.Link>
              <Nav.Link href='#about-section'><i className="fa fa-user"></i></Nav.Link>
              <Nav.Link href='#experience-section'><i className="fa fa-briefcase"></i></Nav.Link>
              <Nav.Link href='#skill-section'><i className="fa fa-cube"></i></Nav.Link>
              <Nav.Link href='#project-section'><i className="fa fa-code"></i></Nav.Link>
              <Nav.Link href='#contact-section'><i className="fa fa-envelope"></i></Nav.Link>
            </Nav>
        </Navbar>
    </div>
  )
}

export default NavigationBar