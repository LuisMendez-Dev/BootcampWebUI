/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import {
  MAX_PAGE_NUMBER_LIMIT,
  MIN_PAGE_NUMBER_LIMIT,
} from '../../utils/constants';
import previousIcon from '../../assets/icons/previous.svg';
import nextIcon from '../../assets/icons/next.svg';
import firstIcon from '../../assets/icons/first.svg';
import lastIcon from '../../assets/icons/last.svg';
import './pagination.css';

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
  data,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    onPageChange(currentItems);
  }, [currentPage, data]);

  for (let i = 1; i <= totalPages; i++) {
    if (i < MAX_PAGE_NUMBER_LIMIT + 1 && i > MIN_PAGE_NUMBER_LIMIT) {
      pageNumbers.push(i);
    }
  }

  const handleNextPage = () => {
    paginate(currentPage + 1);
  };

  const handlePreviousPage = () => {
    paginate(currentPage - 1);
  };

  const handleFirstPage = () => {
    paginate(1);
  };

  const handleLastPage = () => {
    paginate(totalPages);
  };

  return (
    <div className="pagination">
      <div className="pagination__info">
        <span className="pagination__current-page">{`${currentPage} of ${totalPages}`}</span>
      </div>
      <div className="pagination__buttons">
        <button
          className="pagination__button pagination__button--first"
          onClick={handleFirstPage}
          disabled={currentPage === 1}
        >
          <img className="pagination__icon" src={firstIcon} alt="First icon" />
        </button>
        <button
          className="pagination__button pagination__button--previous"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <img
            className="pagination__icon"
            src={previousIcon}
            alt="Previous icon"
          />
        </button>
        <button
          className="pagination__button pagination__button--next"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <img className="pagination__icon" src={nextIcon} alt="Next icon" />
        </button>
        <button
          className="pagination__button pagination__button--last"
          onClick={handleLastPage}
          disabled={currentPage === totalPages}
        >
          <img className="pagination__icon" src={lastIcon} alt="Last icon" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
