import Swal from "sweetalert2";
export const sweet_basic = (
  icons?: "success" | "error" | "warning" | "info" | "question",
  title?: string,
  text?: string,
  footer?: string
) => {
  Swal.fire({
    icon: icons,
    title: title,
    text: text,
    footer: footer,
  });
};

export const sweet_popUpTimer = (
  position?:
    | "top-start"
    | "top-end"
    | "center"
    | "center-start"
    | "center-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end",
  icons?: "success" | "error" | "warning" | "info" | "question",
  title?: string,

  timer?: number
) => {
  Swal.fire({
    position: position,
    icon: icons,
    title: title,
    showConfirmButton: false,
    timer: timer,
  });
};
