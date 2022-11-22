// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentCreateManyRecruiterInputObjectSchema } from '../internals';

export const RecruitmentCreateManyRecruiterInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(RecruitmentCreateManyRecruiterInputObjectSchema),  skipDuplicates: Yup.boolean()
});
