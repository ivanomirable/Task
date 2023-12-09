'use client'
import { IOperator } from "@/models"
import { Dispatch, SetStateAction, useContext,createContext, } from "react"


interface IActive{
    isActive:boolean
    setIsActive:Dispatch<SetStateAction<boolean>>
    operatore:IOperator
    setOperator:Dispatch<SetStateAction<IOperator>>
}

const initialValues: IActive ={
    isActive: false,
    setIsActive: ()=> undefined,
    operatore: {id:0,title:'',image:''},
    setOperator:()=>undefined
}
export const ActiveContext = createContext(initialValues)

export const useActiveContext = ()=> useContext(ActiveContext)