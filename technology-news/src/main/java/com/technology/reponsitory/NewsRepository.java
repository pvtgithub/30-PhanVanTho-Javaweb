package com.technology.reponsitory;

import java.util.List;

import com.technology.dto.NewsDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.technology.entity.NewsEntity;

@Repository
public interface NewsRepository extends JpaRepository<NewsEntity, Long> {

    @Transactional
    @Modifying
    @Query("DELETE FROM NewsTagEntity nt WHERE nt.news.id = :newsId")
    void deleteTagsByNewsId(@Param("newsId") Long newsId);

    @Transactional
    @Modifying
    @Query("DELETE FROM ImageEntity img WHERE img.news.id = :newsId")
    void deleteImagesByNewsId(@Param("newsId") Long newsId);


    //Lấy ra bài viết nhiều view nhất theo mã thể loại
    @Query(value = "SELECT n.* FROM news n JOIN themes t ON n.theme_id = t.id JOIN categories c ON t.category_id = c.id WHERE c.code = :code ORDER BY n.view_count DESC LIMIT 1", nativeQuery = true)
    NewsEntity getNewsBestViewByCodeCategory(@Param("code") String code);

    List<NewsEntity> findTop3ByTheme_Category_IdOrderByCreatedDateDesc(Long categoryId);

    NewsEntity findOneByCode(String code);

    @Query(value = "SELECT n.* FROM news n JOIN themes t ON n.theme_id = t.id WHERE t.code = :code ORDER BY n.created_date DESC LIMIT 5", nativeQuery = true)
    List<NewsEntity> getFiveNewsByCodeTheme(@Param("code") String code);

    @Query(value = "SELECT n.* FROM news n JOIN themes t ON n.theme_id = t.id WHERE t.code = :code ORDER BY n.created_date DESC, n.view_count DESC LIMIT 3", nativeQuery = true)
    List<NewsEntity> getThreeNewsByCodeTheme(@Param("code") String code);

    @Query(value = "SELECT n.* FROM news n WHERE n.theme_id = :id ORDER BY n.view_count DESC LIMIT 2", nativeQuery = true)
    List<NewsEntity> getTwoNewsByCategoryId(@Param("id") long id);

    @Query(value = "SELECT n.* FROM news n INNER JOIN news_tag nt ON nt.news_id = n.id WHERE nt.tag_id = :id", nativeQuery = true)
    List<NewsEntity> getNewsEntitiesByTagId(@Param("id") long id);

    @Query(value = "SELECT n.* FROM news n INNER JOIN themes t ON n.theme_id = t.id INNER JOIN categories c ON t.category_id = c.id WHERE c.code = :code ORDER BY n.created_date DESC LIMIT 10", nativeQuery = true)
    List<NewsEntity> getTenNewsByCodeCategory(@Param("code") String code);

    @Query(value = "SELECT n.* FROM news n INNER JOIN themes t ON n.theme_id = t.id INNER JOIN categories c ON t.category_id = c.id WHERE c.code = :code ORDER BY n.created_date DESC, n.view_count DESC LIMIT 3", nativeQuery = true)
    List<NewsEntity> getThreeNewsByCodeCategory(@Param("code") String code);

    @Query(value = "SELECT n.* FROM news n JOIN themes t ON n.theme_id = t.id WHERE t.code = :code ORDER BY n.created_date DESC LIMIT 10", nativeQuery = true)
    List<NewsEntity> getTenNewsByCodeTheme(@Param("code") String code);


    @Query(value = "SELECT n.* FROM news n INNER JOIN themes t ON n.theme_id = t.id WHERE t.code = :code ORDER BY n.view_count DESC LIMIT 1",nativeQuery = true)
    NewsEntity getNewsBestViewByCodeTheme(@Param("code") String code);

    NewsEntity findTopByOrderByViewCountDesc();
}