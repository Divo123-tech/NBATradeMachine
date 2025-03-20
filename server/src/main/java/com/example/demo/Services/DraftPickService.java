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
    private Map<String, List<DraftPick>> draftPicksByTeam;
    @PostConstruct
    public void loadPlayers() {
        draftPicksByTeam = new HashMap<>();

        try (BufferedReader br = new BufferedReader(
                new InputStreamReader(Objects.requireNonNull(getClass().getClassLoader().getResourceAsStream("data/draft_picks_data.csv")),
                        StandardCharsets.UTF_8))) {

            br.lines().skip(1).forEach(line -> {
                DraftPick pick = DraftPick.fromCsv(line);
                if (draftPicksByTeam.containsKey(pick.getTeam())){
                    draftPicksByTeam.get(pick.getTeam()).add(pick);
                }
                //if not create a new list of one item
                else{
                    draftPicksByTeam.put(pick.getTeam(), new ArrayList<>(List.of(pick)));
                }
            });

        } catch (Exception e) {
            System.out.println(e.toString());
        }
    }
    public List<DraftPick> getDraftPicksByTeam(String team) {
        return draftPicksByTeam.get(team);
    }
}
