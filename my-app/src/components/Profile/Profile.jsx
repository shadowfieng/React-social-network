import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo imageUrl='https://assets.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg' description='description' />
      <MyPosts posts={props.posts} addPost={props.addPost} onChangePostMessage={props.onChangePostMessage} />
    </div>
  );
}

export default Profile;