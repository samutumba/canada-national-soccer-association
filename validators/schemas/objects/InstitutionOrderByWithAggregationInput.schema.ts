// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { InstitutionCountOrderByAggregateInputObjectSchema } from '../internals';;
import { InstitutionMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { InstitutionMinOrderByAggregateInputObjectSchema } from '../internals';

export const InstitutionOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  address: SortOrderSchema,  city: SortOrderSchema,  province: SortOrderSchema,  postal_code: SortOrderSchema,  category: SortOrderSchema,  _count: InstitutionCountOrderByAggregateInputObjectSchema,  _max: InstitutionMaxOrderByAggregateInputObjectSchema,  _min: InstitutionMinOrderByAggregateInputObjectSchema
});
