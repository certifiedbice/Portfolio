import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import Footer from './Footer';

it('renders without crashing',()=>{
    const footer=document.createElement('footer');
    ReactDOM.render(<BrowserRouter><Footer/></BrowserRouter>,footer);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<BrowserRouter><Footer/></BrowserRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});