import React from 'react';

import styled from 'tachyons-components';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';

//const StyledButton = styled('Button')`
//  f6 f5-ns fw6 dib ba
//  b--black-20 bg-blue white
//  ph3 ph4-ns pv2 pv3-ns br2
//  grow no-underline
//`;
const StyledButton = styled('Button')`
  white;
	background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
`;

const StyledTab = styled('Tab')`white background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);`
const NavButton = ({ text }) => (
    <Tab style={{color:"white", "background": "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)"}} label={text} >
        
	</Tab>
    );

 export default NavButton;