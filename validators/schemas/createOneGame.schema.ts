import * as Yup from 'yup';
import { GameCreateInputObjectSchema } from './internals'

export const GameCreateSchema = Yup.object({ data: GameCreateInputObjectSchema  }).required()