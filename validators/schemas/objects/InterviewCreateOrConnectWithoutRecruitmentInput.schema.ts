// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InterviewWhereUniqueInputObjectSchema } from '../internals';;
import { InterviewCreateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { InterviewUncheckedCreateWithoutRecruitmentInputObjectSchema } from '../internals';

export const InterviewCreateOrConnectWithoutRecruitmentInputObjectSchema = Yup.object({
    where: InterviewWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([InterviewCreateWithoutRecruitmentInputObjectSchema,
InterviewUncheckedCreateWithoutRecruitmentInputObjectSchema])
});
