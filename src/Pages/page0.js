import React, { useState } from 'react';
import Papa from "papaparse";
import { useNavigate } from 'react-router-dom';

const allowedExtensions = ["csv"];

const Page0 = () => {
    const navigate = new useNavigate();
    const [WeeklyData, setWeeklyData] = useState({
        data: [],
        oneStar: [],
        twoStar: [],
        threeStar: [],
        fourStar: [],
        fiveStar: [],
    });
    const [RawData, setRawData] = useState([]);
    const [Level1, setLevel1] = useState([]);
    const [file, setFile] = useState("");
    const [DetailedFile, setDetailedFile] = useState("");
    const [ProductImage, setProductImage] = useState("");
    const [Show, setShow] = useState(false);
    const [ProductName, setProductName] = useState("Product");
    const [ProductRating, setProductRating] = useState();
    const [ProductNumberOfReviews, setProductNumberOfReviews] = useState();
    const [ProductDetails, setProductDetails] = useState("");
    const [KeyIngridiants, setKeyIngridiants] = useState("");
    const [Product, setProduct] = useState({
        ProductName:"",
        ProductRating:0,
        ProductNumberOfReviews:0,
    });
    const [ProductSpecs, setProductSpecs] = useState({
        ProductImage:"",
        ProductDetails:"",
        KeyIngridiants:""
    });

    function convertToTimestamp(date) {
        const myDate = date.split("_");
        var newDate;
        switch (myDate[1]) {
            case "Jan":
                newDate = new Date(`${myDate[2]}.01.${myDate[0]}`)
                return newDate.getTime();
                break;
            case "Feb":
                newDate = new Date(`${myDate[2]}.02.${myDate[0]}`)
                return newDate.getTime();
                break;
            case "Mar":
                newDate = new Date(`${myDate[2]}.03.${myDate[0]}`)
                return newDate.getTime();
                break;
            case "Apr":
                newDate = new Date(`${myDate[2]}.04.${myDate[0]}`)
                return newDate.getTime();
                break;
            case "May":
                newDate = new Date(`${myDate[2]}.05.${myDate[0]}`)
                return newDate.getTime();
                break;
            case "Jun":
                newDate = new Date(`${myDate[2]}.06.${myDate[0]}`)
                return newDate.getTime();
                break;
            case "Jul":
                newDate = new Date(`${myDate[2]}.07.${myDate[0]}`)
                return newDate.getTime();;
                break;
            case "Aug":
                newDate = new Date(`${myDate[2]}.08.${myDate[0]}`)
                return newDate.getTime();;
                break;
            case "Sep":
                newDate = new Date(`${myDate[2]}.09.${myDate[0]}`)
                return newDate.getTime();
                break;
            case "Oct":
                newDate = new Date(`${myDate[2]}.10.${myDate[0]}`)
                return newDate.getTime();
                break;
            case "Nov":
                newDate = new Date(`${myDate[2]}.11.${myDate[0]}`)
                return newDate.getTime();
                break;
            case "Dec":
                newDate = new Date(`${myDate[2]}.12.${myDate[0]}`)
                return newDate.getTime();;
                break;
            default:
                break;

        }
        return 0;

    };

    const handleFileChange = (e) => {

        if (e.target.files.length) {
            const inputFile = e.target.files[0];
            console.log(inputFile)
            setFile(inputFile);
        }
    };
    const handleDetailedFileChange = (e) => {

        if (e.target.files.length) {
            const inputFile = e.target.files[0];
            console.log(inputFile)
            setDetailedFile(inputFile);
        }
    };
    const handleImageChange = (e) => {

        if (e.target.files.length) {
            const inputFile = e.target.files[0];
            console.log(inputFile)
            setProductImage(URL.createObjectURL(e.target.files[0]));
        }
    };
    const handleParse = () => {

        // const readerImage = new FileReader();

        // readerImage.readAsDataURL(ProductImage);
        // readerImage.onload = async ({ target }) => {
        //     console.log(target.result)
            ProductSpecs.ProductImage=ProductImage;
            Product.ProductName=ProductName;
            Product.ProductNumberOfReviews=ProductNumberOfReviews
            Product.ProductRating=ProductRating
            ProductSpecs.ProductDetails=ProductDetails
            ProductSpecs.KeyIngridiants=KeyIngridiants
            localStorage.setItem('ProductDetails', JSON.stringify(Product))
            localStorage.setItem('ProductSpecs', JSON.stringify(ProductSpecs))
        // }

        const reader = new FileReader();

        reader.readAsText(file);
        reader.onload = async ({ target }) => {
            const csv = Papa.parse(target.result, { header: true });
            const parsedData = csv?.data;
            console.log(parsedData);

            for (var i = parsedData.length - 2; i > 0; i--) {
                WeeklyData.data.push([convertToTimestamp(parsedData[i].week_of), parseInt(parsedData[i].reviews)]);
                WeeklyData.oneStar.push([convertToTimestamp(parsedData[i].week_of), parseInt(parsedData[i].PercentOneStar)]);
                WeeklyData.twoStar.push([convertToTimestamp(parsedData[i].week_of), parseInt(parsedData[i].PercentTwoStar)]);
                WeeklyData.threeStar.push([convertToTimestamp(parsedData[i].week_of), parseInt(parsedData[i].PercentThreeStar)]);
                WeeklyData.fourStar.push([convertToTimestamp(parsedData[i].week_of), parseInt(parsedData[i].PercentFourStar)]);
                WeeklyData.fiveStar.push([convertToTimestamp(parsedData[i].week_of), parseInt(parsedData[i].PercentFiveStar)]);
            }
        }
        const readerData = new FileReader();

        readerData.readAsText(DetailedFile);
        readerData.onload = async ({ target }) => {
            const csv = Papa.parse(target.result, { header: true });
            const parsedData = csv?.data;
            localStorage.setItem('RawData', JSON.stringify(parsedData))
            console.log(parsedData);
            for (var i = 1; i < parsedData.length - 1; i++) {
                var firstIndex = Level1.findIndex(x => x.id === parsedData[i].L1ClusterID);
                if (firstIndex > -1) {
                    // finding if the current level one id already exists in the state
                    var index = Level1[firstIndex].Level2.findIndex(x => x.id === parsedData[i].L2ClusterID);

                    // if found go to level 2
                    if (index > -1) {

                        var Level2index = Level1[firstIndex].Level2[index].Level3.findIndex(x => x.id === parsedData[i].L3ClusterID);

                        if (Level2index > -1) {

                            Level1[firstIndex].Level2[index].Level3[Level2index].Level4.push({
                                id: parsedData[i].L4ID,
                                text: parsedData[i].L4Phrases
                            })

                        } else {

                            Level1[firstIndex].Level2[index].Level3.push({
                                id: parsedData[i].L3ClusterID,
                                text: parsedData[i].L3Cluster,
                                PhraseCount: parsedData[i].L3PhraseCount,
                                PhraseRating: parsedData[i].L3ReviewRating,
                                Level4: [{
                                    id: parsedData[i].L4ID,
                                    text: parsedData[i].L4Phrases
                                }]
                            });
                        }
                        // if the level one id not found than push it to the state
                    } else {
                        Level1[firstIndex].Level2.push(
                            {
                                id: parsedData[i].L2ClusterID,
                                text: parsedData[i].L2Cluster,
                                reviewCount: parsedData[i].L2ReviewCount,
                                reviewRating: parsedData[i].L2ReviewRating,
                                sentiments: parsedData[i].Sentiment,
                                Level3: [{
                                    id: parsedData[i].L3ClusterID,
                                    text: parsedData[i].L3Cluster,
                                    PhraseCount: parsedData[i].L3PhraseCount,
                                    PhraseRating: parsedData[i].L3PhraseRating,
                                    Level4: [{
                                        id: parsedData[i].L4ID,
                                        text: parsedData[i].L4Phrases
                                    }]
                                }]
                            }
                        )
                    }
                } else {
                    Level1.push(
                        {
                            id: parsedData[i].L1ClusterID,
                            text: parsedData[i].L1Cluster,
                            reviewCount: parsedData[i].L1ReviewCount,
                            reviewRating: parsedData[i].L1ReviewRating,
                            sentiments: parsedData[i].Sentiment,
                            Level2: [{
                                id: parsedData[i].L2ClusterID,
                                text: parsedData[i].L2Cluster,
                                reviewCount: parsedData[i].L2ReviewCount,
                                reviewRating: parsedData[i].L2ReviewRating,
                                sentiments: parsedData[i].Sentiment,
                                Level3: [{
                                    id: parsedData[i].L3ClusterID,
                                    text: parsedData[i].L3Cluster,
                                    PhraseCount: parsedData[i].L3PhraseCount,
                                    PhraseRating: parsedData[i].L3PhraseRating,
                                    Level4: [{
                                        id: parsedData[i].L4ID,
                                        text: parsedData[i].L4Phrases
                                    }]
                                }]
                            }

                            ]
                        }
                    )
                }

            }
            console.log(WeeklyData)
            console.log(Level1)
            localStorage.setItem('WeeklyData', JSON.stringify(WeeklyData))
            localStorage.setItem('DetailedData', JSON.stringify(Level1))
            navigate('/page1')
        };
    };

    return (
        <>

            <div className='form-container'>
                <div >
                <div style={{float:"right"}}>
                    <label  className="form-label">
                        Product Name
                    </label>
                    <input type="text" className="form-input" onChange={(e)=> setProductName(e.target.value)}></input>
                    <label  className="form-label">
                        Key Ingridiants
                    </label>
                    <input type="text" className="form-input" onChange={(e)=> setKeyIngridiants(e.target.value)}></input>
                    <label className="form-label">
                        Rating out of five
                    </label>
                    <input type="number" className="form-input" onChange={(e)=> setProductRating(e.target.value)}></input>
                    <label className="form-label">
                        Number of Ratings and Reviews
                    </label>
                    <input type="number" className="form-input" onChange={(e)=> setProductNumberOfReviews(e.target.value)}></input>
                    </div>


                    <label className="form-label" >
                        image of the product
                    </label>
                    <input
                    onChange={handleImageChange}
                    type="file" style={{marginBottom:"30px"}}></input>

                    <label htmlFor="csvInput" className="form-label">
                        Enter Graph Weekly CSV File
                    </label>
                    <input
                        onChange={handleFileChange}
                        id="csvInput"
                        name="file"
                        type="File"
                        style={{cursor: "pointer", marginBottom:"30px" }}
                    />
                    <label htmlFor="csvInput" className="form-label">
                        Enter Detailed analysis CSV File
                    </label>
                    <input
                        onChange={handleDetailedFileChange}
                        id="csvInput"
                        name="file"
                        type="File"
                        style={{cursor: "pointer",marginBottom:"30px"  }}
                    />
                     <label  className="form-label">
                        Product Details
                    </label>
                    <input type="text" className="form-input" onChange={(e)=> setProductDetails(e.target.value)}></input>
                    <button onClick={handleParse} style={{ }} className='form-button'>Get Data</button>

                </div>
            </div>
        </>
    )
}

export default Page0






