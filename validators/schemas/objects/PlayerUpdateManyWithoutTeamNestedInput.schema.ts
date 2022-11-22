// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateWithoutTeamInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutTeamInputObjectSchema } from '../internals';;
import { PlayerCreateOrConnectWithoutTeamInputObjectSchema } from '../internals';;
import { PlayerUpsertWithWhereUniqueWithoutTeamInputObjectSchema } from '../internals';;
import { PlayerWhereUniqueInputObjectSchema } from '../internals';;
import { PlayerUpdateWithWhereUniqueWithoutTeamInputObjectSchema } from '../internals';;
import { PlayerUpdateManyWithWhereWithoutTeamInputObjectSchema } from '../internals';;
import { PlayerScalarWhereInputObjectSchema } from '../internals';

export const PlayerUpdateManyWithoutTeamNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutTeamInputObjectSchema,
Yup.array().of(PlayerCreateWithoutTeamInputObjectSchema),
PlayerUncheckedCreateWithoutTeamInputObjectSchema,
Yup.array().of(PlayerUncheckedCreateWithoutTeamInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([PlayerCreateOrConnectWithoutTeamInputObjectSchema,
Yup.array().of(PlayerCreateOrConnectWithoutTeamInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([PlayerUpsertWithWhereUniqueWithoutTeamInputObjectSchema,
Yup.array().of(PlayerUpsertWithWhereUniqueWithoutTeamInputObjectSchema)]),  set: Yup.mixed().oneOfSchemas([PlayerWhereUniqueInputObjectSchema,
Yup.array().of(PlayerWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([PlayerWhereUniqueInputObjectSchema,
Yup.array().of(PlayerWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([PlayerWhereUniqueInputObjectSchema,
Yup.array().of(PlayerWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([PlayerWhereUniqueInputObjectSchema,
Yup.array().of(PlayerWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([PlayerUpdateWithWhereUniqueWithoutTeamInputObjectSchema,
Yup.array().of(PlayerUpdateWithWhereUniqueWithoutTeamInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([PlayerUpdateManyWithWhereWithoutTeamInputObjectSchema,
Yup.array().of(PlayerUpdateManyWithWhereWithoutTeamInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([PlayerScalarWhereInputObjectSchema,
Yup.array().of(PlayerScalarWhereInputObjectSchema)])
});
