import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { newsThunk } from "../feauters/newsSlice";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Mainpage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newsThunk());
  }, []);

  const params = useParams();
  let news = useSelector((state) => state.news.news);
  if (params.id) {
    news = news.filter((item) => params.id === item.category);
    if (!news.find((item) => true)) {
      return <div>empty</div>;
    }
  }
  return (
    <div className="divnews">
      {news.map((item) => {
        return (
          <div className="news">
            <img
              className="newsImage"
              src={`http://localhost:4000/image/${item.img}`}
              alt="newsImage"
            />
            <h4>{item.title}</h4>
            <Link to={`/news/${item._id}`}>подробнее</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Mainpage;
