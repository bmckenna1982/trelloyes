import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it ('renders the ui as expected', () => {
    const tree = renderer
        .create(<Card Title="Test" content="Testing Card"/>)
        .toJSON();
    expect (tree).toMatchSnapshot();
});