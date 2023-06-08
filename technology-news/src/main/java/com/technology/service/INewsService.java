package com.technology.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.technology.dto.NewsDTO;

public interface INewsService {
	NewsDTO save(NewsDTO newsDTO);
	void delete(long[] ids);
	List<NewsDTO> findAll(Pageable pageAble);
	int countItem();
	List<NewsDTO> getNewsByCategory(long id);

    NewsDTO getNewsBestViewByCodeCategory(String code);

	NewsDTO getNewsByCode(String code);

	List<NewsDTO> getFiveNewsByCodeTheme(String code);

    List<NewsDTO> getThreeNewsByCodeTheme(String code);

	List<NewsDTO> getTwoNewsByCategoryId(long id);

	List<NewsDTO> getAllNews();

	NewsDTO getNewsById(long id);

	List<NewsDTO> getTenNewsByCodeCategory(String code);
	List<NewsDTO> getThreeNewsByCodeCategory(String code);

	List<NewsDTO> getTenNewsByCodeTheme(String code);

	NewsDTO getNewsBestViewByCodeTheme(String code);

	NewsDTO getNewsBestView();
}
