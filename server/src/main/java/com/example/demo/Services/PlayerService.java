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
    private List<Player> players;
    private Map<String, Player> playerByName;

    @PostConstruct
    public void loadPlayers() {
        players = new ArrayList<>();
        playerByName = new HashMap<>();

        try (BufferedReader br = new BufferedReader(
                new InputStreamReader(Objects.requireNonNull(getClass().getClassLoader().getResourceAsStream("data/players_data.csv")),
                        StandardCharsets.UTF_8))) {

            br.lines().skip(1).forEach(line -> {
                Player player = Player.fromCsv(line);
                players.add(player);
                playerByName.put(player.getName().toLowerCase(), player);
            });

            System.out.println("Loaded " + players.size() + " players from CSV.");
        } catch (Exception e) {
            System.out.println(e.toString());
        }
    }
    public List<Player> getPlayersByTeam(String team) {
        return players.stream()
                .filter(player -> player.getTeam().equalsIgnoreCase(team))
                .collect(Collectors.toList());
    }

    public Player getPlayerByName(String playerName) {
        return players.stream()
                .filter(player -> player.getName().toLowerCase().contains(playerName.toLowerCase()))
                .findFirst()  // This will return an Optional<Player>
                .orElse(null);  // If not found, return null
    }

}
