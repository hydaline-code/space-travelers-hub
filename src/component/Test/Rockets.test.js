import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Rockets from '../Rockets';
import { fetchRockets, reserveRocket } from '../../redux/slice/rockets/RocketSlice';

const mockStore = configureStore([thunk]);

describe('Rockets Component', () => {
  let store;

  beforeEach(() => {
    const initialState = {
      rockets: {
        rockets: [
          {
            id: '1',
            rocket_name: 'Falcon 1',
            description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.',
            flickr_images: ['image_url'],
            reserved: false,
          },
        ],
      },
    };
    store = mockStore(initialState);
  });

  test('renders rockets and handles activation actions', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>
    );

    await waitFor(() => {
      const rocketName = screen.getByText(/Falcon 1/i); 
      const description = screen.getByText(/The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009/i); // Use a regular expression
      const reserveButton = screen.getByText(/Reserve Rocket/i);

      expect(rocketName).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(reserveButton).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText(/Reserve Rocket/i)); 

    const actions = store.getActions();
    const expectedAction = { type: 'rockets/reserveRocket', payload: '1' };
    expect(actions).toContainEqual(expectedAction);
  });
});
