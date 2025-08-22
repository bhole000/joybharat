import React, { Fragment, Component, useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VideoThumbnail from 'react-video-thumbnail'; // use npm published version
import WOW from "wowjs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import Header from "./../../Layout/Header";
import Footer2 from "./../../Layout/Footer2";
import PageTitle from "./../../Layout/PageTitle";
//images
import bgimg from "./../../../images/bg-view.png";
import BlogSkeleton from "../Blog/BlogSkeleton";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

//Light Gallery on icon click
/* const Iconimage = props => {
  const { openLightbox } = useLightbox()
	
  return (
    
  )
} */

const GalleryBox = ({ imageBlog }, props) => {
  const { openLightbox } = useLightbox();
  return (
    <div className="dlab-media dlab-img-overlay1 overlay-primary">
      <VideoThumbnail
        videoUrl={imageBlog}
        width={100}
        height={100}
        thumbnailHandler={(thumbnail) => console.log(thumbnail)}
      />
      <div className="overlay-bx">
        <div className="overlay-icon">
          <a onClick={() => { }} className="popup-youtube">
            <i className="fa fa-play icon-bx-xs"></i>
          </a>
          {/* <a onClick={() => openLightbox(props.imageToOpen)} className=" ">
            <i className="fa fa-search icon-bx-xs"></i>
          </a> */}
        </div>
      </div>
    </div>
  );
};

const Portfolio1 = () => {
  const [videoList, setVideoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [firstRendered, setFirstRendered] = useState(false);


  useEffect(() => {
    if(!firstRendered){
      getVideoList();
    }
  });

  const getVideoList = async () => {
    const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems"
    const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLpqTt_XoGVEYEBF5ePjr9Q6ypOzbXSI_J&maxResults=99&key=AIzaSyCmf5MVJACc8H2-a2jEO5W40LTyEIQ7XuY`);
    const data = await res.json();
    console.log(data);
    if (data['items'].length > 0) {
      setVideoList(data['items']);
    }
    setFirstRendered(true);
  }

  return (
    <Fragment>
      <Header />
      <div className="page-content bg-white">
        {/*  banner  */}
        <PageTitle motherMenu="Portfolio 1" activeMenu="Portfolio 1" />
        {/*  Section-1 Start  */}
        <section className="content-inner" data-content="PORTFOLIO">
          <div className="container">
            <div className="section-head text-center">
              <p>VIEW PORTFOLLO</p>
              <h2 className="title">
                Don’t miss your chance to discover the most fascinating{" "}
              </h2>
              <p></p>
            </div>
            <SimpleReactLightbox>
              <SRLWrapper>
                <div className="row" id="lightgallery">{
                  isLoading
                    ? [1, 2, 3].map((i) => {
                      return <div className="item p-3" key={i}>
                        <BlogSkeleton key={i} />
                      </div>;
                    }) :
                    <ul className="youtubeVideoList">
                       {
                        videoList.map((items) => {
                          const { id, snippet = {} } = items;
                          const { thumbnails = {}, resourceId } = snippet
                          const { medium = {} } = thumbnails;
                          return (<li key={id}>
                            <iframe
                              title={id}
                              width={medium.width} 
                              height={medium.height}
                              src={`https://www.youtube.com/embed/${resourceId.videoId}`}
                            ></iframe>
                          </li>)
                        })
                      }
                    </ul>
                }
                </div>
              </SRLWrapper>
            </SimpleReactLightbox>
          </div>
        </section>
        {/*  Section-1 End  */}
        <div>
          <img src={bgimg} className="bg-view" alt="" />
        </div>
      </div>
      <Footer2 />
    </Fragment>
  );
};

export { GalleryBox };
export default Portfolio1;
