import * as Yup from 'yup';
import { CompetitionUpdateInputObjectSchema, CompetitionWhereUniqueInputObjectSchema } from './internals'

export const CompetitionUpdateOneSchema = Yup.object({ data: CompetitionUpdateInputObjectSchema, where: CompetitionWhereUniqueInputObjectSchema  }).required()