import React, { Component } from 'react'
import logo from './logo.svg'
import hamburger from './icon-hamburger.svg'
import close from './icon-close-menu.svg'

class Nav extends Component {

    state = {
        navItem: [
            { name: 'About', link: '#about' },
            { name: 'Discover', link: '#discover' },
            { name: 'Get Started', link: '#get-started' },
        ]
    };

    listItems = this.state.navItem.map((navitem, index) =>
        <li className="nav-item active ml-md-4" style={{
            width: '100%'
        }} key={index}>
            <a className="nav-link nav-item-main" style={{
                borderRadius: '5px',
                fontSize: '12px'
            }} href={navitem.link} >{navitem.name}</a>
        </li>
    )

    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: false
        }
        this.changeImage = this.changeImage.bind(this);
    }

    changeImage() {
        this.setState(state => ({
            isCollapsed: !state.isCollapsed
        }));
    }

    render() {
        return (
            <div style={{}}>
                <nav className="navbar navbar-light navbar-expand-md position-fixed col-12 fixed-top" style={{
                    background: this.state.isCollapsed ? 'rgba(0,0,0,.1)' : 'rgba(0,0,0,.5)'
                }}>

                    <div className="container-fluid">
                        < div className="containe w-75">

                            <img className='navbar-brand mr-auto' src={logo} alt='crowdfund' />
                        </div>

                        <button className="navbar-toggler outline-none pb-2" type="button" onClick={this.changeImage} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <img src={this.state.isCollapsed ? close : hamburger} alt='nav-icon' />
                        </button>

                        <div className="collapse navbar-collapse mt-5 mt-md-0 mt-lg-0" id="navbarSupportedContent">
                            <ul className="navbar-nav pb-0 text-left" style={{
                                borderRadius: '8px',
                                fontWeight: '700'
                            }}>
                                {this.listItems}
                            </ul>

                        </div>
                    </div>
                </nav >
            </div >
        )
    }
}

export default Nav;
