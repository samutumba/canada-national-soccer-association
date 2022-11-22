// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const OperationCreateManyInjuryInputObjectSchema = Yup.object({
    id: Yup.string(),  type: Yup.string().required(),  date: Yup.date(),  createdAt: Yup.date(),  updatedAt: Yup.date()
});
