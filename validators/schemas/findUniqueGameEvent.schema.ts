import * as Yup from 'yup';
import { GameEventWhereUniqueInputObjectSchema } from './internals'

export const GameEventFindUniqueSchema = Yup.object({ where: GameEventWhereUniqueInputObjectSchema }).required()