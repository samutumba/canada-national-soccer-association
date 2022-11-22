// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadCreateWithoutPlayersInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutPlayersInputObjectSchema } from '../internals';;
import { SquadCreateOrConnectWithoutPlayersInputObjectSchema } from '../internals';;
import { SquadWhereUniqueInputObjectSchema } from '../internals';

export const SquadUncheckedCreateNestedManyWithoutPlayersInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SquadCreateWithoutPlayersInputObjectSchema,
Yup.array().of(SquadCreateWithoutPlayersInputObjectSchema),
SquadUncheckedCreateWithoutPlayersInputObjectSchema,
Yup.array().of(SquadUncheckedCreateWithoutPlayersInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([SquadCreateOrConnectWithoutPlayersInputObjectSchema,
Yup.array().of(SquadCreateOrConnectWithoutPlayersInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)])
});
