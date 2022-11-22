import * as Yup from 'yup';
import { RecruitmentWhereInputObjectSchema, RecruitmentOrderByWithAggregationInputObjectSchema, RecruitmentScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { RecruitmentScalarFieldEnumSchema } from './internals'

export const RecruitmentGroupBySchema = Yup.object({ where: RecruitmentWhereInputObjectSchema, orderBy: RecruitmentOrderByWithAggregationInputObjectSchema, having: RecruitmentScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(RecruitmentScalarFieldEnumSchema).required()  }).required()