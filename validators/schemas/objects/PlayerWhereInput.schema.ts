// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { BoolFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { EnumPostionFilterObjectSchema } from '../internals';;
import { HeathRecordRelationFilterObjectSchema } from '../internals';;
import { HeathRecordWhereInputObjectSchema } from '../internals';;
import { ScholarshipListRelationFilterObjectSchema } from '../internals';;
import { RecruitmentListRelationFilterObjectSchema } from '../internals';;
import { GameEventListRelationFilterObjectSchema } from '../internals';;
import { InjuryListRelationFilterObjectSchema } from '../internals';;
import { SquadListRelationFilterObjectSchema } from '../internals';;
import { TeamListRelationFilterObjectSchema } from '../internals';

export const PlayerWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => PlayerWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => PlayerWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => PlayerWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => PlayerWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => PlayerWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  dob: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  isDomestic: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  photo: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  gender: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  position: Yup.mixed().oneOfSchemas([EnumPostionFilterObjectSchema]),  healthRecord: Yup.mixed().oneOfSchemas([HeathRecordRelationFilterObjectSchema,
HeathRecordWhereInputObjectSchema]),  heathRecordId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  phone: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  streetAddress: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  city: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  province: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  country: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  postalCode: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  scholarship: ScholarshipListRelationFilterObjectSchema,  recruitment: RecruitmentListRelationFilterObjectSchema,  GameEvent: GameEventListRelationFilterObjectSchema,  Injury: InjuryListRelationFilterObjectSchema,  Squad: SquadListRelationFilterObjectSchema,  Team: TeamListRelationFilterObjectSchema
});
