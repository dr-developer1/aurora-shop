package com.aurorashop.server.config;

import com.aurorashop.server.model.entity.Category;
import com.aurorashop.server.model.entity.Product;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class DataRestConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

        HttpMethod[] unsupportedMethods = {HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE};

        // Disable the unsupported methods for products
        config.getExposureConfiguration()
                .forDomainType(Product.class)
                .withItemExposure(((_, httpMethods) -> httpMethods.disable(unsupportedMethods)))
                .withCollectionExposure(((_, httpMethods) -> httpMethods.disable(unsupportedMethods)));

        // Disable the unsupported methods for categories
        config.getExposureConfiguration()
                .forDomainType(Category.class)
                .withItemExposure(((_, httpMethods) -> httpMethods.disable(unsupportedMethods)))
                .withCollectionExposure(((_, httpMethods) -> httpMethods.disable(unsupportedMethods)));
    }
}
