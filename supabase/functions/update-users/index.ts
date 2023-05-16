// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

console.log("Hello from Functions!");

serve(async (req) => {
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
  );
  const guestId = await req.headers.get("guest_id");
  const updatedData = await req.json();

  //const users = await req.json();

  //---------------
  const { data: usersToUpdate, error: selectError } = await supabase
    .from("user")
    .select("*")
    .eq("guest_id", guestId);

  if (selectError !== null) {
    return new Response(JSON.stringify(selectError), {
      headers: { "Content-Type": "application/json" },
    });
  }

  let areEqual = (a, b): boolean => {
    return (
      a.length === b.length &&
      a.every((item, _) => b.findIndex((i) => i.id === item.id) !== -1)
    );
  };

  //groups do not contain the same users
  if (!areEqual(updatedData, usersToUpdate)) {
    const errorMessage = "groups do not match";
    return new Response(JSON.stringify({ errorMessage }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  const { data: upsertedUsers, error: upsertError } = await supabase
    .from("user")
    .upsert(updatedData)
    .select();

  if (upsertError !== null) {
    return new Response(JSON.stringify(upsertError), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(upsertedUsers), {
    headers: { "Content-Type": "application/json" },
  });
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
