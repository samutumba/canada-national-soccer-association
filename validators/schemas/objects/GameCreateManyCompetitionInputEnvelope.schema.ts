// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameCreateManyCompetitionInputObjectSchema } from '../internals';

export const GameCreateManyCompetitionInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(GameCreateManyCompetitionInputObjectSchema),  skipDuplicates: Yup.boolean()
});
