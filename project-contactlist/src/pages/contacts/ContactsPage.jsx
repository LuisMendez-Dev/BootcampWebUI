import { useSelector } from 'react-redux';
import { allContactsSelector } from '../../redux/contactsSlice.js';
import Divisor from '../../components/divisor/Divisor';
import CardList from '../../components/cardlist/CardList';
import Card from '../../components/card/Card';
import { useState } from 'react';
import Pagination from '../../components/pagination/Pagination.jsx';
import { useSearchParams } from 'react-router-dom';
import { ITEMS_PER_PAGE } from '../../utils/constants.js';
import './contactsPage.css';
import EmptyMessage from '../../components/emptyDataMessage/EmptyMessage.jsx';

const ContactsPage = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const allContacts = useSelector(allContactsSelector);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;

  const paginate = (pageNumber) => {
    setSearchParams({ page: pageNumber });
  };

  const handlePageChange = (newItems) => {
    setCurrentItems(newItems);
  };

  const renderAllContactsCards = () => {
    return currentItems.map((contact) => (
      <Card
        key={contact.id}
        contactId={contact.id}
        contactImage={contact.avatar}
        contactName={`${contact.first_name} ${contact.last_name}`}
        contactEmail={contact.email}
        cardType={contact.isFavorite ? 'favoriteContacts' : 'default'}
        buttons={
          contact.isFavorite
            ? ['removeFavoriteContacts', 'deleteContact']
            : ['addFavorite', 'deleteContact']
        }
      />
    ));
  };
  return (
    <section className="contacts">
      <Divisor divisorTitle="Contact List" />
      <div className="overview__section-contact">
        {!allContacts || allContacts.length === 0 ? (
          <EmptyMessage message="No contacts available. Sad :C" />
        ) : (
          <>
            <CardList>{renderAllContactsCards()}</CardList>
            <Pagination
              itemsPerPage={ITEMS_PER_PAGE}
              totalItems={allContacts.length}
              paginate={paginate}
              currentPage={currentPage}
              data={allContacts}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default ContactsPage;
