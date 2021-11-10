import http from "@/http-common";

class TutorialDataService {
  getAll() {
    return http.get("/product");
  }

  get(id: string) {
    return http.get(`/product/${id}`);
  }

  create(data: any) {
    return http.post("/product", data);
  }

  update(id: any, data: any) {
    return http.put(`/product/${id}`, data);
  }

  delete(id: any) {
    return http.delete(`/product/${id}`);
  }

  deleteAll() {
    return http.delete(`/product`);
  }

  findByTitle(title: string) {
    return http.get(`/product?search=${title}`);
  }
}

export default new TutorialDataService();