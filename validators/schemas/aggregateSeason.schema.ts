import * as Yup from 'yup';
import { SeasonWhereInputObjectSchema, SeasonOrderByWithRelationInputObjectSchema, SeasonWhereUniqueInputObjectSchema } from './internals'

export const SeasonAggregateSchema = Yup.object({ where: SeasonWhereInputObjectSchema, orderBy: SeasonOrderByWithRelationInputObjectSchema, cursor: SeasonWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()