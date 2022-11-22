// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InjuryWhereInputObjectSchema } from '../internals';

export const InjuryListRelationFilterObjectSchema = Yup.object({
    every: InjuryWhereInputObjectSchema,  some: InjuryWhereInputObjectSchema,  none: InjuryWhereInputObjectSchema
});
