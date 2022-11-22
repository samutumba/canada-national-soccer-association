// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerWhereUniqueInputObjectSchema } from '../internals';;
import { PlayerUpdateWithoutSquadInputObjectSchema } from '../internals';;
import { PlayerUncheckedUpdateWithoutSquadInputObjectSchema } from '../internals';

export const PlayerUpdateWithWhereUniqueWithoutSquadInputObjectSchema = Yup.object({
    where: PlayerWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([PlayerUpdateWithoutSquadInputObjectSchema,
PlayerUncheckedUpdateWithoutSquadInputObjectSchema])
});
