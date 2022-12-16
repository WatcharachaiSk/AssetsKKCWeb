import { useState, useMemo } from "react";
import _ from "lodash";
import {
  Button,
  Form,
  Container,
  ToggleButton,
  ButtonGroup,
} from "react-bootstrap";
import { sweet_basic } from "../../../../components/sweetalert2/sweet";
import configAxios from "../../../../axios/configAxios";
import axios from "axios";
import { API } from "../../../../axios/swr/endpoint";
import checkToken from "../../../../config/checkToken";
import { useNavigate } from "react-router-dom";
import images from "../../../../config/index.images";

function FormAddUser(props: any) {
  const navigate = useNavigate();

  const { setModalShowCheckUser, setPostUser, setPostUserCheck } = props;
  const [getFaculty, setGetFaculty] = useState<{}>({});
  const [getDepartment, setGetDepartment] = useState<{}>({});

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [checkPassword, setCheckPassword] = useState<string>();
  const [firstname, setFirstname] = useState<string>();
  const [lastname, setLastname] = useState<string>();
  const [nickname, setNickname] = useState<string>();
  const [telephone, setTelephone] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [radioValue, setRadioValue] = useState("");
  const [facultyFId, setFacultyFId] = useState<number>(0);
  const [departmentDId, setDepartmentDId] = useState<number>(0);

  // const [admin, setAdmin] = useState<boolean>();

  useMemo(async () => {
    try {
      const resFacu = await axios(configAxios("get", API.getFaculty));
      setGetFaculty(resFacu.data);
    } catch (error: any) {
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, []);
  //  getDepartmentByfacultyFId
  useMemo(async () => {
    try {
      if (facultyFId != 0) {
        const res = await axios(
          configAxios("get", `${API.getDepartmentByFtyId}${facultyFId}`)
        );
        setGetDepartment(res.data);
      }
    } catch (error: any) {
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, [facultyFId]);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const obj = {
      username: username,
      password: password,
      admin: radioValue == "1" ? true : false,
      firstname: firstname,
      lastname: lastname,
      nickname: nickname,
      telephone: telephone,
      email: email,
      faculty: _.filter(getFaculty, (item: any) => {
        return item.f_id == facultyFId;
      }),
      department: _.filter(getDepartment, (item: any) => {
        return item.d_id == departmentDId;
      }),
    };
    const dataform = {
      username: username,
      password: password,
      admin: radioValue == "1" ? true : false,
      firstname: firstname,
      lastname: lastname,
      nickname: nickname,
      telephone: telephone,
      email: email,
      facultyFId: facultyFId,
      departmentDId: departmentDId,
    };
    setPostUserCheck(obj);
    setPostUser(dataform);
    setModalShowCheckUser(true);
  };

  const radios = [
    { name: "Admin", value: "1" },
    { name: "User", value: "0" },
  ];
  const [selectedFile, setSelectedFile] = useState<any>();
  const [showFile, setShowFile] = useState<any>();
  // console.log(selectedFile);
  // console.log("showFile = " + showFile);

  const getBase64 = (file: any, cb: any) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      // console.log("Error: ", error);
    };
  };

  return (
    <Container style={{ borderRadius: 15, width: "100%", height: "100%" }}>
      <div className="d-flex justify-content-center">
        <img
          src={showFile ? showFile : images.upLoadImg}
          className="rounded float-right"
          width={200}
          height={200}
          style={{
            objectFit: "cover",
            borderRadius: 15,
            borderColor: "#ced4da",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        />
      </div>
      <Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Profile</Form.Label>
          <Form.Control
            accept="image/png,image/jpeg,image/jpg"
            placeholder="เลือกรูปภาพ"
            size="lg"
            type="file"
            onChange={(e: any) => {
              // console.log(e.target.files[0]);
              getBase64(e.target.files[0], (result: any) => {
                // console.log(result);
                setShowFile(result);
              });

              setSelectedFile(e.target.files[0]);
            }}
          />
        </Form.Group>
        {/* name */}
        <Form.Group className="mb-2">
          <Form.Label>Username</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => {
              const eUsername = event.target.value;
              setUsername(eUsername);
            }}
          />
        </Form.Group>
        {/*  */}
        <Form.Group className="mb-2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            size="lg"
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => {
              const ePassword = event.target.value;
              setPassword(ePassword);
            }}
          />
        </Form.Group>
        {/*  */}
        <Form.Group className="mb-2">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control
            style={{
              borderColor: checkPassword
                ? password != checkPassword
                  ? "red"
                  : "green"
                : "",
            }}
            size="lg"
            type="password"
            placeholder="Password Confirmation"
            value={checkPassword}
            onChange={(event) => {
              const echeckPassword = event.target.value;
              setCheckPassword(echeckPassword);
            }}
          />
        </Form.Group>
        {/*  */}
        <Form.Group className="mb-2">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Firstname"
            value={firstname}
            onChange={(event) => {
              const eFirstname = event.target.value;
              setFirstname(eFirstname);
            }}
          />
        </Form.Group>
        {/*  */}
        <Form.Group className="mb-2">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Lastname"
            value={lastname}
            onChange={(event) => {
              const eLastname = event.target.value;
              setLastname(eLastname);
            }}
          />
        </Form.Group>
        {/*  */}
        <Form.Group className="mb-2">
          <Form.Label>Nickname</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Nickname"
            value={nickname}
            onChange={(event) => {
              const eNickname = event.target.value;
              setNickname(eNickname);
            }}
          />
        </Form.Group>

        {/*  */}
        <Form.Group className="mb-2">
          <Form.Label>Telephone</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Telephone"
            value={telephone}
            onChange={(event) => {
              const eTelephone = event.target.value;
              setTelephone(eTelephone);
            }}
          />
        </Form.Group>
        {/*  */}
        <Form.Group className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            size="lg"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              const eEmail = event.target.value;
              setEmail(eEmail);
            }}
          />
        </Form.Group>

        {/*  */}
        <Form.Group className="mb-1">
          <Form.Label>เลือก Roles</Form.Label>
        </Form.Group>
        <ButtonGroup className="mb-2">
          {radios.map((radio, idx) => (
            <ToggleButton
              size="lg"
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={"outline-dark"}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        {/*  */}
        {/*  */}
        <Form.Group className="mb-3" controlId="formFaculty">
          <Form.Label>เลือกคณะ</Form.Label>
          <Form.Select
            onChange={(event: any) => {
              const eFacultyFId = event.target.value;
              setFacultyFId(eFacultyFId);
            }}
            size="lg"
          >
            <option value={0}>กรุณาเลือกคณะ</option>
            {_.map(getFaculty, (item: any, idx) => {
              return (
                <>
                  <option key={item.f_id} value={item.f_id}>
                    {item.nameTH}
                  </option>
                </>
              );
            })}
          </Form.Select>
        </Form.Group>
        {/*  */}
        <Form.Group className="mb-3" controlId="formDepartment">
          <Form.Label>เลือกสาขา</Form.Label>
          <Form.Select
            disabled={facultyFId == 0 ? true : false}
            onChange={(event: any) => {
              const eDepartmentDId = event.target.value;
              setDepartmentDId(eDepartmentDId);
            }}
            size="lg"
          >
            {facultyFId != 0 ? (
              <option value={0}>กรุณาเลือกสาขา</option>
            ) : (
              <option value={0}>กรุณาเลือกคณะ</option>
            )}

            {_.map(getDepartment, (item: any, idx) => {
              return (
                <>
                  <option key={item.d_id} value={item.d_id}>
                    {item.nameTH}
                  </option>
                </>
              );
            })}
          </Form.Select>
        </Form.Group>

        {/*  */}
        <div className="d-flex justify-content-center">
          <Button
            // style={{}}
            onClick={(event) => {
              if (
                username &&
                password === checkPassword &&
                firstname &&
                lastname &&
                nickname &&
                telephone &&
                email &&
                radioValue != "" &&
                facultyFId != 0 &&
                departmentDId != 0
              ) {
                onSubmit(event);
              } else {
                event.preventDefault();
                sweet_basic("warning", "ข้อมูลไม่ครบ", "กรุณากรอกข้อมูลให้ครบ");
              }
            }}
            className="mb-3 mt-3 p-2"
            variant={
              username &&
              password === checkPassword &&
              firstname &&
              lastname &&
              nickname &&
              telephone &&
              email &&
              radioValue != "" &&
              facultyFId != 0 &&
              departmentDId != 0
                ? "success"
                : "secondary"
            }
            type="submit"
            size="lg"
          >
            {username &&
            password === checkPassword &&
            firstname &&
            lastname &&
            nickname &&
            telephone &&
            email &&
            radioValue != "" &&
            facultyFId != 0 &&
            departmentDId != 0
              ? "Submit"
              : "กรุณากรอกข้อมูลให้ครบ"}
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default FormAddUser;
