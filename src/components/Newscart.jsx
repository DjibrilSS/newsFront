import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { newsThunk } from "../feauters/newsSlice";
import { commentThunk } from "../feauters/newsSlice";
import { useState } from "react";

const Newscart = () => {
  const [open, setOped] = useState(false);
  const news = useSelector((state) => state.news.news);
  const comments = useSelector((state) => state.news.comment);
  const id = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newsThunk());
  }, []);
  const handleClick = () => {
    dispatch(commentThunk());
    setOped(!open);
  };

  return (
    <div>
      {news.map((item) => {
        if (item._id === id.id) {
          return (
            <>
              <h1>{item.title}</h1>
              <img
                className="newsImage1"
                src={`http://localhost:4000/image/${item.img}`}
                alt="asdsa"
              />
              <p>{item.text}</p>
              <button onClick={() => handleClick()}>comments</button>
              {open ? (
                <div>
                  {comments.map((element) => {
                    if (element.news === item._id) {
                      return (
                        <div>
                          {element.text}
                          <p>{element.user.login}</p>
                        </div>
                      );
                    }
                  })}
                </div>
              ) : null}
            </>
          );
        }
      })}
    </div>
  );
};

export default Newscart;
