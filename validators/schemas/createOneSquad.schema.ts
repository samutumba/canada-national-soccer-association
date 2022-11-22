import * as Yup from 'yup';
import { SquadCreateInputObjectSchema } from './internals'

export const SquadCreateSchema = Yup.object({ data: SquadCreateInputObjectSchema  }).required()