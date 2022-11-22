// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { InstitutionRelationFilterObjectSchema } from '../internals';;
import { InstitutionWhereInputObjectSchema } from '../internals';;
import { PlayerRelationFilterObjectSchema } from '../internals';;
import { PlayerWhereInputObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';

export const ScholarshipWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => ScholarshipWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ScholarshipWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => ScholarshipWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => ScholarshipWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ScholarshipWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  description: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  sponsor: Yup.mixed().oneOfSchemas([InstitutionRelationFilterObjectSchema,
InstitutionWhereInputObjectSchema]),  player: Yup.mixed().oneOfSchemas([PlayerRelationFilterObjectSchema,
PlayerWhereInputObjectSchema]),  institutionId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  playerId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema])
});
