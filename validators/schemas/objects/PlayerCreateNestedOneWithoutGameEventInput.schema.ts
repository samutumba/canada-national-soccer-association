// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateWithoutGameEventInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutGameEventInputObjectSchema } from '../internals';;
import { PlayerCreateOrConnectWithoutGameEventInputObjectSchema } from '../internals';;
import { PlayerWhereUniqueInputObjectSchema } from '../internals';

export const PlayerCreateNestedOneWithoutGameEventInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutGameEventInputObjectSchema,
PlayerUncheckedCreateWithoutGameEventInputObjectSchema]),  connectOrCreate: PlayerCreateOrConnectWithoutGameEventInputObjectSchema,  connect: PlayerWhereUniqueInputObjectSchema
});
