import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange: null,
};

function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { currentPage, totalPage } = pagination;

    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage);
        }
    }

    return (
        <div className='pagination'>
            <button
                // className='pagination'
                disabled={currentPage <= 1}
                onClick={() => handlePageChange(currentPage - 1)}
            >
                <i class="fas fa-chevron-left"></i>

            </button>

            <button
                // className='pagination'
                disabled={currentPage >= totalPage}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                <i class="fas fa-chevron-right"></i>
            </button>


        </div>
    );
}

export default Pagination;