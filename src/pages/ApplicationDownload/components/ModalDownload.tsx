import { Modal } from "react-bootstrap";
import Lottie from "react-lottie";
import { GetKanitFont } from "../../../config/fonts";
import jsons from "../../../config/index.jsons";
function ModalDownload(props: any) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: jsons.downloadFile,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };
  return (
    <Modal
      style={{ ...GetKanitFont("KanitLight") }}
      {...props}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Lottie options={defaultOptions} />
        <Modal.Title style={{ textAlign: "center", marginBottom: 10 }}>
          กำลังดาวน์โหลด...
        </Modal.Title>
      </Modal.Body>
    </Modal>
  );
}

export default ModalDownload;
