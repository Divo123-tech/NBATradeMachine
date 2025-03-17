package com.example.demo.Services;
import org.springframework.stereotype.Service;
import jakarta.annotation.PostConstruct;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.*;

@Service
public class PlayerService {
//    private List<Player> players;
//    private Map<String, Player> playerByName;
//
//    @PostConstruct
//    public void loadPlayers() {
//        players = new ArrayList<>();
//        playerByName = new HashMap<>();
//
//        try (BufferedReader br = new BufferedReader(
//                new InputStreamReader(getClass().getClassLoader().getResourceAsStream("data/nba_players.csv"),
//                        StandardCharsets.UTF_8))) {
//
//            br.lines().skip(1).forEach(line -> {
//                Player player = Player.fromCsv(line);
//                players.add(player);
//                playerByName.put(player.getName().toLowerCase(), player);
//            });
//
//            System.out.println("Loaded " + players.size() + " players from CSV.");
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
}
