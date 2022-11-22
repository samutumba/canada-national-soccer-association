// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateManySquadInputObjectSchema } from '../internals';

export const TeamCreateManySquadInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(TeamCreateManySquadInputObjectSchema),  skipDuplicates: Yup.boolean()
});
