package com.technology.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.technology.entity.TagEntity;

import java.util.*;

public class NewsDTO extends BaseDTO {
    private String title;
    private String content;
    private String description;
    private String code;
    private long viewCount;
    private String themeCode;
    private String themeId;
    private List<Long> tagIds;
    private List<ImageDTO> images = new ArrayList<>();

    private List<TagDTO> listTagsById = new ArrayList<>();
    @JsonIgnore
    private List<TagDTO> tags = new ArrayList<>();

    public List<TagDTO> getTags() {
        return tags;
    }

    public void setTags(List<TagDTO> tags) {
        this.tags = tags;
    }

    public List<TagDTO> getListTagsById() {
        return listTagsById;
    }

    public void setListTagsById(List<TagDTO> listTagsById) {
        this.listTagsById = listTagsById;
    }

    public List<Long> getTagIds() {
        return tagIds;
    }

    public void setTagIds(List<Long> tagIds) {
        this.tagIds = tagIds;
    }

    public String getThemeId() {
        return themeId;
    }

    public void setThemeId(String themeId) {
        this.themeId = themeId;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public List<ImageDTO> getImages() {
        return images;
    }

    public void setImages(List<ImageDTO> images) {
        this.images = images;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public long getViewCount() {
        return viewCount;
    }

    public void setViewCount(long viewCount) {
        this.viewCount = viewCount;
    }

    public String getThemeCode() {
        return themeCode;
    }

    public void setThemeCode(String themeCode) {
        this.themeCode = themeCode;
    }


}
