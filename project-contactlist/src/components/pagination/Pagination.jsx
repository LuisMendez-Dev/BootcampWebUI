/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import previousIcon from '../../assets/icons/previous.svg';
import previousIconDarkMode from '../../assets/icons/previous-dark.svg';
import nextIconDarkMode from '../../assets/icons/next-dark.svg';
import nextIcon from '../../assets/icons/next.svg';
import firstIcon from '../../assets/icons/first.svg';
import firstIconDarkMode from '../../assets/icons/first-dark.svg';
import lastIcon from '../../assets/icons/last.svg';
import lastIconDarkMode from '../../assets/icons/last-dark.svg';
import { useNavigate } from 'react-router-dom';
import './pagination.css';
import { getFromLocalStorage } from '../../services/localStorageService';
import { useSelector } from 'react-redux';

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
  data,
  onPageChange,
}) => {
  const darkMode = useSelector(
    (state) => state.mode.mode || getFromLocalStorage('mode')
  );
  const navigate = useNavigate();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    onPageChange(currentItems);
  }, [currentPage, data]);

  // UseEffect for validation
  useEffect(() => {
    if (currentPage < 1 || currentPage > totalPages) {
      if (currentPage !== 1) {
        navigate(`?page=${1}`);
      }
    }
  }, [currentPage, totalPages, navigate]);

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
          <img
            className="pagination__icon"
            src={darkMode === 'dark' ? firstIconDarkMode : firstIcon}
            alt="First icon"
          />
        </button>
        <button
          className="pagination__button pagination__button--previous"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <img
            className="pagination__icon"
            src={darkMode === 'dark' ? previousIconDarkMode : previousIcon}
            alt="Previous icon"
          />
        </button>
        <button
          className="pagination__button pagination__button--next"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <img
            className="pagination__icon"
            src={darkMode === 'dark' ? nextIconDarkMode : nextIcon}
            alt="Next icon"
          />
        </button>
        <button
          className="pagination__button pagination__button--last"
          onClick={handleLastPage}
          disabled={currentPage === totalPages}
        >
          <img
            className="pagination__icon"
            src={darkMode === 'dark' ? lastIconDarkMode : lastIcon}
            alt="Last icon"
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
