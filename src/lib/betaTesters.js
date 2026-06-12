import { supabase } from "./supabase";

export async function getBetaTestersCount() {
  const { count, error } = await supabase
    .from("beta_testers")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error(error);
    return 136;
  }

  return 136 + (count || 0);
}