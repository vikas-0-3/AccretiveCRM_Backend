const mongoose = require('mongoose');
const { Schema } = mongoose;

const productgoldSchema = new Schema({

    product_name: {
        type: String,
        required: false
    },
    product_category: {
        type: String,
        required: false
    },
    product_subcategory: {
        type: String,
        required: false
    },
    product_sub_subcategory: {
        type: String,
        required: false
    },
    product_reference_link: {
        type: String,
        required: false
    },
    reference_link_platform: {
        type: String,
        required: false
    },
    reviews: {
        type: String,
        required: false
    },
    ratings: {
        type: String,
        required: false
    },
    product_rank: {
        type: String,
        required: false
    },
    product_supplier: {
        type: String,
        required: false
    },
    sales_estimate_monthly: {
        type: String,
        required: false
    },
    weight_kg: {
        type: String,
        required: false
    },
    sku: {
        type: String,
        required: false
    },
    product_cost_inr: {
        type: String,
        required: false
    },
    product_cost_dollar: {
        type: String,
        required: false
    },
    target_product_cost_inr: {
        type: String,
        required: false
    },
    target_product_cost_dollar: {
        type: String,
        required: false
    },
    air_shipping_cost_inr: {
        type: String,
        required: false
    },
    air_shipping_cost_dollar: {
        type: String,
        required: false
    },
    sea_shipping_cost_inr: {
        type: String,
        required: false
    },
    sea_shipping_cost_dollar: {
        type: String,
        required: false
    },
    landed_cost_air_shipping_inr: {
        type: String,
        required: false
    },
    landed_cost_air_shipping_dollar: {
        type: String,
        required: false
    },
    landed_cost_sea_shipping_inr: {
        type: String,
        required: false
    },
    landed_cost_sea_shipping_dollar: {
        type: String,
        required: false
    },
    target_landed_cost_air_shipping_inr: {
        type: String,
        required: false
    },
    target_landed_cost_air_shipping_dollar: {
        type: String,
        required: false
    },
    target_landed_cost_sea_shipping_inr: {
        type: String,
        required: false
    },
    target_landed_cost_sea_shipping_dollar: {
        type: String,
        required: false
    },
    competitor_sp_lowest: {
        type: String,
        required: false
    },
    proposed_sp: {
        type: String,
        required: false
    },
    sp_to_achieve_net_margain: {
        type: String,
        required: false
    },
    platform_marketplace: {
        type: String,
        required: false
    },
    platform_fees_dollar: {
        type: String,
        required: false
    },
    net_margin_without_landed_cost_air_shipping_dollar: {
        type: String,
        required: false
    },
    net_margin_without_landed_cost_air_shipping_percent: {
        type: String,
        required: false
    },
    net_margin_with_landed_cost_air_shipping_dollar: {
        type: String,
        required: false
    },
    net_margin_with_landed_cost_air_shipping_percent: {
        type: String,
        required: false
    },
    net_margin_with_landed_cost_sea_shipping_dollar: {
        type: String,
        required: false
    },
    net_margin_with_landed_cost_sea_shipping_percent: {
        type: String,
        required: false
    },
    net_margin_with_target_landed_cost_air_shipping_dollar: {
        type: String,
        required: false
    },
    net_margin_with_target_landed_cost_air_shipping_percent: {
        type: String,
        required: false
    },
    net_margin_with_target_landed_cost_sea_shipping_dollar: {
        type: String,
        required: false
    },
    net_margin_with_target_landed_cost_sea_shipping_percent: {
        type: String,
        required: false
    },
    net_margin_without_target_landed_cost_air_shipping_dollar: {
        type: String,
        required: false
    },
    net_margin_without_target_landed_cost_air_shipping_percent: {
        type: String,
        required: false
    },
    remarks: {
        type: String,
        required: false
    },

});

const Productgold = mongoose.model('productgold', productgoldSchema);
module.exports = Productgold;


