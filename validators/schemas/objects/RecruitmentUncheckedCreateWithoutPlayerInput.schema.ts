// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InterviewUncheckedCreateNestedManyWithoutRecruitmentInputObjectSchema } from '../internals';

export const RecruitmentUncheckedCreateWithoutPlayerInputObjectSchema = Yup.object({
    id: Yup.string(),  createdAt: Yup.date(),  updatedAt: Yup.date(),  passed: Yup.boolean(),  interviews: InterviewUncheckedCreateNestedManyWithoutRecruitmentInputObjectSchema,  resume: Yup.mixed().oneOfSchemas([Yup.string()]),  accountId: Yup.string().required()
});
