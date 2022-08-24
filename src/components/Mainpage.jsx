import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { newsThunk } from "../feauters/newsSlice";

const Mainpage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newsThunk());
  }, []);

  const news = useSelector((state) => state.news.news);
  return <div>{news.map((item)=>{
    return <div>{item.text}</div>
  })}</div>;
};

export default Mainpage;
