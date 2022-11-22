// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameEventCreateManyGameInputObjectSchema } from '../internals';

export const GameEventCreateManyGameInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(GameEventCreateManyGameInputObjectSchema),  skipDuplicates: Yup.boolean()
});
