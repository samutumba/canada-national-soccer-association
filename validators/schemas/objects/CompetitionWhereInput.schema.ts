// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { EnumCompetitionTypeFilterObjectSchema } from '../internals';;
import { SeasonRelationFilterObjectSchema } from '../internals';;
import { SeasonWhereInputObjectSchema } from '../internals';;
import { SquadListRelationFilterObjectSchema } from '../internals';;
import { GameListRelationFilterObjectSchema } from '../internals';

export const CompetitionWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => CompetitionWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => CompetitionWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => CompetitionWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => CompetitionWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => CompetitionWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  sponsor: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  type: Yup.mixed().oneOfSchemas([EnumCompetitionTypeFilterObjectSchema]),  season: Yup.mixed().oneOfSchemas([SeasonRelationFilterObjectSchema,
SeasonWhereInputObjectSchema]),  seasonId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  Squad: SquadListRelationFilterObjectSchema,  Game: GameListRelationFilterObjectSchema
});
