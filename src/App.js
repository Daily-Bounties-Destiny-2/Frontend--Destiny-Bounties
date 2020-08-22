import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route
} from 'react-router-dom';
import Header from './Header.js';
import HomePage from './HomePage.js';
import DailyBounties from './DailyBounties.js';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="bounties">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Daily Bounties
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
              <Header />
            <main>
              <div className='content'>
                <Route path="/" exact component={props => <HomePage />} />
                <Route path="/bounties" component={props => <DailyBounties />} />
              </div>
                
            </main>
        </React.Fragment>
    )}
    />
</Router>
            </div>
        )
    }
}