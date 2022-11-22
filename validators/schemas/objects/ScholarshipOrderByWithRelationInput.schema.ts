// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { InstitutionOrderByWithRelationInputObjectSchema } from '../internals';;
import { PlayerOrderByWithRelationInputObjectSchema } from '../internals';

export const ScholarshipOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  description: SortOrderSchema,  sponsor: InstitutionOrderByWithRelationInputObjectSchema,  player: PlayerOrderByWithRelationInputObjectSchema,  institutionId: SortOrderSchema,  playerId: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema
});
