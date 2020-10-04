import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import Portfolio from './Portfolio';

it('renders without crashing',()=>{
	const pathname={location:{pathname:'/portfolio'}};
    const div=document.createElement('div');
    ReactDOM.render(<BrowserRouter><Portfolio location={pathname}/></BrowserRouter>,div);
});

it('renders correctly',()=>{
	const pathname={location:{pathname:'/portfolio'}};
    const tree=renderer
        .create(<BrowserRouter><Portfolio location={pathname}/></BrowserRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});