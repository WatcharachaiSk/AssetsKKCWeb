import { baseURL } from "../axios/config";
import env from "react-dotenv";
const setURLProfile = (name_image: string) => {
  const url: string = `${baseURL}${env.PATH_IMAGE_PROFILE}${name_image}`;

  return url;
};

export default setURLProfile;
