import * as Yup from 'yup';
import { InterviewWhereInputObjectSchema, InterviewOrderByWithAggregationInputObjectSchema, InterviewScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { InterviewScalarFieldEnumSchema } from './internals'

export const InterviewGroupBySchema = Yup.object({ where: InterviewWhereInputObjectSchema, orderBy: InterviewOrderByWithAggregationInputObjectSchema, having: InterviewScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(InterviewScalarFieldEnumSchema).required()  }).required()