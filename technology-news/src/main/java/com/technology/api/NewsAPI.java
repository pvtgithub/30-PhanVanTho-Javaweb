package com.technology.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.technology.api.output.NewsOutput;
import com.technology.dto.NewsDTO;
import com.technology.service.INewsService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class NewsAPI {
	
	@Autowired
	private INewsService newsService;
	
	@PostMapping("/news")
	public NewsDTO createNews(@RequestBody NewsDTO newsDTO) {
		return newsService.save(newsDTO);
	}
	
	@PutMapping("/news/{id}")
	public NewsDTO updateNews(@RequestBody NewsDTO newsDTO,@PathVariable long id) {
		newsDTO.setId(id);
		return newsService.save(newsDTO);
	}
	
	@DeleteMapping("/news")
	public void deleteNews(@RequestBody long[] ids) {
		newsService.delete(ids);
	}


	@GetMapping("/getNewsById")
	public NewsDTO getNewsById(@RequestParam("id") long id){
		return newsService.getNewsById(id);
	}

	
	@GetMapping("/news")
	public NewsOutput getNews(@RequestParam("page") int page,
							@RequestParam("limit") int limit) {
		NewsOutput result = new NewsOutput();
		result.setPage(page);
		Pageable pageAble = new PageRequest(page - 1, limit);
		result.setListNews(newsService.findAll(pageAble));
		result.setTotalPage((int) Math.ceil((double) newsService.countItem()/limit));
		return result;
	}
	
	@GetMapping("/newsByCategory")
	public List<NewsDTO> getNewsByCategory(@RequestParam("id") long id) {
		return newsService.getNewsByCategory(id);
	}

	@GetMapping("/getNewsBestViewByCodeCategory")
	public NewsDTO getNewsBestViewByCodeCategory(@RequestParam("code") String code){
		return  newsService.getNewsBestViewByCodeCategory(code);
	}

	@GetMapping("/getNewsBestView")
	public NewsDTO getNewsBestView(){
		return  newsService.getNewsBestView();
	}

	@GetMapping("/getNewsByCode")
	public NewsDTO getNewsByCode(@RequestParam("code") String code){
		return newsService.getNewsByCode(code);
	}

	@GetMapping("/getFiveNewsByCodeTheme")
	public List<NewsDTO> getFiveNewsByCodeTheme(@RequestParam("code") String code){
		return newsService.getFiveNewsByCodeTheme(code);
	}

	@GetMapping("/getThreeNewsByCodeTheme")
	public List<NewsDTO> getThreeNewsByCodeTheme(@RequestParam("code") String code){
		return newsService.getThreeNewsByCodeTheme(code);
	}

	@GetMapping("/getTwoNewsByCategoryId")
	public List<NewsDTO> getTwoNewsByCategoryId(@RequestParam("id") long id){
		return newsService.getTwoNewsByCategoryId(id);
	}

	@GetMapping("/getAllNews")
	public List<NewsDTO> getAllNews(){
		return newsService.getAllNews();
	}

	@GetMapping("/getTenNewsByCodeCategory")
	public List<NewsDTO> getTenNewsByCodeCategory(@RequestParam("code") String code){
		return newsService.getTenNewsByCodeCategory(code);
	}

	@GetMapping("getThreeNewsByCodeCategory")
	public List<NewsDTO> getThreeNewsByCodeCategory(@RequestParam("code") String code){
		return newsService.getThreeNewsByCodeCategory(code);
	}


	@GetMapping("/getTenNewsByCodeTheme")
	public List<NewsDTO> getTenNewsByCodeTheme(@RequestParam("code") String code){
		return newsService.getTenNewsByCodeTheme(code);
	}

	@GetMapping("/getNewsBestViewByCodeTheme")
	public NewsDTO getNewsBestViewByCodeTheme(@RequestParam("code") String code){
		return  newsService.getNewsBestViewByCodeTheme(code);
	}
}
