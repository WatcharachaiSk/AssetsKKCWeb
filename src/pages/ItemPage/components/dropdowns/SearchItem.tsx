import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import _ from "lodash";

function SearchItem(props: any) {
  const { getItems, setDataFilter } = props;


  const [items, setItems] = useState<object>(getItems);
  // console.log(items);
  const [facultys, setFacultys] = useState<any>();
  const [department, setDepartment] = useState<any>();
  const [building, setBuilding] = useState<any>();
  const [location, setLocation] = useState<any>();
  const [statusItem, setStatusItem] = useState<any>();
  // console.log(statusItem);

  const [pickAll, setPickAll] = useState<string>("all");
  // console.log(pickAll);

  const [pickFacultys, setPickFacultys] = useState<string>("0");
  const [pickDepartment, setPickDepartment] = useState<string>("0");
  const [pickBuilding, setPickBuilding] = useState<string>("0");
  const [pickLocation, setPickLocation] = useState<string>("0");
  const [pickStatusItem, setPickStatusItem] = useState<any>("0");
  const [selected, setSelected] = useState<any>({
    filter: "all",
    value: "all",
  });

  useEffect(() => {}, [
    pickAll,
    pickFacultys,
    pickDepartment,
    pickBuilding,
    pickLocation,
    pickStatusItem,
  ]);

  useEffect(() => {
    if (getItems) {
      setItems(getItems);

      let arrFaculty = [],
        arrDepartment = [],
        arrBuilding = [],
        arrLocation = [],
        arrStatusItem = [];
      for (let i = 0; i < getItems.length; i++) {
        arrFaculty.push(getItems[i]?.faculty?.nameTH);
        arrDepartment.push(getItems[i]?.department?.nameTH);
        arrBuilding.push(getItems[i]?.building?.nameTH);
        arrLocation.push(getItems[i]?.location?.nameTH);
        arrStatusItem.push(getItems[i]?.status_item);
      }

      setFacultys(Array.from(new Set(arrFaculty)));
      setDepartment(Array.from(new Set(arrDepartment)));
      setBuilding(Array.from(new Set(arrBuilding)));
      setLocation(Array.from(new Set(arrLocation)));
      setStatusItem(Array.from(new Set(arrStatusItem)));
    }
  }, [getItems]);

  useEffect(() => {
    if (selected?.filter === "facultys") {
      const dataItemFac = _.filter(getItems, (item: any) => {
        return item?.faculty?.nameTH === selected?.value;
      });
      setDataFilter(dataItemFac);
    } else if (selected?.filter === "department") {
      const dataItemDpm = _.filter(getItems, (item: any) => {
        return item?.department?.nameTH === selected?.value;
      });
      setDataFilter(dataItemDpm);
    } else if (selected?.filter === "building") {
      const dataItemBud = _.filter(getItems, (item: any) => {
        return item?.building?.nameTH === selected?.value;
      });
      setDataFilter(dataItemBud);
    } else if (selected?.filter === "location") {
      const dataItemLocate = _.filter(getItems, (item: any) => {
        return item?.location?.nameTH === selected?.value;
      });
      setDataFilter(dataItemLocate);
    } else if (selected?.filter === "location") {
      const dataItemLocate = _.filter(getItems, (item: any) => {
        return item?.location?.nameTH === selected?.value;
      });
      setDataFilter(dataItemLocate);
    } else if (selected?.filter === "status_item") {
      const dataItemLocate = _.filter(getItems, (item: any) => {
        return (
          item?.status_item === (selected?.value === "true" ? true : false)
        );
      });
      setDataFilter(dataItemLocate);
    } else {
      setDataFilter(undefined);
    }

    // console.log(selected);
  }, [selected]);

  const BoxFlex = styled.div`
    display: flex;
    align-items: center;
  `;

  return (
    <>
      <BoxFlex>
        <Button
          className="d-inline mx-2 m-1"
          onClick={() => {
            setPickAll("all");
            setPickFacultys("0");
            setPickDepartment("0");
            setPickBuilding("0");
            setPickLocation("0");
            setPickStatusItem("0");

            setSelected({
              filter: "all",
              value: "all",
            });
          }}
          style={{
            color: pickAll == "all" ? "#fff" : "#000",
            borderColor: "#ced4da",
          }}
          variant={pickAll == "all" ? "secondary" : "outline-secondary"}
        >
          ค้นหาทั้งหมด
        </Button>
      </BoxFlex>

      <BoxFlex>
        <Form.Select
          value={pickFacultys}
          className="d-inline mx-2 m-1"
          aria-label="Default select example"
          onChange={(e) => {
            setPickFacultys(e.target.value);
            //
            setPickDepartment("0");
            setPickBuilding("0");
            setPickLocation("0");
            setPickStatusItem("0");
            setPickAll("0");

            //
            if (e.target.value != "0") {
              setSelected({
                filter: "facultys",
                value: e.target.value,
              });
            } else {
              setSelected("");
            }
          }}
        >
          <option value={"0"}>ค้นหาตามคณะ</option>
          {_.map(facultys, (item: any, idx: number) => {
            return (
              <option key={idx} value={item}>
                {item}
              </option>
            );
          })}
        </Form.Select>
      </BoxFlex>

      <BoxFlex>
        <Form.Select
          className="d-inline mx-2 m-1"
          aria-label="Default select example"
          value={pickDepartment}
          onChange={(e) => {
            setPickDepartment(e.target.value);
            setPickFacultys("0");
            setPickBuilding("0");
            setPickLocation("0");
            setPickStatusItem("0");
            setPickAll("0");

            if (e.target.value != "0") {
              setSelected({
                filter: "department",
                value: e.target.value,
              });
            } else {
              setSelected("");
            }
          }}
        >
          <option value={"0"}>ค้นหาตามสาขา</option>
          {_.map(department, (item: any, idx: number) => {
            return (
              <option key={idx} value={item}>
                {item}
              </option>
            );
          })}
        </Form.Select>
      </BoxFlex>
      {/*  */}
      <BoxFlex>
        <Form.Select
          className="d-inline mx-2 m-1"
          aria-label="Default select example"
          value={pickBuilding}
          onChange={(e) => {
            setPickBuilding(e.target.value);

            setPickFacultys("0");
            setPickDepartment("0");
            setPickLocation("0");
            setPickStatusItem("0");
            setPickAll("0");

            if (e.target.value != "0") {
              setSelected({
                filter: "building",
                value: e.target.value,
              });
            } else {
              setSelected("");
            }
          }}
        >
          <option value={"0"}>ค้นหาตามอาคาร</option>
          {_.map(building, (item: any, idx: number) => {
            return (
              <option key={idx} value={item}>
                {item}
              </option>
            );
          })}
        </Form.Select>
      </BoxFlex>
      {/*  */}
      <BoxFlex>
        <Form.Select
          className="d-inline mx-2 m-1"
          aria-label="Default select example"
          value={pickLocation}
          onChange={(e) => {
            setPickLocation(e.target.value);
            setPickFacultys("0");
            setPickDepartment("0");
            setPickBuilding("0");
            setPickStatusItem("0");
            setPickAll("0");

            if (e.target.value != "0") {
              setSelected({
                filter: "location",
                value: e.target.value,
              });
            } else {
              setSelected("");
            }
          }}
        >
          <option value={"0"}>ค้นหาตามสถานที่</option>
          {_.map(location, (item: any, idx: number) => {
            return (
              <option key={idx} value={item}>
                {item}
              </option>
            );
          })}
        </Form.Select>
      </BoxFlex>
      <BoxFlex>
        <Form.Select
          className="d-inline mx-2 m-1"
          aria-label="Default select example"
          value={pickStatusItem}
          onChange={(e: any) => {
            const value = e.target.value;
            setPickStatusItem(value);
            setPickFacultys("0");
            setPickDepartment("0");
            setPickBuilding("0");
            setPickLocation("0");
            setPickAll("0");

            if (e.target.value != "0") {
              setSelected({
                filter: "status_item",
                value: e.target.value,
              });
            } else {
              setSelected("");
            }
          }}
        >
          <option value={"0"}>ค้นหาตามสถานะ</option>
          {_.map(statusItem, (item: any, idx: number) => {
            return (
              <option key={idx} value={item}>
                {item ? "ปกติ" : "ชำรุด"}
              </option>
            );
          })}
        </Form.Select>
      </BoxFlex>
    </>
  );
}

export default SearchItem;