// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadCreateWithoutPlayersInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutPlayersInputObjectSchema } from '../internals';

export const SquadCreateOrConnectWithoutPlayersInputObjectSchema = Yup.object({
    where: SquadWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([SquadCreateWithoutPlayersInputObjectSchema,
SquadUncheckedCreateWithoutPlayersInputObjectSchema])
});
