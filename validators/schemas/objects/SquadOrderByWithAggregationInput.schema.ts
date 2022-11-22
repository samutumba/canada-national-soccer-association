// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SquadCountOrderByAggregateInputObjectSchema } from '../internals';;
import { SquadMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { SquadMinOrderByAggregateInputObjectSchema } from '../internals';

export const SquadOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  institutionId: SortOrderSchema,  homeColor: SortOrderSchema,  awayColor: SortOrderSchema,  locationId: SortOrderSchema,  _count: SquadCountOrderByAggregateInputObjectSchema,  _max: SquadMaxOrderByAggregateInputObjectSchema,  _min: SquadMinOrderByAggregateInputObjectSchema
});
