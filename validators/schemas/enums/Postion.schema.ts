import * as Yup from 'yup';

export const PostionSchema = Yup.mixed().oneOf(["goal_keeper","right_back","center_back","left_back","defensive_midfielder","central_midfielder","attacking_midfielder","winger","striker","wing_back"])