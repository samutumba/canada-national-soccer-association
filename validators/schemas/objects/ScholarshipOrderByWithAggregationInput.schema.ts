// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { ScholarshipCountOrderByAggregateInputObjectSchema } from '../internals';;
import { ScholarshipMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { ScholarshipMinOrderByAggregateInputObjectSchema } from '../internals';

export const ScholarshipOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  description: SortOrderSchema,  institutionId: SortOrderSchema,  playerId: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  _count: ScholarshipCountOrderByAggregateInputObjectSchema,  _max: ScholarshipMaxOrderByAggregateInputObjectSchema,  _min: ScholarshipMinOrderByAggregateInputObjectSchema
});
