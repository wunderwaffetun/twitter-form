import React, { useContext } from "react";
import "./index.css";
import { twContext } from "../../helpers/Context";

export function PostListItem({post}) {
  const {deletePost, addFavourits, likePost} = useContext(twContext)
  const {like, important, text, id} = post

  let wrapperClass = 'app-list-item  d-flex bg-light p-3 border rounded mb-2 justify-content-between'

  if(important) wrapperClass += ' important'
  if(like) wrapperClass += ' like'

  return (
    <div className={wrapperClass}>
      <span className="app-list-item-label"
        onClick={()=>{likePost(id)}}
        >{text}</span>
      <div className="item-icons float-end d-flex">
        <button 
          className="btn-star" 
          onClick={()=>{addFavourits(id)}}
          ><i className="fa fa-star"></i>
        </button>
        <button className="btn-trash"
          onClick={()=>{deletePost(id)}}
          ><i className="fa fa-trash-o"></i>
        </button>
        <i className="fa-solid fa-heart"></i>
      </div>
    </div>
  );
}
