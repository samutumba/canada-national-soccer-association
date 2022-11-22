import * as Yup from 'yup';
import { SeasonWhereUniqueInputObjectSchema } from './internals'

export const SeasonFindUniqueSchema = Yup.object({ where: SeasonWhereUniqueInputObjectSchema }).required()