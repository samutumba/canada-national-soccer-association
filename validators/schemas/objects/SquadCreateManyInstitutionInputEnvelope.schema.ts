// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadCreateManyInstitutionInputObjectSchema } from '../internals';

export const SquadCreateManyInstitutionInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(SquadCreateManyInstitutionInputObjectSchema),  skipDuplicates: Yup.boolean()
});
