import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { allNewDice } from './utils/generateDies';

describe('App', () => {
  it('renders text', () => {
    render(<App />);
    const textElement = screen.getByText(/Roll until/i);
    expect(textElement).toBeInTheDocument();
  });
})

test ('It should generate array of random numbers', () => {
  const array = allNewDice()
  expect(array).toHaveLength(10)
})
