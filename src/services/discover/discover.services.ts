import api from "../api";

export async function getTrending() {
  try {
    const res = await api.get("/discover/trending");

    return res.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("error fetching treding data: ", error.message);
    } else {
      console.error("unexpected error", error);
    }
  }
}
