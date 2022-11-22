import * as Yup from 'yup';
import { HeathRecordWhereUniqueInputObjectSchema, HeathRecordCreateInputObjectSchema, HeathRecordUpdateInputObjectSchema } from './internals'

export const HeathRecordUpsertSchema = Yup.object({ where: HeathRecordWhereUniqueInputObjectSchema, data: HeathRecordCreateInputObjectSchema, update: HeathRecordUpdateInputObjectSchema  }).required()