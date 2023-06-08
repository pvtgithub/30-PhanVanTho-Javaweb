package com.technology.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.technology.dto.ImageDTO;
import com.technology.dto.TagDTO;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.technology.dto.NewsDTO;
import com.technology.entity.ImageEntity;
import com.technology.entity.NewsEntity;
import com.technology.entity.TagEntity;
import com.technology.entity.ThemeEntity;
import com.technology.reponsitory.CategoryRepository;
import com.technology.reponsitory.ImageRepository;
import com.technology.reponsitory.NewsRepository;
import com.technology.reponsitory.TagRepository;
import com.technology.reponsitory.ThemeRepository;
import com.technology.service.INewsService;

@Service
public class NewsService implements INewsService {

    @Autowired
    private NewsRepository newsRepository; // KHởi tạo 1 repository để sử dụng các phương thức truy vấn có sẵn của
    // JpaRepository

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ThemeRepository themeRepository;

    @Autowired
    private TagRepository tagRepository;

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private ModelMapper modelMapper; // dùng thư viện ModelMapper để conver Entity sang DTO và ngược lại

    @Override
    public NewsDTO save(NewsDTO newsDTO) {
        NewsEntity newsEntity = new NewsEntity(); // tạo mới 1 entity
        newsEntity = modelMapper.map(newsDTO, NewsEntity.class); // map từ newsDTO sang newsEntity

        List<ImageEntity> listImageEntity = new ArrayList<>();
        List<TagEntity> listTagEntity = new ArrayList<>();
        for(long idTag : newsDTO.getTagIds()){
            List<NewsEntity> newsEntityTmp = new ArrayList<>();
            TagEntity tagEntity = tagRepository.getOne(idTag);
            newsEntityTmp.add(newsEntity);
            tagEntity.setNews(newsEntityTmp);
            listTagEntity.add(tagEntity);
        }

        for(ImageDTO item : newsDTO.getImages()){
            ImageEntity imageEntity = modelMapper.map(item,ImageEntity.class);
            imageEntity.setNews(newsEntity);
            listImageEntity.add(imageEntity);
        }
        ThemeEntity theme = themeRepository.findOne(Long.parseLong(newsDTO.getThemeId()));

        newsEntity.setImages(listImageEntity);
        newsEntity.setTags(listTagEntity);
        newsEntity.setTheme(theme);

        newsEntity = newsRepository.save(newsEntity);
        return modelMapper.map(newsEntity, NewsDTO.class);

    }

    @Override
    public void delete(long[] ids) {
        for (long id : ids) {
            newsRepository.deleteTagsByNewsId(id);
            newsRepository.deleteImagesByNewsId(id);
            newsRepository.delete(id);
        }
    }

    @Override
    public List<NewsDTO> findAll(Pageable pageAble) { // Phân trang
        List<NewsDTO> newsList = new ArrayList<>();
        List<NewsEntity> entities = newsRepository.findAll(pageAble).getContent();
        for (NewsEntity item : entities) {
            NewsDTO dto = modelMapper.map(item, NewsDTO.class);
            newsList.add(dto);
        }
        return newsList;
    }

    @Override
    public int countItem() {
        return (int) newsRepository.count();
    }

    @Override
    public List<NewsDTO> getNewsByCategory(long id) {
        List<NewsEntity> newsEntity = newsRepository.findTop3ByTheme_Category_IdOrderByCreatedDateDesc(id);
        List<NewsDTO> newsDTO = new ArrayList<>();
        for (NewsEntity news : newsEntity) {
            List<ImageEntity> imgEntity = imageRepository.findByNewsId(news.getId());
            news.setImages(imgEntity);
            NewsDTO dto = modelMapper.map(news, NewsDTO.class);
            newsDTO.add(dto);
        }
        return newsDTO;
    }

    @Override
    public NewsDTO getNewsBestViewByCodeCategory(String code) {
        NewsEntity newsEntity = newsRepository.getNewsBestViewByCodeCategory(code);
        NewsDTO newsDTO = modelMapper.map(newsEntity, NewsDTO.class);
        return newsDTO;
    }

