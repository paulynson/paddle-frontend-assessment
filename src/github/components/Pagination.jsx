import React from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({ handlePageClick }) {
  return (
    <div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={30}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'container flex gap-3 my-8 justify-center'}
        pageClassName={'linked'}
        pageLinkClassName={'linked'}
        previousClassName={'linked'}
        previousLinkClassName={'linked'}
        nextClassName={'linked'}
        nextLinkClassName={'linked'}
        breakLinkClassName={'linked'}
        breakClassName={'linked'}
        activeClassName={'active text-white'}
      />
    </div>
  );
}

export default Pagination;
