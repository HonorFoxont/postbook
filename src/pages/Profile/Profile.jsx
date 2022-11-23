import './profile.scss';

// eslint-disable-next-line import/no-unresolved
import Card from '../Home/components/Card';

function Profile() {
  return (
    <div className="profile">
      <div className="wrapper">
        <img src="https://picsum.photos/200/300?random=1" alt="" />
        <div className="info">
          <div className="name">User Name</div>
          <div className="email">email@example.com</div>
          <a href="/profile">see more</a>
        </div>
      </div>
      <div className="posts">
        <Card />
      </div>
    </div>
  );
}

export default Profile;
