import React from "react";

import { Button, Modal } from "react-bootstrap";
import { GetKanitFont } from "../../../config/fonts";
import images from "../../../config/index.images";
import { setURLItemDamaged } from "../../../config/setURL_image";

function ModalShowDamaged(props: any) {
  const { name_image_damaged } = props;

  let urlProfile;
  if (name_image_damaged) {
    urlProfile = setURLItemDamaged(name_image_damaged);
    // console.log(urlProfile);
  }
  return (
    <>
      <Modal
        style={{ ...GetKanitFont("KanitLight") }}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            รูปภาพประกอบการชำรุด
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center mt-3">
            <img
              src={urlProfile ? urlProfile : images.imageNotFound}
              className="rounded float-right"
              width={300}
              height={300}
              style={{
                objectFit: "cover",
                borderRadius: 15,
                borderColor: "#ced4da",
                borderWidth: 1,
                borderStyle: "solid",
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalShowDamaged;
