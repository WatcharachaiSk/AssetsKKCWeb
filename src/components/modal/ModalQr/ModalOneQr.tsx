
import { Button, Modal } from "react-bootstrap";
import QRCode from "react-qr-code";

function ModalOneQr(props: any) {
  const { item } = props;
  console.log(item);

  const urlQr = `getItem/${item?.item_id}`;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Qr Code {item?.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{}}>
        <div className="d-flex justify-content-center ">
          <h4>รหัสครุภัณฑ์ {item?.code}</h4>
        </div>
        <div
          style={{
            borderWidth: 1,
            backgroundColor: "#fdf",
            height: "auto",
            margin: "0 auto",
            maxWidth: 150,
            width: "100%",
            marginBottom: 10,
          }}
        >
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={urlQr}
            viewBox={`0 0 256 256`}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalOneQr;
