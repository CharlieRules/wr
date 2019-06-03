import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from "../assets/img/WhoRulesLogo.png";
const Header = () => {
    const logo = () =>
    (
            <img src="https://unsplash.it/40/40" alt="WhoRules?!" />
    );
    return (
        <AppBar
           
        >
            <Toolbar>
                <img src={Logo} alt="WhoRules?!" width="120px"/>
                <Typography>
                   WhoRules?!
                </Typography>
            </Toolbar>   
        </AppBar>
    );
}

export default Header;