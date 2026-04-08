import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react';

// Setup the fake fetch before the tests run
beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(["What is your city?"]),
    })
  );
});

// Clear the mock after tests
afterEach(() => {
  jest.clearAllMocks();
});

test('renders security questions title', async () => {
  // Use act to handle the state update inside QuestionList
  await act(async () => {
    render(<App />);
  });

  // Use findBy to wait for the text to appear
  const titleElement = await screen.findByText(/Security Questions/i);
  expect(titleElement).toBeInTheDocument();
});