import Category from '@models/Category'
import helpers from '@/helpers'
import Service from '@models/Service'
import BaseService from '@models/BaseService'
import mongoose from 'mongoose'

// Services 

// getServices with params  @limit - 20 (f.e.) @popular - filter @category

const fetchServices = async (req, res) => {
    const options = {limit: parseInt(req.query.limit) || false}
    const filter = { popular: req.query.pop || false }
    await Service.find(filter, null, options, (err, services) => {
        if (err) { 
            res.send({success: false, error: err})
        }
        else {
            res.send({
                success: true,
                services: services
            })
        } 
    })
}  

// createService - post

const createService = async (req, res) => {
    const service = new Service({
        service: req.body.id,
        price: req.body.price,
        status: req.body.status,
        date: req.body.time
    })
} 

// getService

// 
// BaseServices
// 

// POST BaseService
const createBaseService = async (req, res) => {
    // console.log(req.body)
    let cat_name = req.body.category_name
    let cat = await Category.find({name: cat_name})
    cat = cat[0]
    const baseService = new BaseService({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: cat,
        link: req.body.link
    })
    await baseService.save((err, data) => {
        if (err) {
            res.send({
                success: false,
                error: err
            })
        } else {
            res.send({
                success: true,
                base_service: data
            })
        }
    })
}


// GET BaseService : id
const getBaseService = async (req, res) => {
    await BaseService.findById(req.params.id, (err, base_service) => {
        if (err) {
            res.send({
                success: false,
                err
            })
        } else {
            res.send({
                success: true,
                base_service
            })
        }
    }).populate('category')

}



// GET fetch BaseService
const fetchBaseService = async (req, res) => {
    const filter = {category : req.query.category || 0}
    if (filter.category != 0){
        await BaseService.find(filter, (err, data) => {
            if (err) {
                res.send({
                    success: false,
                    err
                })
            } 
            else {
                res.send({
                    success: true,
                    services: data
                })
            }
        }).populate('category')
    }
    else {
        await BaseService.find({}, (err, data) => {
            if (err) {
                res.send({
                    success: false
                })
            } else {
                res.send({
                    success: true,
                    services: data
                })
            }
        }).populate('category')
    }
}

// PUT BaseService

// 
// Categories
// 

// post
const createCategory = async (req, res) => {
    let slug = helpers.createSlug(req.body.name)
    const category = new Category({
        name: req.body.name, slug, description: req.body.description
    })
    await category.save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send({
                success: true,
                category: data
            })
        }
    })
}

// delete
const deleteCategory = async (req, res) => {
    let cat = await Category.find({_id: req.body.id})
    await Category.deleteOne({_id: req.body.id})
    res.send({
        success: true,
        cat: cat
    })
}

// get
const getCategories = async (req, res) => {
    await Category.find({}, (err, cats) => {
        if (err) {
            res.send({
                success: false
            })
        } else {
            res.send({categories: cats})
        }
    })
}

const updateCategory = async (req, res) => {
    console.log(req.body);
    req.body.slug = helpers.createSlug(req.body.name)
    await Category.findOneAndUpdate({ _id: req.body._id }, req.body, (err, doc) => {
        if (err) {
            res.send({
                success: false
            })
        } else {
            res.send({
                category: doc
            })
        }
    });
}

// GET category

const getCategory = async (req, res) => {
    let category = await Category.findById(req.params.id, (err, category) => {
        if (err) {
            res.send({
                success: false
            })
        } else res.send({category: category, success: true})
    });
}




// getCategory
// editCategory

export default {
    createCategory,
    getCategories,
    fetchServices,
    createService,
    createBaseService,
    getBaseService,
    fetchBaseService,
    deleteCategory,
    getCategory,
    updateCategory
}