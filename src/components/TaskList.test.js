// src/components/TaskList.test.js

import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';

import { WithPinnedTasks } from './TaskList.stories';

it('renders pinned task at the start of the list'), () => {
    const div = document.createElement('div');
    // Our story will be used for the test.
    // With the argurments that were created.
    ReactDOM.render(<WithPinnedTasks {...WithPinnedTasks.arg } />, div);

    // We exppect the task titled "Task 6 (inned)" to be rendered first, not at the end
    const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value=Task 6 (pinned)"]');
    expect(lastTaskInput).not.toBe(null);

    ReactDOM.unmountComponentAtNode(div);
}