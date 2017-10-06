import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';

import HeaderComponent from './HeaderComponet';
import ShelfButtonComponent from './ShelfButtonComponent';
import ShelfComponent from './ShelfComponent';

let HomePageWrapper = styled.div`
margin: 20px;
background: '#D8D8D8';
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export default class HomeComponent extends Component {
    constructor(){
        super();
        this.state = {
            shelfs: [
                {name: 'A'},
                {name: 'B'},
                {name: 'C'},
                {name: 'D'}
            ]
        }
    }
    links = this.state.shelfs.map((shelf) => {
        return(
            <Link to={`/shelf/${shelf.name}`}><ShelfButtonComponent id={shelf.name}/></Link>
        )
    })

    render() {
        return (
            <div>
                <HomePageWrapper>
                    <HeaderComponent />
                    {this.links}
                    <Router>
                        <Route path="/" component={HomeComponent} />
                        <Route path="/shelf/:id" component={ShelfComponent}/>
                    </Router>
                </HomePageWrapper>
            </div>
        )
    }
}

