// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { GameOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { SquadOrderByRelationAggregateInputObjectSchema } from '../internals';

export const LocationOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  category: SortOrderSchema,  streetAddress: SortOrderSchema,  city: SortOrderSchema,  province: SortOrderSchema,  country: SortOrderSchema,  postalCode: SortOrderSchema,  game: GameOrderByRelationAggregateInputObjectSchema,  Squad: SquadOrderByRelationAggregateInputObjectSchema
});
