import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import QuestionList from './QuestionList';
import '@testing-library/jest-dom';
import { act } from 'react';
global.fetch = jest.fn();
const mockQuestions = ["What is your pet's name?", "What is your city?", "What is your car?"];

describe('QuestionList Frontend Unit Tests', () => {
  
  beforeEach(() => {
    fetch.mockClear();
    fetch.mockImplementation((url) => {
      if (url.includes('/api/questions')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockQuestions),
        });
      }
      return Promise.resolve({ ok: true }); 
    });
  });
  afterEach(cleanup);

  test('1. Fetches and displays security questions on load', async () => {
    render(<QuestionList />);
    const title = await screen.findByText(/Security Questions/i);
    expect(title).toBeInTheDocument();
    
    const dropdowns = await screen.findAllByRole('combobox');
    expect(dropdowns).toHaveLength(5);
  });

  test('2. Toggles answer masking when "Hide Answers" is clicked', async () => {
    render(<QuestionList />);
    await screen.findAllByRole('combobox'); 

    const checkbox = screen.getByLabelText(/Hide Answers/i);
    const answerInput = screen.getAllByPlaceholderText('Answer')[0];
    expect(answerInput.type).toBe('text');
    fireEvent.click(checkbox);
    expect(answerInput.type).toBe('password'); 
  });

  test('3. Removes a selected question from other dropdown lists', async () => {
    render(<QuestionList />);
    const dropdowns = await screen.findAllByRole('combobox');
    fireEvent.change(dropdowns[0], { target: { value: mockQuestions[1] } });
    const secondBoxOptions = Array.from(dropdowns[1].options).map(o => o.value);
    expect(secondBoxOptions).not.toContain(mockQuestions[1]);
  });

 
  test('4. Displays error if Answer and Confirm Answer do not match', async () => {
    render(<QuestionList />);
    const dropdowns = await screen.findAllByRole('combobox');

    // Setup first question
    fireEvent.change(dropdowns[0], { target: { value: mockQuestions[0] } });
    fireEvent.change(screen.getAllByPlaceholderText('Answer')[0], { target: { value: 'Correct' } });
    fireEvent.change(screen.getAllByPlaceholderText('Confirm Answer')[0], { target: { value: 'Wrong' } });

    fireEvent.click(screen.getByText(/Submit Responses/i));

    const error = await screen.findByText((content) => content.includes('Answer 1 does not match'));
    expect(error).toBeInTheDocument();
  });
});