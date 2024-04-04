import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import EmptyMessage from './EmptyMessage';

describe('EmptyMessage component', () => {
  it('renders without crashing', () => {
    render(<EmptyMessage message="No data available" />);

    const messageElement = screen.getByText('No data available');
    expect(messageElement).toBeDefined();
  });

  it('displays the message passed as a prop', () => {
    const testMessage = 'No results found';
    render(<EmptyMessage message={testMessage} />);

    const messageElement = screen.getByText(testMessage);
    expect(messageElement).toBeDefined();
    expect(messageElement.textContent).toBe(testMessage);
  });

  it('has the correct className for css style', () => {
    render(<EmptyMessage message="Nothing to display" />);

    const messageElement = screen.getByText('Nothing to display');
    expect(messageElement.className).toBe('empty__message-title');

    const containerElement = messageElement.parentElement;
    expect(containerElement).toBeDefined();
    expect(containerElement).toContain(messageElement);
  });
});
