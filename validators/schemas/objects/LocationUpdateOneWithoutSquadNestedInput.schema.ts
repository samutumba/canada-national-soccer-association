// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationCreateWithoutSquadInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';;
import { LocationCreateOrConnectWithoutSquadInputObjectSchema } from '../internals';;
import { LocationUpsertWithoutSquadInputObjectSchema } from '../internals';;
import { LocationWhereUniqueInputObjectSchema } from '../internals';;
import { LocationUpdateWithoutSquadInputObjectSchema } from '../internals';;
import { LocationUncheckedUpdateWithoutSquadInputObjectSchema } from '../internals';

export const LocationUpdateOneWithoutSquadNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([LocationCreateWithoutSquadInputObjectSchema,
LocationUncheckedCreateWithoutSquadInputObjectSchema]),  connectOrCreate: LocationCreateOrConnectWithoutSquadInputObjectSchema,  upsert: LocationUpsertWithoutSquadInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: LocationWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([LocationUpdateWithoutSquadInputObjectSchema,
LocationUncheckedUpdateWithoutSquadInputObjectSchema])
});
