// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationCreateWithoutSquadInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';;
import { LocationCreateOrConnectWithoutSquadInputObjectSchema } from '../internals';;
import { LocationWhereUniqueInputObjectSchema } from '../internals';

export const LocationCreateNestedOneWithoutSquadInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([LocationCreateWithoutSquadInputObjectSchema,
LocationUncheckedCreateWithoutSquadInputObjectSchema]),  connectOrCreate: LocationCreateOrConnectWithoutSquadInputObjectSchema,  connect: LocationWhereUniqueInputObjectSchema
});
