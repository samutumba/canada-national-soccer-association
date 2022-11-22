import * as Yup from 'yup';
import { CompetitionWhereUniqueInputObjectSchema, CompetitionCreateInputObjectSchema, CompetitionUpdateInputObjectSchema } from './internals'

export const CompetitionUpsertSchema = Yup.object({ where: CompetitionWhereUniqueInputObjectSchema, data: CompetitionCreateInputObjectSchema, update: CompetitionUpdateInputObjectSchema  }).required()