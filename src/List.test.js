import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

const cards = [{
    id: 1,
    title: 'test',
    content: 'Testing'
}]

it ('renders without crashing', () => {
    const div = document.createElement('div');    
    ReactDOM.render(<List cards={cards}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it ('renders the ui as expected', () => {
    const tree = renderer
        .create(<List cards={cards}/>)
        .toJSON();
    expect (tree).toMatchSnapshot();
})