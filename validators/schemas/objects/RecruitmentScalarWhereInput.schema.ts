// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { BoolFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';

export const RecruitmentScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => RecruitmentScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => RecruitmentScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => RecruitmentScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => RecruitmentScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => RecruitmentScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  passed: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  resume: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  playerId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  accountId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
