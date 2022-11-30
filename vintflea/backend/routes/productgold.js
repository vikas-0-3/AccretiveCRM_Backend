const express = require('express');
const Productgold = require('../models/Productgold');
const router = express.Router()
var ObjectId = require('mongodb').ObjectId; 


router.post('/createGoldProduct', async (req, res) => {

    try{
        let productgold = await Productgold.findOne({ sku: req.body.sku });
        if (productgold) {
            const newProduct = {};

            if(req.body.product_name) { newProduct.product_name = req.body.product_name };
            if(req.body.product_category) { newProduct.product_category = req.body.product_category };
            if(req.body.product_subcategory) { newProduct.product_subcategory = req.body.product_subcategory };
            if(req.body.product_sub_subcategory) { newProduct.product_sub_subcategory = req.body.product_sub_subcategory };
            if(req.body.product_reference_link) { newProduct.product_reference_link = req.body.product_reference_link };
            if(req.body.reference_link_platform) { newProduct.reference_link_platform = req.body.reference_link_platform };
            if(req.body.reviews) { newProduct.reviews = req.body.reviews };
            if(req.body.ratings) { newProduct.ratings = req.body.ratings };
            if(req.body.product_rank) { newProduct.product_rank = req.body.product_rank };
            if(req.body.product_supplier) { newProduct.product_supplier = req.body.product_supplier };
            if(req.body.sales_estimate_monthly) { newProduct.sales_estimate_monthly = req.body.sales_estimate_monthly };
            if(req.body.weight_kg) { newProduct.weight_kg = req.body.weight_kg };
            if(req.body.sku) { newProduct.sku = req.body.sku };
            if(req.body.product_cost_inr) { newProduct.product_cost_inr = req.body.product_cost_inr };
            if(req.body.product_cost_dollar) { newProduct.product_cost_dollar = req.body.product_cost_dollar };
            if(req.body.target_product_cost_inr) { newProduct.target_product_cost_inr = req.body.target_product_cost_inr };
            if(req.body.target_product_cost_dollar) { newProduct.target_product_cost_dollar = req.body.target_product_cost_dollar };
            if(req.body.air_shipping_cost_inr) { newProduct.air_shipping_cost_inr = req.body.air_shipping_cost_inr };
            if(req.body.air_shipping_cost_dollar) { newProduct.air_shipping_cost_dollar = req.body.air_shipping_cost_dollar };
            if(req.body.sea_shipping_cost_inr) { newProduct.sea_shipping_cost_inr = req.body.sea_shipping_cost_inr };
            if(req.body.sea_shipping_cost_dollar) { newProduct.sea_shipping_cost_dollar = req.body.sea_shipping_cost_dollar };
            if(req.body.landed_cost_air_shipping_inr) { newProduct.landed_cost_air_shipping_inr = req.body.landed_cost_air_shipping_inr };
            if(req.body.landed_cost_air_shipping_dollar) { newProduct.landed_cost_air_shipping_dollar = req.body.landed_cost_air_shipping_dollar };
            if(req.body.landed_cost_sea_shipping_inr) { newProduct.landed_cost_sea_shipping_inr = req.body.landed_cost_sea_shipping_inr };
            if(req.body.landed_cost_sea_shipping_dollar) { newProduct.landed_cost_sea_shipping_dollar = req.body.landed_cost_sea_shipping_dollar };
            if(req.body.target_landed_cost_air_shipping_inr) { newProduct.target_landed_cost_air_shipping_inr = req.body.target_landed_cost_air_shipping_inr };
            if(req.body.target_landed_cost_air_shipping_dollar) { newProduct.target_landed_cost_air_shipping_dollar = req.body.target_landed_cost_air_shipping_dollar };
            if(req.body.target_landed_cost_sea_shipping_inr) { newProduct.target_landed_cost_sea_shipping_inr = req.body.target_landed_cost_sea_shipping_inr };
            if(req.body.target_landed_cost_sea_shipping_dollar) { newProduct.target_landed_cost_sea_shipping_dollar = req.body.target_landed_cost_sea_shipping_dollar };
            if(req.body.competitor_sp_lowest) { newProduct.competitor_sp_lowest = req.body.competitor_sp_lowest };
            if(req.body.proposed_sp) { newProduct.proposed_sp = req.body.proposed_sp };
            if(req.body.sp_to_achieve_net_margain) { newProduct.sp_to_achieve_net_margain = req.body.sp_to_achieve_net_margain };
            if(req.body.platform_marketplace) { newProduct.platform_marketplace = req.body.platform_marketplace };
            if(req.body.platform_fees_dollar) { newProduct.platform_fees_dollar = req.body.platform_fees_dollar };
            if(req.body.net_margin_without_landed_cost_air_shipping_dollar) { newProduct.net_margin_without_landed_cost_air_shipping_dollar = req.body.net_margin_without_landed_cost_air_shipping_dollar };
            if(req.body.net_margin_without_landed_cost_air_shipping_percent) { newProduct.net_margin_without_landed_cost_air_shipping_percent = req.body.net_margin_without_landed_cost_air_shipping_percent };
            if(req.body.net_margin_with_landed_cost_air_shipping_dollar) { newProduct.net_margin_with_landed_cost_air_shipping_dollar = req.body.net_margin_with_landed_cost_air_shipping_dollar };
            if(req.body.net_margin_with_landed_cost_air_shipping_percent) { newProduct.net_margin_with_landed_cost_air_shipping_percent = req.body.net_margin_with_landed_cost_air_shipping_percent };
            if(req.body.net_margin_with_landed_cost_sea_shipping_dollar) { newProduct.net_margin_with_landed_cost_sea_shipping_dollar = req.body.net_margin_with_landed_cost_sea_shipping_dollar };
            if(req.body.net_margin_with_landed_cost_sea_shipping_percent) { newProduct.net_margin_with_landed_cost_sea_shipping_percent = req.body.net_margin_with_landed_cost_sea_shipping_percent };
            if(req.body.net_margin_with_target_landed_cost_air_shipping_dollar) { newProduct.net_margin_with_target_landed_cost_air_shipping_dollar = req.body.net_margin_with_target_landed_cost_air_shipping_dollar };
            if(req.body.net_margin_with_target_landed_cost_air_shipping_percent) { newProduct.net_margin_with_target_landed_cost_air_shipping_percent = req.body.net_margin_with_target_landed_cost_air_shipping_percent };
            if(req.body.net_margin_with_target_landed_cost_sea_shipping_dollar) { newProduct.net_margin_with_target_landed_cost_sea_shipping_dollar = req.body.net_margin_with_target_landed_cost_sea_shipping_dollar };
            if(req.body.net_margin_with_target_landed_cost_sea_shipping_percent) { newProduct.net_margin_with_target_landed_cost_sea_shipping_percent = req.body.net_margin_with_target_landed_cost_sea_shipping_percent };
            if(req.body.net_margin_without_target_landed_cost_air_shipping_dollar) { newProduct.net_margin_without_target_landed_cost_air_shipping_dollar = req.body.net_margin_without_target_landed_cost_air_shipping_dollar };
            if(req.body.net_margin_without_target_landed_cost_air_shipping_percent) { newProduct.net_margin_without_target_landed_cost_air_shipping_percent = req.body.net_margin_without_target_landed_cost_air_shipping_percent };
            if(req.body.remarks) { newProduct.remarks = req.body.remarks };

            productgold = await Productgold.findOneAndUpdate({ sku: req.body.sku }, { $set: newProduct }, { new: true })
        }
        else {
            productgold = await Productgold.create({
                product_name : req.body.product_name,
                product_category : req.body.product_category,
                product_subcategory : req.body.product_subcategory,
                product_sub_subcategory : req.body.product_sub_subcategory,
                product_reference_link : req.body.product_reference_link,
                reference_link_platform : req.body.reference_link_platform,
                reviews : req.body.reviews,
                ratings : req.body.ratings,
                product_rank : req.body.product_rank,
                product_supplier : req.body.product_supplier,
                sales_estimate_monthly : req.body.sales_estimate_monthly,
                weight_kg : req.body.weight_kg,
                sku : req.body.sku,
                product_cost_inr : req.body.product_cost_inr,
                product_cost_dollar : req.body.product_cost_dollar,
                target_product_cost_inr : req.body.target_product_cost_inr,
                target_product_cost_dollar : req.body.target_product_cost_dollar,
                air_shipping_cost_inr : req.body.air_shipping_cost_inr,
                air_shipping_cost_dollar : req.body.air_shipping_cost_dollar,
                sea_shipping_cost_inr : req.body.sea_shipping_cost_inr,
                sea_shipping_cost_dollar : req.body.sea_shipping_cost_dollar,
                landed_cost_air_shipping_inr : req.body.landed_cost_air_shipping_inr,
                landed_cost_air_shipping_dollar : req.body.landed_cost_air_shipping_dollar,
                landed_cost_sea_shipping_inr : req.body.landed_cost_sea_shipping_inr,
                landed_cost_sea_shipping_dollar : req.body.landed_cost_sea_shipping_dollar,
                target_landed_cost_air_shipping_inr : req.body.target_landed_cost_air_shipping_inr,
                target_landed_cost_air_shipping_dollar : req.body.target_landed_cost_air_shipping_dollar,
                target_landed_cost_sea_shipping_inr : req.body.target_landed_cost_sea_shipping_inr,
                target_landed_cost_sea_shipping_dollar : req.body.target_landed_cost_sea_shipping_dollar,
                competitor_sp_lowest : req.body.competitor_sp_lowest,
                proposed_sp : req.body.proposed_sp,
                sp_to_achieve_net_margain : req.body.sp_to_achieve_net_margain,
                platform_marketplace : req.body.platform_marketplace,
                platform_fees_dollar : req.body.platform_fees_dollar,
                net_margin_without_landed_cost_air_shipping_dollar : req.body.net_margin_without_landed_cost_air_shipping_dollar,
                net_margin_without_landed_cost_air_shipping_percent : req.body.net_margin_without_landed_cost_air_shipping_percent,
                net_margin_with_landed_cost_air_shipping_dollar : req.body.net_margin_with_landed_cost_air_shipping_dollar,
                net_margin_with_landed_cost_air_shipping_percent : req.body.net_margin_with_landed_cost_air_shipping_percent,
                net_margin_with_landed_cost_sea_shipping_dollar : req.body.net_margin_with_landed_cost_sea_shipping_dollar,
                net_margin_with_landed_cost_sea_shipping_percent : req.body.net_margin_with_landed_cost_sea_shipping_percent,
                net_margin_with_target_landed_cost_air_shipping_dollar : req.body.net_margin_with_target_landed_cost_air_shipping_dollar,
                net_margin_with_target_landed_cost_air_shipping_percent : req.body.net_margin_with_target_landed_cost_air_shipping_percent,
                net_margin_with_target_landed_cost_sea_shipping_dollar : req.body.net_margin_with_target_landed_cost_sea_shipping_dollar,
                net_margin_with_target_landed_cost_sea_shipping_percent : req.body.net_margin_with_target_landed_cost_sea_shipping_percent,
                net_margin_without_target_landed_cost_air_shipping_dollar : req.body.net_margin_without_target_landed_cost_air_shipping_dollar,
                net_margin_without_target_landed_cost_air_shipping_percent : req.body.net_margin_without_target_landed_cost_air_shipping_percent,
                remarks : req.body.remarks,
            })
        }

        success=true;
        res.json({ success, productgold })
    }
    catch(error) {
        console.error(error.message);
    }



})

