import React, { Context } from 'react'
import Header from './Header';
import Content from './Content';
import { Provider, Theme } from '../state';
import { useSelector } from 'react-redux';

const Footer = () => {
    const theme = React.useContext(Theme);
    return (
        <p>footer</p>
    );
}

const HomePage = () => {
    const [theme, setTheme] = React.useState({
        color: 'red'
    });

    const data = useSelector((state) => state.home);

    return (
        <>
            <Provider value={{ 
                color: 'green',
                data: data,
            }}>
                <div>
                    <Header theme={theme} />
                    <Content />
                </div>
            </Provider>
        <Footer />
        </>
    );
};

export default HomePage;
