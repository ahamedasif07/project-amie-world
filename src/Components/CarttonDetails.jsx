import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const CarttonDetails = () => {
  const { id } = useParams();
  const [carttons, setCarttons] = useState([]);
  const [cartoonDetail, setCarttonDetails] = useState([]);
  useEffect(() => {
    const feching = async () => {
      try {
        const res = await fetch("../../public/cartoon.json");
        const data = await res.json();
        setCarttons(data);
        const Details = carttons.find((cartoon) => cartoon.id === Number(id));
        setCarttonDetails(Details);
      } catch {
        console.error("not fetching");
      }
    };
    feching();
  }, [carttons, id]);
  console.log(carttons);
  return (
    <div>
      <div className="container overflow-hidden mx-auto">
        <div className=" flex justify-center md:flex-row  flex-col  md:flex">
          <div data-aos="fade-right" className="md:w-[48%]">
            <img
              className="md:w-[600px] w-full h-[500px]"
              src={cartoonDetail?.image}
              alt=""
            />
          </div>

          <div
            data-aos="fade-left"
            className="md:w-[48%] pb-6 pt-3 grid items-center justify-center gap-4"
          >
            <div>
              <h2 className="text-4xl py-2 font-bold">
                Name : {cartoonDetail?.name}
              </h2>
              <h2 className="text-2xl font-semibold">
                Episode: {cartoonDetail?.episodes}
              </h2>
              <h2 className="font-semibold py-2 tect-xl">
                Catagories : {cartoonDetail?.categories}
              </h2>
              <Link to="/">
                <button className=" py-2 rounded-sm bg-green-500 text-white px-3">
                  Go Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarttonDetails;
