// import React from 'react';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import App from './App'; // Import your App component

// const mockStore = configureStore([]);

// describe('App Component', () => {
//   it('renders the App component', () => {
//     const store = mockStore({}); // You can provide your initial state here

//     const { getByText } = render(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );

    
// describe('Missions Component', () => {
//   it('handles joining a mission', () => {
//     const store = mockStore(initialState);

//     const { getByText } = render(
//       <Provider store={store}>
//         <Missions />
//       </Provider>
//     );

//     const joinButton = getByText('Join Mission');
//     fireEvent.click(joinButton);

//     // Check if the correct action is dispatched
//     const actions = store.getActions();
//     expect(actions).toEqual([{ type: 'missions/joinMission', payload: '1' }]);
//   });
//   });
// });

// });
