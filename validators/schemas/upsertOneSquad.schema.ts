import * as Yup from 'yup';
import { SquadWhereUniqueInputObjectSchema, SquadCreateInputObjectSchema, SquadUpdateInputObjectSchema } from './internals'

export const SquadUpsertSchema = Yup.object({ where: SquadWhereUniqueInputObjectSchema, data: SquadCreateInputObjectSchema, update: SquadUpdateInputObjectSchema  }).required()