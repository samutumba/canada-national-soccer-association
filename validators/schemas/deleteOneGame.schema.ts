import * as Yup from 'yup';
import { GameWhereUniqueInputObjectSchema } from './internals'

export const GameDeleteOneSchema = Yup.object({ where: GameWhereUniqueInputObjectSchema  }).required()