// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ScholarshipCreateManySponsorInputObjectSchema } from '../internals';

export const ScholarshipCreateManySponsorInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(ScholarshipCreateManySponsorInputObjectSchema),  skipDuplicates: Yup.boolean()
});
