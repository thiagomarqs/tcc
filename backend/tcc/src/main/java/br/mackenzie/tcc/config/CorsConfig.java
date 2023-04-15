package br.mackenzie.tcc.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

	@Value("${corsAllowedOrigins:*}")
	private String corsAllowedOrigins = "";

	@Override
	public void addCorsMappings(CorsRegistry registry) {

		System.out.println(corsAllowedOrigins);
		
		registry
			.addMapping("/api/**")
			.allowedOriginPatterns(corsAllowedOrigins)
			.allowedMethods("*")
			.allowCredentials(true);
	}

}
