import { useEffect, useState } from "react";
import classes from "./api.module.css";
import RightArrow from "./RightArrow";

const GetData = (props) => {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState("");
  const [currentPic, setCurrentPic] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos/?_limit=6'"
      );

      const responseData = await response.json();

      const loadedData = [];

      for (const key in responseData) {
        loadedData.push({
          id: key,
          name: responseData[key].title,
          icon: responseData[key].thumbnailUrl,
          image: responseData[key].url,
        });
      }
      setData(loadedData);
    };
    getData();
  }, []);

  const titles = data.map((dat, index) => {
    let word = dat.name;
    let split = word.match(/^(\S+)\s(.*)/).slice(1);
    return (
      <section className={classes.section} key={dat.id}>
        <div className={classes.image}>
          <button onClick={() => setCurrent({ img: dat.image, id: dat.id })}>
            <div>{<img src={dat.icon} alt={dat.name} />}</div>
          </button>
        </div>
        <div className={classes.center}>
          <h3 className={classes.capitalize} key={dat.id}>
            {split[0]}
          </h3>
        </div>
      </section>
    );
  });

  // const length = titles.length;

  // const nextSlide = () => {
  //   setCurrentPic(currentPic === length - 1 ? 0 : currentPic + 1);
  // };
  // console.log(currentPic);

  // const prevSlide = () => {
  //   setCurrentPic(currentPic === 0 ? length : currentPic - 1);
  // };

  // if (!Array.isArray(data) || length <= 0) {
  //   return null;
  // }

  const length = data.length - 1;

  return (
    <div>
      <div className={classes.flex}>{titles}</div>
      <div className={classes.flex}>
        {/* <FaRegArrowAltCircleLeft
          onClick={prevSlide}
          className={classes.leftArrow}
        /> */}
        {/* {current ? (
          <img className={classes.mainImage} src={current.img} alt="s" />
        ) : (
          "Loading"
        )} */}
        <RightArrow data={current} title={data} length={length} />

        {/* <FaRegArrowAltCircleRight
          onClick={nextSlide}
          className={classes.rightArrow}
        /> */}
      </div>
    </div>
  );
};

export default GetData;
