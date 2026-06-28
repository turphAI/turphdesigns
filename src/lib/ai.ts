/**
 * Single source of truth for the assistant's Claude model.
 *
 * Pinned to a known-good model, but overridable per environment via the
 * ANTHROPIC_MODEL env var (set it in Vercel) — so when a model is superseded
 * or retired, you change one value with no code edit or redeploy.
 *
 * Mirrors the turph suite's models.json: an intentional, monitored pin — not
 * "always the latest" — so the chat never silently switches to an untested
 * model. Update deliberately when a newer model is vetted.
 */
export const CHAT_MODEL = process.env.ANTHROPIC_MODEL?.trim() || 'claude-sonnet-4-6'
