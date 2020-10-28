import React from 'react';

import './custom-button.style.scss';
import './custom-button.component';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted':''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;