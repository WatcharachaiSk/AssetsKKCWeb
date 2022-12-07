import { useState } from "react";
import postLogin from "../../../../axios/postLogin";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Button, Form, Card, Container, Row, Col } from "react-bootstrap";

const MySwal = withReactContent(Swal);

function FormInput(props: any) {
  const { navigate, setlocalStorage } = props;

  const [inputs, setInputs] = useState<any>({});
  const [user, setUser] = useState<any>();

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values: any) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const res: any = await postLogin(inputs.username, inputs.password);
    if (res.status === 200 && res.status <= 201) {
      console.log(res.data);

      MySwal.fire({
        title: <strong>เสร็จสิ้น</strong>,
        html: <i></i>,
        icon: "success",
      }).then((value: any) => {
        setlocalStorage(res.data.user.web_token, res.data.user.admin, res.data);

        navigate("/home");
      });
    } else {
      MySwal.fire({
        title: <strong>มีบางอย่างผิดปกติ</strong>,
        html: <i></i>,
        icon: "error",
      }).then((value: any) => {});
    }
    setUser(res);
  };

  const styles = {
    container: {
      display: "flex",
      width: "100%",
      height: "100%",
    },
    card_box: {
      display: "flex",
      flex: 1,
      backgroundColor: "#fff",
      padding: 50,
      width: "100%",
      // height: "100%",
      // top: "20%",
      // margin: 20,
    },
  };
  return (
    <>
      <Card style={styles.card_box}>
        <h3 style={{ textAlign: "center" }}>เข้าสู่ระบบ</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="username"
              name="username"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>

          <Container>
            <Row>
              <Col></Col>
              <Col>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Login
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Form>
      </Card>
    </>
  );
}

export default FormInput;
