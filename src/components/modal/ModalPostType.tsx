import Moment from "react-moment";
import { Button, Table, Modal } from "react-bootstrap";

function ModalPostType(props: any) {
  const { modalShowCheckType, onSubmitFnType, chackDataType } = props;
  console.log(chackDataType);

  return (
    <Modal
      show={modalShowCheckType}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>ตรวจสอบชนิดครุภัณฑ์</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center ">
          <h4 className="mb-3">กรุณาตรวจสอบชนิดครุภัณฑ์</h4>
        </div>
        <div className="d-flex justify-content-center flex-column"></div>
        <Table bordered hover variant="light">
          <thead>
            <tr>
              <th>ชนิดช้อมูล</th>
              <th>ข้อมูล</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ชื่อชนิดครุภัณฑ์</td>
              <td>{chackDataType?.name}</td>
            </tr>
            <tr>
              <td>รหัสชนิดครุภัณฑ์</td>
              <td>{chackDataType?.code}</td>
            </tr>
            <tr>
              <td>จำนวน/หน่วยนับ</td>
              <td>{chackDataType?.quantity}</td>
            </tr>
            <tr>
              <td>หน่วยนับ</td>
              <td>{chackDataType?.unit}</td>
            </tr>
            <tr>
              <td>ราคา/หน่วย</td>
              <td>{chackDataType?.price_unit}</td>
            </tr>
            <tr>
              <td>ราคารวม</td>
              <td>{chackDataType?.total_price}</td>
            </tr>
            <tr>
              <td>สาขา</td>
              <td>{chackDataType?.department.department[0].nameTH}</td>
            </tr>
            <tr>
              <td>ชนิดครุภัณฑ์</td>
              <td>{chackDataType?.category.category[0].name}</td>
            </tr>
            <tr>
              <td>วันที่ซื้อ</td>
              <td>
                <Moment format="DD/MM/YYYY">
                  {chackDataType?.purchase_date}
                </Moment>
                {"  "} ว/ด/ป
              </td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          onClick={() => {
            onSubmitFnType(1);
          }}
        >
          ยืนยัน
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            onSubmitFnType(0);
          }}
        >
          ยกเลิก
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPostType;
