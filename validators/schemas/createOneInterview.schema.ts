import * as Yup from 'yup';
import { InterviewCreateInputObjectSchema } from './internals'

export const InterviewCreateSchema = Yup.object({ data: InterviewCreateInputObjectSchema  }).required()