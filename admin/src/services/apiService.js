import api from "@/services/api";

export default {
  fetchPosts() {
    return api().get("posts");
  },
  fetchCategories() {
    return api().get("categories");
  },
  postCat(req) {
    api().post('category', req)
  },
  removeCat(cat_id) {
    console.log(cat_id);
    return api().delete('categories', { data: {id: cat_id}})
  }
};
