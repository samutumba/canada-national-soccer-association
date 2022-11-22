// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateNestedOneWithoutRecruitmentInputObjectSchema } from '../internals';;
import { AccountCreateNestedOneWithoutRecruitmentInputObjectSchema } from '../internals';

export const RecruitmentCreateWithoutInterviewsInputObjectSchema = Yup.object({
    id: Yup.string(),  player: PlayerCreateNestedOneWithoutRecruitmentInputObjectSchema,  recruiter: AccountCreateNestedOneWithoutRecruitmentInputObjectSchema,  createdAt: Yup.date(),  updatedAt: Yup.date(),  passed: Yup.boolean(),  resume: Yup.mixed().oneOfSchemas([Yup.string()])
});
