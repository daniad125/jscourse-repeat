import React from 'react';
import ReactDom from 'react-dom';

import App from './app'
//const App = () => <h1>Hello world для проекта - jscourse-repeat</h1>

//import Counter from './counter'
export default () => (<App/>);

export const mount = (Сomponent) => {
    ReactDom.render(
        <Сomponent/>,
        document.getElementById('app')
    );
};

export const unmount = () => {
    ReactDom.unmountComponentAtNode(document.getElementById('app'));
};
