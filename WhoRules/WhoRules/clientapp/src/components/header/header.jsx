import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavButton from './NavButton';
import Logo from "../assets/img/WhoRulesLogo.png";
import styled from 'tachyons-components';
const StyledToolBar = styled('Toolbar')``;
const Header = () => {
  
    return (
        <AppBar
           
        >
            

            <StyledToolBar className="">
                <img src={Logo} alt="WhoRules?!" width="120px" />
                <NavButton text="About"/>
                <NavButton text="Brands" />      
                <NavButton text="Contact" />
            </StyledToolBar>   
        </AppBar>
    );
}

export default Header;