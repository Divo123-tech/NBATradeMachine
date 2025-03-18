import axios from "axios";

export type DraftPick = {
  year: number;
  round: number;
  from: string;
  description: string;
  team: string;
};

const API_URL = import.meta.env.VITE_API_URL;
export const getDraftPickByTeam = async (
  team: string
): Promise<DraftPick[]> => {
  try {
    const response = await axios.get(`${API_URL}/draft-picks/${team}`);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return [];
  }
};
