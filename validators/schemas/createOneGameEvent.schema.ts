import * as Yup from 'yup';
import { GameEventCreateInputObjectSchema } from './internals'

export const GameEventCreateSchema = Yup.object({ data: GameEventCreateInputObjectSchema  }).required()