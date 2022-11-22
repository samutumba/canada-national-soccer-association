// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateManyGameInputObjectSchema } from '../internals';

export const TeamCreateManyGameInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(TeamCreateManyGameInputObjectSchema),  skipDuplicates: Yup.boolean()
});
