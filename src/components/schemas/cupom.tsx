import * as yup from "yup";

export const cupomSchema = yup.object().shape({
  cupom: yup.string().oneOf(["rare", "notRare"], "Cupom inválido"),
});
