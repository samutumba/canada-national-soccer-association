import * as Yup from 'yup';
import { InstitutionWhereInputObjectSchema, InstitutionOrderByWithAggregationInputObjectSchema, InstitutionScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { InstitutionScalarFieldEnumSchema } from './internals'

export const InstitutionGroupBySchema = Yup.object({ where: InstitutionWhereInputObjectSchema, orderBy: InstitutionOrderByWithAggregationInputObjectSchema, having: InstitutionScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(InstitutionScalarFieldEnumSchema).required()  }).required()