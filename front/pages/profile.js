import React from "react";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import Head from "next/head";

const Profile = () => {
  const follwerList = [{ nickname: "혜미" }, { nickname: "뚱이" }, { nickname: "햄똘" }];
  const followingList = [{ nickname: "혜미" }, { nickname: "뚱이" }, { nickname: "햄똘" }];
  return (
    <>
      <Head>
        <title>내 프로필 | My profile</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={follwerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
