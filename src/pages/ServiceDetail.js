import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import EstimateSection from "../components/EstimateSection";
import Title from "../components/Title";

function ServiceDetail() {
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState(null);

  const API = "https://api.unsplash.com/search/photos"

  useEffect(() => {
    const fetchImage = async () => {
        try {
        const response = await fetch(
            `${API}?query=${id.replace("_", " ") + " design"}&page=1&per_page=20&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
        );
        if (!response.ok) {
            throw new Error("Failed to fetch image");
        }
        const data = await response.json();
        setImageUrl(data.results);
        } catch (err) {
        console.log(err.message);
        }
    };
    
    fetchImage();
  }, [id]);

  return (
    <div>
        <Title 
            title={<div className="capitalize">{id.replace("_", " ")}</div>}
            description="Here are some of the results we have completed for our clients"
        />
        
        <div className="container mx-auto">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {
                    imageUrl?.length > 0 && imageUrl.map((item) => {
                        return (
                            <LazyLoadImage 
                                key={item.id}
                                src={item.urls.small}
                                alt={item.alt_description}
                            />
                        )
                    })
                }
            </div>
        </div>

        <EstimateSection />
    </div>
  );
}

export default ServiceDetail;
