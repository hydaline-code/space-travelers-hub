import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../Navigation';

describe('Navigation Component', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
