package com.technology.api;

import com.technology.dto.TagDTO;
import com.technology.service.ITagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TagAPI {

    @Autowired
    private ITagService tagService;


    //lay tat ca tag
    @GetMapping("/tag")
    public List<TagDTO> getAllTag(){
        return tagService.getAllTag();
    }

    @GetMapping("/getTagById")
    public TagDTO getTagById(@RequestParam("id") long id){
        return tagService.getTagById(id);
    }

    @PostMapping("/tag")
    public TagDTO postTag(@RequestBody TagDTO tagDTO){
        return tagService.save(tagDTO);
    }
}
