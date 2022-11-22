// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationWhereUniqueInputObjectSchema } from '../internals';;
import { LocationCreateWithoutGameInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutGameInputObjectSchema } from '../internals';

export const LocationCreateOrConnectWithoutGameInputObjectSchema = Yup.object({
    where: LocationWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([LocationCreateWithoutGameInputObjectSchema,
LocationUncheckedCreateWithoutGameInputObjectSchema])
});
