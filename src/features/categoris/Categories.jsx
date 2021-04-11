import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategories,
  loadCategories,
  isLoadding,
  hasError,
} from "./categoriesSlice";
import { selectSearchTerm, setSearchTerm } from "../searchTerm/searchTermSlice";
import Loadding from "../../components/loadding/Loadding";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import "./categories.css";

export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const searchTerm = useSelector(selectSearchTerm);
  const loadding = useSelector(isLoadding);
  const error = useSelector(hasError);

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  if (error) return <Loadding className="error" />;

  if (loadding) return <Loadding className="loadding" />;

  return (
    <Card className={"category-card"}>
      <h2>Subreddits</h2>
      <ul className="categorys-list">
        {categories &&
          categories.map((category) => (
            <li
              key={category.id}
              className={`${
                searchTerm === category.url && `selected-category`
              }`}
            >
              <Button
                onClick={() => dispatch(setSearchTerm(category.url))}
                ariaLabel="category icon"
              >
                <img
                  src={
                    category.icon_img ||
                    `https://api.adorable.io/avatars/25/${category.display_name}`
                  }
                  alt={`${category.display_name}`}
                  className="category-icon"
                  style={{ border: `3px solid ${category.primary_color}` }}
                  loading="lazy"
                />
                {category.display_name}
              </Button>
            </li>
          ))}
      </ul>
    </Card>
  );
}
