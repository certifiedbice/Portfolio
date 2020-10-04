import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import Services from './Services';

it('renders without crashing',()=>{
	const pathname={location:{pathname:'/services'}};
    const div=document.createElement('div');
    ReactDOM.render(<BrowserRouter><Services location={pathname}/></BrowserRouter>,div);
});

it('renders correctly',()=>{
	const pathname={location:{pathname:'/services'}};
    const tree=renderer
        .create(<BrowserRouter><Services location={pathname}/></BrowserRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});