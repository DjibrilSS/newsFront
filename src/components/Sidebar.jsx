import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { categoryThunk } from "../feauters/newsSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryThunk());
  }, []);

  const category = useSelector((state) => state.news.category);
  return (
    <div>
      {category.map((item) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
};

export default Sidebar;
