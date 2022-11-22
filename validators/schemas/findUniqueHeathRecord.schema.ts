import * as Yup from 'yup';
import { HeathRecordWhereUniqueInputObjectSchema } from './internals'

export const HeathRecordFindUniqueSchema = Yup.object({ where: HeathRecordWhereUniqueInputObjectSchema }).required()