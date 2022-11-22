// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InterviewUncheckedCreateNestedManyWithoutRecruitmentInputObjectSchema } from '../internals';

export const RecruitmentUncheckedCreateWithoutRecruiterInputObjectSchema = Yup.object({
    id: Yup.string(),  createdAt: Yup.date(),  updatedAt: Yup.date(),  passed: Yup.boolean(),  interviews: InterviewUncheckedCreateNestedManyWithoutRecruitmentInputObjectSchema,  resume: Yup.mixed().oneOfSchemas([Yup.string()]),  playerId: Yup.string().required()
});
