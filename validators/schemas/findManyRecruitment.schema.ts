import * as Yup from 'yup';
import { RecruitmentWhereInputObjectSchema, RecruitmentOrderByWithRelationInputObjectSchema, RecruitmentWhereUniqueInputObjectSchema } from './internals';
import { RecruitmentScalarFieldEnumSchema } from './internals'

export const RecruitmentFindManySchema = Yup.object({ where: RecruitmentWhereInputObjectSchema, orderBy: RecruitmentOrderByWithRelationInputObjectSchema, cursor: RecruitmentWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(RecruitmentScalarFieldEnumSchema)  }).required()