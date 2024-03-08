import { useSelector } from 'react-redux';
import './favoritesPage.css';
import CardList from '../../components/cardlist/CardList';
import Card from '../../components/card/Card';
import Divisor from '../../components/divisor/Divisor';

function FavoritesPage() {
  const favorites = useSelector((state) => state.contacts.favorites);

  const renderFavoritesCards = () =>
    favorites.map((contact) => (
      <Card
        key={contact.id}
        contactImage={contact.avatar}
        contactName={`${contact.first_name} ${contact.last_name}`}
        contactEmail={contact.email}
        cardType={'favorites'}
        buttons={['removeFavorite']}
        contactId={contact.id}
      />
    ));

  return (
    <section className="favorites">
      <Divisor divisorTitle="Favorites" />
      <div className="favorites__section">
        {favorites.length > 0 ? (
          <CardList>{renderFavoritesCards()}</CardList>
        ) : (
          <p>No favorites available. Add some! :D</p>
        )}
      </div>
    </section>
  );
}

export default FavoritesPage;
