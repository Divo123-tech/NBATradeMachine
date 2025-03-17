package com.example.demo.Controllers;
import com.example.demo.Models.DraftPick;
import com.example.demo.Services.DraftPickService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class DraftPickController {
    private final DraftPickService draftPickService;
    public DraftPickController(DraftPickService draftPickService){
        this.draftPickService = draftPickService;
    }
    @GetMapping("/draft-picks/{team}")
    public List<DraftPick> getDraftPicksByTeam(@PathVariable String team){
        return draftPickService.getDraftPicksByTeam(team);
    }
}
