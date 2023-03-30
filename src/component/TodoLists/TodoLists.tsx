import { useEffect, useState } from "react";
import Item from "../Item/Item";
import TaskButton from "../TaskButton/TaskButton";
import { ItemData } from "../types/ItemData";
import ToDoService from "../../services/ToDoService";

type Props = {};

const TodoList: React.FC<Props> = (props: Props) => {
  const initialValue: ItemData[] = [];
  const [ItemDataList, setItemDataList] = useState(initialValue);
  const _toDoService = ToDoService.instance;

  const handleAddNewItem = async () => {
    let result = await _toDoService.CreateNewToDoItems(ItemDataList);

    setItemDataList(result);
  };

  const handleSaveNewItem = async (id: string, content: string) => {
    //We can use hashMap to increase speed to find element
    let result = await _toDoService.SaveToDoItem(id, content, ItemDataList);

    setItemDataList(result);
  };

  const handleDeleteItem = async (id: string) => {
    let newItemDataList = await _toDoService.DeleteToDoItem(id, ItemDataList);
    setItemDataList(newItemDataList as ItemData[]);
  };

  const handleFinishItem = async (id: string) => {
    let result = await _toDoService.FinishToDoItem(id, ItemDataList);
    setItemDataList(result);
  };
  useEffect(() => {
    getTodoList();
  }, []);

  const getTodoList = async () => {
    let itemData = await _toDoService.GetToDoItems();
    setItemDataList(itemData as ItemData[]);
  };

  return (
    <>
      <div className="py-2 mx-80 mt-5">
        <div className="bg-white shadow-md min-h-[10rem]">
          <div className="p-6">
            {ItemDataList.map((item) => {
              return (
                <Item
                  id={item.id}
                  isFinished={item.isFinished || false}
                  content={item.content || ""}
                  key={item.id}
                  onClickDeleteItem={handleDeleteItem}
                  onClickSaveItem={handleSaveNewItem}
                  onClickFinshItem={handleFinishItem}
                />
              );
            })}
          </div>
        </div>
        <div>
          <TaskButton onClick={handleAddNewItem} />
        </div>
      </div>
    </>
  );
};

export default TodoList;
