import * as Yup from 'yup';
import { SquadWhereInputObjectSchema, SquadOrderByWithRelationInputObjectSchema, SquadWhereUniqueInputObjectSchema } from './internals'

export const SquadAggregateSchema = Yup.object({ where: SquadWhereInputObjectSchema, orderBy: SquadOrderByWithRelationInputObjectSchema, cursor: SquadWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()