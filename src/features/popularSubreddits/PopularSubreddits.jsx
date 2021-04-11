import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import Loadding from "../../components/loadding/Loadding";
import Error from "../../components/error/Error";
import {
  getPopularSubreddits,
  selectPopularSubreddits,
  error,
  loadding,
} from "./popularSubredditsSlice";
import { selectSearchTerm, setSearchTerm } from "../searchTerm/searchTermSlice";
import "./index.css";

export default function PopularSubreddits() {
  const dispatch = useDispatch();
  const popularSubreddits = useSelector(selectPopularSubreddits);
  const isLoadding = useSelector(loadding);
  const hasError = useSelector(error);
  const searchTerm = useSelector(selectSearchTerm);

  useEffect(() => {
    dispatch(getPopularSubreddits());
  }, [dispatch]);

  if (hasError) return <Error className="error" />;
  if (isLoadding) return <Loadding className="loadding" />;

  return (
    <Card className="popular-card">
      <h2>Popular Subreddits</h2>
      <ul className="popular-list">
        {popularSubreddits &&
          popularSubreddits.map((popular) => (
            <li
              key={popular.id}
              className={`${
                searchTerm === popular.subreddit_name_prefixed &&
                "selected-category"
              }`}
            >
              <Button
                onClick={() =>
                  dispatch(setSearchTerm(popular.subreddit_name_prefixed))
                }
                ariaLabel="Popular subreddits"
              >
                <img
                  src={
                    popular.thumbnail ||
                    `https://api.adorable.io/avatars/25/${popular.url}`
                  }
                  alt="popular subreddits"
                  className="category-icon"
                  style={{ border: `3px solid ${popular.primary_color}` }}
                  loading="lazy"
                />
                {popular.subreddit}
              </Button>
            </li>
          ))}
      </ul>
    </Card>
  );
}
