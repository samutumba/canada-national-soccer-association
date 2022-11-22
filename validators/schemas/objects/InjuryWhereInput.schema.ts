// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { PlayerRelationFilterObjectSchema } from '../internals';;
import { PlayerWhereInputObjectSchema } from '../internals';;
import { OperationListRelationFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';

export const InjuryWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => InjuryWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => InjuryWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => InjuryWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => InjuryWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => InjuryWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  player: Yup.mixed().oneOfSchemas([PlayerRelationFilterObjectSchema,
PlayerWhereInputObjectSchema]),  playerId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  Operation: OperationListRelationFilterObjectSchema,  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema])
});
