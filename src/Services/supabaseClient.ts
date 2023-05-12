import { createClient } from "@supabase/supabase-js";
import { Database } from "../database.types";

const supabase = createClient<Database>(
  process.env.REACT_APP_SUPABASE_URL!,
  process.env.REACT_APP_SUPABASE_ANON_KEY!
);

export default supabase;

// supabase.from('your_table')
//   .update({ column: 'value' })
//   .setHeader('apikey', user.group_id)
// create policy update_users on users for update using (
//   group_id = session.apikey
// ) with check (group_id = session.apikey);
