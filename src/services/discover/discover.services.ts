import type { MangaByIdTypes } from "@/types/discover.types";
import api from "../api";

export async function getTrending() {
  try {
    const res = await api.get("/discover/trending");

    return res.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(
        "error fetching top rated data from the backend: ",
        error.message
      );
    } else {
      console.error("unexpected error", error);
    }
  }
}
export async function getTopRated() {
  try {
    const res = await api.get("/discover/toprated");

    return res.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(
        "error fetching top rated data from the backend: ",
        error.message
      );
    } else {
      console.error("unexpected error", error);
    }
  }
}

export async function getNewRelease() {
  try {
    const res = await api.get("/discover/newrelease");

    return res.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(
        "error fetching new release data from the backend: ",
        error.message
      );
    } else {
      console.error("unexpected error", error);
    }
  }
}

export async function getMangaById({ id, type }: MangaByIdTypes) {
  try {
    const res = await api.get(`/discover/${type}/${id}`);

    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        "error fetching new release data from the backend: ",
        error.message
      );
    } else {
      console.error("unexpected error", error);
    }
  }
}
