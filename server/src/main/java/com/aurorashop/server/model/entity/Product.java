package com.aurorashop.server.model.entity;

import com.aurorashop.server.model.common.BaseEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Table(name = "products")
@Data
public class Product extends BaseEntity {

    @Column(name = "name")
    private String name;

    @Column(name = "sku")
    private String sku;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "active")
    private boolean active = true;

    @Column(name = "units_in_stock")
    private int unitsInStock = 0;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;
}
