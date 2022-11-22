// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerWhereUniqueInputObjectSchema } from '../internals';;
import { PlayerCreateWithoutGameEventInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutGameEventInputObjectSchema } from '../internals';

export const PlayerCreateOrConnectWithoutGameEventInputObjectSchema = Yup.object({
    where: PlayerWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutGameEventInputObjectSchema,
PlayerUncheckedCreateWithoutGameEventInputObjectSchema])
});
