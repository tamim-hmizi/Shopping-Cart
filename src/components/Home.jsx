import header from '../assets/header.jpg'
import section from '../assets/section.jpg'
import section2 from '../assets/section2.jpg'
import '../styles/home.css'
function Home() {
    return (
        <div className="home">
            <header>
                <img src={header} width="100%" alt="header image" />
                <div className="header-text">
                    <h1>Shop With Us</h1>
                    <p>Your Ultimate Destination for Quality and Style</p>
                </div>
            </header>

            <section className="content">
                <div className="text">
                    <h2>Welcome to Our Shop</h2>
                    <p>
                        Discover a world of fashion, elegance, and functionality
                        as you explore our carefully curated selection of
                        products. At we pride ourselves on offering a diverse
                        range of items that cater to various tastes and
                        preferences. Whether you&apos;re searching for the
                        latest trends in fashion, unique home decor pieces, or
                        innovative gadgets, we&apos;ve got you covered.
                    </p>
                </div>

                <img src={section} alt="section image" />
            </section>
            <section className="content 2">
                <img src={section2} alt="section image" />
                <div className="text">
                    <h2>Explore Endless Possibilities</h2>
                    <p>
                        Immerse yourself in a world of limitless possibilities
                        with our handpicked selection of premium products. At ,
                        we are dedicated to bringing you not just products, but
                        experiences. Our carefully curated collection spans
                        across various categories, ensuring that there&apos;s
                        something extraordinary for every taste and lifestyle.
                        Discover the joy of seamless shopping with us.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home
