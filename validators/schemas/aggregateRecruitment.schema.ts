import * as Yup from 'yup';
import { RecruitmentWhereInputObjectSchema, RecruitmentOrderByWithRelationInputObjectSchema, RecruitmentWhereUniqueInputObjectSchema } from './internals'

export const RecruitmentAggregateSchema = Yup.object({ where: RecruitmentWhereInputObjectSchema, orderBy: RecruitmentOrderByWithRelationInputObjectSchema, cursor: RecruitmentWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()