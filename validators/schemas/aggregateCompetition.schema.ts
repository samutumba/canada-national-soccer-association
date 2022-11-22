import * as Yup from 'yup';
import { CompetitionWhereInputObjectSchema, CompetitionOrderByWithRelationInputObjectSchema, CompetitionWhereUniqueInputObjectSchema } from './internals'

export const CompetitionAggregateSchema = Yup.object({ where: CompetitionWhereInputObjectSchema, orderBy: CompetitionOrderByWithRelationInputObjectSchema, cursor: CompetitionWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()