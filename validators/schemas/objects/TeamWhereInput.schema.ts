// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { PlayerListRelationFilterObjectSchema } from '../internals';;
import { EnumFormationFilterObjectSchema } from '../internals';;
import { SquadRelationFilterObjectSchema } from '../internals';;
import { SquadWhereInputObjectSchema } from '../internals';;
import { GameRelationFilterObjectSchema } from '../internals';;
import { GameWhereInputObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';

export const TeamWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => TeamWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TeamWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => TeamWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => TeamWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TeamWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  starters: PlayerListRelationFilterObjectSchema,  formation: Yup.mixed().oneOfSchemas([EnumFormationFilterObjectSchema]),  shirtColor: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  squad: Yup.mixed().oneOfSchemas([SquadRelationFilterObjectSchema,
SquadWhereInputObjectSchema]),  squadId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  Game: Yup.mixed().oneOfSchemas([GameRelationFilterObjectSchema,
GameWhereInputObjectSchema]),  gameId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()])
});
