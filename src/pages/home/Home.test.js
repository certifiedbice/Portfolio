import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import Home from './Home';

it('renders without crashing',()=>{
	const pathname={location:{pathname:'/home'}};
    const div=document.createElement('div');
    ReactDOM.render(<BrowserRouter><Home location={pathname}/></BrowserRouter>,div);
});

it('renders correctly',()=>{
	const pathname={location:{pathname:'/home'}};
    const tree=renderer
        .create(<BrowserRouter><Home location={pathname}/></BrowserRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});