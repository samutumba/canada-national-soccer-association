// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { CompetitionListRelationFilterObjectSchema } from '../internals';

export const SeasonWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => SeasonWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => SeasonWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => SeasonWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => SeasonWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => SeasonWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  startDate: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  endDate: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  Competition: CompetitionListRelationFilterObjectSchema
});
