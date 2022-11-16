import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { IoAdd } from "react-icons/io5";
function BottonAdd(props: any) {
  const BoxFlex = styled.div`
    display: flex;
    /* border: 1px solid; */
    align-items: center;
    margin-top: 50px;
    margin: 50px;
  `;
  const { navigatePage } = props;
  return (
    <>
      <BoxFlex>
        <div>
          <Button
            onClick={() => {
              navigatePage("/items/newitem");
            }}
            style={{ padding: 10, fontSize: 25 }}
            variant="success"
            size="lg"
          >
            <IoAdd size={30} style={{ margin: 5 }} />
            <span>เพิ่มครุภัณฑ์</span>
          </Button>
        </div>
      </BoxFlex>
    </>
  );
}

export default BottonAdd;
