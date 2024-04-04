import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Card from './Card';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const mockStoreRedux = configureStore({ reducer: () => ({}) });

describe('Card component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the card with the provided data', () => {
    const contactInfo = {
      contactImage: 'image-url.jpg',
      contactName: 'Pepito Perez',
      contactEmail: 'pepitoPerez@example.com',
      cardType: 'contactOverview',
      buttons: ['addFavorite'],
      contactId: 1,
    };

    render(
      <Provider store={mockStoreRedux}>
        <Card {...contactInfo} />
      </Provider>
    );

    const nameElement = screen.getByText(contactInfo.contactName);
    expect(nameElement).toBeTruthy();

    const emailElement = screen.getByText(contactInfo.contactEmail);
    expect(emailElement).toBeTruthy();

    const imageElement = screen.getByRole('img', {
      name: `Image of ${contactInfo.contactName}`,
    });
    expect(imageElement).toBeTruthy();
    expect(imageElement.src).toBe(
      `http://localhost:3000/` + contactInfo.contactImage
    );
  });

  it('applies the correct image classes based on cardType', () => {
    const contactInfo = {
      contactName: 'Pepito Perez',
      contactImage: 'image-url.jpg',
      contactEmail: 'test@gmail.com',
      cardType: 'favorites',
      buttons: ['removeFavorite'],
      contactId: 1,
    };

    render(
      <Provider store={mockStoreRedux}>
        <Card {...contactInfo} />
      </Provider>
    );

    const imageElements = screen.getAllByRole('img', {
      name: `Image of ${contactInfo.contactName}`,
    });

    expect(imageElements[0].className).toContain('card__image');
    expect(imageElements[0].className).toContain('card__image-favorite');
  });
});
