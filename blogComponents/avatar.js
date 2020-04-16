export default function Avatar({ name, picture }) {
  return (
    <div className="avatar">
      <img src={picture} className="avatarImg" alt={name} />
      <div className="avatarName">{name}</div>
      <style jsx>
        {`
          .avatar {

          }
          .avatarImg {

          }
          .avatarName {

          }
        `}
      </style>
    </div>
  )
}
