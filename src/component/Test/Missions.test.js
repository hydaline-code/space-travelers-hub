import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../Missions'; // Adjust the import path as needed

const mockStore = configureStore([]);

describe('Missions Component', () => {
  it('should render mission information correctly from the store', () => {
    const initialState = {
      missions: {
        missions: [
          {
            mission_id: '1',
            mission_name: 'Mission 1',
            description: 'Description for Mission 1',
            reserved: false,
          },
          // Add more mission objects as needed
        ],
      },
    };

    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>
    );

    expect(getByText('Mission 1')).toBeInTheDocument();
    expect(getByText('Description for Mission 1')).toBeInTheDocument();
  });
});
