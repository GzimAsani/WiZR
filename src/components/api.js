import { useEffect, useState } from "react";
import classes from "./api.module.scss";
import Slider from "./Slider";
import Card from "./ui/card";

const GetData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      console.log("fetching..");
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
      setLoading(false);
    };

    console.log("done");
    getData();
  }, []);

  const length = data.length - 1;
  console.log(data);
  return (
    <div className={classes.mainDiv}>
      <Card>
        {loading ? (
          <div>
            <h1>Fetching data... Please wait</h1>
          </div>
        ) : (
          <Slider data={data} title={data} length={length} />
        )}
      </Card>
    </div>
  );
};

export default GetData;
