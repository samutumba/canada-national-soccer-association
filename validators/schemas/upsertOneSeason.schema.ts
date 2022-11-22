import * as Yup from 'yup';
import { SeasonWhereUniqueInputObjectSchema, SeasonCreateInputObjectSchema, SeasonUpdateInputObjectSchema } from './internals'

export const SeasonUpsertSchema = Yup.object({ where: SeasonWhereUniqueInputObjectSchema, data: SeasonCreateInputObjectSchema, update: SeasonUpdateInputObjectSchema  }).required()