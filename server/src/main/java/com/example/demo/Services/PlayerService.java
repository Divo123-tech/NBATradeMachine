package com.example.demo.Services;
import com.example.demo.Models.Player;
import org.springframework.stereotype.Service;
import jakarta.annotation.PostConstruct;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class PlayerService {
    private Map<String, Player> playerByName;
    private Map<String,  List<Player>> playersByTeam;
    @PostConstruct
    public void loadPlayers() {
        playerByName = new HashMap<>();
        playersByTeam = new HashMap<>();

        try (BufferedReader br = new BufferedReader(
                new InputStreamReader(Objects.requireNonNull(getClass().getClassLoader().getResourceAsStream("data/players_data.csv")),
                        StandardCharsets.UTF_8))) {

            br.lines().skip(1).forEach(line -> {
                Player player = Player.fromCsv(line);
                playerByName.put(player.getName().toLowerCase(), player);
                if (playersByTeam.containsKey(player.getTeam())){
                    playersByTeam.get(player.getTeam()).add(player);
                }
                else{
                    playersByTeam.put(player.getTeam(), new ArrayList<>(List.of(player)));
                }
            });

        } catch (Exception e) {
            System.out.println(e.toString());
        }
    }
    public List<Player> getPlayersByTeam(String team) {
        return playersByTeam.get(team);
    }

    public Player getPlayerByName(String playerName) {
        return playerByName.getOrDefault(playerName.toLowerCase(), null);
    }
}
