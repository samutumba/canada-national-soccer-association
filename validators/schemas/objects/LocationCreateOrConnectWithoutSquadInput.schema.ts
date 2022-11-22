// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationWhereUniqueInputObjectSchema } from '../internals';;
import { LocationCreateWithoutSquadInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';

export const LocationCreateOrConnectWithoutSquadInputObjectSchema = Yup.object({
    where: LocationWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([LocationCreateWithoutSquadInputObjectSchema,
LocationUncheckedCreateWithoutSquadInputObjectSchema])
});
