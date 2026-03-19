export function loader() {
  return new Response(JSON.stringify({}), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
