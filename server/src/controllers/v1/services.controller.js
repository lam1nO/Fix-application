import Category from '@models/Category'
import helpers from '@/helpers'
// BaseServices

const baseCreate = (req, res) => {}


// Services 

// getServices with params 
// @limit - 20 (f.e.)
// @popularity - filter
// @category

const fetch = async (req, res) => {
    Service.find({}, (err, services) => {
        if (err) { 
            res.sendStatus(500)
        }
        else {
            res.send({services: services})
        } 
    })
}  

// createService
// getService

// BaseServices
// creaate type of service
// get BaseService
// edit type of service


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
    fetch
}