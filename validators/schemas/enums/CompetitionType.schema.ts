import * as Yup from 'yup';

export const CompetitionTypeSchema = Yup.mixed().oneOf(["TOURNAMENT","LEAGUE","FRIENDLY"])