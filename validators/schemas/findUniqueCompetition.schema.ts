import * as Yup from 'yup';
import { CompetitionWhereUniqueInputObjectSchema } from './internals'

export const CompetitionFindUniqueSchema = Yup.object({ where: CompetitionWhereUniqueInputObjectSchema }).required()