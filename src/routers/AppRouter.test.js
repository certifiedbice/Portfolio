import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './AppRouter'

it('renders without crashing',()=>{
    const root=document.createElement('root');
    ReactDOM.render(<BrowserRouter><AppRouter/></BrowserRouter>,root);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<BrowserRouter><AppRouter/></BrowserRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});