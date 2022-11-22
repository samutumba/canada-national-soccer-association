// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { PlayerRelationFilterObjectSchema } from '../internals';;
import { PlayerWhereInputObjectSchema } from '../internals';

export const HeathRecordWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => HeathRecordWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => HeathRecordWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => HeathRecordWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => HeathRecordWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => HeathRecordWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  cardNumber: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  issueDate: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  expiryDate: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  Player: Yup.mixed().oneOfSchemas([PlayerRelationFilterObjectSchema,
PlayerWhereInputObjectSchema])
});
