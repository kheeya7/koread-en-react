import React from 'react'
import { Navbar } from 'react-bootstrap'

export default class NavView extends React.PureComponent {

    render() {
        return (
            <Navbar fixed="top" expand="md " collapseOnSelect>
                <div className="logo">
                    <h1>
                        <a
                            className="navbar-brand d-sm-inline-block font-weight-bold"
                            href="/">
                            Korea Depart
                        </a>
                    </h1>
                    <h2 className="navbar-text">
                        Korea department store
                    </h2>
                </div>

                <div
                    className="collapse navbar-collapse"
                    id="togglerNav">
                    <div className="navbar-nav ml-auto font-weight-bold">
                        <a className="nav-item nav-a">
                            COSMETIC
                        </a>
                        <a className="nav-item nav-a">
                            FOOD
                        </a>
                        <a className="nav-item nav-a">
                            STATIONARY
                        </a>
                        <a className="nav-item nav-a">
                            CERT's FOOD
                        </a>
                    </div>
                </div>
            </Navbar>
        )
    }
}