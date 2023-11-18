"use client";
import { todoType } from "@/types/todoType";
import React, { useState } from "react";
import Button from "../ui/Button";
import { BiEdit } from "react-icons/bi";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { edit } from "@/app/actions/todoActions";
const EditTodo = ({ x }: {x:todoType}) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    if(x.isCompleted === true){
        return;
    }
    setEditTodo(!editTodo);
  };
  const handleSubmit = () => {
    setEditTodo(false);
  };
  return (
    <div className="flex gap-4 items-center">
      <Button onClick={handleEdit} text={<BiEdit />} actionButton />
      {editTodo ? (
        <Form action={edit} onSubmit={handleSubmit}>
          <Input name="inputId" value={x.id} type="hidden" />
          <div className="flex justify-center">
            <Input type="text" name="newTitle" placeholder="Edit Todo..." />
          <Button type="submit" text="Save"/>

          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
