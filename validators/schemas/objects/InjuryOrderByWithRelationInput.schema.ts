// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { PlayerOrderByWithRelationInputObjectSchema } from '../internals';;
import { OperationOrderByRelationAggregateInputObjectSchema } from '../internals';

export const InjuryOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  player: PlayerOrderByWithRelationInputObjectSchema,  playerId: SortOrderSchema,  Operation: OperationOrderByRelationAggregateInputObjectSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema
});
