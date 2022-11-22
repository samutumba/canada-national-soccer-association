// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InterviewWhereUniqueInputObjectSchema } from '../internals';;
import { InterviewUpdateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { InterviewUncheckedUpdateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { InterviewCreateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { InterviewUncheckedCreateWithoutRecruitmentInputObjectSchema } from '../internals';

export const InterviewUpsertWithWhereUniqueWithoutRecruitmentInputObjectSchema = Yup.object({
    where: InterviewWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([InterviewUpdateWithoutRecruitmentInputObjectSchema,
InterviewUncheckedUpdateWithoutRecruitmentInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([InterviewCreateWithoutRecruitmentInputObjectSchema,
InterviewUncheckedCreateWithoutRecruitmentInputObjectSchema])
});
