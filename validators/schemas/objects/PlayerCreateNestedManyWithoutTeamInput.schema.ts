// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateWithoutTeamInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutTeamInputObjectSchema } from '../internals';;
import { PlayerCreateOrConnectWithoutTeamInputObjectSchema } from '../internals';;
import { PlayerWhereUniqueInputObjectSchema } from '../internals';

export const PlayerCreateNestedManyWithoutTeamInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutTeamInputObjectSchema,
Yup.array().of(PlayerCreateWithoutTeamInputObjectSchema),
PlayerUncheckedCreateWithoutTeamInputObjectSchema,
Yup.array().of(PlayerUncheckedCreateWithoutTeamInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([PlayerCreateOrConnectWithoutTeamInputObjectSchema,
Yup.array().of(PlayerCreateOrConnectWithoutTeamInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([PlayerWhereUniqueInputObjectSchema,
Yup.array().of(PlayerWhereUniqueInputObjectSchema)])
});
