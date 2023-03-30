import { generatePath } from "react-router-dom";
import { ItemData } from "../component/types/ItemData";
import { ApiRoute } from "../shared/ApiRoute";
import { Contants } from "../shared/Contants";
import { HttpClient } from "./HttpClient";

export default class ToDoService  {
  private static _instance = new ToDoService();
    private constructor() {

    }

    static get instance() {
      return this._instance;
    }

 public GetToDoItems = async () => {
    let response = await HttpClient.get<ItemData[]>(ApiRoute.Todo);
    if (response.status === Contants.HTTP_STATUS.Success) {
      return response.data;
    }
  };

  public CreateNewToDoItems = async (itemDatas:ItemData[]) =>{
    let response = await HttpClient.post<ItemData>(ApiRoute.Todo,{content:"",isFinished:false});
    let newItemListData = [...itemDatas];
    if (response.status === Contants.HTTP_STATUS.Created){
        newItemListData.push(response.data);
    }
    
    return newItemListData;
  }


  public SaveToDoItem = async (id:string,content:string, itemDatas:ItemData[])=>{

    let response = await HttpClient.put<ItemData>(generatePath(ApiRoute.TodoWithId,{id}),{content:content,isFinished:false})

    let newItemListData = [...itemDatas];
    if (response.status === Contants.HTTP_STATUS.Success){

      let selectedItemIndex = newItemListData.findIndex(item => item.id === id);
      newItemListData[selectedItemIndex] = response.data as ItemData;
  }
    
    return newItemListData;

  }

  public FinishToDoItem = async (id:string, itemDatas:ItemData[]) =>{
    let response = await HttpClient.put<ItemData>(generatePath(ApiRoute.TodoWithId,{id}),{isFinished:true})
   let newItemListData = [...itemDatas];
    if (response.status === Contants.HTTP_STATUS.Success){

        let selectedItemIndex = newItemListData.findIndex(item => item.id === id);
        newItemListData[selectedItemIndex] = response.data as ItemData;
    }
    
    return newItemListData;
  }

  public DeleteToDoItem = async (id:string, itemDatas:ItemData[]) =>{
    let newItemListData = [...itemDatas]
    let response = await HttpClient.delete<ItemData>(generatePath(ApiRoute.TodoWithId,{id}))
    if (response.status === Contants.HTTP_STATUS.Success){
      newItemListData.splice(newItemListData.findIndex(item => item.id === id), 1);
      return  newItemListData
    }
  }
}
