import * as Yup from 'yup';
import { InterviewWhereInputObjectSchema, InterviewOrderByWithRelationInputObjectSchema, InterviewWhereUniqueInputObjectSchema } from './internals';
import { InterviewScalarFieldEnumSchema } from './internals'

export const InterviewFindManySchema = Yup.object({ where: InterviewWhereInputObjectSchema, orderBy: InterviewOrderByWithRelationInputObjectSchema, cursor: InterviewWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(InterviewScalarFieldEnumSchema)  }).required()