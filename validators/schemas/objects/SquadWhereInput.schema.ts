// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { PlayerListRelationFilterObjectSchema } from '../internals';;
import { InstitutionRelationFilterObjectSchema } from '../internals';;
import { InstitutionWhereInputObjectSchema } from '../internals';;
import { StaffListRelationFilterObjectSchema } from '../internals';;
import { CompetitionListRelationFilterObjectSchema } from '../internals';;
import { LocationRelationFilterObjectSchema } from '../internals';;
import { LocationWhereInputObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { TeamListRelationFilterObjectSchema } from '../internals';

export const SquadWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => SquadWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => SquadWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => SquadWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => SquadWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => SquadWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  players: PlayerListRelationFilterObjectSchema,  institution: Yup.mixed().oneOfSchemas([InstitutionRelationFilterObjectSchema,
InstitutionWhereInputObjectSchema]),  staff: StaffListRelationFilterObjectSchema,  competition: CompetitionListRelationFilterObjectSchema,  institutionId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  home: Yup.mixed().oneOfSchemas([LocationRelationFilterObjectSchema,
LocationWhereInputObjectSchema]),  homeColor: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  awayColor: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  Team: TeamListRelationFilterObjectSchema,  locationId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()])
});
