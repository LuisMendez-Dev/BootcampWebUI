import { describe, it, expect, vi, afterEach } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import CardButton from './CardButton';
import contactsSlice, { removeFromFavorites } from '../../redux/contactsSlice';

const mockStoreRedux = configureStore({ reducer: () => ({}) });

describe('CardButton', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders without crashing', () => {
    render(
      <Provider store={mockStoreRedux}>
        <CardButton type="removeFavorite" contactId={1} />
      </Provider>
    );
    const button = screen.getByRole('button', {
      name: 'Remove from favorites',
    });
    expect(button).toBeDefined();
  });

  it('has the correct class for addFavorite type', () => {
    render(
      <Provider store={mockStoreRedux}>
        <CardButton type="addFavorite" contactId="1" />
      </Provider>
    );
    const buttons = screen.getAllByRole('button', { name: 'Add to favorites' });
    const favoriteButton = buttons.find((button) =>
      button.className.includes('card__button-favorite')
    );
    expect(favoriteButton).toBeDefined();
    expect(favoriteButton.className).toContain(
      'card__button card__button-favorite'
    );
  });

  it('dispatches removeFromFavorites when removeFavoriteContacts button is clicked', () => {
    const store = configureStore({
      reducer: {
        contacts: contactsSlice,
      },
    });

    const dispatchSpy = vi.spyOn(store, 'dispatch');

    render(
      <Provider store={store}>
        <CardButton type="removeFavoriteContacts" contactId={1} />
      </Provider>
    );

    const button = screen.getByLabelText(
      'Remove from favorites in contacts list'
    );
    fireEvent.click(button);

    expect(dispatchSpy).toHaveBeenCalledWith(removeFromFavorites(1));

    dispatchSpy.mockRestore();
  });
});
