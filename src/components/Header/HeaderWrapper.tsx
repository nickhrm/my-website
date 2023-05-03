import HeaderImage from "./HeaderImage";
import HeaderLogos from "./HeaderLogos";
import HeaderText from "./HeaderText";

export default function HeaderWrapper() {

    return (

        <div className="pt-14 bg-gradient-to-b from-blue-100 via-fuchsia-200 to-transparent flex justify-center">

            <div className="myContainer grid sm:grid-cols-1 md:grid-cols-2 justify-center ">
                <HeaderImage></HeaderImage>
                <HeaderText></HeaderText>
            </div>



        </div>
    )
}