    @Override
    public NewsDTO getNewsByCode(String code) {
        NewsEntity newsEntity = newsRepository.findOneByCode(code);
        return modelMapper.map(newsEntity, NewsDTO.class);
    }

    @Override
    public List<NewsDTO> getFiveNewsByCodeTheme(String code) {
        List<NewsEntity> newsEntities = newsRepository.getFiveNewsByCodeTheme(code);
        List<NewsDTO> newsDTOS = new ArrayList<>();
        for (NewsEntity entity: newsEntities){
            newsDTOS.add(modelMapper.map(entity, NewsDTO.class));
        }
        return newsDTOS;
    }

    @Override
    public List<NewsDTO> getThreeNewsByCodeTheme(String code) {
        List<NewsEntity> newsEntities = newsRepository.getThreeNewsByCodeTheme(code);
        List<NewsDTO> newsDTOS = new ArrayList<>();
        for (NewsEntity entity: newsEntities){
            newsDTOS.add(modelMapper.map(entity, NewsDTO.class));
        }
        return newsDTOS;
    }

    @Override
    public List<NewsDTO> getTwoNewsByCategoryId(long id) {
        List<NewsEntity> newsEntities = newsRepository.getTwoNewsByCategoryId(id);
        List<NewsDTO> newsDTOS = new ArrayList<>();
        for (NewsEntity entity: newsEntities){
            newsDTOS.add(modelMapper.map(entity, NewsDTO.class));
        }
        return newsDTOS;
    }

    @Override
    public List<NewsDTO> getAllNews() {
        List<NewsDTO> listDto = new ArrayList<>();
        List<NewsEntity> listEntity = newsRepository.findAll();
        for (NewsEntity news : listEntity){
            listDto.add(modelMapper.map(news,NewsDTO.class));
        }
        return listDto;
    }

    @Override
    public NewsDTO getNewsById(long id) {
        NewsEntity newsEntity = newsRepository.findOne(id);
        List<TagEntity> tagEntities = tagRepository.getTagEntitiesByNewsId(id);
        List<TagDTO> tagDTO = new ArrayList<>();

        for (TagEntity item : tagEntities){
            tagDTO.add(modelMapper.map(item,TagDTO.class));
        }
        NewsDTO newsDTO = modelMapper.map(newsEntity,NewsDTO.class);
        newsDTO.setListTagsById(tagDTO);
        return newsDTO;
    }

    @Override
    public List<NewsDTO> getTenNewsByCodeCategory(String code) {
        List<NewsEntity> newsEntities = newsRepository.getTenNewsByCodeCategory(code);
        List<NewsDTO> newsDTOS = new ArrayList<>();
        for (NewsEntity entity: newsEntities){
            newsDTOS.add(modelMapper.map(entity, NewsDTO.class));
        }
        return newsDTOS;
    }

    @Override
    public List<NewsDTO> getThreeNewsByCodeCategory(String code) {
        List<NewsEntity> newsEntities = newsRepository.getThreeNewsByCodeCategory(code);
        List<NewsDTO> newsDTOS = new ArrayList<>();
        for (NewsEntity entity: newsEntities){
            newsDTOS.add(modelMapper.map(entity, NewsDTO.class));
        }
        return newsDTOS;
    }

    @Override
    public List<NewsDTO> getTenNewsByCodeTheme(String code) {
        List<NewsEntity> newsEntities = newsRepository.getTenNewsByCodeTheme(code);
        List<NewsDTO> newsDTOS = new ArrayList<>();
        for (NewsEntity entity: newsEntities){
            newsDTOS.add(modelMapper.map(entity, NewsDTO.class));
        }
        return newsDTOS;
    }

    @Override
    public NewsDTO getNewsBestViewByCodeTheme(String code) {
        NewsEntity newsEntity = newsRepository.getNewsBestViewByCodeTheme(code);
        NewsDTO newsDTO = modelMapper.map(newsEntity, NewsDTO.class);
        return newsDTO;
    }

    @Override
    public NewsDTO getNewsBestView() {
        NewsEntity newsEntity = newsRepository.findTopByOrderByViewCountDesc();
        NewsDTO newsDTO = modelMapper.map(newsEntity, NewsDTO.class);
        return newsDTO;
    }
}
