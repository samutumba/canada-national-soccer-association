// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ScholarshipCreateManyPlayerInputObjectSchema } from '../internals';

export const ScholarshipCreateManyPlayerInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(ScholarshipCreateManyPlayerInputObjectSchema),  skipDuplicates: Yup.boolean()
});
