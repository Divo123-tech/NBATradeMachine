package com.example.demo.Models;

public class Player {
    private final String name;
    private final int age;
    private final String position;
    private final int gamesPlayed;
    private final double minutesPlayed;
    private final double fieldGoal;
    private final double threePt;
    private final double eFG;
    private final double freeThrow;
    private final double orb;
    private final double drb;
    private final double trb;
    private final double assists;
    private final double steals;
    private final double blocks;
    private final double turnovers;
    private final double personalFouls;
    private final double points;
    private final String team;
    private final int season2425;
    private final int season2526;
    private final int season2627;
    private final int season2728;
    private final int season2829;
    private final int season2930;
    private final int guaranteed;
    private final int contractLength;

    public Player(String name, int age,
                  String position, int gamesPlayed,
                  double minutesPlayed, double fieldGoal,
                  double threePt, double eFG,
                  double freeThrow,
                  double orb, double drb, double trb,
                  double assists, double steals,
                  double blocks, double turnovers,
                  double personalFouls, double points,
                  String team,
                  int season2425, int season2526,
                  int season2627, int season2728,
                  int season2829, int season2930,
                  int guaranteed, int contractLength){
    this.name = name;
    this.age = age;
    this.position=position;
    this.gamesPlayed = gamesPlayed;
    this.minutesPlayed = minutesPlayed;
    this.fieldGoal = fieldGoal;
    this.threePt = threePt;
    this.eFG = eFG;
    this.freeThrow = freeThrow;
    this.orb = orb;
    this.drb = drb;
    this.trb = trb;
    this.assists = assists;
    this.steals = steals;
    this.blocks = blocks;
    this.turnovers = turnovers;
    this.personalFouls = personalFouls;
    this.points =points;
    this.team = team;
    this.season2425 = season2425;
    this.season2526 = season2526;
    this.season2627 = season2627;
    this.season2728 = season2728;
    this.season2829 = season2829;
    this.season2930 =season2930;
    this.guaranteed = guaranteed;
    this.contractLength = contractLength;
    }

    // CSV Parser Method
    public static Player fromCsv(String csvLine) {
        String[] data = csvLine.split(",");
        return new Player(
                data[0], //name
                Integer.parseInt(data[1].split("\\.")[0]), // age
                data[2], // position
                Integer.parseInt(data[3].split("\\.")[0]), //games
                Double.parseDouble(data[4]), //minutes played
                Double.parseDouble(data[5]), // field goal percentage
                Double.parseDouble(data[6]), //3pt percentage
                Double.parseDouble(data[7]), //effective field goal
                Double.parseDouble(data[8]), //free throw
                Double.parseDouble(data[9]), //orb
                Double.parseDouble(data[10]), //drb
                Double.parseDouble(data[11]), //trb
                Double.parseDouble(data[12]), //ast
                Double.parseDouble(data[13]), //steals
                Double.parseDouble(data[14]), //blocks
                Double.parseDouble(data[15]), //turnovers
                Double.parseDouble(data[16]), //personal fouls
                Double.parseDouble(data[17]), //points
                data[18],
                Integer.parseInt(data[19]), //2024-25
                Integer.parseInt(data[20]), //2025-26
                Integer.parseInt(data[21]), //2026-27
                Integer.parseInt(data[22]), //2027-28
                Integer.parseInt(data[23]), //2028-29
                Integer.parseInt(data[24]), //2029-30
                Integer.parseInt(data[25]), //guaranteed
                Integer.parseInt(data[26]) //contract length

        );
    }

    @Override
    public String toString() {
        return "Player{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", position='" + position + '\'' +
                ", gamesPlayed=" + gamesPlayed +
                ", minutesPlayed=" + minutesPlayed +
                ", fieldGoal=" + fieldGoal +
                ", threePt=" + threePt +
                ", eFG=" + eFG +
                ", freeThrow=" + freeThrow +
                ", orb=" + orb +
                ", drb=" + drb +
                ", trb=" + trb +
                ", assists=" + assists +
                ", steals=" + steals +
                ", blocks=" + blocks +
                ", turnovers=" + turnovers +
                ", personalFouls=" + personalFouls +
                ", points=" + points +
                ", team='" + team + '\'' +
                ", season2425=" + season2425 +
                ", season2526=" + season2526 +
                ", season2627=" + season2627 +
                ", season2728=" + season2728 +
                ", season2829=" + season2829 +
                ", season2930=" + season2930 +
                ", guaranteed=" + guaranteed +
                ", contractLength=" + contractLength +
                '}';
    }
}
