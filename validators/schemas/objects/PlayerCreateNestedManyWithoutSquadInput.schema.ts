// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateWithoutSquadInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';;
import { PlayerCreateOrConnectWithoutSquadInputObjectSchema } from '../internals';;
import { PlayerWhereUniqueInputObjectSchema } from '../internals';

export const PlayerCreateNestedManyWithoutSquadInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutSquadInputObjectSchema,
Yup.array().of(PlayerCreateWithoutSquadInputObjectSchema),
PlayerUncheckedCreateWithoutSquadInputObjectSchema,
Yup.array().of(PlayerUncheckedCreateWithoutSquadInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([PlayerCreateOrConnectWithoutSquadInputObjectSchema,
Yup.array().of(PlayerCreateOrConnectWithoutSquadInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([PlayerWhereUniqueInputObjectSchema,
Yup.array().of(PlayerWhereUniqueInputObjectSchema)])
});
