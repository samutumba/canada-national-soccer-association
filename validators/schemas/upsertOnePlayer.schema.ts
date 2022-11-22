import * as Yup from 'yup';
import { PlayerWhereUniqueInputObjectSchema, PlayerCreateInputObjectSchema, PlayerUpdateInputObjectSchema } from './internals'

export const PlayerUpsertSchema = Yup.object({ where: PlayerWhereUniqueInputObjectSchema, data: PlayerCreateInputObjectSchema, update: PlayerUpdateInputObjectSchema  }).required()