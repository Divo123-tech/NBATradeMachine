import axios from "axios";

export type Player = {
  name: string;
  age: number;
  position: string;
  gamesPlayed: number;
  minutesPlayed: number;
  fieldGoal: number;
  threePt: number;
  eFG: number;
  freeThrow: number;
  orb: number;
  drb: number;
  trb: number;
  assists: number;
  steals: number;
  blocks: number;
  turnovers: number;
  personalFouls: number;
  points: number;
  team: string;
  season2425: number;
  season2526: number;
  season2627: number;
  season2728: number;
  season2829: number;
  season2930: number;
  guaranteed: number;
  contractLength: number;
};
const API_URL = import.meta.env.VITE_API_URL;
export const getPlayersByTeam = async (team: string): Promise<Player[]> => {
  try {
    const response = await axios.get(`${API_URL}/players/${team}`);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return [];
  }
};
