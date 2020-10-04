import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NotFound from './NotFound';

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<NotFound/>,div);
});

it('renders correctly',()=>{
    const tree=renderer
        .create(<NotFound/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
});