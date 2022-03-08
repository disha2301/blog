import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Drizzel</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          tempore cumque corrupti, quidem reiciendis id quos odio dolor nisi,
          amet nesciunt tenetur mollitia aspernatur delectus, hic odit itaque?
          Magni, consequatur. Fugit, nobis doloribus autem non possimus
          molestias minima corporis adipisci debitis dicta, consequuntur odit!
          Sequi id suscipit ipsa repudiandae sint. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Adipisci tempore cumque corrupti, quidem
          reiciendis id quos odio dolor nisi, amet nesciunt tenetur mollitia
          aspernatur delectus, hic odit itaque? Magni, consequatur. Fugit, nobis
          doloribus autem non possimus molestias minima corporis adipisci
          debitis dicta, consequuntur odit! Sequi id suscipit ipsa repudiandae
          sint.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Adipisci tempore cumque corrupti, quidem reiciendis id quos odio dolor
          nisi, amet nesciunt tenetur mollitia aspernatur delectus, hic odit
          itaque? Magni, consequatur. Fugit, nobis doloribus autem non possimus
          molestias minima corporis adipisci debitis dicta, consequuntur odit!
          Sequi id suscipit ipsa repudiandae sint.
        </p>
      </div>
    </div>
  );
}
