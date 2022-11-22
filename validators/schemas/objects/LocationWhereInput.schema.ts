// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { EnumLocationCategoryFilterObjectSchema } from '../internals';;
import { GameListRelationFilterObjectSchema } from '../internals';;
import { SquadListRelationFilterObjectSchema } from '../internals';

export const LocationWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => LocationWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => LocationWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => LocationWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => LocationWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => LocationWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  category: Yup.mixed().oneOfSchemas([EnumLocationCategoryFilterObjectSchema]),  streetAddress: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  city: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  province: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  country: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  postalCode: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  game: GameListRelationFilterObjectSchema,  Squad: SquadListRelationFilterObjectSchema
});
