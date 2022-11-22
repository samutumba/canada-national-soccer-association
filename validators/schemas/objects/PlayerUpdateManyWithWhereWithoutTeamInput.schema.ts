// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerScalarWhereInputObjectSchema } from '../internals';;
import { PlayerUpdateManyMutationInputObjectSchema } from '../internals';;
import { PlayerUncheckedUpdateManyWithoutStartersInputObjectSchema } from '../internals';

export const PlayerUpdateManyWithWhereWithoutTeamInputObjectSchema = Yup.object({
    where: PlayerScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([PlayerUpdateManyMutationInputObjectSchema,
PlayerUncheckedUpdateManyWithoutStartersInputObjectSchema])
});
