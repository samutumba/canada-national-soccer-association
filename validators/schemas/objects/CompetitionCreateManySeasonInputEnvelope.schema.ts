// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CompetitionCreateManySeasonInputObjectSchema } from '../internals';

export const CompetitionCreateManySeasonInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(CompetitionCreateManySeasonInputObjectSchema),  skipDuplicates: Yup.boolean()
});
