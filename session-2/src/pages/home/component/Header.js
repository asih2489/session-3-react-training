import React from 'react';

const Header = (props) => {
    const { theme } = props;
    return (
        <div>
            <h1 style={{ color: theme.color }}>Header Content</h1>
        </div>
    )
};

export default Header;
