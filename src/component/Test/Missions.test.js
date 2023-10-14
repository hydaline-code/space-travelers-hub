import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Missions from '../Missions';
import { setMissions } from '../../redux/slice/missions/MissionsSlice';

const mockStore = configureStore([thunk]);

describe('Missions Component', () => {
  let store;

  beforeEach(() => {
    const initialState = {
      missions: {
        missions: [
          {
            mission_id: '1',
            mission_name: 'Mission 1',
            description: 'Description 1',
            reserved: false,
          },
        ],
      },
    };
    store = mockStore(initialState);
  });

  test('renders missions and handles join/leave actions', async () => {
    const fakeMissions = [
      {
        mission_id: '1',
        mission_name: 'Mission 1',
        description: 'Description 1',
        reserved: false,
      },
    ];

    store.dispatch(setMissions(fakeMissions));

    render(
      <Provider store={store}>
        <Missions />
        </Provider>,
    );

    await waitFor(() => {
      const missionName = screen.getByText('Mission 1');
      const description = screen.getByText('Description 1');
      const joinButton = screen.getByText('Join Mission');

      expect(missionName).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(joinButton).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText('Join Mission'));

    expect(store.getActions()).toContainEqual({
      type: 'missions/joinMission',
      payload: '1',
    });
  });
});