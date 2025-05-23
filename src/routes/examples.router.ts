import express,{ Router, Request, Response, NextFunction } from 'express'

const router = Router()

router.get("/api", (req,res) => {
    res.json({message: "Hello from API!!"})
})

router.get("/", (req,res)=> {
    res.send("Hello world!!")
})

export default router