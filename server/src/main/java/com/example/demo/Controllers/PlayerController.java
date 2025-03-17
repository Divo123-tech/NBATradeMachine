package com.example.demo.Controllers;

import com.example.demo.Models.Player;
import com.example.demo.Services.PlayerService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlayerController {
    private final PlayerService playerService;

    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }
    @GetMapping("/player/{name}")
    public Player getPlayers(@PathVariable String name) {

        // If player name is provided, search player by name
        if (name != null && !name.isEmpty()) {
            return playerService.getPlayerByName(name);
        }

        return null;
    }

    @GetMapping("/players/{team}")
    public List<Player> getPlayersByTeam(@PathVariable String team){
        return playerService.getPlayersByTeam(team);
    }

}

