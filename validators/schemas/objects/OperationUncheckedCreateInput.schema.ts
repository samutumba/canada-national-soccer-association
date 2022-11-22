// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const OperationUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  type: Yup.string().required(),  date: Yup.date(),  injuryId: Yup.string().required(),  createdAt: Yup.date(),  updatedAt: Yup.date()
});
