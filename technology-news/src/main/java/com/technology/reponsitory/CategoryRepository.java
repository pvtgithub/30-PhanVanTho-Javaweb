package com.technology.reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.technology.entity.CategoryEntity;

@Repository
public interface CategoryRepository extends JpaRepository<CategoryEntity, Long>{
	CategoryEntity findOneByCode(String code);

	@Query("SELECT c FROM CategoryEntity c JOIN c.themes t WHERE t.id = :id")
	CategoryEntity findByThemeId(@Param("id") long id);
}
