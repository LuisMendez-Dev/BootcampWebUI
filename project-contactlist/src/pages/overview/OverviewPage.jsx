// OverviewPage.js
import { useSelector } from 'react-redux';
import Divisor from '../../components/divisor/Divisor';
import CardList from '../../components/cardlist/CardList';
import Card from '../../components/card/Card';
import shuffleWithSlice from '../../utils/shuffleData';
import './overviewPage.css';

const MAX_CARDS_CONTACTS = 6;
const MAX_CARDS_FAVORITES = 4;

function OverviewPage() {
  const favorites = useSelector((state) => state.contacts.favorites);
  const contacts = useSelector((state) => state.contacts.contacts);

  const shuffleData = (data, max) => shuffleWithSlice(data, 0, max);

  const renderContactsCards = () => {
    const shuffledContacts = shuffleData(contacts, MAX_CARDS_CONTACTS);
    return shuffledContacts.map((contact) => (
      <Card
        key={contact.id}
        contactImage={contact.avatar}
        contactName={`${contact.first_name} ${contact.last_name}`}
        contactEmail={contact.email}
        cardType="contactOverview"
        buttons={['addFavorite']}
        contactId={contact.id}
      />
    ));
  };

  const renderFavoritesCards = () => {
    const shuffledFavorites = shuffleData(favorites, MAX_CARDS_FAVORITES);
    return shuffledFavorites.map((contact) => (
      <Card
        key={contact.id}
        contactImage={contact.avatar}
        contactName={`${contact.first_name} ${contact.last_name}`}
        contactEmail={contact.email}
        cardType="favoriteOverview"
        buttons={['removeFavorite']}
        contactId={contact.id}
      />
    ));
  };

  return (
    <section className="overview">
      <Divisor divisorTitle="Favorites" className="overview__divisor" />
      <div className="overview__section-favorites">
        {favorites.length > 0  ? (
          <CardList>{renderFavoritesCards()}</CardList>
        ) : (
          <p>No favorites available. Add some! :D</p>
        )}
      </div>
      <Divisor divisorTitle="Contact List" className="overview__divisor" />
      <div className="overview__section-contact">
        {contacts && contacts.length > 0 ? (
          <CardList>{renderContactsCards()}</CardList>
        ) : (
          <p>No contacts available. Sad :C</p>
        )}
      </div>
    </section>
  );
}

export default OverviewPage;
