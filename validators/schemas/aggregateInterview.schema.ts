import * as Yup from 'yup';
import { InterviewWhereInputObjectSchema, InterviewOrderByWithRelationInputObjectSchema, InterviewWhereUniqueInputObjectSchema } from './internals'

export const InterviewAggregateSchema = Yup.object({ where: InterviewWhereInputObjectSchema, orderBy: InterviewOrderByWithRelationInputObjectSchema, cursor: InterviewWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()