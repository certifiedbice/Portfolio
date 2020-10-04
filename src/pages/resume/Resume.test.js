import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import Resume from './Resume';

it('renders without crashing',()=>{
	const pathname={location:{pathname:'/resume'}};
    const div=document.createElement('div');
    ReactDOM.render(<BrowserRouter><Resume location={pathname}/></BrowserRouter>,div);
});

it('renders correctly',()=>{
	const pathname={location:{pathname:'/resume'}};
    const tree=renderer
        .create(<BrowserRouter><Resume location={pathname}/></BrowserRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});