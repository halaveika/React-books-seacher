import React from 'react';
import { usePagination, DOTS } from './usePagination';
import './pagination.scss';
import Select from '../select';
import { SelectProps } from '../select/select';

type usePaginationProps = {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  selectPageSizeProps: SelectProps;
};

const Pagination = (props: usePaginationProps) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    selectPageSizeProps,
  } = props;
  const { classname, selectValue, initialValue, valueArr } = selectPageSizeProps;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange!.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange![paginationRange!.length - 1];
  return (
    <div className="pagination">
      <ul className="pagination-container">
        <li
          key={currentPage}
          className={`pagination-item${currentPage === 1 ? ' disabled' : ''}`}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li>
        {paginationRange!.map((pageNumber, i) => {
          if (pageNumber === DOTS) {
            return (
              <li key={pageNumber + i} className="pagination-item dots">
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={pageNumber}
              className={`pagination-item${pageNumber === currentPage ? ' selected' : ''}`}
              onClick={() => onPageChange(Number(pageNumber))}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          className={`pagination-item${currentPage === lastPage ? ' disabled' : ''}`}
          onClick={onNext}
        >
          <div className="arrow right" />
        </li>
      </ul>
      <Select
        classname={classname}
        selectValue={selectValue}
        initialValue={initialValue}
        valueArr={valueArr}
      ></Select>
    </div>
  );
};

export default Pagination;
