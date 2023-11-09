import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";
import { Link } from "react-router-dom";
import { Modal } from "@material-ui/core";

export default function Featured({ type, setGenre }) {
  // const [content, setContent] = useState({});
  const [bodycontent, setBodyContent] = useState({});
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const getRandomContent = async () => {
  //     try {
  //       const res = await axios.get(`/movies/random?type=${type}`, {
  //         headers: {
  //           token:
  //             "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
  //         },
  //       });
  //       setContent(res.data[0]);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getRandomContent();
  // }, [type]);

  useEffect(() => {
  const getSpideyContent = async () => {
    try {
      const res = await axios.get("/movies/find/64e43ffba4dcec934420c857", {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      setBodyContent(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  getSpideyContent();
  }, [type]);

  // console.log(bodycontent);
  // console.log(content);

  function DisplayInfo(){
    setOpen(prevValue=>{
      return !prevValue;
    });
  }

  return (
    <div className="featured">
      {type && (
        type!=="new_and_popular" && (
          type!=="my_list" && (
          <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select
              name="genre"
              id="genre"
              onChange={(e) => setGenre(e.target.value)}
            >
              <option value="">Genre</option>
              <option value="Adventure">Adventure</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Historical">Historical</option>
              <option value="Romance">Romance</option>
              <option value="Sci-fi">Sci-fi</option>
              <option value="Thriller">Thriller</option>
              <option value="Western">Western</option>
              <option value="Animation">Animation</option>
              <option value="Drama">Drama</option>
              <option value="Documentary">Documentary</option>
            </select>
          </div>
        ))
      )}
      <img src={bodycontent?.img} alt="Profilepic" />

      <div className="info">
        <img src={bodycontent?.imgTitle} alt="logo" />
        <span className="desc">{bodycontent?.desc}</span>
        <div className="buttons">
          <Link underline="none" to={{ pathname: "/watch", movie: bodycontent }} className="no-text-decoration">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
          <button className="more" onClick={DisplayInfo}>
            <InfoOutlined />
            <span>Info</span>
            {open && (
              <Modal open={open}>
                <div className="itemInfo itemModal">
                  <div className="itemInfoTop">
                    <span>{bodycontent?.duration}</span>
                    <span className="limit">+{bodycontent?.limit}</span>
                    <span>{bodycontent?.year}</span>
                  </div>
                  <div className="desc">{bodycontent?.desc}</div>
                  <div className="genre">{bodycontent?.genre}</div>
                </div>
              </Modal>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
