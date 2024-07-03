import 'dotenv/config'

import { z } from 'zod'
import { fromError } from 'zod-validation-error'

const envSchema = z.object({
	DISCORD_TOKEN: z.string(),
	DISCORD_DEVELOPMENT_GUILD_ID: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
	throw new Error(fromError(_env.error).toString())
}

export const env = _env.data
