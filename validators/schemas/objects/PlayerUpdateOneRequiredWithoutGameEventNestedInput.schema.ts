// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateWithoutGameEventInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutGameEventInputObjectSchema } from '../internals';;
import { PlayerCreateOrConnectWithoutGameEventInputObjectSchema } from '../internals';;
import { PlayerUpsertWithoutGameEventInputObjectSchema } from '../internals';;
import { PlayerWhereUniqueInputObjectSchema } from '../internals';;
import { PlayerUpdateWithoutGameEventInputObjectSchema } from '../internals';;
import { PlayerUncheckedUpdateWithoutGameEventInputObjectSchema } from '../internals';

export const PlayerUpdateOneRequiredWithoutGameEventNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutGameEventInputObjectSchema,
PlayerUncheckedCreateWithoutGameEventInputObjectSchema]),  connectOrCreate: PlayerCreateOrConnectWithoutGameEventInputObjectSchema,  upsert: PlayerUpsertWithoutGameEventInputObjectSchema,  connect: PlayerWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([PlayerUpdateWithoutGameEventInputObjectSchema,
PlayerUncheckedUpdateWithoutGameEventInputObjectSchema])
});
