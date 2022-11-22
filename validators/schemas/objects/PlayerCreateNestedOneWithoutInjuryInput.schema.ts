// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateWithoutInjuryInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutInjuryInputObjectSchema } from '../internals';;
import { PlayerCreateOrConnectWithoutInjuryInputObjectSchema } from '../internals';;
import { PlayerWhereUniqueInputObjectSchema } from '../internals';

export const PlayerCreateNestedOneWithoutInjuryInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutInjuryInputObjectSchema,
PlayerUncheckedCreateWithoutInjuryInputObjectSchema]),  connectOrCreate: PlayerCreateOrConnectWithoutInjuryInputObjectSchema,  connect: PlayerWhereUniqueInputObjectSchema
});
