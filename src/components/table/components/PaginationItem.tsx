import { Pagination } from "react-bootstrap";
import { useEffect, useState } from "react";
import _ from "lodash";

// import React from 'react'
function PaginationItem(props: any) {
  const { paginationCount, setItemList } = props;

  const [cilckActive, setCilckActive] = useState<any>(1);
  useEffect(() => {
    let isList: any = localStorage.getItem("paginationItem");
    // console.log(paginationCount.length);

    if (paginationCount.length == 1) {
      isList = Number(1);
    } else isList = Number(isList);
    // console.log(isList);

    if (isList > 1) {
      setCilckActive(isList);
      setItemList(isList);
    }
  }, []);
  const setActivePage = (page: any, idx: any, item: any) => {
    // console.log("page: " + page + " idx: " + idx + " item: " + item);
    localStorage.setItem("paginationItem", page);
    setCilckActive(page);
    setItemList(page);
    // setItemList()
  };

  return (
    <>
      <Pagination >
        {_.map(paginationCount, (item, idx) => {
          return (
            <div key={idx + 1}>
              {cilckActive == idx + 1 ? (
                <Pagination.Item active>{idx + 1}</Pagination.Item>
              ) : (
                <Pagination.Item
                  onClick={() => {
                    setActivePage(idx + 1, idx, item);
                  }}
                >
                  {idx + 1}
                </Pagination.Item>
              )}
            </div>
          );
        })}
      </Pagination>
    </>
  );
}
/*
   <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
*/
export default PaginationItem;
