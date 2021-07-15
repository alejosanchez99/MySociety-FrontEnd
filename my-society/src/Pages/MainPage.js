import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import MySocieties from './MySocieties'
import AllSocieties from './AllSocieties'
import Society from './Society'

export default class MainPage extends Component {
    render() {
        return (
            <div className="atom-main-page">
                <Router>
                    <div className="atom-menu">
                        <div className="atom-logo"></div>
                        <div className="atom-menu_option">
                            <NavLink to="/MySocieties" className="d-flex w-100" activeClassName="active">
                                <div className="atom-menu_icon atom-icon--society"></div>
                            </NavLink>
                            <NavLink to="/AllSocieties" className="d-flex w-100" activeClassName="active">
                                <div className="atom-menu_icon atom-icon--search"></div>
                            </NavLink>
                            <NavLink to="/Society" className="d-flex w-100 justify-content-center" activeClassName="active">
                                <div className="atom-menu_icon atom-icon--send"></div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="atom-pages">
                        <Switch>
                            <Route path="/MySocieties">
                                <MySocieties />
                            </Route>
                            <Route path="/AllSocieties">
                                <AllSocieties />
                            </Route>
                            <Route path="/Society">
                                <Society />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}