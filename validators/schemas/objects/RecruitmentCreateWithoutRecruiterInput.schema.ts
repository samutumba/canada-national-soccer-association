// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateNestedOneWithoutRecruitmentInputObjectSchema } from '../internals';;
import { InterviewCreateNestedManyWithoutRecruitmentInputObjectSchema } from '../internals';

export const RecruitmentCreateWithoutRecruiterInputObjectSchema = Yup.object({
    id: Yup.string(),  player: PlayerCreateNestedOneWithoutRecruitmentInputObjectSchema,  createdAt: Yup.date(),  updatedAt: Yup.date(),  passed: Yup.boolean(),  interviews: InterviewCreateNestedManyWithoutRecruitmentInputObjectSchema,  resume: Yup.mixed().oneOfSchemas([Yup.string()])
});
