// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const InterviewUncheckedCreateWithoutRecruitmentInputObjectSchema = Yup.object({
    id: Yup.string(),  passed: Yup.boolean(),  at: Yup.date().required(),  comment: Yup.string().required(),  createdAt: Yup.date(),  updatedAt: Yup.date()
});
