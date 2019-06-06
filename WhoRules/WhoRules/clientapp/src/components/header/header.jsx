import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavButton from './NavButton';
import Logo from "../assets/img/WhoRulesLogo.png";
import styled from 'tachyons-components';



const StyledToolBar = styled('Toolbar')`flex flex-row justify-between`;
const StyledImg = styled('img')`self-center`;
const StyledPageLinksNavContainer = styled('div')`flex`;

const Header = () => {
  
    return (
        <AppBar
           
        >
            

            <StyledToolBar>
                <StyledImg src={Logo} alt="WhoRules?!" width="120px" 
                     
/>
<StyledPageLinksNavContainer id="pageLinksNavContainer">
    <NavButton text="About"/>
    <NavButton text="Brands" />      
    <NavButton text="Contact" />
</StyledPageLinksNavContainer>

            </StyledToolBar>   
        </AppBar>
    );
}

export default Header;