import * as Yup from 'yup';
import { GameEventWhereUniqueInputObjectSchema } from './internals'

export const GameEventDeleteOneSchema = Yup.object({ where: GameEventWhereUniqueInputObjectSchema  }).required()