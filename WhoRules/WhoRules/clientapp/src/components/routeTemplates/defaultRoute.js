import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
//import default header
import Header from '../header/header';

export const DefaultRoute = ({
    body: Body,
    header: Header,
    footer: Footer,
    ...restProps
}) => (
    <Route 
            {...restProps}
            render={props =>
                (
                    <div className="defaultLayout">
                        {Header && <Header />}
                        <Body match={props.match}/>
                        {Footer && <Footer />}
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