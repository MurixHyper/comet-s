import React from 'react';
import logo from '../../images/comets.png';
import './Blog.css';
const Blog = () => {
  return (
    <div className="blog">
      <div className="header-blog">
        <img src={logo} alt="" />
        <h1>Our Philosophy</h1>
      </div>
      <div className="content-blog">
        <h2 className="blog-header-left">Why we?</h2>
        <div className="blog-text blog-left">
          <p>We try to give people happiness. It manifests itself in different ways: in the warm attitude of the team, in the aesthetic pleasure of the author's interiors, in the menu filled with taste and emotions. We see this as our true mission. Allow yourself to forget about the problems and enjoy the time spent with us in the institution.</p>
        </div>
      </div>
      <div className="content-blog">
        <h2 className="blog-header-right">Updates and news</h2>
        <div className="blog-text blog-right">
          <p>Soon, hookahs with various types of tobacco will appear on our menu, ranging from light to heavy.</p>
          <p>At the beginning of school time, discount cards will be valid on weekends for high school students and university and college students.</p>
        </div>
      </div>
      <div className="content-blog">
        <h2 className="blog-header-center">Policy and rules of our institution</h2>
        <div className="blog-text blog-center">
          <p>In our institution, when opening, strict rules appeared that we must comply with: <br/>1) Use only those goods and packages that are environmentally neutral and recyclable.<br/>2)Environmentally friendly workplace, regular cleaning throughout the working day<br/>3) When hiring a mandatory safety course.<br/>4) Openness of the working staff not only for praise but also for criticism.<br/>5) The overall goal is to make your evening unforgettable!</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
