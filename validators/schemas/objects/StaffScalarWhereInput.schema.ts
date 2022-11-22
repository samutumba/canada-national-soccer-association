// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { EnumRoleFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';

export const StaffScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => StaffScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => StaffScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => StaffScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => StaffScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => StaffScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  dob: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  phone: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  role: Yup.mixed().oneOfSchemas([EnumRoleFilterObjectSchema]),  streetAddress: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  city: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  country: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  postalCode: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  accountId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()])
});
