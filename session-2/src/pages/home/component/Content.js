import React from 'react';
import { Theme } from '../state'

const Content = () => {
    const theme = React.useContext(Theme);
    return (
        <div>
            <p style={{ color: theme.color }}>This content data</p>
        </div>
    );
}

export default Content;
