import * as Yup from 'yup';
import { HeathRecordUpdateInputObjectSchema, HeathRecordWhereUniqueInputObjectSchema } from './internals'

export const HeathRecordUpdateOneSchema = Yup.object({ data: HeathRecordUpdateInputObjectSchema, where: HeathRecordWhereUniqueInputObjectSchema  }).required()