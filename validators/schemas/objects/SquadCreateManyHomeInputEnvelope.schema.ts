// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadCreateManyHomeInputObjectSchema } from '../internals';

export const SquadCreateManyHomeInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(SquadCreateManyHomeInputObjectSchema),  skipDuplicates: Yup.boolean()
});
