import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/11052487/pexels-photo-11052487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ea magni
        impedit recusandae asperiores. Dolor neque totam quisquam? Doloremque
        veniam distinctio voluptatum vitae nemo sunt atque ut, tenetur quia,
        beatae dolorum amet quos similique quibusdam asperiores repellat impedit
        quis explicabo! Mollitia corporis sed necessitatibus ducimus quisquam.
        Temporibus nostrum aperiam eveniet commodi deleniti quam nulla sint
        dolor?
      </p>
    </div>
  );
}
