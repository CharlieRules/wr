import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
//import default header
import Header from '../header/header';
import styled from 'tachyons-components';

const StyledHeaderContainer = styled(`div`)`flex h4`;
const StyledBodyContainer = styled(`div`)`flex`;
const StyledFooterContainer = styled(`div`)`flex`;

export const DefaultRoute = ({
    body: Body,
    header: Header,
    footer: Footer,
    ...restProps
}) => 
    (
    <Route 
            {...restProps}
            render={props =>
                (
                    <div className="defaultLayout">
                        {
                            Header && 
                            <StyledHeaderContainer id="headerContainer">
                            <Header />
                        </StyledHeaderContainer>
                        }
                        <StyledBodyContainer id="bodyContainer">
                            <Body match={props.match}/>
                        </StyledBodyContainer>
                        
                        {
                            Footer && 
                            <StyledFooterContainer id="footerContainer">
                            <Footer />
                            </StyledFooterContainer>}
                        </div>
                )
            }
        >

        </Route>
);

//proptypes here

DefaultRoute.defaultProps = {
    header: Header
}

//export DefaultRoute;