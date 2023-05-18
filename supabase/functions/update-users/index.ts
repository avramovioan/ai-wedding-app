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

  const _headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "*",
  };

  if (req.method === "OPTIONS") {
    return new Response("OK", {
      headers: _headers,
    });
  }

  const guestId = await req.headers.get("guest_id");
  const updatedData = await req.json();

  const { data: usersToUpdate, error: selectError } = await supabase
    .from("user")
    .select("*")
    .eq("guest_id", guestId);

  if (selectError !== null) {
    return new Response(JSON.stringify(selectError), {
      headers: _headers,
    });
  }
  if (updatedData.length !== usersToUpdate.length) {
    return new Response("groups do not match", {
      headers: _headers,
    });
  }

  const userUpsertData: any = [];

  for (let i = 0; i < updatedData.length; i++) {
    const existingItemIndex = usersToUpdate.findIndex(
      (item) => item.id === updatedData[i].id
    );
    if (existingItemIndex === -1) {
      return new Response("groups do not match", {
        headers: _headers,
      });
    }
    userUpsertData.push({
      ...updatedData[i],
      guest_id: usersToUpdate[existingItemIndex].guest_id,
      is_child: usersToUpdate[existingItemIndex].is_child,
      has_replied: true,
    });
  }

  const { data: upsertedUsers, error: upsertError } = await supabase
    .from("user")
    .upsert(userUpsertData)
    .select();

  if (upsertError !== null) {
    return new Response(JSON.stringify(upsertError), {
      headers: _headers,
    });
  }

  return new Response(JSON.stringify(upsertedUsers), {
    headers: _headers,
  });
});
