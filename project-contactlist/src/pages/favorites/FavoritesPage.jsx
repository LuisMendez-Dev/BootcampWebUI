import { useSelector } from 'react-redux';
import './favoritesPage.css';
import CardList from '../../components/cardlist/CardList';
import Card from '../../components/card/Card';
import Divisor from '../../components/divisor/Divisor';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Pagination from '../../components/pagination/Pagination';
import { ITEMS_PER_PAGE } from '../../utils/constants';
import EmptyMessage from '../../components/emptyDataMessage/EmptyMessage';

const FavoritesPage = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const favorites = useSelector((state) => state.contacts.favorites);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;

  const paginate = (pageNumber) => {
    setSearchParams({ page: pageNumber });
  };

  useEffect(() => {
    navigate(`?page=${currentPage}`);
  }, [currentPage, navigate]);

  const handlePageChange = (newItems) => {
    setCurrentItems(newItems);
  };

  const renderFavoritesCards = () =>
    currentItems.map((contact) => (
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
        {!favorites || favorites.length === 0 ? (
          <EmptyMessage message="No favorites available. Sad :c" />
        ) : (
          <>
            <CardList>{renderFavoritesCards()}</CardList>
            <Pagination
              itemsPerPage={ITEMS_PER_PAGE}
              totalItems={favorites.length}
              paginate={paginate}
              currentPage={currentPage}
              data={favorites}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default FavoritesPage;
