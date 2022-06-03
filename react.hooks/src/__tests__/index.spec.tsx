/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-test-renderer';
import App from '../App';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Application root', () => {
  it('should render without crashing', async () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    await act(async () => {
      require('../index');
    });

    expect(ReactDOM.render).toHaveBeenCalledWith(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>,
      div
    );
  });
});
