import React from 'react';
import ReactDOM from 'react-dom'
import List from './List';

it ('renders without crashing', () => {
    const div = document.createElement('div');
    const cards = [{
        id: 1,
        title: 'test',
        content: 'Testing'
    }]
    ReactDOM.render(<List cards={cards}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

