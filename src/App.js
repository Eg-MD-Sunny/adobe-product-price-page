import './App.css';
import Lightroom from '../src/images/Lightroom.png';
import Photoshop from '../src/images/Photoshop.png';
import CreativeCloud from '../src/images/Creative Cloud.png';
import Acrobat from '../src/images/Acrobat.png';
import PremierePro from '../src/images/Premiere Pro.png';
import Illustrator from '../src/images/Illustrator.png';
import InDesign from '../src/images/InDesign.png';
import AfterEffects from '../src/images/After Effects.png';
import lightroom from '../src/images/Lightroom.png';
import audition from '../src/images/Audition.png';
import PremiereRush from '../src/images/Premiere Rush.png';
import animate from '../src/images/Animate.png';
import AdobeXD from '../src/images/Xd.png';
import dreamweaver from '../src/images/Dreamweaver.png';
import inCopy from '../src/images/InCopy.png';
import dimension from '../src/images/Dimension.png';
import spark from '../src/images/Spark.png';
import AdobeStock from '../src/images/Stock.png';
import Null from '../src/images/null.png'

function App() {
{/*====>>Start Product Data Entry<<====*/} 
  const products = [
    {
      image1: Lightroom,
      image2: Photoshop,
      name:'Photography (20GB)',
      price:'US$9.99/mo',
      discription:'Lightroom, Lightroom Classic, Photoshop on desktop and iPad, and 20GB of cloud storage (1TB available).',
      link: 'Compare photography plans',
      link01: 'See plan & pricing details',
      timePeriod: 'Add Adobe Stock. Get a 30-day free trial.*'
    },
    {
      image1: CreativeCloud,
      image2: Null,
      name:'All Apps',
      price:'US$52.99/mo',
      discription:'Get all 20+ creative desktop and mobile apps including Photoshop, Illustrator, InDesign, Premiere Pro, and Acrobat.',
      link: 'See plan & pricing details',
      timePeriod: 'Add Adobe Stock. Get a 30-day free trial.*'
    },
    {
      image1: Acrobat,
      image2: Null,
      name:'Acrobat Pro',
      price:'US$14.99/mo',
      discription:'The complete PDF solution for working anywhere (includes desktop, web, and mobile access).',
      link: 'See plan & pricing details',
      timePeriod: 'Add Adobe Stock. Get a 30-day free trial.*'
    },
    {
      image1: Photoshop,
      image2: Null,
      name:'Photoshop',
      price:'US$20.99/mo',
      discription:'Create beautiful graphics, photos, and art on desktop and iPad. Comes with Adobe Fresco for drawing and painting.',
      link: 'See plan & pricing details',
      timePeriod: 'Add Adobe Stock. Get a 30-day free trial.*'
    },
    {
      image1: PremierePro,
      image2: Null,
      name:'Premiere Pro',
      price:'US$20.99/mo',
      discription:'Professional video and film editing.',
      link: 'See plan & pricing details',
      timePeriod: 'Add Adobe Stock. Get a 30-day free trial.*'
    },
    {
      image1: Illustrator,
      image2: Null,
      name:'Illustrator',
      price:'US$20.99/mo',
      discription:'Create precise designs, Illustrations, and vector graphics on desktop and iPad.',
      link: 'See plan & pricing details',
      timePeriod: 'Add Adobe Stock. Get a 30-day free trial.*'
    },
    {
      image1: InDesign,
      image2: Null,
      name:'InDesign',
      price:'US$20.99/mo',
      discription:'Page design and layout for print and digital media.',
      link: 'See plan & pricing details',
      timePeriod: 'Add Adobe Stock. Get a 30-day free trial.*'
    },
    {
      image1: AfterEffects,
      image2: Null,
      name:'After Effects',
      price:'US$20.99/mo',
      discription:'Create motion graphics and visual effects for film, TV, video, and web.',
      link: 'See plan & pricing details',
      timePeriod: 'Add Adobe Stock. Get a 30-day free trial.*'
    },
    {
      image1: lightroom,
      image2: Null,
      name:'Lightroom (1TB)',
      price:'US$9.99/mo',
      discription:'Edit, organize, store, and share photos from anywhere.',
      link: 'Compare photography plans',
      link01: 'See plan & pricing details',
      timePeriod: 'Add Adobe Stock. Get a 30-day free trial.*'
    },
    {
      image1: audition,
      image2: Null,
      name:'Audition',
      price:'US$20.99/mo',
      discription:'Audio recording, mixing, and restoration.',
      link: 'See plan & pricing details',
      timePeriod: 'Add Adobe Stock. Get a 30-day free trial.*'
    },
    {
      image1: PremiereRush,
      image2: Null,
      name:'Premiere Rush',
      price:'US$9.99/mo',
      discription:'Create and share online videos. Fast and easy.',
      link: 'See plan & pricing details',
      timePeriod: 'Add Adobe Stock. Get a 30-day free trial.*'
    },
    {
      image1: animate,
      image2: Null,
      name:'Animate',
      price:'US$20.99/mo',
      discription:'Design interactive vector animations for multiple platforms.',
      link: 'See plan & pricing details',
      timePeriod: 'Add Adobe Stock. Get a 30-day free trial.*'
    },
    {
      image1: AdobeXD,
      image2: Null,
      name:'Adobe XD',
      price:'US$9.99/mo',
      discription:'Design, prototype, and share user experiences.',
      link: 'See plan & pricing details',
      timePeriod: 'Add Adobe Stock. Get a 30-day free trial.*'
    },
    {
      image1: dreamweaver,
      image2: Null,
      name:'Dreamweaver',
      price:'US$20.99/mo',
      discription:'Design and develop modern, responsive websites.',
      link: 'See plan & pricing details',
      timePeriod: 'Add Adobe Stock. Get a 30-day free trial.*'
    },
    {
      image1: inCopy,
      image2: Null,
      name:'InCopy',
      price:'US$4.99/mo',
      discription:'Make text edits and layout modifications without impacting designs.',
      link: 'See plan & pricing details',
      timePeriod: 'Add Adobe Stock. Get a 30-day free trial.*'
    },
    {
      image1: dimension,
      image2: Null,
      name:'Dimension',
      price:'US$20.99/mo',
      discription:'Create photorealistic 3D images for branding, product shots, and package design.',
      link: 'See plan & pricing details',
      timePeriod: 'Add Adobe Stock. Get a 30-day free trial.*'
    },
    {
      image1: spark,
      image2: Null,
      name:'Spark',
      price:'US$9.99/mo',
      discription:'Create custom-branded graphics, web pages, and video stories in minutes.',
      link: 'See plan & pricing details',
      timePeriod: 'Add Adobe Stock. Get a 30-day free trial.*'
    },
    {
      image1: AdobeStock,
      image2: Null,
      name:'Adobe Stock',
      price:'US$29.99/mo',
      discription:'Access millions of high-quality, royalty-free assets for your next creative project.',
      link: 'See plan & pricing details',
      timePeriod: 'Add Adobe Stock. Get a 30-day free trial.*'
    },
{/*====>>End Product Data Entry<<====*/}     
  ]
  return (
    <div className="App">
        {/* <Product name={products[0].name} price={products[0].price} discription={products[0].discription}></Product> */}
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product>
        <Product product={products[4]}></Product>
        <Product product={products[5]}></Product>
        <Product product={products[6]}></Product>
        <Product product={products[7]}></Product>
        <Product product={products[8]}></Product>
        <Product product={products[9]}></Product>
        <Product product={products[10]}></Product>
        <Product product={products[11]}></Product>
        <Product product={products[12]}></Product>
        <Product product={products[13]}></Product>
        <Product product={products[14]}></Product>
        <Product product={products[15]}></Product>
        <Product product={products[16]}></Product>
        <Product product={products[17]}></Product>
    </div>
  );
}

