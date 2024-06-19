import { Pagination as ReactPagination } from 'react-bootstrap';


const Pagination = ({pageNumbers, currentPage, handlePageClick}) => {
    console.log('pageNumbers', pageNumbers, 'currentPage', currentPage)
    return (
        <ReactPagination>
            {pageNumbers.map(number => (
                <ReactPagination.Item key={number} active={number === currentPage} onClick={() => handlePageClick(number)}>
                    {number}
                </ReactPagination.Item>
            ))}
        </ReactPagination>
    )
}

export default Pagination;