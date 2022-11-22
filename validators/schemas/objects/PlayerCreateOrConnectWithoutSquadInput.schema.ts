// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerWhereUniqueInputObjectSchema } from '../internals';;
import { PlayerCreateWithoutSquadInputObjectSchema } from '../internals';;
import { PlayerUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';

export const PlayerCreateOrConnectWithoutSquadInputObjectSchema = Yup.object({
    where: PlayerWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([PlayerCreateWithoutSquadInputObjectSchema,
PlayerUncheckedCreateWithoutSquadInputObjectSchema])
});
