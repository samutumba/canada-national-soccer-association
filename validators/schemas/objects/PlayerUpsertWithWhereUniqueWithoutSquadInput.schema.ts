// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerWhereUniqueInputObjectSchema } from '../internals';;
import { PlayerUpdateWithoutSquadInputObjectSchema } from '../internals';;
import { PlayerUncheckedUpdateWithoutSquadInputObjectSchema } from '../internals';;
import { PlayerCreateWithoutSquadInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';

export const PlayerUpsertWithWhereUniqueWithoutSquadInputObjectSchema = Yup.object({
    where: PlayerWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([PlayerUpdateWithoutSquadInputObjectSchema,
PlayerUncheckedUpdateWithoutSquadInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutSquadInputObjectSchema,
PlayerUncheckedCreateWithoutSquadInputObjectSchema])
});
