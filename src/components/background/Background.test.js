import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import Background from './Background';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<BrowserRouter><Background/></BrowserRouter>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<BrowserRouter><Background/></BrowserRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});