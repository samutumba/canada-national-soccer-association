// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerWhereUniqueInputObjectSchema } from '../internals';;
import { PlayerUpdateWithoutTeamInputObjectSchema } from '../internals';;
import { PlayerUncheckedUpdateWithoutTeamInputObjectSchema } from '../internals';;
import { PlayerCreateWithoutTeamInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutTeamInputObjectSchema } from '../internals';

export const PlayerUpsertWithWhereUniqueWithoutTeamInputObjectSchema = Yup.object({
    where: PlayerWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([PlayerUpdateWithoutTeamInputObjectSchema,
PlayerUncheckedUpdateWithoutTeamInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutTeamInputObjectSchema,
PlayerUncheckedCreateWithoutTeamInputObjectSchema])
});
