import { render, screen } from '@testing-library/react';
import App from './App';
import { expect, test } from 'vitest'; // Импортируем из Vitest
import React from 'react';

test('renders the application', () => {
  render(<App />);
  const linkElement = screen.getByText(/Say Hi!/i);
  expect(linkElement).toBeInTheDocument();
});

test('checks footer contains copyright text', () => {
  render(<App />);
  const footerElement = screen.getByText(/Company Name/i);
  expect(footerElement).toBeInTheDocument();
});
