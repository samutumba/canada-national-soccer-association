// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { EnumInstitutionCategoryFilterObjectSchema } from '../internals';;
import { ScholarshipListRelationFilterObjectSchema } from '../internals';;
import { SquadListRelationFilterObjectSchema } from '../internals';

export const InstitutionWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => InstitutionWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => InstitutionWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => InstitutionWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => InstitutionWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => InstitutionWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  address: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  city: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  province: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  postal_code: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  category: Yup.mixed().oneOfSchemas([EnumInstitutionCategoryFilterObjectSchema]),  scholarship: ScholarshipListRelationFilterObjectSchema,  Squad: SquadListRelationFilterObjectSchema
});
