function Card() {
  return (
    <div className="card">
      <div className="profile">
        <img src="https://picsum.photos/200/300?random=1" alt="" />
        <div className="name">
          <h4>Dipin Bhattarai</h4>
          <p>Created at </p>
        </div>
      </div>
      <div className="description">Description</div>
      <img src="https://picsum.photos/200/300?random=1" className="image" alt="" />
    </div>
  );
}

export default Card;
