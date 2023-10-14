import React from 'react';
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Dragons from '../Dragons';
import { getDragon } from '../../redux/slice/dragons/DragonSlice';

const mockStore = configureStore([thunk]);

describe('Dragons Component', () => {
  let store;

  beforeEach(() => {
    const initialState = {
      dragons: {
        dragons: [
          {
            id: '1',
            name: 'Dragon 1',
            description: 'Description 1',
            flickr_images: 'image_url',
            reserved: false,
          },
        ],
      },
    };
    store = mockStore(initialState);
  });

  test('renders dragons and handles activation actions', async () => {
    const fakeDragons = [
      {
        id: '1',
        name: 'Dragon 1',
        description: 'Description 1',
        flickr_images: 'image_url',
        reserved: false,
      },
    ];

    store.dispatch(getDragon(fakeDragons));

    render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );

    await waitFor(() => {
      const dragonName = screen.getByText('Dragon 1');
      const description = screen.getByText('Description 1');
      const activateButton = screen.getByText('Reserve Dragon');

      expect(dragonName).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(activateButton).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Reserve Dragon'));

    const actions = store.getActions();
    const expectedAction = { type: 'dragon/reserveDragon', payload: '1' };
    expect(actions).toContainEqual(expectedAction);
  });
});
