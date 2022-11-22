import * as Yup from 'yup';
import { PlayerCreateInputObjectSchema } from './internals'

export const PlayerCreateSchema = Yup.object({ data: PlayerCreateInputObjectSchema  }).required()