// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { PlayerRelationFilterObjectSchema } from '../internals';;
import { PlayerWhereInputObjectSchema } from '../internals';;
import { IntFilterObjectSchema } from '../internals';;
import { GameRelationFilterObjectSchema } from '../internals';;
import { GameWhereInputObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { EnumEventFilterObjectSchema } from '../internals';

export const GameEventWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => GameEventWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => GameEventWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => GameEventWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => GameEventWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => GameEventWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  player: Yup.mixed().oneOfSchemas([PlayerRelationFilterObjectSchema,
PlayerWhereInputObjectSchema]),  minute: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  game: Yup.mixed().oneOfSchemas([GameRelationFilterObjectSchema,
GameWhereInputObjectSchema]),  gameId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  playerId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  type: Yup.mixed().oneOfSchemas([EnumEventFilterObjectSchema])
});
