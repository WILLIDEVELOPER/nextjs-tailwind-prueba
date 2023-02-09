import List from "@/components/list";
import Card from "@/components/card";
import { useEffect, useState } from "react";

const todoList = [
  {
    text: "Tarea 1 Implementar inicio de sesion",
    id:"task-1",
  },
  {
    text: "Tarea 2 Implementar inicio de sesion",
    id:"task-2",
  },
];
const inProgressList = [
  {
    text: "in progress Implementar inicio de sesion",
    id:"task-1",
  },
];
const doneList = [
  {
    text: "done Implementar inicio de sesion",
    id:"task-1",
  },
];

export default function Board() {
    const [listOfLists, setListOfLists] = useState({
        todoList,
        inProgressList,
        doneList,
    })
    useEffect(()=>{
        setTimeout(() => {
            const listOfListsClone = structuredClone(listOfLists)
            listOfListsClone.inProgressList.push({
                text: "ola k hace",
                id: crypto.randomUUID() 
            })
            setListOfLists(listOfListsClone)
        }, 5000);
    }, [])
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Development</h1>
      <main className="flex gap-4 justify-between">
        <List name="TODO">
          {listOfLists.todoList.map((item) => (
            <Card {...item} key={item.id} />
          ))}
        </List>
        <List name="TODO">
          {listOfLists.inProgressList.map((item) => (
            <Card {...item} key={item.id} />
          ))}
        </List>
        <List name="TODO">
          {listOfLists.doneList.map((item) => (
            <Card {...item} key={item.id} />
          ))}
        </List>
      </main>
    </div>
  );
}
