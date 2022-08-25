import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { categoryThunk } from "../feauters/newsSlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryThunk());
  }, []);

  const category = useSelector((state) => state.news.category);
  return (
    <div>
      {category.map((item) => {
        return (
          <Link className="link" to={`/category/${item._id}`}>
            <div>{item.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
