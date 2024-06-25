import { FC } from "react";
import PostList from "../../components/PostList/PostList";
import style from "./Dashboard.module.scss";

const Dashboard: FC = () => {
  return (
    <div className={style["dashboard"]}>
      <PostList />
    </div>
  );
};

export default Dashboard;
