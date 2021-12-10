package com.devsuperior.movieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;

@Service
public class ReviewService {
	
	@Autowired
	private ReviewRepository repository;
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private AuthService authService;

	
	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		
		User user = authService.authenticated();
		
		Review entity = new Review();
		entity.setText(dto.getText());
		entity.setUser(user);
		
		MovieDTO mvDTO =  new MovieDTO();
		mvDTO.setId(dto.getMovieId());
		
		Movie movie = movieRepository.getOne(mvDTO.getId());
		entity.setMovie(movie);
		
		entity = repository.save(entity);
		
		return new ReviewDTO(entity);
	}
	



}
