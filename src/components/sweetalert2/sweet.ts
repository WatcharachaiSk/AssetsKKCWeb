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
