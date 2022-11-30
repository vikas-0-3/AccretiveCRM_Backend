const express = require('express');
const Products = require('../models/Products');
const router = express.Router()
var ObjectId = require('mongodb').ObjectId; 

const multer = require('multer')
const path = require('path')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // cb(null, '/images')
        cb(null, path.join(__dirname, '../images/'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage });

router.post('/createProduct', async (req, res) => {

    try{
        let product = await Products.findOne({ sku: req.body.sku });
        if (product) {
            // return res.status(400).json({ error: "Product with this SKU already exist !" })

            const newProduct = {};

            if(req.body.product_images) { newProduct.product_images = req.body.product_images };
            if(req.body.product_images_link) { newProduct.product_images_link = req.body.product_images_link };
            if(req.body.product_name) { newProduct.product_name = req.body.product_name };
            if(req.body.product_category) { newProduct.product_category = req.body.product_category };
            if(req.body.product_subcategory) { newProduct.product_subcategory = req.body.product_subcategory };
            if(req.body.product_sub_subcategory) { newProduct.product_sub_subcategory = req.body.product_sub_subcategory };
            if(req.body.upc) { newProduct.upc = req.body.upc };
            if(req.body.platform_marketplace) { newProduct.platform_marketplace = req.body.platform_marketplace };
            if(req.body.marketplace_id) { newProduct.marketplace_id = req.body.marketplace_id };
            if(req.body.selling_price) { newProduct.selling_price = req.body.selling_price };
            if(req.body.product_page_link) { newProduct.product_page_link = req.body.product_page_link };
            if(req.body.product_supplier) { newProduct.product_supplier = req.body.product_supplier };
            if(req.body.hsn_code) { newProduct.hsn_code = req.body.hsn_code };
            if(req.body.transfer_price) { newProduct.transfer_price = req.body.transfer_price };
            if(req.body.gst_rate) { newProduct.gst_rate = req.body.gst_rate };
            if(req.body.sku) { newProduct.sku = req.body.sku };
            if(req.body.seller_account) { newProduct.seller_account = req.body.seller_account };
            if(req.body.product_dimensions_l) { newProduct.product_dimensions_l = req.body.product_dimensions_l };
            if(req.body.product_dimensions_w) { newProduct.product_dimensions_w = req.body.product_dimensions_w };
            if(req.body.product_dimensions_h) { newProduct.product_dimensions_h = req.body.product_dimensions_h };
            if(req.body.product_dimensions_d) { newProduct.product_dimensions_d = req.body.product_dimensions_d };
            if(req.body.variation) { newProduct.variation = req.body.variation };
            if(req.body.variation_type) { newProduct.variation_type = req.body.variation_type };
            if(req.body.fulfillment_type) { newProduct.fulfillment_type = req.body.fulfillment_type };
            if(req.body.is_gold) { newProduct.is_gold = req.body.is_gold };
            if(req.body.package_dimensions_l) { newProduct.package_dimensions_l = req.body.package_dimensions_l };
            if(req.body.package_dimensions_w) { newProduct.package_dimensions_w = req.body.package_dimensions_w };
            if(req.body.package_dimensions_h) { newProduct.package_dimensions_h = req.body.package_dimensions_h };
            if(req.body.care_instructions) { newProduct.care_instructions = req.body.care_instructions };
            if(req.body.brand_information) { newProduct.brand_information = req.body.brand_information };
            if(req.body.listing_type1) { newProduct.listing_type1 = req.body.listing_type1 };
            if(req.body.listing_type2) { newProduct.listing_type2 = req.body.listing_type2 };
            if(req.body.additional_information) { newProduct.additional_information = req.body.additional_information };
            if(req.body.usa_sp) { newProduct.usa_sp = req.body.usa_sp };
            if(req.body.usa_status) { newProduct.usa_status = req.body.usa_status };
            if(req.body.ca_sp) { newProduct.ca_sp = req.body.ca_sp };
            if(req.body.ca_status) { newProduct.ca_status = req.body.ca_status };
            if(req.body.uk_sp) { newProduct.uk_sp = req.body.uk_sp };
            if(req.body.uk_status) { newProduct.uk_status = req.body.uk_status };
            if(req.body.de_sp) { newProduct.de_sp = req.body.de_sp };
            if(req.body.de_status) { newProduct.de_status = req.body.de_status };
            if(req.body.es_sp) { newProduct.es_sp = req.body.es_sp };
            if(req.body.es_status) { newProduct.es_status = req.body.es_status };
            if(req.body.fr_sp) { newProduct.fr_sp = req.body.fr_sp };
            if(req.body.fr_status) { newProduct.fr_status = req.body.fr_status };
            if(req.body.it_sp) { newProduct.it_sp = req.body.it_sp };
            if(req.body.it_status) { newProduct.it_status = req.body.it_status };
            if(req.body.bullet_point1) { newProduct.bullet_point1 = req.body.bullet_point1 };
            if(req.body.bullet_point2) { newProduct.bullet_point2 = req.body.bullet_point2 };
            if(req.body.bullet_point3) { newProduct.bullet_point3 = req.body.bullet_point3 };
            if(req.body.bullet_point4) { newProduct.bullet_point4 = req.body.bullet_point4 };
            if(req.body.bullet_point5) { newProduct.bullet_point5 = req.body.bullet_point5 };
            if(req.body.bullet_point6) { newProduct.bullet_point6 = req.body.bullet_point6 };
            if(req.body.bullet_point7) { newProduct.bullet_point7 = req.body.bullet_point7 };
            if(req.body.description) { newProduct.description = req.body.description };
            if(req.body.keywords) { newProduct.keywords = req.body.keywords };
            product = await Products.findOneAndUpdate({ sku: req.body.sku }, { $set: newProduct }, { new: true })
        }
        else {
            product = await Products.create({
                product_images : req.body.product_images,
                product_images_link : req.body.product_images_link,
                product_name : req.body.product_name,
                product_category : req.body.product_category,
                product_subcategory : req.body.product_subcategory,
                product_sub_subcategory : req.body.product_sub_subcategory,
                upc : req.body.upc,
                platform_marketplace : req.body.platform_marketplace,
                marketplace_id : req.body.marketplace_id,
                selling_price : req.body.selling_price,
                product_page_link : req.body.product_page_link,
                product_supplier : req.body.product_supplier,
                hsn_code : req.body.hsn_code,
                transfer_price : req.body.transfer_price,
                gst_rate : req.body.gst_rate,
                sku : req.body.sku,
                seller_account : req.body.seller_account,
                product_dimensions_l : req.body.product_dimensions_l,
                product_dimensions_w : req.body.product_dimensions_w,
                product_dimensions_h : req.body.product_dimensions_h,
                product_dimensions_d : req.body.product_dimensions_d,
                variation : req.body.variation,
                variation_type : req.body.variation_type,
                fulfillment_type : req.body.fulfillment_type,
                is_gold : req.body.is_gold,
                package_dimensions_l : req.body.package_dimensions_l,
                package_dimensions_w : req.body.package_dimensions_w,
                package_dimensions_h : req.body.package_dimensions_h,
                care_instructions : req.body.care_instructions,
                brand_information : req.body.brand_information,
                listing_type1 : req.body.listing_type1,
                listing_type2 : req.body.listing_type2,
                additional_information : req.body.additional_information,
                usa_sp : req.body.usa_sp,
                usa_status : req.body.usa_status,
                ca_sp : req.body.ca_sp,
                ca_status : req.body.ca_status,
                uk_sp : req.body.uk_sp,
                uk_status : req.body.uk_status,
                de_sp : req.body.de_sp,
                de_status : req.body.de_status,
                es_sp : req.body.es_sp,
                es_status : req.body.es_status,
                fr_sp : req.body.fr_sp,
                fr_status : req.body.fr_status,
                it_sp : req.body.it_sp,
                it_status : req.body.it_status,
                bullet_point1 : req.body.bullet_point1,
                bullet_point2 : req.body.bullet_point2,
                bullet_point3 : req.body.bullet_point3,
                bullet_point4 : req.body.bullet_point4,
                bullet_point5 : req.body.bullet_point5,
                bullet_point6 : req.body.bullet_point6,
                bullet_point7 : req.body.bullet_point7,
                description : req.body.description,
                keywords : req.body.keywords
            })
        }


        
    
        success=true;
        res.json({ success, product })
    }
    catch(error) {
        console.error(error.message);
    }



})

