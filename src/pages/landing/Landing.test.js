import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import Landing from './Landing';

it('renders without crashing',()=>{
	const pathname={location:{pathname:'/'}};
    const div=document.createElement('div');
    ReactDOM.render(<BrowserRouter><Landing location={pathname}/></BrowserRouter>,div);
});

it('renders correctly',()=>{
	const pathname={location:{pathname:'/'}};
    const tree=renderer
        .create(<BrowserRouter><Landing location={pathname}/></BrowserRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});