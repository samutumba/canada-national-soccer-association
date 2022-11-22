// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InjuryCreateManyPlayerInputObjectSchema } from '../internals';

export const InjuryCreateManyPlayerInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(InjuryCreateManyPlayerInputObjectSchema),  skipDuplicates: Yup.boolean()
});
