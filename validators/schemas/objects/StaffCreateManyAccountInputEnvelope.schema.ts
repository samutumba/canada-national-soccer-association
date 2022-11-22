// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StaffCreateManyAccountInputObjectSchema } from '../internals';

export const StaffCreateManyAccountInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(StaffCreateManyAccountInputObjectSchema),  skipDuplicates: Yup.boolean()
});
