// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { RecruitmentListRelationFilterObjectSchema } from '../internals';;
import { StaffListRelationFilterObjectSchema } from '../internals';

export const AccountWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => AccountWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => AccountWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => AccountWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => AccountWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => AccountWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  username: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  password: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  recruitment: RecruitmentListRelationFilterObjectSchema,  Staff: StaffListRelationFilterObjectSchema
});
