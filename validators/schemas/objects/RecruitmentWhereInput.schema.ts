// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { PlayerRelationFilterObjectSchema } from '../internals';;
import { PlayerWhereInputObjectSchema } from '../internals';;
import { AccountRelationFilterObjectSchema } from '../internals';;
import { AccountWhereInputObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { BoolFilterObjectSchema } from '../internals';;
import { InterviewListRelationFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';

export const RecruitmentWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => RecruitmentWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => RecruitmentWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => RecruitmentWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => RecruitmentWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => RecruitmentWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  player: Yup.mixed().oneOfSchemas([PlayerRelationFilterObjectSchema,
PlayerWhereInputObjectSchema]),  recruiter: Yup.mixed().oneOfSchemas([AccountRelationFilterObjectSchema,
AccountWhereInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  passed: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  interviews: InterviewListRelationFilterObjectSchema,  resume: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  playerId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  accountId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
