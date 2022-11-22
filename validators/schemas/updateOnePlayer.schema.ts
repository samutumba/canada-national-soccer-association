import * as Yup from 'yup';
import { PlayerUpdateInputObjectSchema, PlayerWhereUniqueInputObjectSchema } from './internals'

export const PlayerUpdateOneSchema = Yup.object({ data: PlayerUpdateInputObjectSchema, where: PlayerWhereUniqueInputObjectSchema  }).required()