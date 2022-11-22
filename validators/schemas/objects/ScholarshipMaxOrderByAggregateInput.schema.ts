// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const ScholarshipMaxOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  description: SortOrderSchema,  institutionId: SortOrderSchema,  playerId: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema
});
