// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const InterviewUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  passed: Yup.boolean(),  at: Yup.date().required(),  comment: Yup.string().required(),  recruitmentId: Yup.string().required(),  createdAt: Yup.date(),  updatedAt: Yup.date()
});
