// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadUpdateWithoutPlayersInputObjectSchema } from '../internals';;
import { SquadUncheckedUpdateWithoutPlayersInputObjectSchema } from '../internals';;
import { SquadCreateWithoutPlayersInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutPlayersInputObjectSchema } from '../internals';

export const SquadUpsertWithWhereUniqueWithoutPlayersInputObjectSchema = Yup.object({
    where: SquadWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([SquadUpdateWithoutPlayersInputObjectSchema,
SquadUncheckedUpdateWithoutPlayersInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([SquadCreateWithoutPlayersInputObjectSchema,
SquadUncheckedCreateWithoutPlayersInputObjectSchema])
});
