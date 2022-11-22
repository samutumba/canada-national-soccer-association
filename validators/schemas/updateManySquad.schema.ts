import * as Yup from 'yup';
import { SquadUpdateManyMutationInputObjectSchema, SquadWhereInputObjectSchema } from './internals'

export const SquadUpdateManySchema = Yup.object({ data: SquadUpdateManyMutationInputObjectSchema, where: SquadWhereInputObjectSchema  }).required()