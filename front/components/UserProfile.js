import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <Card
      // 리액트에서 배열 쓸때 키 넣어줘야함
      actions={[
        <div key="twit">
          짹짹
          <br />
        </div>,
        <div key="followings">
          팔로잉
          <br />
        </div>,
        <div key="followers">
          팔로워
          <br />
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>Amy</Avatar>} title="HyemiGwak" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
