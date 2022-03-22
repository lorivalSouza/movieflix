package com.devsuperior.movieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.GenreDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.repositories.GenreRepository;

@Service
public class GenreService {
	
	@Autowired
	private GenreRepository repository;

	
	@Transactional(readOnly = true)
	public Page<GenreDTO> findAllPageable(Pageable pageable) {
		
		//List<Genre> list = repository.findAll(Sort.by("id"));
		Page<Genre> page = repository.findAll(pageable);	
		
		//return list.stream().map(x -> new GenreDTO(x)).collect(Collectors.toList());
		return page.map(x -> new GenreDTO(x));
	}

}
