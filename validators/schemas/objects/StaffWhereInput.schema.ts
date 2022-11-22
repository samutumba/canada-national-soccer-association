// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { EnumRoleFilterObjectSchema } from '../internals';;
import { AccountRelationFilterObjectSchema } from '../internals';;
import { AccountWhereInputObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { SquadListRelationFilterObjectSchema } from '../internals';

export const StaffWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => StaffWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => StaffWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => StaffWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => StaffWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => StaffWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  dob: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  phone: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  role: Yup.mixed().oneOfSchemas([EnumRoleFilterObjectSchema]),  streetAddress: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  city: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  country: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  postalCode: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  account: Yup.mixed().oneOfSchemas([AccountRelationFilterObjectSchema,
AccountWhereInputObjectSchema]),  accountId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  Squad: SquadListRelationFilterObjectSchema
});
