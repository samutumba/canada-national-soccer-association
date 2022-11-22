// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const LocationMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  category: SortOrderSchema,  streetAddress: SortOrderSchema,  city: SortOrderSchema,  province: SortOrderSchema,  country: SortOrderSchema,  postalCode: SortOrderSchema
});
