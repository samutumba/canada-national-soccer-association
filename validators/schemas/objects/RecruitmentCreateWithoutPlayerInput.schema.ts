// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AccountCreateNestedOneWithoutRecruitmentInputObjectSchema } from '../internals';;
import { InterviewCreateNestedManyWithoutRecruitmentInputObjectSchema } from '../internals';

export const RecruitmentCreateWithoutPlayerInputObjectSchema = Yup.object({
    id: Yup.string(),  recruiter: AccountCreateNestedOneWithoutRecruitmentInputObjectSchema,  createdAt: Yup.date(),  updatedAt: Yup.date(),  passed: Yup.boolean(),  interviews: InterviewCreateNestedManyWithoutRecruitmentInputObjectSchema,  resume: Yup.mixed().oneOfSchemas([Yup.string()])
});
