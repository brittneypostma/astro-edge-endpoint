import type { APIContext } from "astro";

export async function get(context: APIContext) {
  console.log(JSON.stringify(context, null, 2));
  return new Response(JSON.stringify(context, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
