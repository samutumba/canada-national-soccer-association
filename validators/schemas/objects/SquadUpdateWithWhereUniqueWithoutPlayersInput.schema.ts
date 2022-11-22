// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadUpdateWithoutPlayersInputObjectSchema } from '../internals';;
import { SquadUncheckedUpdateWithoutPlayersInputObjectSchema } from '../internals';

export const SquadUpdateWithWhereUniqueWithoutPlayersInputObjectSchema = Yup.object({
    where: SquadWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([SquadUpdateWithoutPlayersInputObjectSchema,
SquadUncheckedUpdateWithoutPlayersInputObjectSchema])
});
