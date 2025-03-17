package com.example.demo.Services;
import com.example.demo.Models.DraftPick;
import com.example.demo.Models.Player;
import org.springframework.stereotype.Service;
import jakarta.annotation.PostConstruct;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class DraftPickService {
    private List<DraftPick> draftPicks;

    @PostConstruct
    public void loadPlayers() {
        draftPicks = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(
                new InputStreamReader(Objects.requireNonNull(getClass().getClassLoader().getResourceAsStream("data/draft_picks_data.csv")),
                        StandardCharsets.UTF_8))) {

            br.lines().skip(1).forEach(line -> {
                DraftPick pick = DraftPick.fromCsv(line);
                draftPicks.add(pick);
            });

            System.out.println("Loaded " + draftPicks.size() + " players from CSV.");
        } catch (Exception e) {
            System.out.println(e.toString());
        }
    }
    public List<DraftPick> getDraftPicksByTeam(String team) {
        return draftPicks.stream()
                .filter(draftPick -> draftPick.getTeam().equalsIgnoreCase(team))
                .collect(Collectors.toList());
    }
}
