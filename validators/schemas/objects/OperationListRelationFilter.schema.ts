// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { OperationWhereInputObjectSchema } from '../internals';

export const OperationListRelationFilterObjectSchema = Yup.object({
    every: OperationWhereInputObjectSchema,  some: OperationWhereInputObjectSchema,  none: OperationWhereInputObjectSchema
});
