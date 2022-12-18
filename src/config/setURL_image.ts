import { baseURL } from "../axios/config";
import env from "react-dotenv";
export const setURLProfile = (name_image: string) => {
  const url: string = `${baseURL}${env.PATH_IMAGE_PROFILE}${name_image}`;
  return url;
};

export const setURLItem = (name_image: string) => {
  const url: string = `${baseURL}${env.PATH_IMAGE_ITEM}${name_image}`;
  return url;
};

export const setURLItemDamaged = (name_image: string) => {
  const url: string = `${baseURL}${env.PATH_IMAGE_ITEM_DAMAGED}${name_image}`;
  return url;
};
