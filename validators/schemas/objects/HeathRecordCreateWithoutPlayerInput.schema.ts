// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const HeathRecordCreateWithoutPlayerInputObjectSchema = Yup.object({
    id: Yup.string(),  cardNumber: Yup.string().required(),  issueDate: Yup.date().required(),  expiryDate: Yup.date().required()
});
