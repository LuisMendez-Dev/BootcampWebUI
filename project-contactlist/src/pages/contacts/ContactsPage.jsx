import { useSelector } from 'react-redux';
import { allContactsSelector } from '../../redux/contactsSlice.js';
import Divisor from '../../components/divisor/Divisor';
import CardList from '../../components/cardlist/CardList';
import Card from '../../components/card/Card';
import { shuffleData } from '../../utils/shuffleData.js';
import { useEffect, useState } from 'react';
import Pagination from '../../components/pagination/Pagination.jsx';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './contactsPage.css';

function ContactsPage() {
  const allContacts = shuffleData(useSelector(allContactsSelector));

  // PAGINATION ROUTING
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;

  // PAGINATION LOGIC
  const [itemsPerPage] = useState(6);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allContacts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setSearchParams({ page: pageNumber });
  };

  useEffect(() => {
    navigate(`?page=${currentPage}`);
  }, [currentPage, navigate]);

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
          <p>No contacts available. Sad :C</p>
        ) : (
          <>
            <CardList>{renderAllContactsCards()}</CardList>
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={allContacts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </>
        )}
      </div>
    </section>
  );
}

export default ContactsPage;
