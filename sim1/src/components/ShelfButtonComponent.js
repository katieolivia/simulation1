import React from 'react';
import styled from 'styled-components';

let ShelfWrapper = styled.div`
margin: 10px;
padding: 5px;
background: #D34735;
height: 50px;
color: white;

`;

const ShelfButtonComponent = (props) => {
    return (
        <ShelfWrapper>
           <h3>Shelf {props.id}</h3>
        </ShelfWrapper>
    )
}

export default ShelfButtonComponent;