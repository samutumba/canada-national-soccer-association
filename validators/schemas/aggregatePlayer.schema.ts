import * as Yup from 'yup';
import { PlayerWhereInputObjectSchema, PlayerOrderByWithRelationInputObjectSchema, PlayerWhereUniqueInputObjectSchema } from './internals'

export const PlayerAggregateSchema = Yup.object({ where: PlayerWhereInputObjectSchema, orderBy: PlayerOrderByWithRelationInputObjectSchema, cursor: PlayerWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()