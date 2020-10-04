import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import Contact from './Contact';

it('renders without crashing',()=>{
	const pathname={location:{pathname:'/contact'}};
    const div=document.createElement('div');
    ReactDOM.render(<BrowserRouter><Contact location={pathname}/></BrowserRouter>,div);
});

it('renders correctly',()=>{
	const pathname={location:{pathname:'/contact'}};
    const tree=renderer
        .create(<BrowserRouter><Contact location={pathname}/></BrowserRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});