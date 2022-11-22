// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerScalarWhereInputObjectSchema } from '../internals';;
import { PlayerUpdateManyMutationInputObjectSchema } from '../internals';;
import { PlayerUncheckedUpdateManyWithoutPlayersInputObjectSchema } from '../internals';

export const PlayerUpdateManyWithWhereWithoutSquadInputObjectSchema = Yup.object({
    where: PlayerScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([PlayerUpdateManyMutationInputObjectSchema,
PlayerUncheckedUpdateManyWithoutPlayersInputObjectSchema])
});
