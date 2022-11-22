// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentCreateManyPlayerInputObjectSchema } from '../internals';

export const RecruitmentCreateManyPlayerInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(RecruitmentCreateManyPlayerInputObjectSchema),  skipDuplicates: Yup.boolean()
});
