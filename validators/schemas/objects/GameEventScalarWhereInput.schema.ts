// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { IntFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { EnumEventFilterObjectSchema } from '../internals';

export const GameEventScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => GameEventScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => GameEventScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => GameEventScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => GameEventScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => GameEventScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  minute: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  gameId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  playerId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  type: Yup.mixed().oneOfSchemas([EnumEventFilterObjectSchema])
});
