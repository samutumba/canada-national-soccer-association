import * as Yup from 'yup';
import { InjuryWhereInputObjectSchema, InjuryOrderByWithAggregationInputObjectSchema, InjuryScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { InjuryScalarFieldEnumSchema } from './internals'

export const InjuryGroupBySchema = Yup.object({ where: InjuryWhereInputObjectSchema, orderBy: InjuryOrderByWithAggregationInputObjectSchema, having: InjuryScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(InjuryScalarFieldEnumSchema).required()  }).required()