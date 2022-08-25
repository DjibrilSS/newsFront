import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { newsThunk } from "../feauters/newsSlice";
import { commentThunk } from "../feauters/newsSlice";

const Newscart = () => {
  const news = useSelector((state) => state.news.news);
  const comments = useSelector((state) => state.news.comment);
  const id = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newsThunk());
  }, []);
  const handleClick = () => {
    dispatch(commentThunk());
    console.log(comments);
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
              <div>
                {comments.map((element) => {
                  if (true) {
                    return (<div>{element.text}<p>{element.user.login}</p></div>)
                  }
                })}
              </div>
            </>
          );
        }
      })}
    </div>
  );
};

export default Newscart;
