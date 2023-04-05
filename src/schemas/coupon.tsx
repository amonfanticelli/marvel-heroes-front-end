import * as yup from "yup";

export const couponSchema = yup.object().shape({
  coupon: yup.string().oneOf(["rare5", "notRare10"], "Cupom inválido"),
});
