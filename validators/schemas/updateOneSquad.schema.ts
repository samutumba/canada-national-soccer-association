import * as Yup from 'yup';
import { SquadUpdateInputObjectSchema, SquadWhereUniqueInputObjectSchema } from './internals'

export const SquadUpdateOneSchema = Yup.object({ data: SquadUpdateInputObjectSchema, where: SquadWhereUniqueInputObjectSchema  }).required()