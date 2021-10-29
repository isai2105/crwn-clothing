import React from "react";
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }} 
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

/* by wrapping our component with withRouter(), it now has access to history, location and other Routing properties
   without having to send all those properties all the way down from the HomePage component (props tunneling is a bad pattern).
 */
export default withRouter(MenuItem);