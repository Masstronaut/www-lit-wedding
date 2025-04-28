import type { RequestHandler } from '@sveltejs/kit';

import { default as excuses } from '$data/excuses.json';

export const GET: RequestHandler = async ({ url }) => {
  return new Response(String(excuses[Math.floor(Math.random() * excuses.length)]));
};
