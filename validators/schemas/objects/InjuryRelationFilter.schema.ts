// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InjuryWhereInputObjectSchema } from '../internals';

export const InjuryRelationFilterObjectSchema = Yup.object({
    is: InjuryWhereInputObjectSchema,  isNot: InjuryWhereInputObjectSchema
});
