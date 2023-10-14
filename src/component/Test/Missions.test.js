import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../Missions';

// Create a mock store
const mockStore = configureStore([]);

jest.mock('./redux/slice/missions/MissionsSlice', () => ({
  fetchMissions: jest.fn(),
  joinMission: jest.fn(),
  leaveMission: jest.fn(),
}));

describe('Missions component', () => {
  let store;

  beforeEach(() => {
    // Initialize the mock store with an empty state
    store = mockStore({
      missions: {
        missions: [],
      },
    });

    render(
      <Provider store={store}>
        <Missions />
      </Provider>
    );
  });

  // ...rest of the test cases
});