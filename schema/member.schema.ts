import z from "zod";

export const createMemberSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export type CreateMemberInput = z.TypeOf<createMemberSchema>;
