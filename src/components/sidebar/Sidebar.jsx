import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT THE ANALYST</span>
        <img
          src="https://images.pexels.com/photos/4515858/pexels-photo-4515858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p className="desc">
          Get the latest ag updates on crops, pricing and local issues that area
          growers and producers are talking about
        </p>
        <p>
          Dual Board-certified in internal medicine and lifestyle medicine, Ron
          Weiss, MD is a primary care  physician in New Jersey and New York, who
          serves as Executive Director of Ethos Primary Care and as Assistant
          Professor of Clinical Medicine at Rutgers New Jersey Medical School.
          Dr. Weiss is not only a physician but also a botanist and farmer, and
          he offers an evidence-based,  food-as-medicine  approach to healing
          from chronic illness and optimizing wellness. He has been featured in
          top media, including The New York Times, The New York Post, The Today
          Show, New Jersey Monthly, and the feature-length documentary, "Eating
          You Alive."{" "}
        </p>
        <img
          className="doctor"
          src="https://images.squarespace-cdn.com/content/v1/5e4708107afd5675c0e2a2fb/1581834199925-JF9N0CJ4OI0YCYM3QHKQ/1.png?format=1500w"
          alt=""
        />
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">FIBER</li>
          <li className="sidebarListItem">FIBER</li>
          <li className="sidebarListItem">ORNAMENTAL</li>
          <li className="sidebarListItem">INDUSTRIAL</li>
          <li className="sidebarListItem">HARVESTING</li>
          <li className="sidebarListItem">SEED BANKS</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">GET MORE INFORMATION</span>
        <button className="bg-red-700">Chat with experts'</button>
        <span className="sidebarTitle">FOLLOW FOR MORE</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
