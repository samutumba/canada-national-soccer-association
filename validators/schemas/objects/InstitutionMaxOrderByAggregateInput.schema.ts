// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const InstitutionMaxOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  address: SortOrderSchema,  city: SortOrderSchema,  province: SortOrderSchema,  postal_code: SortOrderSchema,  category: SortOrderSchema
});
