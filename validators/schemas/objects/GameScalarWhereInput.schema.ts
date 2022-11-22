// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { IntFilterObjectSchema } from '../internals';

export const GameScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => GameScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => GameScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => GameScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => GameScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => GameScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  attendance: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  locationId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  competitionId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