router.get('/allproducts', async (req, res) => {
    let productlists = await Products.find();
    res.json(productlists);
})

router.get('/allGoldproducts', async (req, res) => {
    let productgoldlists = await Products.find({ is_gold: true});
    res.json(productgoldlists);
})

router.get('/product/:sku', async (req, res) => {
    let singleproduct = await Products.find({ sku: req.params.sku });
    res.json(singleproduct);
})

// all product filters apis

router.get('/distinctvaluesfromproducts/:productvalue', async (req, res) => {
    let alldata = await Products.find().distinct(req.params.productvalue);
    res.json(alldata);
})


router.get('/requireproducts', async (req, res) => {

    let data = {}   
    if(req.query.is_gold) {
        data.is_gold = req.query.is_gold;
    }
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


    let requireddata = await Products.find(data);
    res.json(requireddata);

})


// product filter apis over


router.put('/editproduct/:skuid', async (req, res) => {
  
    try {        
        const newProduct = {};
        if(req.body.product_images) { newProduct.product_images = req.body.product_images };
        if(req.body.product_images_link) { newProduct.product_images_link = req.body.product_images_link };
        if(req.body.product_name) { newProduct.product_name = req.body.product_name };
        if(req.body.product_category) { newProduct.product_category = req.body.product_category };
        if(req.body.product_subcategory) { newProduct.product_subcategory = req.body.product_subcategory };
        if(req.body.product_sub_subcategory) { newProduct.product_sub_subcategory = req.body.product_sub_subcategory };
        if(req.body.upc) { newProduct.upc = req.body.upc };
        if(req.body.platform_marketplace) { newProduct.platform_marketplace = req.body.platform_marketplace };
        if(req.body.marketplace_id) { newProduct.marketplace_id = req.body.marketplace_id };
        if(req.body.selling_price) { newProduct.selling_price = req.body.selling_price };
        if(req.body.product_page_link) { newProduct.product_page_link = req.body.product_page_link };
        if(req.body.product_supplier) { newProduct.product_supplier = req.body.product_supplier };
        if(req.body.hsn_code) { newProduct.hsn_code = req.body.hsn_code };
        if(req.body.transfer_price) { newProduct.transfer_price = req.body.transfer_price };
        if(req.body.gst_rate) { newProduct.gst_rate = req.body.gst_rate };
        if(req.body.sku) { newProduct.sku = req.body.sku };
        if(req.body.seller_account) { newProduct.seller_account = req.body.seller_account };
        if(req.body.product_dimensions_l) { newProduct.product_dimensions_l = req.body.product_dimensions_l };
        if(req.body.product_dimensions_w) { newProduct.product_dimensions_w = req.body.product_dimensions_w };
        if(req.body.product_dimensions_h) { newProduct.product_dimensions_h = req.body.product_dimensions_h };
        if(req.body.product_dimensions_d) { newProduct.product_dimensions_d = req.body.product_dimensions_d };
        if(req.body.variation) { newProduct.variation = req.body.variation };
        if(req.body.variation_type) { newProduct.variation_type = req.body.variation_type };
        if(req.body.fulfillment_type) { newProduct.fulfillment_type = req.body.fulfillment_type };
        if(req.body.is_gold) { newProduct.is_gold = req.body.is_gold };
        if(req.body.package_dimensions_l) { newProduct.package_dimensions_l = req.body.package_dimensions_l };
        if(req.body.package_dimensions_w) { newProduct.package_dimensions_w = req.body.package_dimensions_w };
        if(req.body.package_dimensions_h) { newProduct.package_dimensions_h = req.body.package_dimensions_h };
        if(req.body.care_instructions) { newProduct.care_instructions = req.body.care_instructions };
        if(req.body.brand_information) { newProduct.brand_information = req.body.brand_information };
        if(req.body.listing_type1) { newProduct.listing_type1 = req.body.listing_type1 };
        if(req.body.listing_type2) { newProduct.listing_type2 = req.body.listing_type2 };
        if(req.body.additional_information) { newProduct.additional_information = req.body.additional_information };
        if(req.body.usa_sp) { newProduct.usa_sp = req.body.usa_sp };
        if(req.body.usa_status) { newProduct.usa_status = req.body.usa_status };
        if(req.body.ca_sp) { newProduct.ca_sp = req.body.ca_sp };
        if(req.body.ca_status) { newProduct.ca_status = req.body.ca_status };
        if(req.body.uk_sp) { newProduct.uk_sp = req.body.uk_sp };
        if(req.body.uk_status) { newProduct.uk_status = req.body.uk_status };
        if(req.body.de_sp) { newProduct.de_sp = req.body.de_sp };
        if(req.body.de_status) { newProduct.de_status = req.body.de_status };
        if(req.body.es_sp) { newProduct.es_sp = req.body.es_sp };
        if(req.body.es_status) { newProduct.es_status = req.body.es_status };
        if(req.body.fr_sp) { newProduct.fr_sp = req.body.fr_sp };
        if(req.body.fr_status) { newProduct.fr_status = req.body.fr_status };
        if(req.body.it_sp) { newProduct.it_sp = req.body.it_sp };
        if(req.body.it_status) { newProduct.it_status = req.body.it_status };
        if(req.body.bullet_point1) { newProduct.bullet_point1 = req.body.bullet_point1 };
        if(req.body.bullet_point2) { newProduct.bullet_point2 = req.body.bullet_point2 };
        if(req.body.bullet_point3) { newProduct.bullet_point3 = req.body.bullet_point3 };
        if(req.body.bullet_point4) { newProduct.bullet_point4 = req.body.bullet_point4 };
        if(req.body.bullet_point5) { newProduct.bullet_point5 = req.body.bullet_point5 };
        if(req.body.bullet_point6) { newProduct.bullet_point6 = req.body.bullet_point6 };
        if(req.body.bullet_point7) { newProduct.bullet_point7 = req.body.bullet_point7 };
        if(req.body.description) { newProduct.description = req.body.description };
        if(req.body.keywords) { newProduct.keywords = req.body.keywords };
        console.log("NEW PRODS => "+newProduct);

        // find the note to be updated and update it
        let product = await Products.find({ sku: req.params.sku });
        if (!product) { return res.status(404).send("Not Found") }
        
        product = await Products.findOneAndUpdate({ sku: req.body.sku }, { $set: newProduct }, { new: true })
        res.json({ product });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error Occured");
    }

})


router.post('/uploadimages', upload.array("product_images", 12), async (req, res, next) => {
    console.log("FILE UPLOADED");
    
})

router.delete('/deleteproduct/:id', async (req, res) => {
        try {
            let product = await Products.findById(req.params.id);
            if (!product) { return res.status(404).send("Not Found") }

            console.log(product);
         
            product = await Products.findByIdAndDelete(req.params.id)
            res.json({ "Success": "Product has been deleted", product: product });
        }
        catch (error) {
            console.log(req.params.id)
            console.error(error.message);
            res.status(500).send("Some error Occured");
        }



    })


module.exports = router