import { useState } from "react";
import postLogin from "../../../../axios/postLogin";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function FormInput() {
  const [inputs, setInputs] = useState<any>({});
  const [user, setUser] = useState<any>();
  // const [username, setUsername] = useState<string>("15120");
  // const [password, setPassword] = useState<string>("qfzxcs");

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values: any) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const res: any = await postLogin(inputs.username, inputs.password);
    console.log("res.status = ", res.status, res);
    MySwal.fire("The Internet?", "That thing is still around?", "question");
    setUser(res);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          username:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          password:
          <input
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}

export default FormInput;
