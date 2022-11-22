import * as Yup from 'yup';
import { CompetitionWhereInputObjectSchema, CompetitionOrderByWithRelationInputObjectSchema, CompetitionWhereUniqueInputObjectSchema } from './internals';
import { CompetitionScalarFieldEnumSchema } from './internals'

export const CompetitionFindFirstSchema = Yup.object({ where: CompetitionWhereInputObjectSchema, orderBy: CompetitionOrderByWithRelationInputObjectSchema, cursor: CompetitionWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(CompetitionScalarFieldEnumSchema) }).required()