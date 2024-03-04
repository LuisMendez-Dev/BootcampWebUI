import { useSelector } from 'react-redux';
import Divisor from '../../components/divisor/Divisor';
import CardList from '../../components/cardlist/CardList';
import Card from '../../components/card/Card';
import shuffleWithSlice from '../../utils/shuffleData';
import './overviewPage.css';

function OverviewPage() {
  const contacts = useSelector((state) => state.contacts.contacts);

  const renderContactsCards = () => {
    const shuffledContacts = shuffleWithSlice(contacts, 0, 6);

    return shuffledContacts.map((contact) => (
      <Card
        key={contact.id}
        contactImage={contact.avatar}
        contactName={`${contact.first_name} ${contact.last_name}`}
        contactEmail={contact.email}
      />
    ));
  };

  return (
    <section className="overview">
      <Divisor divisorTitle="Favorites" className="overview__divisor" />
      <div className="overview__section-favorites"></div>{' '}
      <Divisor divisorTitle="Contact List" className="overview__divisor" />
      <div className="overview__section-contact">
        {!contacts || contacts.length === 0 ? (
          <p>No contacts available. Sad :C</p>
        ) : (
          <CardList>{renderContactsCards()}</CardList>
        )}
      </div>
    </section>
  );
}

export default OverviewPage;
