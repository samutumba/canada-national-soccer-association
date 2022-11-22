// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerWhereUniqueInputObjectSchema } from '../internals';;
import { PlayerCreateWithoutTeamInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutTeamInputObjectSchema } from '../internals';

export const PlayerCreateOrConnectWithoutTeamInputObjectSchema = Yup.object({
    where: PlayerWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutTeamInputObjectSchema,
PlayerUncheckedCreateWithoutTeamInputObjectSchema])
});
