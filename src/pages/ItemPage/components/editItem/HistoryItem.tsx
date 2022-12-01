import axios from "axios";
import { useState, useMemo, useEffect } from "react";
import { Container, Table, Form } from "react-bootstrap";
import configAxios from "../../../../axios/configAxios";
import { API } from "../../../../axios/swr/endpoint";
import checkToken from "../../../../config/checkToken";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import Moment from "react-moment";
import { GetKanitFont } from "../../../../config/fonts";

function HistoryItem(props: any) {
  const navigate = useNavigate();
  const { getItems } = props;
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
            <th>วันที่แก้ไข</th>
            <th>สถานที่</th>
            <th>สถานะ</th>
            <th>หมายเหตุ/Note</th>
          </tr>
        </thead>
        <tbody>
          {_.map(historyStatus, (item: any, idx: string) => {
            return (
              <tr key={item?.hs_id}>
                <td>
                  <Moment format="DD/MM/YYYY">{item?.createdAt}</Moment>
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
