import { z } from 'zod';
import {
	createTRPCRouter,
	publicProcedure,
	protectedProcedure,
} from '~/server/api/trpc';

export const exampleRouter = createTRPCRouter({
	hello: publicProcedure
		.input(z.object({ text: z.string() }))
		.query(({ input }) => {
			return {
				greeting: `Hello ${input.text}`,
			};
		}),

	getAll: publicProcedure.query(({ ctx }) => {
		return ctx.prisma.highscores.findMany();
	}),

	createRecord: publicProcedure
		.input(z.object({ name: z.string(), score: z.number() }))
		.mutation(async ({ ctx, input }) => {
			const record = await ctx.prisma.highscores.create({
				data: input,
			});
			return record;
		}),

	getSecretMessage: protectedProcedure.query(() => {
		return 'you can now see this secret message!';
	}),
});
