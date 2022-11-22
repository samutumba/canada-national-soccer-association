// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateWithoutSquadInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';;
import { PlayerCreateOrConnectWithoutSquadInputObjectSchema } from '../internals';;
import { PlayerUpsertWithWhereUniqueWithoutSquadInputObjectSchema } from '../internals';;
import { PlayerWhereUniqueInputObjectSchema } from '../internals';;
import { PlayerUpdateWithWhereUniqueWithoutSquadInputObjectSchema } from '../internals';;
import { PlayerUpdateManyWithWhereWithoutSquadInputObjectSchema } from '../internals';;
import { PlayerScalarWhereInputObjectSchema } from '../internals';

export const PlayerUpdateManyWithoutSquadNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutSquadInputObjectSchema,
Yup.array().of(PlayerCreateWithoutSquadInputObjectSchema),
PlayerUncheckedCreateWithoutSquadInputObjectSchema,
Yup.array().of(PlayerUncheckedCreateWithoutSquadInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([PlayerCreateOrConnectWithoutSquadInputObjectSchema,
Yup.array().of(PlayerCreateOrConnectWithoutSquadInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([PlayerUpsertWithWhereUniqueWithoutSquadInputObjectSchema,
Yup.array().of(PlayerUpsertWithWhereUniqueWithoutSquadInputObjectSchema)]),  set: Yup.mixed().oneOfSchemas([PlayerWhereUniqueInputObjectSchema,
Yup.array().of(PlayerWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([PlayerWhereUniqueInputObjectSchema,
Yup.array().of(PlayerWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([PlayerWhereUniqueInputObjectSchema,
Yup.array().of(PlayerWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([PlayerWhereUniqueInputObjectSchema,
Yup.array().of(PlayerWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([PlayerUpdateWithWhereUniqueWithoutSquadInputObjectSchema,
Yup.array().of(PlayerUpdateWithWhereUniqueWithoutSquadInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([PlayerUpdateManyWithWhereWithoutSquadInputObjectSchema,
Yup.array().of(PlayerUpdateManyWithWhereWithoutSquadInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([PlayerScalarWhereInputObjectSchema,
Yup.array().of(PlayerScalarWhereInputObjectSchema)])
});
