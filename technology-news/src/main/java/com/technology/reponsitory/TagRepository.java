package com.technology.reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.technology.entity.TagEntity;

import java.util.List;

@Repository
public interface TagRepository extends JpaRepository<TagEntity, Long> {
	TagEntity findByName(String name);

	@Query(value = "SELECT t.* FROM tags t INNER JOIN news_tag nt ON nt.tag_id = t.id WHERE nt.news_id = :id" , nativeQuery = true)
	List<TagEntity> getTagEntitiesByNewsId(@Param("id") long id);
}
