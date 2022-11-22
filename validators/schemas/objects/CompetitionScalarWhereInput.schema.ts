// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { EnumCompetitionTypeFilterObjectSchema } from '../internals';

export const CompetitionScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => CompetitionScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => CompetitionScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => CompetitionScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => CompetitionScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => CompetitionScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  sponsor: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  type: Yup.mixed().oneOfSchemas([EnumCompetitionTypeFilterObjectSchema]),  seasonId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
