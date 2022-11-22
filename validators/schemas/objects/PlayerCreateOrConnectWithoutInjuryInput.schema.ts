// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerWhereUniqueInputObjectSchema } from '../internals';;
import { PlayerCreateWithoutInjuryInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutInjuryInputObjectSchema } from '../internals';

export const PlayerCreateOrConnectWithoutInjuryInputObjectSchema = Yup.object({
    where: PlayerWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutInjuryInputObjectSchema,
PlayerUncheckedCreateWithoutInjuryInputObjectSchema])
});
