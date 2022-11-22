// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationCreateWithoutGameInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutGameInputObjectSchema } from '../internals';;
import { LocationCreateOrConnectWithoutGameInputObjectSchema } from '../internals';;
import { LocationWhereUniqueInputObjectSchema } from '../internals';

export const LocationCreateNestedOneWithoutGameInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([LocationCreateWithoutGameInputObjectSchema,
LocationUncheckedCreateWithoutGameInputObjectSchema]),  connectOrCreate: LocationCreateOrConnectWithoutGameInputObjectSchema,  connect: LocationWhereUniqueInputObjectSchema
});
