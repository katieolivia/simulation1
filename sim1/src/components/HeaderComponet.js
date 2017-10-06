import React, { Component } from 'react';
import styled from 'styled-components';

let HeaderWrapper = styled.div`
margin: 20px;
padding: 10px;
background: #AB2A19;
height: 70px;
color: white;
font-family: OpenSans
display: flex;
align-items: center;
`;

export default class HeaderComponent extends Component {
    render() {
        return (
            <HeaderWrapper>
                <img className="logo" src={"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjPo4XR0djWAhUHrFQKHXrnBtEQjRwIBw&url=https%3A%2F%2Fthenounproject.com%2Fterm%2Fbook%2F12217%2F&psig=AOvVaw2jNPWxKJalUs0J4StIg6OM&ust=1507263873969937"} />
                <h1>SHELFIE</h1>
            </HeaderWrapper>
        )
    }
}

