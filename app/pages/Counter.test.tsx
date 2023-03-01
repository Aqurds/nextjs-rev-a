import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CountProvider } from '../components/CountContext';
import Counter from './Counter';

describe('Counter', () => {
  it('should increment count on click', () => {
    render(
      <CountProvider>
        <Counter />
      </CountProvider>
    );
    const countDisplay = screen.getByText(/count/i);
    const incrementButton = screen.getByText(/increment/i);
    userEvent.click(incrementButton);
    expect(countDisplay).toHaveTextContent('Count: 1');
  });
});
