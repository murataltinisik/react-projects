package com.facebook.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
@EnableCaching
public class FacebookApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(FacebookApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {}
}
