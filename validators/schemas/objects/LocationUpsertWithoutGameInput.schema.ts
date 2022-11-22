// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationUpdateWithoutGameInputObjectSchema } from '../internals';;
import { LocationUncheckedUpdateWithoutGameInputObjectSchema } from '../internals';;
import { LocationCreateWithoutGameInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutGameInputObjectSchema } from '../internals';

export const LocationUpsertWithoutGameInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([LocationUpdateWithoutGameInputObjectSchema,
LocationUncheckedUpdateWithoutGameInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([LocationCreateWithoutGameInputObjectSchema,
LocationUncheckedCreateWithoutGameInputObjectSchema])
});
