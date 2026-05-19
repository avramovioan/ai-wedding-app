import { QuestData } from "../Types/QuestData";
import supabase from "./supabaseClient";

export async function getQuests(): Promise<QuestData["Row"][]> {
  const { data, error } = await supabase.from("quests").select();
  if (error != null) {
    throw error;
  }
  return data ?? [];
}
