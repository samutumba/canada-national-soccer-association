// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateWithoutInjuryInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutInjuryInputObjectSchema } from '../internals';;
import { PlayerCreateOrConnectWithoutInjuryInputObjectSchema } from '../internals';;
import { PlayerUpsertWithoutInjuryInputObjectSchema } from '../internals';;
import { PlayerWhereUniqueInputObjectSchema } from '../internals';;
import { PlayerUpdateWithoutInjuryInputObjectSchema } from '../internals';;
import { PlayerUncheckedUpdateWithoutInjuryInputObjectSchema } from '../internals';

export const PlayerUpdateOneRequiredWithoutInjuryNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutInjuryInputObjectSchema,
PlayerUncheckedCreateWithoutInjuryInputObjectSchema]),  connectOrCreate: PlayerCreateOrConnectWithoutInjuryInputObjectSchema,  upsert: PlayerUpsertWithoutInjuryInputObjectSchema,  connect: PlayerWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([PlayerUpdateWithoutInjuryInputObjectSchema,
PlayerUncheckedUpdateWithoutInjuryInputObjectSchema])
});
