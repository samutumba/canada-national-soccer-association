// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const InjuryMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  playerId: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema
});
