import Divisor from '../../components/divisor/Divisor';
import Spinner from '../../components/spinner/Spinner';
import useFetchData from '../../hooks/useFetchData';
import './overviewPage.css';
import CardList from '../../components/cardlist/CardList';
import Card from '../../components/card/Card';

const BASE_URL = 'https://reqres.in/api/users';
const QUANTITY = 6;

function OverviewPage() {
  const { data, error, loading, refetchData } = useFetchData(
    BASE_URL + `?per_page=${QUANTITY}`
  );

  const showContactsCardList = () => {
    return (
      !loading &&
      !error &&
      data.data &&
      data.data.map((contact) => (
        <Card
          key={contact.id}
          contactImage={contact.avatar}
          contactName={`${contact.first_name} ${contact.last_name}`}
          contactEmail={contact.email}
        />
      ))
    );
  };

  return (
    <section className="overview">
      <Divisor divisorTitle="Favorites" className="overview__divisor" />
      <div className="overview__section-favorites"></div> {/* TODO */}
      <Divisor divisorTitle="Contact List" className="overview__divisor" />
      <div className="overview__section-contact">
        {loading && <Spinner />}
        {error && <p className="overview__error">{error.message}</p>}
        <CardList>{showContactsCardList()}</CardList>
      </div>
    </section>
  );
}

export default OverviewPage;
