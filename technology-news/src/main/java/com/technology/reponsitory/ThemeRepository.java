package com.technology.reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.technology.entity.ThemeEntity;

import java.util.List;

@Repository
public interface ThemeRepository extends JpaRepository<ThemeEntity, Long>{

    ThemeEntity findOneByName(String name);

    @Query(value = "SELECT t.* FROM themes t JOIN categories c ON t.category_id = c.id WHERE c.code = :code",nativeQuery = true)
    List<ThemeEntity> getThemeByCode(@Param("code") String code);
}
