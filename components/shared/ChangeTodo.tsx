import React from "react";
import Form from "../ui/Form";
import Button from "../ui/Button";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Input from "../ui/Input";
import { changeStatus } from "@/app/actions/todoActions";
import { todoType } from "@/types/todoType";
const ChangeTodo = ({ x }: {x:todoType}) => {
  return (
    <Form action={changeStatus}>
      <Input type="hidden" name="inputId" value={x.id} />
      <Button
        actionButton
        type="submit"
        text={<AiOutlineCheckCircle />}
      ></Button>
    </Form>
  );
};

export default ChangeTodo;
