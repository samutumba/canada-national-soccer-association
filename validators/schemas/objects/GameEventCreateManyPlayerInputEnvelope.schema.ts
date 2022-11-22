// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameEventCreateManyPlayerInputObjectSchema } from '../internals';

export const GameEventCreateManyPlayerInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(GameEventCreateManyPlayerInputObjectSchema),  skipDuplicates: Yup.boolean()
});
