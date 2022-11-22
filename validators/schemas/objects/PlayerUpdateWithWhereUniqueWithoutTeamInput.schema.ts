// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerWhereUniqueInputObjectSchema } from '../internals';;
import { PlayerUpdateWithoutTeamInputObjectSchema } from '../internals';;
import { PlayerUncheckedUpdateWithoutTeamInputObjectSchema } from '../internals';

export const PlayerUpdateWithWhereUniqueWithoutTeamInputObjectSchema = Yup.object({
    where: PlayerWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([PlayerUpdateWithoutTeamInputObjectSchema,
PlayerUncheckedUpdateWithoutTeamInputObjectSchema])
});
