import { useState } from "react";
import Item from "../Item/Item";
import TaskButton from "../TaskButton/TaskButton";
import { v4 as uuidv4 } from 'uuid';

type Props = {};

type ItemData = {
  id: string;
  isFinished?: boolean;
  content?: string;
};

const TodoList: React.FC<Props> = (props: Props) => {
  const initialValue: ItemData[] = [];
  const [ItemDataList, setItemDataList] = useState(initialValue);

  const handleAddNewItem = () => {
    let newItem : ItemData = {id: uuidv4()}
    let newItemListData = [...ItemDataList];
    newItemListData.push(newItem);
    setItemDataList(newItemListData);
  };

  const handleSaveNewItem = (id:string,content:string) =>{
    //We can use hashMap to increase speed to find element
    console.log(id,content);
    let newItemListData = [...ItemDataList];
    let updatedItemIndex = newItemListData.findIndex(item => item.id === id);
    newItemListData[updatedItemIndex].content = content;
    newItemListData[updatedItemIndex].isFinished = false;
    setItemDataList(newItemListData);
  }


  const handleDeleteItem = (id:string) =>{
    let newItemListData = [...ItemDataList];
    newItemListData.splice(newItemListData.findIndex(item => item.id === id), 1);
    setItemDataList(newItemListData)
  }

  const handleFinishItem = (id:string) =>{
    let newItemListData = [...ItemDataList];
    let updatedItemIndex = newItemListData.findIndex(item => item.id === id);
    newItemListData[updatedItemIndex].isFinished = true;
    setItemDataList(newItemListData);
 
  }

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
                  onClickFinshItem = {handleFinishItem}
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
