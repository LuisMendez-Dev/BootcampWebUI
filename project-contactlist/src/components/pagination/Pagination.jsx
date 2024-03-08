import {
  MAX_PAGE_NUMBER_LIMIT,
  MIN_PAGE_NUMBER_LIMIT,
} from '../../utils/constants';
import './pagination.css';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];

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
      {`${currentPage} of ${totalPages}`}
      <button onClick={handleFirstPage} disabled={currentPage === 1}>
        First
      </button>
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
      <button onClick={handleLastPage} disabled={currentPage === totalPages}>
        Last
      </button>
    </div>
  );
};

export default Pagination;
