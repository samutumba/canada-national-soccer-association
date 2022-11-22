// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InterviewWhereUniqueInputObjectSchema } from '../internals';;
import { InterviewUpdateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { InterviewUncheckedUpdateWithoutRecruitmentInputObjectSchema } from '../internals';

export const InterviewUpdateWithWhereUniqueWithoutRecruitmentInputObjectSchema = Yup.object({
    where: InterviewWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([InterviewUpdateWithoutRecruitmentInputObjectSchema,
InterviewUncheckedUpdateWithoutRecruitmentInputObjectSchema])
});
