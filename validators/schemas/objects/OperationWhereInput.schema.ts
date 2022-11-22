// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { InjuryRelationFilterObjectSchema } from '../internals';;
import { InjuryWhereInputObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';

export const OperationWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => OperationWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => OperationWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => OperationWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => OperationWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => OperationWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  type: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  injury: Yup.mixed().oneOfSchemas([InjuryRelationFilterObjectSchema,
InjuryWhereInputObjectSchema]),  date: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  injuryId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema])
});
