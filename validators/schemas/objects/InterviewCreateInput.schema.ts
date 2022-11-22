// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentCreateNestedOneWithoutInterviewsInputObjectSchema } from '../internals';

export const InterviewCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  passed: Yup.boolean(),  at: Yup.date().required(),  Recruitment: RecruitmentCreateNestedOneWithoutInterviewsInputObjectSchema,  comment: Yup.string().required(),  createdAt: Yup.date(),  updatedAt: Yup.date()
});
