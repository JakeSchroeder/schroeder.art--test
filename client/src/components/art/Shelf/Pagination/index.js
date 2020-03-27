import React from "react";
import styled from "styled-components";

import Colors from "./utils/Colors";

const PaginationWrapper = styled.div`
  border-top: 1px solid ${Colors.Border};
  margin-top: 32px;
  padding-top: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PaginationList = styled.ul`
  display: flex;

  align-items: center;
`;

const PaginationItem = styled.li`
  padding: 16px;
  border: 1px solid ${Colors.Border};
  margin-right: 10px;
  cursor: pointer;
  &.active {
    background: ${Colors.Primary};
    color: ${Colors.White};
  }
`;

const Pagination = ({
  productsPerPage,
  totalProducts,
  changePage,
  currentPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper>
      <PaginationList>
        {pageNumbers.map(number => (
          <PaginationItem
            key={number}
            className={currentPage === number ? "active" : ""}
            onClick={() => changePage(number)}
          >
            {number}
          </PaginationItem>
        ))}
      </PaginationList>
    </PaginationWrapper>
  );
};

export default Pagination;
