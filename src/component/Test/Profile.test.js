import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Profile from '../Profile';


const mockStore = configureStore([]);

describe('Profile Component', () => {
  it('matches the snapshot', () => {
    const initialState = {
      missions: {
        missions: [
          {
            mission_id: '1',
            mission_name: 'Mission 1',
            reserved: true,
          },
          {
            mission_id: '2',
            mission_name: 'Mission 2',
            reserved: false,
          },
        ],
      },
      dragons: {
        dragons: [
          {
            id: '1',
            name: 'Dragon 1',
            reserved: true,
          },
          {
            id: '2',
            name: 'Dragon 2',
            reserved: false,
          },
        ],
      },
      rockets: {
        rockets: [
          {
            id: '1',
            rocket_name: 'Rocket 1',
            reserved: true,
          },
          {
            id: '2',
            rocket_name: 'Rocket 2',
            reserved: false,
          },
        ],
      },
    };

    const store = mockStore(initialState);

    const tree = renderer
      .create(
        <Provider store={store}>
          <Profile />
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
