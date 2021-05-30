import api from "@/services/api";

export default {
  fetchPosts() {
    return api().get("posts");
  },
  fetchCategories() {
    return api().get("categories");
  },
  fetchBaseServices() {
    return api().get("base_service");
  },
  postCat(req) {
    return api().post('category', req)
  },
  postBaseService(req) {
    return api().post('base_service', req)
  },
  removeCat(cat_id) {
    console.log(cat_id);
    return api().delete('categories', { data: {id: cat_id}})
  },
  getCategory(cat_id) {
    return api().get('category/' + cat_id)
  },
  updateCategory(document) {
    return api().put('category', document)
  }
};
