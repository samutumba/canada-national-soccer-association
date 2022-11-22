// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const StaffCreateManyAccountInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  dob: Yup.date().required(),  phone: Yup.string().required(),  streetAddress: Yup.string().required(),  city: Yup.string().required(),  country: Yup.string(),  postalCode: Yup.string().required()
});
