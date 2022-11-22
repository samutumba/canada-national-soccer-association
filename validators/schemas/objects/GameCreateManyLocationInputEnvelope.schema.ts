// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameCreateManyLocationInputObjectSchema } from '../internals';

export const GameCreateManyLocationInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(GameCreateManyLocationInputObjectSchema),  skipDuplicates: Yup.boolean()
});
