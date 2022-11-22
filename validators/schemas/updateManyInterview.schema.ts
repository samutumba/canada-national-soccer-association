import * as Yup from 'yup';
import { InterviewUpdateManyMutationInputObjectSchema, InterviewWhereInputObjectSchema } from './internals'

export const InterviewUpdateManySchema = Yup.object({ data: InterviewUpdateManyMutationInputObjectSchema, where: InterviewWhereInputObjectSchema  }).required()