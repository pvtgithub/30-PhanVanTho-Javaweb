package com.technology.service.impl;

import com.technology.dto.NewsDTO;
import com.technology.dto.TagDTO;
import com.technology.entity.NewsEntity;
import com.technology.entity.TagEntity;
import com.technology.reponsitory.NewsRepository;
import com.technology.reponsitory.TagRepository;
import com.technology.service.ITagService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class TagService implements ITagService {

    @Autowired
    private TagRepository tagRepository;

    @Autowired
    private NewsRepository newsRepository;


    @Autowired
    private ModelMapper modelMapper;

    @Override
    public TagDTO save(TagDTO tagDTO) {
        TagEntity tagEntity = modelMapper.map(tagDTO, TagEntity.class);
        if(tagDTO.getId() != null){
            List<NewsEntity> newsEntities = newsRepository.getNewsEntitiesByTagId(tagDTO.getId());
            tagEntity.setNews(newsEntities);
        }
        return modelMapper.map(tagRepository.save(tagEntity), TagDTO.class);
    }


    @Override
    public List<TagDTO> getAllTag() {
        List<TagDTO> listDTO = new ArrayList<>();
        List<TagEntity> listEntity = tagRepository.findAll();
        for (TagEntity tag : listEntity) {
            listDTO.add(modelMapper.map(tag, TagDTO.class));
        }
        return listDTO;
    }

    @Override
    public TagDTO getTagById(long id) {
        TagEntity tagEntity = new TagEntity();
        tagEntity = tagRepository.findOne(id);
        return modelMapper.map(tagEntity, TagDTO.class);
    }
}
