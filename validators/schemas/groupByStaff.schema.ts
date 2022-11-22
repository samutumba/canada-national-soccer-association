import * as Yup from 'yup';
import { StaffWhereInputObjectSchema, StaffOrderByWithAggregationInputObjectSchema, StaffScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { StaffScalarFieldEnumSchema } from './internals'

export const StaffGroupBySchema = Yup.object({ where: StaffWhereInputObjectSchema, orderBy: StaffOrderByWithAggregationInputObjectSchema, having: StaffScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(StaffScalarFieldEnumSchema).required()  }).required()