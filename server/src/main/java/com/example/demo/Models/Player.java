package com.example.demo.Models;

public class Player {
    private String name;
    private int age;
    private String position;
    private int gamesPlayed;
    private double minutesPlayed;
    private double fieldGoal;
    private double threePt;
    private double eFG;
    private double freeThrow;
    private double orb;
    private double drb;
    private double trb;
    private double assists;
    private double steals;
    private double blocks;
    private double turnovers;
    private double personalFouls;
    private double points;
    private String team;
    private int season2425;
    private int season2526;
    private int season2627;
    private int season2728;
    private int season2829;
    private int season2930;
    private int guaranteed;
    private int contractLength;

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
}
