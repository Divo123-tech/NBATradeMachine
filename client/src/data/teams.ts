export type Team = {
  name: string;
  id: number;
  logo: string;
};

export type Teams = {
  [abbreviation: string]: Team;
};

export const teams: Teams = {
  ATL: {
    name: "Atlanta Hawks",
    id: 1,
    logo: "https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg",
  },
  BOS: {
    name: "Boston Celtics",
    id: 2,
    logo: "https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg",
  },
  BKN: {
    name: "Brooklyn Nets",
    id: 3,
    logo: "https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg",
  },
  CHO: {
    name: "Charlotte Hornets",
    id: 4,
    logo: "https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg",
  },
  CHI: {
    name: "Chicago Bulls",
    id: 5,
    logo: "https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg",
  },
  CLE: {
    name: "Cleveland Cavaliers",
    id: 6,
    logo: "https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg",
  },
  DAL: {
    name: "Dallas Mavericks",
    id: 7,
    logo: "https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg",
  },
  DEN: {
    name: "Denver Nuggets",
    id: 8,
    logo: "https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg",
  },
  DET: {
    name: "Detroit Pistons",
    id: 9,
    logo: "https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg",
  },
  GSW: {
    name: "Golden State Warriors",
    id: 10,
    logo: "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg",
  },
  HOU: {
    name: "Houston Rockets",
    id: 11,
    logo: "https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg",
  },
  IND: {
    name: "Indiana Pacers",
    id: 12,
    logo: "https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg",
  },
  LAC: {
    name: "Los Angeles Clippers",
    id: 13,
    logo: "https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg",
  },
  LAL: {
    name: "Los Angeles Lakers",
    id: 14,
    logo: "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg",
  },
  MEM: {
    name: "Memphis Grizzlies",
    id: 15,
    logo: "https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg",
  },
  MIA: {
    name: "Miami Heat",
    id: 16,
    logo: "https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg",
  },
  MIL: {
    name: "Milwaukee Bucks",
    id: 17,
    logo: "https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg",
  },
  MIN: {
    name: "Minnesota Timberwolves",
    id: 18,
    logo: "https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg",
  },
  NOP: {
    name: "New Orleans Pelicans",
    id: 19,
    logo: "https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg",
  },
  NYK: {
    name: "New York Knicks",
    id: 20,
    logo: "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg",
  },
  OKC: {
    name: "Oklahoma City Thunder",
    id: 21,
    logo: "https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg",
  },
  ORL: {
    name: "Orlando Magic",
    id: 22,
    logo: "https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg",
  },
  PHI: {
    name: "Philadelphia 76ers",
    id: 23,
    logo: "https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg",
  },
  PHX: {
    name: "Phoenix Suns",
    id: 24,
    logo: "https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg",
  },
  POR: {
    name: "Portland Trail Blazers",
    id: 25,
    logo: "https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg",
  },
  SAC: {
    name: "Sacramento Kings",
    id: 26,
    logo: "https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg",
  },
  SAS: {
    name: "San Antonio Spurs",
    id: 27,
    logo: "https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg",
  },
  TOR: {
    name: "Toronto Raptors",
    id: 28,
    logo: "https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg",
  },
  UTA: {
    name: "Utah Jazz",
    id: 29,
    logo: "https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg",
  },
  WAS: {
    name: "Washington Wizards",
    id: 30,
    logo: "https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg",
  },
};

// export const teams: Team[] = [
//   {
//     name: "Atlanta Hawks",
//     abbreviation: "ATL",
//     id: 1,
//     logo: "https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg",
//   },
//   {
//     name: "Boston Celtics",
//     abbreviation: "BOS",
//     id: 2,
//     logo: "https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg",
//   },
//   {
//     name: "Brooklyn Nets",
//     abbreviation: "BKN",
//     id: 3,
//     logo: "https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg",
//   },
//   {
//     name: "Charlotte Hornets",
//     abbreviation: "CHO",
//     id: 4,
//     logo: "https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg",
//   },
//   {
//     name: "Chicago Bulls",
//     abbreviation: "CHI",
//     id: 5,
//     logo: "https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg",
//   },
//   {
//     name: "Cleveland Cavaliers",
//     abbreviation: "CLE",
//     id: 6,
//     logo: "https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg",
//   },
//   {
//     name: "Dallas Mavericks",
//     abbreviation: "DAL",
//     id: 7,
//     logo: "https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg",
//   },
//   {
//     name: "Denver Nuggets",
//     abbreviation: "DEN",
//     id: 8,
//     logo: "https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg",
//   },
//   {
//     name: "Detroit Pistons",
//     abbreviation: "DET",
//     id: 9,
//     logo: "https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg",
//   },
//   {
//     name: "Golden State Warriors",
//     abbreviation: "GSW",
//     id: 10,
//     logo: "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg",
//   },
//   {
//     name: "Houston Rockets",
//     abbreviation: "HOU",
//     id: 11,
//     logo: "https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg",
//   },
//   {
//     name: "Indiana Pacers",
//     abbreviation: "IND",
//     id: 12,
//     logo: "https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg",
//   },
//   {
//     name: "Los Angeles Clippers",
//     abbreviation: "LAC",
//     id: 13,
//     logo: "https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg",
//   },
//   {
//     name: "Los Angeles Lakers",
//     abbreviation: "LAL",
//     id: 14,
//     logo: "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg",
//   },
//   {
//     name: "Memphis Grizzlies",
//     abbreviation: "MEM",
//     id: 15,
//     logo: "https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg",
//   },
//   {
//     name: "Miami Heat",
//     abbreviation: "MIA",
//     id: 16,
//     logo: "https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg",
//   },
//   {
//     name: "Milwaukee Bucks",
//     abbreviation: "MIL",
//     id: 17,
//     logo: "https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg",
//   },
//   {
//     name: "Minnesota Timberwolves",
//     abbreviation: "MIN",
//     id: 18,
//     logo: "https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg",
//   },
//   {
//     name: "New Orleans Pelicans",
//     abbreviation: "NOP",
//     id: 19,
//     logo: "https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg",
//   },
//   {
//     name: "New York Knicks",
//     abbreviation: "NYK",
//     id: 20,
//     logo: "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg",
//   },
//   {
//     name: "Oklahoma City Thunder",
//     abbreviation: "OKC",
//     id: 21,
//     logo: "https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg",
//   },
//   {
//     name: "Orlando Magic",
//     abbreviation: "ORL",
//     id: 22,
//     logo: "https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg",
//   },
//   {
//     name: "Philadelphia 76ers",
//     abbreviation: "PHI",
//     id: 23,
//     logo: "https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg",
//   },
//   {
//     name: "Phoenix Suns",
//     abbreviation: "PHX",
//     id: 24,
//     logo: "https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg",
//   },
//   {
//     name: "Portland Trail Blazers",
//     abbreviation: "POR",
//     id: 25,
//     logo: "https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg",
//   },
//   {
//     name: "Sacramento Kings",
//     abbreviation: "SAC",
//     id: 26,
//     logo: "https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg",
//   },
//   {
//     name: "San Antonio Spurs",
//     abbreviation: "SAS",
//     id: 27,
//     logo: "https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg",
//   },
//   {
//     name: "Toronto Raptors",
//     abbreviation: "TOR",
//     id: 28,
//     logo: "https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg",
//   },
//   {
//     name: "Utah Jazz",
//     abbreviation: "UTA",
//     id: 29,
//     logo: "https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg",
//   },
//   {
//     name: "Washington Wizards",
//     abbreviation: "WAS",
//     id: 30,
//     logo: "https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg",
//   },
// ];
