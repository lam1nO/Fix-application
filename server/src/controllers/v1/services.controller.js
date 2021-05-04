import Category from '@models/Category'
import helpers from '@/helpers'
import Service from '@models/Service'
import BaseService from '@models/BaseService'
import mongoose from 'mongoose'

const baseCreate = (req, res) => {}


// Services 

// getServices with params 
// @limit - 20 (f.e.)
// @popularity - filter
// @category

const fetchServices = async (req, res) => {
    const options = {limit: parseInt(req.query.limit) || false}
    const filter = { popular: req.query.pop || false}
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

// const createService = async (req, res) => {
//     const Service = 
// } 

// getService

// 
// BaseServices
// 

// POST BaseService
const createBaseService = async (req, res) => {
    const baseService = new BaseService({
        title: req.body.title,
        description: req.body.description,
        popular: req.body.popular,
        category: req.body.category
    })
    await baseService.save((err, data) => {
        if (err) {
            console.log(err)
            res.send({
                success: false,
                error: err
            })
        } else {
            res.send({
                success: true,
                data
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
    console.log(filter)
    await BaseService.find(filter, (err, data) => {
        if (err) {
            res.send({
                success: false,
                err
            })
        } {
            res.send({
                success: true,
                base_services: data
            })
        }
    }).populate('category')
}

// PUT BaseService


// Cats

// post
const createCategory = async (req, res) => {
    let slug = helpers.createSlug(req.body.name)
    const category = new Category({
        name: req.body.name,
        slug
    })
    await category.save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send({
                success: true,
                category: data.name
            })
        }
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

// getCategory
// editCategory

export default {
    createCategory,
    getCategories,
    fetchServices,
    createBaseService,
    getBaseService,
    fetchBaseService
}