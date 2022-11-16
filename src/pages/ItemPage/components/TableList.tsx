import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import _ from "lodash";
function TableList(props: any) {
  const { itemList, navigatePage } = props;

  return (
    <div style={{ margin: 30 }}>
      <Table
        style={{ paddingTop: 50, textAlign: "center", fontSize: 22 }}
        responsive="sm"
        striped
        bordered
        hover
      >
        {/*  */}
        <thead>
          <tr>
            <th>ลำดับ</th>
            <th>Edit</th>
            <th>Code</th>
            <th>Faculty</th>
            <th>Department</th>
            <th>Building</th>
            <th>Location</th>
            <th>Cost</th>
            <th>Item status</th>
            <th>Creator</th>
            <th>Created at</th>
          </tr>
        </thead>
        {/*  */}
        <tbody>
          {_.map(itemList, (item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>
                  <Button
                    variant="outline-secondary"
                    onClick={() => {
                      navigatePage("/items/editItem", item.id);
                    }}
                  >
                    <AiFillEdit color="red" size={20} />
                  </Button>
                </td>
                <td>{item.code}</td>
                <td>{item.faculty}</td>
                <td>{item.department}</td>
                <td>{item.building}</td>
                <td>{item.location}</td>
                <td>{item.cost}</td>
                <td>{item.item_status}</td>
                <td>{item.creator}</td>
                <td>{item.created_at}</td>
              </tr>
            );
          })}
        </tbody>
        {/*  */}
      </Table>
    </div>
  );
}

export default TableList;
