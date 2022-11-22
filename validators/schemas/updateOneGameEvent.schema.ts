import * as Yup from 'yup';
import { GameEventUpdateInputObjectSchema, GameEventWhereUniqueInputObjectSchema } from './internals'

export const GameEventUpdateOneSchema = Yup.object({ data: GameEventUpdateInputObjectSchema, where: GameEventWhereUniqueInputObjectSchema  }).required()