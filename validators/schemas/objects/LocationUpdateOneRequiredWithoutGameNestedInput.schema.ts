// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationCreateWithoutGameInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutGameInputObjectSchema } from '../internals';;
import { LocationCreateOrConnectWithoutGameInputObjectSchema } from '../internals';;
import { LocationUpsertWithoutGameInputObjectSchema } from '../internals';;
import { LocationWhereUniqueInputObjectSchema } from '../internals';;
import { LocationUpdateWithoutGameInputObjectSchema } from '../internals';;
import { LocationUncheckedUpdateWithoutGameInputObjectSchema } from '../internals';

export const LocationUpdateOneRequiredWithoutGameNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([LocationCreateWithoutGameInputObjectSchema,
LocationUncheckedCreateWithoutGameInputObjectSchema]),  connectOrCreate: LocationCreateOrConnectWithoutGameInputObjectSchema,  upsert: LocationUpsertWithoutGameInputObjectSchema,  connect: LocationWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([LocationUpdateWithoutGameInputObjectSchema,
LocationUncheckedUpdateWithoutGameInputObjectSchema])
});
