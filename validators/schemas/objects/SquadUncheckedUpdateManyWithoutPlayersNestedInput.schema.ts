// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadCreateWithoutPlayersInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutPlayersInputObjectSchema } from '../internals';;
import { SquadCreateOrConnectWithoutPlayersInputObjectSchema } from '../internals';;
import { SquadUpsertWithWhereUniqueWithoutPlayersInputObjectSchema } from '../internals';;
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadUpdateWithWhereUniqueWithoutPlayersInputObjectSchema } from '../internals';;
import { SquadUpdateManyWithWhereWithoutPlayersInputObjectSchema } from '../internals';;
import { SquadScalarWhereInputObjectSchema } from '../internals';

export const SquadUncheckedUpdateManyWithoutPlayersNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SquadCreateWithoutPlayersInputObjectSchema,
Yup.array().of(SquadCreateWithoutPlayersInputObjectSchema),
SquadUncheckedCreateWithoutPlayersInputObjectSchema,
Yup.array().of(SquadUncheckedCreateWithoutPlayersInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([SquadCreateOrConnectWithoutPlayersInputObjectSchema,
Yup.array().of(SquadCreateOrConnectWithoutPlayersInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([SquadUpsertWithWhereUniqueWithoutPlayersInputObjectSchema,
Yup.array().of(SquadUpsertWithWhereUniqueWithoutPlayersInputObjectSchema)]),  set: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([SquadUpdateWithWhereUniqueWithoutPlayersInputObjectSchema,
Yup.array().of(SquadUpdateWithWhereUniqueWithoutPlayersInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([SquadUpdateManyWithWhereWithoutPlayersInputObjectSchema,
Yup.array().of(SquadUpdateManyWithWhereWithoutPlayersInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([SquadScalarWhereInputObjectSchema,
Yup.array().of(SquadScalarWhereInputObjectSchema)])
});
