import React from 'react'
import Form from '../ui/Form'
import { deletetodo } from '@/app/actions/todoActions'
import Input from '../ui/Input'
import Button from '../ui/Button'
import {BsFillTrashFill} from "react-icons/bs"
import { todoType } from '@/types/todoType'
const DeletedTodo = ({ x }: {x:todoType}) => {
  return (
    <Form action={deletetodo}>
        <Input type='hidden' name='inputId' value={x.id}/>
        <Button actionButton text={<BsFillTrashFill/>}/>
    </Form>
  )
}

export default DeletedTodo
