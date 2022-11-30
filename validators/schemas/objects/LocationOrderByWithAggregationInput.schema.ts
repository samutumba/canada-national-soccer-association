// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { LocationCountOrderByAggregateInputObjectSchema } from '../internals';;
import { LocationMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { LocationMinOrderByAggregateInputObjectSchema } from '../internals';

export const LocationOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  category: SortOrderSchema,  streetAddress: SortOrderSchema,  city: SortOrderSchema,  province: SortOrderSchema,  country: SortOrderSchema,  postalCode: SortOrderSchema,  _count: LocationCountOrderByAggregateInputObjectSchema,  _max: LocationMaxOrderByAggregateInputObjectSchema,  _min: LocationMinOrderByAggregateInputObjectSchema
});