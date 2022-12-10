import { Button, Modal, Card, Container } from "react-bootstrap";
import QRCode from "react-qr-code";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { GetKanitFont } from "../../../config/fonts";

function ModalOneQr(props: any) {
  const { item } = props;
  // console.log(item);
  const componentRef: any = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef?.current,
    documentTitle: `Assets ${item?.code}`,
    onAfterPrint: () => alert("Print Success"),
  });

  const urlQr = `getItem/${item?.item_id}`;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ ...GetKanitFont("KanitLight") }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Qr Code {item?.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="d-flex justify-content-center ">
          <Card
            ref={componentRef}
            className="m-4 bd-highlight "
            style={{ width: "25%" }}
          >
            <Card.Body>
              <div ref={componentRef}>
                <div className="d-flex justify-content-center ">
                  <h4>รหัสครุภัณฑ์: {item?.code}</h4>
                </div>
                <div
                  style={{
                    borderWidth: 1,
                    // backgroundColor: "#fdf",
                    height: "auto",
                    margin: "0 auto",
                    maxWidth: 120,
                    width: "100%",
                    marginBottom: 30,
                  }}
                >
                  <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={urlQr}
                    viewBox={`0 0 256 256`}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Container>
        <div className="d-flex justify-content-center ">
          <Button variant="outline-primary" onClick={handlePrint}>
            สั่งพิมพ์
          </Button>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalOneQr;
