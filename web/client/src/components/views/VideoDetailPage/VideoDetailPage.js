import React, { useEffect, useState } from 'react'
import { List, Avatar, Row, Col } from 'antd';
import axios from 'axios';
function VideoDetailPage(props) {


    const videoId = props.match.params.videoId
    const variable = {videoId: videoId}
    const [videoDetail, setVideoDetail] = useState([])

    useEffect(() => {
        axios.post('/api/video/getVideoDetail', variable)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.videoDetail)
                    setVideoDetail(response.data.videoDetail)
                } else {
                    alert('Failed to get video Info')
                }
            })
    }, [])
    if (videoDetail.writer) {
        return (
            <Col>
                <Row lg={18} xs={24}>
                    <div className="postPage" style={{ width: '100%', padding: '3rem 4em'
                    ,display: 'flex', margin: '0 auto', flex:1, flexDirection: 'column',}}>
                        <video style={{ width: '700px', display:'flex', justifyContent: 'center',  margin: '0 auto', flex:1, flexDirection: 'column' }} src={videoDetail.filePath} controls></video>
                        
                        <div style={{width: '700px', display:'flex', justifyContent: 'center',  margin: '0 auto', flex:1, flexDirection: 'column'}}>
                        <List.Item
                        >
                            
                            <List.Item.Meta
                                avatar={<Avatar src={videoDetail.writer && videoDetail.writer.image} />}
                                title={<a href="https://ant.design">{videoDetail.title}</a>}
                                description={videoDetail.description}
                            />

                            <div></div>
                            
                        </List.Item>
                        </div>
                    </div>
                </Row>
                <Row lg={6} xs={24}>
                <div style={{
                                width: '700px', height: '600px', border: '1px solid lightgray', display: 'flex',
                                alignItems: 'center', justifyContent: 'center', flex:1, flexDirection: 'column',
                                paddingTop: '30px', margin: '0 auto'
                            }}>
                <label style={{fontSize:'30px'}}>Recommended Songs</label>

                <div class = "song_list" style={{
                                width: '700px', height: '567px', border: '1px solid lightgray', display: 'flex',
                                alignItems: 'center', justifyContent: 'flex-start', flex:1, flexDirection: 'column',
                                paddingTop: '30px'
                            }}>
                <a href='https://www.melon.com/song/detail.htm?songId=3146152' target='_blank'>
                <div class="song_info" style={{ 
                                cursor:'pointer', width: '670px', height: '125px', border: '1px solid lightgray', display: 'flex',
                                alignItems: 'flexStart', justifyContent: 'center', flexDirection: 'column', marginBottom: '30px'
                                , textAlign:'right', paddingLeft:'20px', 
                            }} >
                    <div style={{width: '670px', height: '25px', display:'flex', flexDirection: 'row'}}></div>
                    <div class="upper" style={{width: '670px', height: '70px', display:'flex', flexDirection: 'row'}}>
                        <img src="https://i.ytimg.com/vi/QdJOOguJ_w8/mqdefault.jpg"
                        style={{width: '70px', height: '70px'}}></img>
                        <div class="song_name" style={{color:'black', width: '320px', height: '75px', lineHeight:'75px', fontSize: '18px' , fontWeight:"700"}}>Kill Everybody</div>
                        <div class="singer" style={{ color:'gray', width: '260px', height: '75px', lineHeight:'75px',paddingRight:'20px'}}>Skrillex</div>
                    </div> 
                    <div class="time" style={{ color:'gray', width: '670px', height: '25px',display:'flex', flexDirection: 'row',
                paddingLeft: '250px'}}>00:00:00.40 ~ 00:00:32.00</div>
                </div>
                </a>

                <a href='https://www.melon.com/song/detail.htm?songId=7881189' target='_blank'>
                <div class="song_info" style={{
                                width: '670px', height: '125px', border: '1px solid lightgray', display: 'flex',
                                alignItems: 'flexStart', justifyContent: 'center', flexDirection: 'column', marginBottom: '30px'
                                , textAlign:'right', paddingLeft:'20px'
                            }}>
                    <div style={{width: '670px', height: '25px', display:'flex', flexDirection: 'row'}}></div>
                    <div class="upper" style={{width: '670px', height: '70px', display:'flex', flexDirection: 'row'}}>
                        <img src="https://www.africandjspool.com/wp-content/uploads/2018/10/Selena-Gomez-%E2%80%93-Revival.jpg"
                        style={{width: '70px', height: '70px'}}></img>
                        <div class="song_name" style={{color:'black',width: '320px', height: '75px', lineHeight:'75px', fontSize: '18px' , fontWeight:"700"}}>Me &amp; My Girls</div>
                        <div class="singer" style={{color:'gray',width: '260px', height: '75px', lineHeight:'75px',paddingRight:'20px'}}>Selena Gomez</div>
                    </div> 
                    <div class="time" style={{color:'gray',width: '670px', height: '25px',display:'flex', flexDirection: 'row',
                paddingLeft: '250px'}}>00:02:37.95 ~ 00:03:46.75</div>
                </div></a>

                <a href='https://www.melon.com/song/detail.htm?songId=8101027' target='_blank'>
                <div class="song_info" style={{
                                width: '670px', height: '125px', border: '1px solid lightgray', display: 'flex',
                                alignItems: 'flexStart', justifyContent: 'center', flexDirection: 'column', marginBottom: '30px'
                                , textAlign:'right', paddingLeft:'20px'
                            }}>
                    <div style={{width: '670px', height: '25px', display:'flex', flexDirection: 'row'}}></div>
                    <div class="upper" style={{width: '670px', height: '70px', display:'flex', flexDirection: 'row'}}>
                        <img src="http://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/800/214/80800214_1458176554983_1_600x600.JPG"
                        style={{width: '70px', height: '70px'}}></img>
                        <div class="song_name" style={{color:'black',width: '320px', height: '75px', lineHeight:'75px', fontSize: '18px' , fontWeight:"700", paddingRight:'22px'}}>예쁘잖아</div>
                        <div class="singer" style={{color:'gray',width: '260px', height: '75px', lineHeight:'75px',paddingRight:'20px'}}>기리보이</div>
                    </div>  
                    <div class="time" style={{color:'gray',width: '670px', height: '25px',display:'flex', flexDirection: 'row',
                paddingLeft: '250px'}}>00:08:17.50 ~ 00:09:21.30</div>
                </div></a>
                </div>
                </div>

                </Row>
            </Col>

        )

    } else {
        return (
            <div>Loading...</div>
        )
    }




}



export default VideoDetailPage