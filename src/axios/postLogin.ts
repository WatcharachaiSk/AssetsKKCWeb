import axios from "axios";

const postLogin = async (username?: string, password?: string) => {
  //console.log("username = " + username + " password = " + password);

  try {
    var data = JSON.stringify({
      username: "15120a",
      password: "qfzxcs",
    });

    var config = {
      method: "post",
      url: "http://localhost:3500/api/loginUser",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
      timeout: 10000,
    };

    const res = await axios(config);
    // console.log("res = ", res.data);
    return res;
  } catch (error) {
    //console.log("Err = ", error);
    return error;
  }
};

export default postLogin;
