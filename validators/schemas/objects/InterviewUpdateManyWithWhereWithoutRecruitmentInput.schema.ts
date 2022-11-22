// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InterviewScalarWhereInputObjectSchema } from '../internals';;
import { InterviewUpdateManyMutationInputObjectSchema } from '../internals';;
import { InterviewUncheckedUpdateManyWithoutInterviewsInputObjectSchema } from '../internals';

export const InterviewUpdateManyWithWhereWithoutRecruitmentInputObjectSchema = Yup.object({
    where: InterviewScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([InterviewUpdateManyMutationInputObjectSchema,
InterviewUncheckedUpdateManyWithoutInterviewsInputObjectSchema])
});
