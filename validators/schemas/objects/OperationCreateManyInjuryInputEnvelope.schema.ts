// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { OperationCreateManyInjuryInputObjectSchema } from '../internals';

export const OperationCreateManyInjuryInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(OperationCreateManyInjuryInputObjectSchema),  skipDuplicates: Yup.boolean()
});
