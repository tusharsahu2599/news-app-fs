import React,{useState,useEffect} from 'react';
import axios from 'axios';

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import RelatedNews from './relatedNews';
import "./topstory.css";


const Topstory = () => {
    const [heading, setHeading] = useState("topstories")
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);

    const handleChange = (event, value) => {
        setPage(value);
      };


    useEffect(() => {
        axios.get(`https://news-tushar.herokuapp.com/${heading}?page=${page}&size=${size}`)
        .then(res => {
            setData(res.data);
            // console.log(res);
            setLoading(false);
        }
        )
        .catch(err => {
            console.log(err);
        }
        )
    }, [size, page, heading, RelatedNews]);
 
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    textDecoration: 'underline',
                    textTransform: 'uppercase',
                    backgroundColor: '#f5f5f5',

                    }}>
            <h2>{heading}</h2></div>
            <div className="subHeader">
                <h3 className="header"
                onClick={() => {
                    setHeading("topstories");
                }
                }
                >Top Story</h3>
                <h3 className="header"
                onClick={() => {
                    setHeading("newstories");
                }
                }
                >New Story</h3>
                <h3 className="header"
                onClick={() => {
                    setHeading("beststories");
                }}
                >Best Story</h3>

            </div>
            {loading ? <h1>Loading...</h1> :
            <div  >

                {data.map(item => {
                    return (
                        <Accordion key={item.id}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography><h3>{item.title}</h3></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    
                                   <h3>by: <span> {item.by} </span></h3>
                                      <p>score: <span> {item.score} </span></p>
                                      <p>time: <span> {item.time} </span></p>
                                        <p>type: <span> {item.type} </span></p>
                                        <p>url: <span> <a href={item.url}>{item.url} </a></span></p>
                                        <h4>kids: </h4>
                                         <RelatedNews data={item.kids} />

                                </Typography>

                            </AccordionDetails>
                        </Accordion>
                    )
                }
                )}
            </div>
            }
            <Typography>Page: {page}</Typography>
            <div
            style={{
                display: "flex",
                justifyContent: "center",
            }}
            >
            <Pagination count={5} page={page} onChange={handleChange} />
            </div>
            
        </div>
    )
}

export default Topstory;