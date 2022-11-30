const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({

    product_images : {
        type: String,
        required: false
    },
    product_images_link : {
        type: String,
        required: false
    },
    product_name : {
        type: String,
        required: true
    },
    product_category : {
        type: String,
        required: true
    },
    product_subcategory : {
        type: String,
        required: true
    },
    product_sub_subcategory : {
        type: String,
        required: false
    },
    upc : {
        type: String,
        required: false
    },
    platform_marketplace : {
        type: String,
        required: false
    },
    marketplace_id : {
        type: String,
        required: false
    },
    selling_price : {
        type: String,
        required: false
    },
    product_page_link : {
        type: String,
        required: false
    },
    product_supplier : {
        type: String,
        required: false
    },
    hsn_code : {
        type: String,
        required: false
    },
    transfer_price : {
        type: String,
        required: false
    },
    gst_rate : {
        type: String,
        required: false
    },
    sku : {
        type: String,
        required: true
    },
    seller_account : {
        type: String,
        required: false
    },
    product_dimensions_l : {
        type: String,
        required: false
    },
    product_dimensions_w : {
        type: String,
        required: false
    },
    product_dimensions_h : {
        type: String,
        required: false
    },
    product_dimensions_d : {
        type: String,
        required: false
    },
    variation : {
        type: String,
        required: false
    },
    variation_type : {
        type: String,
        required: false
    },
    fulfillment_type : {
        type: String,
        required: false
    },
    is_gold : {
        type: String,
        required: false
    },
    package_dimensions_l : {
        type: String,
        required: false
    },
    package_dimensions_w : {
        type: String,
        required: false
    },
    package_dimensions_h : {
        type: String,
        required: false
    },
    care_instructions : {
        type: String,
        required: false
    },
    brand_information : {
        type: String,
        required: false
    },
    listing_type1 : {
        type: String,
        required: false
    },
    listing_type2 : {
        type: String,
        required: false
    },
    additional_information : {
        type: String,
        required: false
    },
    usa_sp : {
        type: String,
        required: false
    },
    usa_status : {
        type: String,
        required: false
    },
    ca_sp : {
        type: String,
        required: false
    },
    ca_status : {
        type: String,
        required: false
    },
    uk_sp : {
        type: String,
        required: false
    },
    uk_status : {
        type: String,
        required: false
    },
    de_sp : {
        type: String,
        required: false
    },
    de_status : {
        type: String,
        required: false
    },
    es_sp : {
        type: String,
        required: false
    },
    es_status : {
        type: String,
        required: false
    },
    fr_sp : {
        type: String,
        required: false
    },
    fr_status : {
        type: String,
        required: false
    },
    it_sp : {
        type: String,
        required: false
    },
    it_status : {
        type: String,
        required: false
    },
    bullet_point1 : {
        type: String,
        required: false
    },
    bullet_point2 : {
        type: String,
        required: false
    },
    bullet_point3 : {
        type: String,
        required: false
    },
    bullet_point4 : {
        type: String,
        required: false
    },
    bullet_point5 : {
        type: String,
        required: false
    },
    bullet_point6 : {
        type: String,
        required: false
    },
    bullet_point7 : {
        type: String,
        required: false
    },
    description : {
        type: String,
        required: false
    },
    keywords : {
        type: String,
        required: false
    },
});

const Products = mongoose.model('products', productSchema);
module.exports = Products;


