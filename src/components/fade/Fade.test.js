import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import Fade from './Fade';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<BrowserRouter><Fade/></BrowserRouter>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<BrowserRouter><Fade/></BrowserRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});