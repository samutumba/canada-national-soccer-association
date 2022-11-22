// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { EnumFormationFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';

export const TeamScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => TeamScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TeamScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => TeamScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => TeamScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TeamScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  formation: Yup.mixed().oneOfSchemas([EnumFormationFilterObjectSchema]),  shirtColor: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  squadId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  gameId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()])
});
