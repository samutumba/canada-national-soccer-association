// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';

export const SquadScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => SquadScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => SquadScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => SquadScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => SquadScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => SquadScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  institutionId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  homeColor: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  awayColor: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  locationId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()])
});
