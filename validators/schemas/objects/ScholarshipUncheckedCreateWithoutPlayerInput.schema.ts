// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const ScholarshipUncheckedCreateWithoutPlayerInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  description: Yup.string().required(),  institutionId: Yup.string().required(),  createdAt: Yup.date(),  updatedAt: Yup.date()
});
