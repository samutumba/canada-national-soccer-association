// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InterviewCreateManyRecruitmentInputObjectSchema } from '../internals';

export const InterviewCreateManyRecruitmentInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(InterviewCreateManyRecruitmentInputObjectSchema),  skipDuplicates: Yup.boolean()
});
