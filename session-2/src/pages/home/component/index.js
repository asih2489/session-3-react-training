import React, { Context } from 'react'
import Header from './Header';
import Content from './Content';
import { Provider, Theme } from '../state';
import { useSelector, useDispatch } from 'react-redux';
import List from './List';


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

    const dispatch = useDispatch();

    const data = useSelector((state) => state.home);

    return (
        <>
            <Provider value={{ 
                color: 'green',
                data: data,
            }}>
                <div>
                    {data.label}
                    <Header theme={theme} />
                    <Content />
                    <List data={data.category} />
                </div>
            </Provider>
        <Footer />
        </>
    );
};

export default HomePage;
