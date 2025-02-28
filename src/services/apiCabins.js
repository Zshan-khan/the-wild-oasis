import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded !");
  }

  return data;
}

export async function deleteCabin(user_id) {
  const { data, error } = await supabase
    .from("cabins")
    .delete()
    .eq("user_id", user_id);
  if (error) {
    console.log(error);
    throw new Error("Cabins could not be deleted !");
  }
  return data;
}

export async function createCabin(newCabin) {
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be deleted !");
  }
  return data;
}