function Product(props){
  const productStyle={
    border:'1px solid rgba(0,0,0,0.1)',
    borderRadius: '5px',
    height: '300px',
    width: '270px',
    float: 'left',
    marginLeft: '20px',
    padding: '15px',
    marginBottom: '20px',
    boxShadow: '0 1px 5px #f2f2f2'
  }

  const imageStyle={
    width: '40px',
    height: '40px',
    marginRight: '10px',
    outline: 'none'
  }

  const footerAreaStyle={
    display: 'flex',
    paddingTop: '17px'
  }

  const productHeaderStyle={
    paddingTop: '20px',
    fontWeight: '600',
    fontSize: '18px',
    fontColor: 'rgba(77,92,108,255)'
  }

  const productPriceStyle={
    paddingTop: '8px',
    fontSize:'22px',
    fontColor: 'rgba(46,53,60,255)'
  }

  const discriptionStyle={
    paddingTop: '13px',
    fontColor: '#f2f2f2',
    fontSize:'14px'
  }

  const linkStyle={
    paddingTop: '13px',
    fontSize: '13px'
  }

  console.log(props.product);
  {/*=======>>Destructer Start<<=======Not Working*/}
  // const {image1,image2,name,price,discription,link,link01,timePeriod} = `props.product?`;
  return (
    <div className="container-area">
      <div style={productStyle}>
        <img src={props.product?.image1} style={imageStyle}></img>
        <img src={props.product?.image2} style={imageStyle}></img>
        <p style={productHeaderStyle}>{props.product?.name}</p>
        <p style={productPriceStyle}>{props.product?.price}</p>
        <p style={discriptionStyle}>{props.product?.discription}</p> 
        <p style={linkStyle}><a href="https://www.adobe.com/creativecloud/photography/compare-plans.html">{props.product?.link}</a></p> 
        <p style={{fontSize:'13px'}}><a href="https://www.adobe.com/creativecloud/plans.html">{props.product?.link01}</a></p> 

        <div className="footerArea" style={footerAreaStyle}>
          <div className="checkBox"><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" ></input></div>
          <div className="timePeriod"><p style={{fontSize:'13px',width:'130px'}}>{props.product?.timePeriod}</p></div>
          <div className="button" ><a href="_blank">Bye now</a></div>
        </div>
      </div>
    </div>  
  )
}

export default App;
