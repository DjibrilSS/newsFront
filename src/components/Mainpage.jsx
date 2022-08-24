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
  return (
    <div className="divnews">
      {news.map((item) => {
        return (
          <div className="news">
            <img className="newsImage" src={`http://localhost:4000/image/${item.img}`} alt="newsImage" />
            <h4>{item.title}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Mainpage;
