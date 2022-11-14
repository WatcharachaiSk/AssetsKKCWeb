import { useState } from "react";
import postLogin from "../../../../axios/postLogin";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  Button,
  ButtonGroup,
  Dropdown,
  Form,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const MySwal = withReactContent(Swal);

function FormInput(props: any) {
  const { navigate, setlocalStorage } = props;

  const [inputs, setInputs] = useState<any>({});
  const [user, setUser] = useState<any>();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values: any) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const res: any = await postLogin(inputs.username, inputs.password);
    if (res.status === 200 && res.status <= 201) {
      MySwal.fire({
        title: <strong>เสร็จสิ้น</strong>,
        html: <i></i>,
        icon: "success",
      }).then((value: any) => {
        setlocalStorage(res.data.web_token);
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
      // backgroundColor: "#000",
      width: 650,
      height: 350,
      marginTop: 300,
    },
    card_box: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 30,
      margin: 15,
    },
  };
  return (
    <>
      <Container style={styles.container}>
        <Card style={styles.card_box}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                placeholder="username"
                name="username"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>PassWord</Form.Label>
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
                  <Button
                    style={{ width: 150, height: 60, marginTop: 20 }}
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default FormInput;
