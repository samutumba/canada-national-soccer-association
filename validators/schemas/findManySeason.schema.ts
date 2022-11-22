import * as Yup from 'yup';
import { SeasonWhereInputObjectSchema, SeasonOrderByWithRelationInputObjectSchema, SeasonWhereUniqueInputObjectSchema } from './internals';
import { SeasonScalarFieldEnumSchema } from './internals'

export const SeasonFindManySchema = Yup.object({ where: SeasonWhereInputObjectSchema, orderBy: SeasonOrderByWithRelationInputObjectSchema, cursor: SeasonWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(SeasonScalarFieldEnumSchema)  }).required()