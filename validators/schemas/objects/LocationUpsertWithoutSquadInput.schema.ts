// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationUpdateWithoutSquadInputObjectSchema } from '../internals';;
import { LocationUncheckedUpdateWithoutSquadInputObjectSchema } from '../internals';;
import { LocationCreateWithoutSquadInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';

export const LocationUpsertWithoutSquadInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([LocationUpdateWithoutSquadInputObjectSchema,
LocationUncheckedUpdateWithoutSquadInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([LocationCreateWithoutSquadInputObjectSchema,
LocationUncheckedCreateWithoutSquadInputObjectSchema])
});
