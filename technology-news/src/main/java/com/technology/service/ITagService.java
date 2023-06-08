package com.technology.service;

import com.technology.dto.TagDTO;

import java.util.List;

public interface ITagService {
	TagDTO save(TagDTO tagDTO);

	List<TagDTO> getAllTag();

    TagDTO getTagById(long id);
}
