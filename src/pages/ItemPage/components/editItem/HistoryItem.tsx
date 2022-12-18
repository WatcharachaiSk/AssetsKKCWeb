import axios from "axios";
import { useState, useMemo, useEffect } from "react";
import { Container, Table, Form, Button } from "react-bootstrap";
import configAxios from "../../../../axios/configAxios";
import { API } from "../../../../axios/swr/endpoint";
import checkToken from "../../../../config/checkToken";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import Moment from "react-moment";
import { GetKanitFont } from "../../../../config/fonts";
import { CiImageOff, CiImageOn } from "react-icons/ci";
import colors from "../../../../config/colors";
import ModalShowDamaged from "../../../../components/modal/Details/ModalShowDamaged";

function HistoryItem(props: any) {
  const navigate = useNavigate();
  const { getItems } = props;

  const [modalShowDamaged, setModalShowDamaged] = useState(false);
  const [name_image_damaged, setName_image_damaged] = useState();
  const [idItem, setIdItem] = useState<string>();
  const [historyStatus, setGetHistoryStatus] = useState<string>();
  useEffect(() => {
    setIdItem(getItems.item_id);
  }, [getItems]);
  // console.log(idItem);

  useMemo(async () => {
    try {
      if (idItem) {
        // console.log("123");
        const res = await axios(
          configAxios("get", `${API.getHistoryStatusItem}${idItem}`)
        );
        setGetHistoryStatus(res.data);
      }
    } catch (error: any) {
      // console.log("err = ", error.request.status);
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, [idItem, getItems]);

  return (
    <Container>
      {modalShowDamaged && (
        <ModalShowDamaged
          show={modalShowDamaged}
          onHide={() => setModalShowDamaged(false)}
          name_image_damaged={name_image_damaged}
        />
      )}
      <Form.Label style={{ fontSize: 22 }}>
        ย้ายสถานที่หรือเปลี่ยนสถานะครุภัณฑ์ (ย้อนหลัง)
      </Form.Label>
      <Table
        style={{
          paddingTop: 50,
          textAlign: "center",
          fontSize: 22,
          ...GetKanitFont("KanitLight"),
        }}
        responsive="lg"
        size="lg"
        bordered
        hover
      >
        <thead style={{ ...GetKanitFont("KanitMedium") }}>
          <tr>
            <th>รูป</th>
            <th>วันที่แก้ไข</th>
            <th>ผู้แก้ไข</th>
            <th>สถานที่</th>
            <th>สถานะ</th>
            <th>หมายเหตุ/Note</th>
          </tr>
        </thead>
        <tbody>
          {_.map(historyStatus, (item: any, idx: any) => {
            return (
              <tr key={item?.hs_id}>
                <td>
                  {/* {item?.item.name_image_damaged}{" "} */}
                  {idx == 0 ? (
                    <Button
                      size="lg"
                      variant="warning"
                      onClick={() => {
                        setModalShowDamaged(true);
                        setName_image_damaged(item?.item?.name_image_damaged);
                      }}
                    >
                      <CiImageOn color={colors.black} size={20} />
                    </Button>
                  ) : (
                    <Button size="lg" variant="outline-light">
                      <CiImageOff color={colors.black} size={20} />
                    </Button>
                  )}
                </td>
                <td>
                  <Moment format="HH:mm:ss - DD/MM/YYYY ">
                    {item?.createdAt}
                  </Moment>
                </td>
                <td>
                  {item?.profile?.firstname} {item?.profile?.lastname}
                </td>
                <td>
                  {item?.location?.nameTH} {item?.location?.nameEN}
                </td>
                <td style={{ color: item.status ? "green" : "red" }}>
                  {item.status ? "ปกติ" : "ชำรุด"}
                </td>
                <td>{item?.note}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default HistoryItem;
