import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import About from './About';

it('renders without crashing',()=>{
	const pathname={location:{pathname:'/about'}};
    const div=document.createElement('div');
    ReactDOM.render(<BrowserRouter><About location={pathname}/></BrowserRouter>,div);
});

it('renders correctly',()=>{
	const pathname={location:{pathname:'/about'}};
    const tree=renderer
        .create(<BrowserRouter><About location={pathname}/></BrowserRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});