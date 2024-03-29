import imagehero from "../../../public/img/hero1.svg"

const HeroSection = () => {
    return (
        <div>
           <img className=" h-44 lg:h-full" src={imagehero} alt="" />
        </div>
    );
}

export default HeroSection;
