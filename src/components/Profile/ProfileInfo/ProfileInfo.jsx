import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div>
      <img className={s.profileImage} src={props.imageUrl} />
      <div className={s.descriptionBlock}>{props.description}</div>
    </div>
  );
}

export default ProfileInfo;