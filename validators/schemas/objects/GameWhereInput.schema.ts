// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { TeamListRelationFilterObjectSchema } from '../internals';;
import { GameEventListRelationFilterObjectSchema } from '../internals';;
import { CompetitionRelationFilterObjectSchema } from '../internals';;
import { CompetitionWhereInputObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { LocationRelationFilterObjectSchema } from '../internals';;
import { LocationWhereInputObjectSchema } from '../internals';;
import { IntFilterObjectSchema } from '../internals';

export const GameWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => GameWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => GameWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => GameWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => GameWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => GameWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  team: TeamListRelationFilterObjectSchema,  events: GameEventListRelationFilterObjectSchema,  competition: Yup.mixed().oneOfSchemas([CompetitionRelationFilterObjectSchema,
CompetitionWhereInputObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  location: Yup.mixed().oneOfSchemas([LocationRelationFilterObjectSchema,
LocationWhereInputObjectSchema]),  attendance: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  locationId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  competitionId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
