// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { BoolFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { EnumPostionFilterObjectSchema } from '../internals';

export const PlayerScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => PlayerScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => PlayerScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => PlayerScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => PlayerScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => PlayerScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  dob: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  isDomestic: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  photo: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  gender: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  position: Yup.mixed().oneOfSchemas([EnumPostionFilterObjectSchema]),  heathRecordId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  phone: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  streetAddress: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  city: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  province: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  country: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  postalCode: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
