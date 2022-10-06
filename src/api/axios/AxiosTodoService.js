import axios from "axios";

const todoAxios = axios.create({
  baseURL: "http://localhost:8000",
});

// 타입스크립트
export class AxiosTodoService implements TodoService {
  async changeTodoItem(item) {
    const response = await todoAxios.put(`/dailyplan/${item.id}`);
  }
  async getTodoItems() {
    const response = await todoAxios.get("/dailyplan");
    return response.data;
  }
}
