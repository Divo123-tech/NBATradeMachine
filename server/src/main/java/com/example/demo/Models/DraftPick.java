package com.example.demo.Models;

public class DraftPick {
    private final int year;
    private final int round;
    private final String from;
    private final String description;
    private final String team;
    public DraftPick(int year, int round, String from, String description, String team) {
        this.year = year;
        this.round = round;
        this.from = from;
        this.description = description;
        this.team = team;
    }

    public static DraftPick fromCsv(String csvLine) {
        String[] data = csvLine.split(",");
        return new DraftPick(
                Integer.parseInt(data[0]), //year
                Integer.parseInt(data[1]), //round
                data[3], //pick number
                data[4], //from
                data[5] //team
        );
    }

    public int getYear() {
        return year;
    }

    public int getRound() {
        return round;
    }

    public String getFrom() {
        return from;
    }

    public String getDescription() {
        return description;
    }

    public String getTeam() {
        return team;
    }
}
