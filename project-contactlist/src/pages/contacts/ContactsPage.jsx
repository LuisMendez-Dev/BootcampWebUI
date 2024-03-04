import { useSelector } from 'react-redux';
import Divisor from '../../components/divisor/Divisor';
import './contactsPage.css';
import CardList from '../../components/cardlist/CardList';
import Card from '../../components/card/Card';

function ContactsPage() {
  const contacts = useSelector((state) => state.contacts.contacts);

  const renderContactsCards = () => {
    return contacts.map((contact) => (
      <Card
        key={contact.id}
        contactImage={contact.avatar}
        contactName={`${contact.first_name} ${contact.last_name}`}
        contactEmail={contact.email}
      />
    ));
  };

  return (
    <section className="contacts">
      <Divisor divisorTitle="Contact List" />
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

export default ContactsPage;
