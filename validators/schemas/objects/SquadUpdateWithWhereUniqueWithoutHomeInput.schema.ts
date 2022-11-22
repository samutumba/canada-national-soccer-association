// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadUpdateWithoutHomeInputObjectSchema } from '../internals';;
import { SquadUncheckedUpdateWithoutHomeInputObjectSchema } from '../internals';

export const SquadUpdateWithWhereUniqueWithoutHomeInputObjectSchema = Yup.object({
    where: SquadWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([SquadUpdateWithoutHomeInputObjectSchema,
SquadUncheckedUpdateWithoutHomeInputObjectSchema])
});
