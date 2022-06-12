import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Typography from "@material-ui/core/Typography"
const RelatedNews = ({data}) => {

    const [datas, setDatas] = useState([]);

//    if(data){
//     data.map((data)=>{
//         console.log(data)
//     })}
    
    useEffect(() => {
        if(data){
        data.map(item => {
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
            .then(res => {
                setDatas([...datas, res.data]);
            }
            )
            .catch(err => {
                console.log(err);
            }
            )
        }
        )}
    }, [data]);
    // console.log(datas)


    return (
        <div>
            {datas.map(el =>{
                return(
                    <div key={el.id}>
                        <Typography sx={{
                            backgroundColor: 'lightblue',
                        }}>
                            <h3>by <span>{el.by}</span></h3>
                            <p>text to: <span>{el.text}</span></p>
                        </Typography>
                    </div>
                )
            })}
            
        </div>
    );
}

export default RelatedNews;