router.get('/allGoldproducts', async (req, res) => {
    let productgoldlists = await Productgold.find();
    res.json(productgoldlists);
})

router.get('/product/:id', async (req, res) => {
    let singleproduct = await Productgold.findById(req.params.id);
    res.json(singleproduct);
})

// all product filters apis

router.get('/distinctvaluesfromproducts/:productvalue', async (req, res) => {
    let alldata = await Productgold.find().distinct(req.params.productvalue);
    res.json(alldata);
})


router.get('/requireproducts', async (req, res) => {

    let data = {}   
    if(req.query.seller_account) {
        data.seller_account = req.query.seller_account;
    }
    if(req.query.product_supplier) {
        data.product_supplier = req.query.product_supplier;
    }
    if(req.query.platform_marketplace) {
        data.platform_marketplace = req.query.platform_marketplace;
    }
    if(req.query.product_category) {
        data.product_category = req.query.product_category;
    }
    let requireddata = await Productgold.find(data);
    res.json(requireddata);

})


// product filter apis over


router.put('/editproduct/:prodid', async (req, res) => {
  
    try {        
        const newProduct = {};
        if(req.body.product_name) { newProduct.product_name = req.body.product_name }
        if(req.body.product_category) { newProduct.product_category = req.body.product_category }
        if(req.body.product_subcategory) { newProduct.product_subcategory = req.body.product_subcategory }
        if(req.body.product_sub_subcategory) { newProduct.product_sub_subcategory = req.body.product_sub_subcategory }
        if(req.body.product_reference_link) { newProduct.product_reference_link = req.body.product_reference_link }
        if(req.body.reference_link_platform) { newProduct.reference_link_platform = req.body.reference_link_platform }
        if(req.body.reviews) { newProduct.reviews = req.body.reviews }
        if(req.body.ratings) { newProduct.ratings = req.body.ratings }
        if(req.body.product_rank) { newProduct.product_rank = req.body.product_rank }
        if(req.body.product_supplier) { newProduct.product_supplier = req.body.product_supplier }
        if(req.body.sales_estimate_monthly) { newProduct.sales_estimate_monthly = req.body.sales_estimate_monthly }
        if(req.body.weight_kg) { newProduct.weight_kg = req.body.weight_kg }
        if(req.body.sku) { newProduct.sku = req.body.sku }
        if(req.body.product_cost_inr) { newProduct.product_cost_inr = req.body.product_cost_inr }
        if(req.body.product_cost_dollar) { newProduct.product_cost_dollar = req.body.product_cost_dollar }
        if(req.body.target_product_cost_inr) { newProduct.target_product_cost_inr = req.body.target_product_cost_inr }
        if(req.body.target_product_cost_dollar) { newProduct.target_product_cost_dollar = req.body.target_product_cost_dollar }
        if(req.body.air_shipping_cost_inr) { newProduct.air_shipping_cost_inr = req.body.air_shipping_cost_inr }
        if(req.body.air_shipping_cost_dollar) { newProduct.air_shipping_cost_dollar = req.body.air_shipping_cost_dollar }
        if(req.body.sea_shipping_cost_inr) { newProduct.sea_shipping_cost_inr = req.body.sea_shipping_cost_inr }
        if(req.body.sea_shipping_cost_dollar) { newProduct.sea_shipping_cost_dollar = req.body.sea_shipping_cost_dollar }
        if(req.body.landed_cost_air_shipping_inr) { newProduct.landed_cost_air_shipping_inr = req.body.landed_cost_air_shipping_inr }
        if(req.body.landed_cost_air_shipping_dollar) { newProduct.landed_cost_air_shipping_dollar = req.body.landed_cost_air_shipping_dollar }
        if(req.body.landed_cost_sea_shipping_inr) { newProduct.landed_cost_sea_shipping_inr = req.body.landed_cost_sea_shipping_inr }
        if(req.body.landed_cost_sea_shipping_dollar) { newProduct.landed_cost_sea_shipping_dollar = req.body.landed_cost_sea_shipping_dollar }
        if(req.body.target_landed_cost_air_shipping_inr) { newProduct.target_landed_cost_air_shipping_inr = req.body.target_landed_cost_air_shipping_inr }
        if(req.body.target_landed_cost_air_shipping_dollar) { newProduct.target_landed_cost_air_shipping_dollar = req.body.target_landed_cost_air_shipping_dollar }
        if(req.body.target_landed_cost_sea_shipping_inr) { newProduct.target_landed_cost_sea_shipping_inr = req.body.target_landed_cost_sea_shipping_inr }
        if(req.body.target_landed_cost_sea_shipping_dollar) { newProduct.target_landed_cost_sea_shipping_dollar = req.body.target_landed_cost_sea_shipping_dollar }
        if(req.body.competitor_sp_lowest) { newProduct.competitor_sp_lowest = req.body.competitor_sp_lowest }
        if(req.body.proposed_sp) { newProduct.proposed_sp = req.body.proposed_sp }
        if(req.body.sp_to_achieve_net_margain) { newProduct.sp_to_achieve_net_margain = req.body.sp_to_achieve_net_margain }
        if(req.body.platform_marketplace) { newProduct.platform_marketplace = req.body.platform_marketplace }
        if(req.body.platform_fees_dollar) { newProduct.platform_fees_dollar = req.body.platform_fees_dollar }
        if(req.body.net_margin_without_landed_cost_air_shipping_dollar) { newProduct.net_margin_without_landed_cost_air_shipping_dollar = req.body.net_margin_without_landed_cost_air_shipping_dollar }
        if(req.body.net_margin_without_landed_cost_air_shipping_percent) { newProduct.net_margin_without_landed_cost_air_shipping_percent = req.body.net_margin_without_landed_cost_air_shipping_percent }
        if(req.body.net_margin_with_landed_cost_air_shipping_dollar) { newProduct.net_margin_with_landed_cost_air_shipping_dollar = req.body.net_margin_with_landed_cost_air_shipping_dollar }
        if(req.body.net_margin_with_landed_cost_air_shipping_percent) { newProduct.net_margin_with_landed_cost_air_shipping_percent = req.body.net_margin_with_landed_cost_air_shipping_percent }
        if(req.body.net_margin_with_landed_cost_sea_shipping_dollar) { newProduct.net_margin_with_landed_cost_sea_shipping_dollar = req.body.net_margin_with_landed_cost_sea_shipping_dollar }
        if(req.body.net_margin_with_landed_cost_sea_shipping_percent) { newProduct.net_margin_with_landed_cost_sea_shipping_percent = req.body.net_margin_with_landed_cost_sea_shipping_percent }
        if(req.body.net_margin_with_target_landed_cost_air_shipping_dollar) { newProduct.net_margin_with_target_landed_cost_air_shipping_dollar = req.body.net_margin_with_target_landed_cost_air_shipping_dollar }
        if(req.body.net_margin_with_target_landed_cost_air_shipping_percent) { newProduct.net_margin_with_target_landed_cost_air_shipping_percent = req.body.net_margin_with_target_landed_cost_air_shipping_percent }
        if(req.body.net_margin_with_target_landed_cost_sea_shipping_dollar) { newProduct.net_margin_with_target_landed_cost_sea_shipping_dollar = req.body.net_margin_with_target_landed_cost_sea_shipping_dollar }
        if(req.body.net_margin_with_target_landed_cost_sea_shipping_percent) { newProduct.net_margin_with_target_landed_cost_sea_shipping_percent = req.body.net_margin_with_target_landed_cost_sea_shipping_percent }
        if(req.body.net_margin_without_target_landed_cost_air_shipping_dollar) { newProduct.net_margin_without_target_landed_cost_air_shipping_dollar = req.body.net_margin_without_target_landed_cost_air_shipping_dollar }
        if(req.body.net_margin_without_target_landed_cost_air_shipping_percent) { newProduct.net_margin_without_target_landed_cost_air_shipping_percent = req.body.net_margin_without_target_landed_cost_air_shipping_percent }
        if(req.body.remarks) { newProduct.remarks = req.body.remarks }


        let productgold = await Productgold.findById(req.params.prodid );
        if (!productgold) { return res.status(404).send("Not Found") }
        
        productgold = await Productgold.findByIdAndUpdate(req.params.prodid, { $set: newProduct }, { new: true })
        res.json({ productgold });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error Occured");
    }

})



router.delete('/deletegoldproduct/:id', async (req, res) => {
        try {
            let productgold = await Productgold.findById(req.params.id);
            if (!productgold) { return res.status(404).send("Not Found") }
            productgold = await Productgold.findByIdAndDelete(req.params.id)
            res.json({ "Success": "Product has been deleted", product: productgold });
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Some error Occured");
        }



    })


module.exports = router